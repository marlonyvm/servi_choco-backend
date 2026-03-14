
//////////////////////////////////////////////////////
// CURSOR
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px'; cur.style.top=e.clientY+'px';
  setTimeout(()=>{ ring.style.left=e.clientX+'px'; ring.style.top=e.clientY+'px'; },60);
});
document.querySelectorAll('a,button,[class*="card"],[class*="item"]').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ cur.style.width='20px'; cur.style.height='20px'; ring.style.width='50px'; ring.style.height='50px'; });
  el.addEventListener('mouseleave',()=>{ cur.style.width='10px'; cur.style.height='10px'; ring.style.width='36px'; ring.style.height='36px'; });
});

// NAV
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>60));

// REVEAL
const obs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{ if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*80); },{threshold:.1}));
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// DATOS DESTINOS CON INFO COMPLETA
const destinos=[
  {
    nombre:"Nuquí",
    tipo:"Ballenas & Surf",
    lat:5.7133, lng:-77.2722,
    precio:450000,
    desc:"Avistamiento de ballenas jorobadas (Jul–Oct), surf y selva tropical única.",
    emoji:"🐋",
    bg:"bg2",
    badge:"Pacífico colombiano · Chocó",
    subtitulo:"El paraíso del surf y las ballenas jorobadas",
    chips:["🐋 Ballenas Jul–Oct","🏄 Surf","🌊 Playas vírgenes","🌿 Parque Utría","🐢 Tortugas","📸 Fotografía"],
    heroImg:"https://images.unsplash.com/photo-1559825481-12a05cc00344?w=900&q=80",
    fotos:[
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800&q=75",
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?w=500&q=75",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=75",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=75",
    ],
    videoId:"LM7rFgAgx-Y",
    textoTitulo:'Nuquí: donde las ballenas <em>danzan</em> ante la selva',
    texto:[
      "En el corazón del Pacífico colombiano, rodeado de selva húmeda tropical y bañado por las aguas del océano, se encuentra <strong>Nuquí</strong>, uno de los secretos mejor guardados de Colombia y un destino de talla mundial para el ecoturismo.",
      "Cada año, entre julio y octubre, cientos de <strong>ballenas jorobadas</strong> viajan desde la Antártida hasta las cálidas aguas del Pacífico chocoano para aparearse y dar a luz. El espectáculo de verlas saltar, colear y cantar a pocos metros de la orilla es una experiencia que transforma para siempre.",
      "Pero Nuquí es mucho más. Sus playas salvajes como <strong>El Almejal y Joví</strong> son paraísos del surf con olas perfectas durante todo el año. La cercanía al <strong>Parque Nacional Natural Utría</strong> permite explorar manglares, avistamiento de delfines, tortugas marinas y una biodiversidad que no tiene igual en el planeta.",
      "La gastronomía local, el ritmo de la chirimía y la hospitalidad de las comunidades afrocolombianas completan una experiencia que une naturaleza, cultura y aventura en un solo lugar."
    ],
    highlight:"✨ Nuquí no es solo un destino, es un encuentro con la naturaleza más salvaje y generosa del Pacífico colombiano."
  },
  {
    nombre:"Bahía Solano",
    tipo:"Buceo & Delfines",
    lat:6.2269, lng:-77.4017,
    precio:420000,
    desc:"Pesca deportiva, buceo y avistamiento de delfines en el Pacífico.",
    emoji:"🐬",
    bg:"bg2",
    badge:"Pacífico colombiano · Chocó",
    subtitulo:"El lugar donde las ballenas se encuentran con la selva",
    chips:["🐋 Ballenas Jul–Oct","🐬 Delfines","🤿 Buceo","🎣 Pesca deportiva","🌊 Playa El Almejal","🦜 Aves exóticas"],
    heroImg:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&q=80",
    fotos:[
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=75",
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=500&q=75",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&q=75",
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=500&q=75",
    ],
    videoId:"qV7v6l9Hmqg",
    textoTitulo:'Bahía Solano: el lugar donde las ballenas se encuentran con <em>la selva</em>',
    texto:[
      "En el corazón del Pacífico colombiano, en el departamento del Chocó, se encuentra uno de los destinos naturales más fascinantes del país: <strong>Bahía Solano</strong>. Este paraíso escondido combina selva tropical, playas vírgenes y uno de los espectáculos naturales más impresionantes del planeta: la llegada de las ballenas jorobadas.",
      "Cada año, entre julio y octubre, cientos de estas majestuosas ballenas viajan miles de kilómetros desde la Antártida hasta las cálidas aguas del Pacífico colombiano para aparearse y dar a luz a sus crías. Durante esta temporada, el mar frente a Bahía Solano se convierte en un escenario único donde es posible observar saltos, coletazos y cantos de ballenas en su hábitat natural.",
      "Pero la experiencia va mucho más allá del avistamiento. Bahía Solano es un territorio donde la selva se encuentra con el océano. Aquí podrás recorrer <strong>cascadas escondidas</strong>, caminar por playas salvajes como <strong>Playa El Almejal</strong>, explorar manglares, practicar pesca artesanal o disfrutar de la gastronomía del Pacífico, rica en sabores del mar y tradición afrocolombiana.",
      "Además, el destino forma parte de uno de los ecosistemas más biodiversos del planeta, cercano al <strong>Parque Nacional Natural Utría</strong>, un santuario natural donde la selva húmeda tropical se funde con el océano y donde habitan tortugas, aves exóticas, delfines y una impresionante diversidad de especies.",
      "🌊 Ven a Bahía Solano y descubre por qué el Pacífico colombiano es uno de los secretos naturales mejor guardados del mundo."
    ],
    highlight:"✨ Bahía Solano no es solo un destino, es una experiencia que conecta naturaleza, cultura y aventura. Si buscas un lugar auténtico, lleno de vida y magia natural, este rincón del Pacífico colombiano te espera."
  },
  {
    nombre:"Tutunendo",
    tipo:"Cascadas & Ríos",
    lat:5.7667, lng:-76.5333,
    precio:180000,
    desc:"Uno de los lugares más lluviosos del mundo. Cascadas y comunidades afro.",
    emoji:"💧",
    bg:"bg1",
    badge:"Alto Atrato · Chocó",
    subtitulo:"El lugar más lluvioso del mundo y sus cascadas de cristal",
    chips:["💧 Cascadas","🌧️ Selva húmeda","👥 Comunidades afro","🚣 Ríos","🦋 Biodiversidad","🌺 Flora tropical"],
    heroImg:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
    fotos:[
      "../imagenes/IMG_20230507_150244.jpg",
      "../imagenes/IMG_20230603_073646.jpg",
      "../imagenes/IMG_20230727_161222.jpg",
      "../imagenes/IMG_20230728_124930.jpg",
    ],
    videoId:"X48VuDVv0do",
    textoTitulo:'Tutunendo: donde el agua <em>da vida</em> a la selva del Atrato',
    texto:[
      "<strong>Tutunendo</strong> es uno de los lugares más lluviosos del planeta, un hecho que lejos de ser una curiosidad, lo convierte en un ecosistema de una riqueza natural sin igual. Aquí, el agua no solo cae del cielo, sino que brota de la tierra en forma de cascadas cristalinas, ríos transparentes y manantiales escondidos entre la vegetación.",
      "A solo 20 kilómetros de Quibdó, este destino es la puerta de entrada a la <strong>selva húmeda del río Atrato</strong>, el río más caudaloso de Colombia por unidad de área. Sus comunidades afrocolombianas mantienen vivas tradiciones milenarias de pesca, artesanía y música del Pacífico.",
      "Las cascadas de Tutunendo son el atractivo central: <strong>pozos naturales de aguas verdes y azules</strong> rodeados de helechos gigantes, orquídeas silvestres y el canto permanente de aves tropicales. Una experiencia de conexión total con la naturaleza más pura del Chocó.",
      "La cercanía a Quibdó lo hace ideal como primer destino para quienes visitan el departamento por primera vez, ofreciendo una inmersión auténtica en la cultura y naturaleza chocoana."
    ],
    highlight:"💧 En Tutunendo, el ritmo lo marca el agua: las cascadas, la lluvia, el río. Un destino para quienes buscan reconectarse con la naturaleza más pura de Colombia."
  },
  {
    nombre:"Bajo Baudó",
    tipo:"Emberá & Selva",
    lat:4.9833, lng:-77.0667,
    precio:350000,
    desc:"Comunidades indígenas Emberá y selva primaria intacta del Pacífico.",
    emoji:"🌿",
    bg:"bg3",
    badge:"Pacífico Sur · Chocó",
    subtitulo:"El territorio ancestral del pueblo Emberá",
    chips:["🏹 Pueblo Emberá","🌿 Selva primaria","🎨 Artesanías","🚤 Ríos","🦅 Aves","🌺 Plantas medicinales"],
    heroImg:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80",
    fotos:[
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=75",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&q=75",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&q=75",
      "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=500&q=75",
    ],
    videoId:"X48VuDVv0do",
    textoTitulo:'Bajo Baudó: en el corazón del <em>territorio Emberá</em>',
    texto:[
      "En las profundidades del Pacífico chocoano, donde los ríos son las carreteras y la selva primaria se extiende sin fin, vive el <strong>pueblo indígena Emberá</strong>, uno de los grupos étnicos más antiguos y mejor conservados de Colombia.",
      "El <strong>Bajo Baudó</strong> es un territorio de selva intacta, biodiversidad extrema y cultura viva. Aquí, las comunidades Emberá conservan sus tradiciones de cestería, pinturas corporales con jagua, cantos rituales y medicina ancestral, compartiendo su mundo con los visitantes de una manera profundamente auténtica.",
      "El río Baudó es la arteria principal de este territorio. Navegar sus aguas entre canoas talladas a mano, rodeado de selva densa y con el sonido de cientos de especies de aves, es una experiencia que difícilmente se encuentra en otro lugar del mundo.",
      "El turismo aquí no es contemplativo, es de <strong>inmersión total</strong>: participarás en la vida cotidiana de la comunidad, aprenderás sobre plantas medicinales, pescarás con técnicas ancestrales y dormirás en tambos tradicionales sobre el río."
    ],
    highlight:"🌿 El Bajo Baudó es un destino para viajeros que buscan ir más allá del paisaje: una experiencia de contacto real con culturas que han sido guardianes de la selva por siglos."
  },
  {
    nombre:"Acandí",
    tipo:"Caribe Chocoano",
    lat:8.5167, lng:-77.2833,
    precio:380000,
    desc:"Playas del Caribe, tortugas y conexión con el Darién.",
    emoji:"🐢",
    bg:"bg3",
    badge:"Caribe · Chocó",
    subtitulo:"Las playas del Caribe y las tortugas del Darién",
    chips:["🐢 Tortugas marinas","🏖️ Playas Caribe","🌊 Snorkel","🦜 Darién","🌿 Manglares","🐠 Arrecifes"],
    heroImg:"https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=900&q=80",
    fotos:[
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=75",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&q=75",
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&q=75",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=75",
    ],
    videoId:"LM7rFgAgx-Y",
    textoTitulo:'Acandí: el Caribe escondido del <em>Chocó</em>',
    texto:[
      "<strong>Acandí</strong> es una joya escondida en el extremo norte del departamento del Chocó, donde las aguas del mar Caribe bañan playas de arena blanca y arrecifes de coral de una belleza extraordinaria. Un destino que pocos colombianos conocen y que guarda experiencias únicas.",
      "Cada año, decenas de miles de <strong>tortugas marinas</strong> de diferentes especies llegan a anidar en las playas de Acandí, convirtiéndolo en uno de los sitios de anidación más importantes del Caribe colombiano. Acompañar este proceso con guías comunitarios es una de las experiencias más emocionantes del ecoturismo nacional.",
      "La cercanía al <strong>Parque Nacional Natural Los Katíos</strong>, patrimonio de la humanidad UNESCO, permite explorar uno de los ecosistemas más biodiversos del planeta, donde la selva húmeda del Darién se funde con el Caribe en una transición natural única.",
      "El pueblo de Acandí mantiene una cultura viva de pesca artesanal, danzas caribes y una gastronomía de mariscos frescos que combina lo mejor del Pacífico y el Caribe chocoano."
    ],
    highlight:"🐢 En Acandí, el Caribe colombiano muestra su cara más salvaje y auténtica. Un destino para quienes buscan playas sin turismo masivo y una naturaleza que aún late con fuerza."
  },
  {
    nombre:"Sipí",
    tipo:"Cascadas & Aventura",
    lat:4.6667, lng:-76.6333,
    precio:300000,
    desc:"Cascada de 70m en plena selva. Ecoturismo de aventura extrema.",
    emoji:"🏔️",
    bg:"bg4",
    badge:"San Juan · Chocó",
    subtitulo:"La cascada de 70 metros en el corazón de la selva",
    chips:["🏔️ Cascada 70m","🧗 Rappel","🌿 Selva","🚤 Río San Juan","🦋 Mariposas","📸 Fotografía"],
    heroImg:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80",
    fotos:[
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=75",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=75",
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&q=75",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75",
    ],
    videoId:"X48VuDVv0do",
    textoTitulo:'Sipí: donde la selva cae en <em>cascada</em> desde las alturas',
    texto:[
      "<strong>Sipí</strong> es el destino de aventura más espectacular del Chocó. En este municipio del río San Juan se encuentra una de las cascadas más impresionantes de Colombia: una caída de agua de más de <strong>70 metros</strong> que se precipita en medio de la selva húmeda tropical, creando un ambiente de película.",
      "El acceso a la cascada es parte de la aventura: hay que caminar por senderos de selva, cruzar quebradas y dejarse envolver por el sonido de la naturaleza antes de llegar al punto donde el agua cae con estruendo sobre una piscina natural de aguas frías y cristalinas.",
      "Para los más atrevidos, Sipí ofrece <strong>rapel por la cascada</strong> con guías locales entrenados, una experiencia adrenalínica que pocas personas en el mundo han vivido en este contexto de selva tropical.",
      "El municipio mantiene una comunidad afrocolombiana vibrante, con tradiciones de minería artesanal, pesca y música del Pacífico que complementan la experiencia natural con una inmersión cultural auténtica."
    ],
    highlight:"🏔️ Sipí es para quienes no le tienen miedo a la aventura. Una cascada de 70 metros, selva primaria y la emoción de explorar territorios que pocos viajeros han pisado."
  },
];

// FUNCIÓN ABRIR MODAL DESTINO
function abrirDestino(d) {
  // Hero
  document.getElementById('dest-hero-img').src = d.heroImg;
  document.getElementById('dest-hero-img').alt = d.nombre;
  document.getElementById('dest-badge').textContent = d.badge;
  document.getElementById('dest-modal-h2').innerHTML = d.emoji + ' ' + d.nombre + ': <em>' + d.subtitulo.split(':').pop().trim() + '</em>';
  document.getElementById('dest-modal-sub').textContent = d.tipo;

  // Chips
  const chipsEl = document.getElementById('dest-chips');
  chipsEl.innerHTML = d.chips.map(c => `<span class="dest-chip">${c}</span>`).join('');

  // Galería
  const gallery = document.getElementById('dest-gallery');
  gallery.innerHTML = d.fotos.map((url, i) =>
    `<div class="dest-gallery-item" onclick="openLightbox('${url}')"><img src="${url}" alt="${d.nombre} foto ${i+1}" loading="lazy" /></div>`
  ).join('');

  // Video
  const videoFrame = document.getElementById('dest-video-frame');
  if (d.videoId) {
    document.getElementById('dest-video-section').style.display = 'block';
    videoFrame.src = `https://www.youtube.com/embed/${d.videoId}?rel=0&modestbranding=1`;
  } else {
    document.getElementById('dest-video-section').style.display = 'none';
  }

  // Texto
  const textEl = document.getElementById('dest-text-content');
  textEl.innerHTML = `
    <h3>${d.textoTitulo}</h3>
    ${d.texto.map(p => `<p>${p}</p>`).join('')}
    <div class="dest-text-highlight">${d.highlight}</div>
  `;

  // Precio y CTA
  document.getElementById('dest-modal-precio').textContent = 'COP $' + d.precio.toLocaleString();
  document.getElementById('dest-modal-cta').onclick = () => {
    closeDestModal();
    document.getElementById('f-destino').value = d.nombre;
    setTimeout(() => document.getElementById('reservar').scrollIntoView({behavior:'smooth'}), 200);
  };

  document.getElementById('dest-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDestModal() {
  document.getElementById('dest-overlay').classList.remove('open');
  document.body.style.overflow = '';
  // Detener video al cerrar
  document.getElementById('dest-video-frame').src = '';
}

function closeDest(e) {
  if (e.target === document.getElementById('dest-overlay')) closeDestModal();
}

function openLightbox(url) {
  document.getElementById('lightbox-img').src = url;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// Cerrar modal con ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDestModal();
    closeLightbox();
  }
});

const grid=document.getElementById('destinos-grid');
destinos.forEach(d=>{
  const el=document.createElement('div');
  el.className='dest-card reveal';
  el.innerHTML=`<div class="dest-card-img ${d.bg}">${d.emoji}</div><div class="dest-card-body"><h3>${d.nombre}</h3><div class="dest-tipo">${d.tipo}</div><p>${d.desc}</p><div class="dest-precio">COP $${d.precio.toLocaleString()} <small>/ persona / noche</small></div><div class="dest-ver-mas">Ver destino →</div></div>`;
  el.onclick=()=> abrirDestino(d);
  grid.appendChild(el);
  obs.observe(el);
});

// MAPA
const todos=[
  {nombre:"Quibdó",tipo:"Capital",lat:5.6919,lng:-76.6583,precio:280000,emoji:"🏙️"},
  ...destinos,
  {nombre:"Istmina",tipo:"Cultura Afro",lat:5.1667,lng:-76.6833,precio:200000,emoji:"🎭"},
  {nombre:"Riosucio",tipo:"Los Katíos UNESCO",lat:7.4333,lng:-77.1167,precio:320000,emoji:"🏞️"},
  {nombre:"El Carmen de Atrato",tipo:"Alto Atrato",lat:5.9167,lng:-76.1333,precio:160000,emoji:"🌊"},
  {nombre:"Tadó",tipo:"Chirimía & Cultura",lat:5.2667,lng:-76.5667,precio:170000,emoji:"🎵"},
  {nombre:"Condoto",tipo:"Capital del Platino",lat:5.1000,lng:-76.6333,precio:190000,emoji:"💎"},
];

function initMap(){
  const m=L.map('choco-map',{center:[5.8,-76.9],zoom:7});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{attribution:'© CartoDB'}).addTo(m);
  const list=document.getElementById('mapa-list');
  todos.forEach(d=>{
    const mk=L.circleMarker([d.lat,d.lng],{radius:9,fillColor:'#c8a84b',color:'#05100a',weight:2,fillOpacity:.9}).addTo(m);
    mk.bindPopup(`<div style="font-family:'DM Sans',sans-serif;padding:4px;"><strong style="font-size:1rem;">${d.emoji} ${d.nombre}</strong><br><span style="color:#c8a84b;font-size:.75rem;">${d.tipo}</span><p style="font-size:.8rem;margin:6px 0 4px;color:#c0d8c0;">Desde COP $${d.precio.toLocaleString()}/noche</p></div>`);
    const item=document.createElement('div');
    item.className='mapa-item';
    item.innerHTML=`<div class="m-name">${d.emoji} ${d.nombre}</div><div class="m-tipo">${d.tipo}</div><div class="m-precio">Desde $${(d.precio/1000).toFixed(0)}k/noche</div>`;
    item.onclick=()=>{ m.setView([d.lat,d.lng],11); mk.openPopup(); document.querySelectorAll('.mapa-item').forEach(i=>i.classList.remove('active')); item.classList.add('active'); };
    list.appendChild(item);
  });
}
window.addEventListener('load',()=>setTimeout(initMap,400));

// COTIZADOR
const precios={Nuquí:450000,"Bahía Solano":420000,Tutunendo:180000,"Bajo Baudó":350000,Istmina:200000,Quibdó:280000,Acandí:380000,Riosucio:320000};
const mult={estandar:1,premium:1.5,aventura:1.3};
function cotizar(){
  const dest=document.getElementById('f-destino').value;
  const lleg=document.getElementById('f-llegada').value;
  const sal=document.getElementById('f-salida').value;
  const viaj=parseInt(document.getElementById('f-viajeros').value);
  const tipo=document.getElementById('f-tipo').value;
  if(!dest) return alert('Selecciona un destino 🌿');
  if(!lleg||!sal) return alert('Selecciona las fechas de tu viaje 📅');
  if(new Date(sal)<=new Date(lleg)) return alert('La salida debe ser posterior a la llegada');
  const dias=Math.ceil((new Date(sal)-new Date(lleg))/(864e5));
  const base=(precios[dest]||250000)*mult[tipo];
  const total=Math.round(base*dias*viaj);
  const fL=new Date(lleg+'T12:00:00').toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'});
  const fS=new Date(sal+'T12:00:00').toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'});
  document.getElementById('cotizacion-body').innerHTML=`
    <div class="detail-row"><span>Destino</span><strong>${dest}</strong></div>
    <div class="detail-row"><span>Llegada</span><strong>${fL}</strong></div>
    <div class="detail-row"><span>Salida</span><strong>${fS}</strong></div>
    <div class="detail-row"><span>Noches</span><strong>${dias}</strong></div>
    <div class="detail-row"><span>Viajeros</span><strong>${viaj}</strong></div>
    <div class="detail-row"><span>Experiencia</span><strong>${tipo.charAt(0).toUpperCase()+tipo.slice(1)}</strong></div>
    <div class="detail-row"><span>Precio/persona/noche</span><strong>COP $${Math.round(base).toLocaleString()}</strong></div>`;
  document.getElementById('cotizacion-total').textContent='COP $'+total.toLocaleString();
  openModal('modal-cotizacion');
}

// MODALES
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function irAPago(){closeModal('modal-cotizacion');document.getElementById('pago').scrollIntoView({behavior:'smooth'});}
document.querySelectorAll('.overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open');}));

// PSE
function selBank(btn){document.querySelectorAll('.bank-btn').forEach(b=>b.classList.remove('sel'));btn.classList.add('sel');}
function confirmarPSE(){alert('✅ Redirigiendo al portal seguro de tu banco.\n\n⚠️ Para PSE real: regístrate en achcolombia.com.co');closeModal('modal-pse');}
function confirmarTarjeta(){alert('✅ Procesando pago.\n\n⚠️ Para producción: integra Wompi (wompi.com) o PayU Colombia.');closeModal('modal-tarjeta');}
function fmtCard(i){let v=i.value.replace(/\D/g,'').substring(0,16);i.value=v.replace(/(.{4})/g,'$1 ').trim();}

// CONTADORES
const cObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){animCount(e.target);cObs.unobserve(e.target);}},{threshold:.5}));
document.querySelectorAll('.stat-num').forEach(el=>cObs.observe(el));
function animCount(el){const t=+el.dataset.target;let c=0;const s=t/60;const iv=setInterval(()=>{c=Math.min(c+s,t);el.textContent=Math.floor(c).toLocaleString();if(c>=t)clearInterval(iv);},25);}

// GEMINI IA
const GEMINI_KEY='TU_API_KEY_AQUI';
const SYS=`Eres "Chocó Guide", asistente de SERVI_CHOCO, turismo comunitario en el Chocó, Colombia. Destinos: Nuquí (ballenas, surf), Bahía Solano (buceo), Tutunendo (cascadas), Bajo Baudó (Emberá), Acandí (Caribe), Sipí (cascada 70m). Precios: $160,000–$450,000/persona/noche. Responde en español, cálido, máx 3 oraciones.`;
let hist=[];
function toggleAI(){document.getElementById('ai-window').classList.toggle('open');}
function chip(btn){document.getElementById('ai-inp').value=btn.textContent;sendAI();}
async function sendAI(){
  const inp=document.getElementById('ai-inp');
  const msg=inp.value.trim();
  if(!msg)return;
  addMsg(msg,'user');inp.value='';
  const typing=addMsg('Escribiendo…','bot');
  try{
    hist.push({role:"user",parts:[{text:msg}]});
    const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({system_instruction:{parts:[{text:SYS}]},contents:hist})});
    const d=await r.json();
    typing.remove();
    const reply=d.candidates?.[0]?.content?.parts?.[0]?.text||'Configura tu API Key de Gemini para activar el asistente. 🔧';
    if(d.candidates)hist.push({role:"model",parts:[{text:reply}]});
    addMsg(reply,'bot');
  }catch(e){typing.remove();addMsg('Configura tu API Key de Google Gemini en el archivo index.html para activar el asistente. 🌿','bot');}
}
function addMsg(text,type){const b=document.getElementById('ai-msgs');const el=document.createElement('div');el.className=`ai-msg ${type}`;el.textContent=text;b.appendChild(el);b.scrollTop=b.scrollHeight;return el;}

// js/utils.js puede contener utilidades como query, modales, etc.
// Asegúrate de incluir este archivo antes de usar en main.js si decides separarlo.

(function(){
  // State
  const state = {
    musicOn: false,
    currentSong: 0,
    songs: [
      // Puedes enlazar a archivos reales si los tienes
      { name: 'Sonidos del Chocó', src: '' },
    ],
  };

  // Reproductor simple (sin fuente de audio real aquí; placeholder)
  window.toggleMusic = function() {
    state.musicOn = !state.musicOn;
    const btn = document.getElementById('music-toggle');
    const icon = document.getElementById('music-icon');
    if(state.musicOn){
      icon.textContent = '❚❚';
      btn.setAttribute('aria-label','Pausar música');
      // Aquí podrías iniciar un Audio(ctx) si tienes fuente
    } else {
      icon.textContent = '▶';
      btn.setAttribute('aria-label','Reproducir música');
      // Detener audio
    }
  };

  window.prevSong = function() { /* placeholder */ };
  window.nextSong = function() { /* placeholder */ };

  // Contadores
  function animateCounter(el, target){
    const duration = 1200;
    const start = 0;
    const delta = target - start;
    let t0 = null;
    function step(ts){
      if(!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      el.textContent = Math.floor(start + delta * p);
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Reveal animation (simplificado)
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(r => obs.observe(r));

  // Cotización
  window.cotizar = function() {
    const destino = document.getElementById('f-destino').value;
    const llegada = document.getElementById('f-llegada').value;
    const salida  = document.getElementById('f-salida').value;
    const viajeros = document.getElementById('f-viajeros').value;
    const tipo = document.getElementById('f-tipo').value;

    const errores = [];
    if(!destino) errores.push('Selecciona un destino.');
    if(!llegada) errores.push('Indica la fecha de llegada.');
    if(!salida) errores.push('Indica la fecha de salida.');
    if(llegada && salida && llegada > salida) errores.push('La llegada debe ser anterior a la salida.');
    if(!viajeros) errores.push('Selecciona la cantidad de viajeros.');

    const panel = document.getElementById('cotizacion-result');
    if(errores.length){
      panel.innerHTML = `<div class="error" role="alert" style="color:#c0392b;">${errores.join('<br/>')}</div>`;
      return;
    }

    // Cálculo simple (ejemplo)
    const base = 200;
    const factor = tipo === 'premium' ? 1.5 : tipo === 'aventura' ? 1.8 : 1;
    const precio = base * parseInt(viajeros,10) * factor;
    const html = `
      <div class="result-card" aria-label="Cotización estimada">
        <strong>Cotización estimada</strong><br/>
        Destino: ${destino}<br/>
        Fechas: ${llegada} a ${salida}<br/>
        Viajeros: ${viajeros}<br/>
        Tipo: ${tipo}<br/>
        Precio estimado: USD ${precio.toFixed(2)}
      </div>
    `;
    panel.innerHTML = html;
  };

  // Destinos (placeholder)
  function renderDestinos() {
    const grid = document.getElementById('destinos-grid');
    // Si tienes un JSON, podrías fetch('datos/destinos.json')
    const datos = [
      { titulo: 'Nuquí — Ballenas & Surf', descripcion: 'Playas y avistamientos de ballenas', img: '' },
      { titulo: 'Bahía Solano — Buceo', descripcion: 'Biodiversidad marina y manglares', img: '' },
      { titulo: 'Tutunendo — Cascadas', descripcion: 'Ríos y cascadas exuberantes', img: '' }
    ];
    datos.forEach(d => {
      const card = document.createElement('div');
      card.className = 'destino-card';
      card.innerHTML = `<h4>${d.titulo}</h4><p>${d.descripcion}</p>`;
      grid.appendChild(card);
    });
  }

  // Mapa listado
  function renderMapaList() {
    const list = document.getElementById('mapa-list');
    const destinos = ['Nuquí', 'Bahía Solano', 'Tutunendo', 'Bajo Baudó', 'Istmina', 'Quibdó'];
    destinos.forEach(d => {
      const item = document.createElement('div');
      item.className = 'mapa-item';
      item.textContent = d;
      list.appendChild(item);
    });
  }

  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    // Contadores iniciales
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      if(!isNaN(target)) animateCounter(el, target);
    });

    renderDestinos();
    renderMapaList();
  });
})();