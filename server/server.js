const PORT = process.env.PORT || 3000;
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

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

app.get("/", (req, res) => {
  res.send("API ServiChocó funcionando 🚀");
});

/* ===============================
   INICIAR SERVIDOR
================================ */



app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});