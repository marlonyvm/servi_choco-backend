const PORT = process.env.PORT || 3000;
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

/* CONEXIÓN MYSQL */


const db = mysql.createPool({
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "servi_choco",
  database: process.env.MYSQLDATABASE || "SERVI_CHOCO",
  port: process.env.MYSQLPORT || 3306
});

db.getConnection()
  .then(conn => {
    console.log("✅ Conectado a MySQL");
    conn.release();
  })
  .catch(err => {
    console.error("❌ Error conectando a MySQL:", err);
  });

/* LOG DE PETICIONES */

app.use((req,res,next)=>{
  console.log(req.method, req.url);
  next();
});


/* ===============================
   OBTENER TODOS LOS DESTINOS
   (para mapa y lista)
================================ */

app.get("/destinos", async (req,res)=>{

  try{

    const [rows] = await db.query(`
      SELECT 
        *
      FROM destinos
    `);

    res.json(rows);

  }catch(err){

    console.error(err);
    res.status(500).json({error:"Error obteniendo destinos"});

  }

});


/* ===============================
   OBTENER DESTINO COMPLETO
================================ */

app.get("/destinos/:id", async (req,res)=>{

  const id = req.params.id;

  try{

    /* destino principal */

    const [destinoRows] = await db.query(
      "SELECT * FROM destinos WHERE id = ?",
      [id]
    );

    const destino = destinoRows[0];

    /* chips */

    const [chipsRows] = await db.query(
      "SELECT chip FROM chips_destino WHERE destino_id = ?",
      [id]
    );

    /* fotos */

    const [fotosRows] = await db.query(
      "SELECT url FROM fotos_destino WHERE destino_id = ?",
      [id]
    );

    /* textos */

    const [textosRows] = await db.query(
      "SELECT parrafo FROM textos_destino WHERE destino_id = ? ORDER BY orden",
      [id]
    );

    /* respuesta final */

    res.json({
      ...destino,
      chips: chipsRows.map(c => c.chip),
      fotos: fotosRows.map(f => f.url),
      texto: textosRows.map(t => t.parrafo)
    });

  }catch(err){

    console.error(err);
    res.status(500).json({error:"Error obteniendo destino"});

  }

});

//////////////////////////////
///////Estadisticas //////////

app.get("/estadisticas", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM estadisticas ORDER BY orden"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error obteniendo estadísticas" });
  }
});

app.get("/", (req, res) => {
  res.send("API ServiChocó funcionando 🚀");
});

//////////////////////////////////////////////////
////////////registro y login//////////////////////

app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [existing] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: "Usuario ya existe" });
    }

    const hash = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hash]
    );

    res.json({ message: "Usuario creado" });

  } catch (err) {
    console.error("Error real",err);
    res.status(500).json({ message:err.message });
  }
});
///////////////////////////////////////////////////////////
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Usuario no existe" });
    }

    const user = rows[0];

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user.id },
      "secret123",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      name: user.name
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error en login" });
  }
});

/* ===============================
   INICIAR SERVIDOR
================================ */

console.log("bcrypt cargado:", require("bcryptjs"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});