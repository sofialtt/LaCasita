/* ============ CONTENIDO EDITABLE ============
   Todo el texto de las ventanas vive aquí. Cambia lo que quieras. */
const DATA = {
  estudio: {
    artista: 'Cristina Peri Rossi',
    obra: 'La noche y su artificio',
    foto: '', // para poner una foto: pega aquí una imagen como data:image/jpeg;base64,...
    bio: 'Escritora uruguaya nacida en Montevideo. Vive en Barcelona desde que salió al exilio y su obra, entre la poesía, el cuento y la novela, vuelve al deseo, al cuerpo y a la libertad de ser quien una es. Ganó el Premio Cervantes en 2021.',
    fragmento: '', // pega aquí una cita corta del poema (una o dos líneas) y aparecerá con su crédito
    pensar: '¿Qué parte de ti sigue siendo tuya aunque cambies de lugar, de grupo o de nombre?'
  },
  proyeccion: {
    artista: 'Marta Rodríguez',
    foto: '',
    bio: 'Documentalista colombiana. Hizo cine con comunidades campesinas, obreras e indígenas, muchas veces junto a Jorge Silva, y siempre desde adentro de las historias que contaba.',
    peli: 'Chircales',
    datos: '1971 · 42 min · blanco y negro',
    sinopsis: 'Durante un año, la cámara acompaña a una familia de doce personas, encabezada por la pareja María y Alfredo Castañeda, que fabrica ladrillos a mano. Mezcla testimonios, imágenes del trabajo agotador y pasajes oníricos para mostrar las preocupaciones y las esperanzas de una comunidad oprimida.',
    enlace: 'https://www.filmin.es/pelicula/chircales',
    otras: [
      ['Nuestra voz de tierra, memoria y futuro', 'https://www.filmin.es/pelicula/nuestra-voz-de-tierra-memoria-y-futuro'],
      ['Amor, mujeres y flores', 'https://www.filmin.es/pelicula/amor-mujeres-y-flores']
    ],
    pensar: '¿A qué comunidad perteneces y quién cuenta su historia?'
  },
  tocador: {
    artista: 'María Daniela y su Sonido Lasser',
    foto: '',
    bio: 'Dúo mexicano de electropop formado por la cantante María Daniela Azpiazu y el músico Emilio Acevedo. Se definen como electropop para salones de baile.',
    intencion: 'Sus letras mezclan fiesta, humor y noches caóticas, y a ratos se burlan de las diferencias de clase. Bailar también es una forma de decir cómo te ves y cómo te sientes.',
    canciones: [
      ['Miedo', 'Una historia de amor rara que ocurre en una noche de fiesta caótica, con bicicletas en llamas y un concurso de belleza.'],
      ['El tuviera no existe', 'Una chica rica le canta a su novio sobre una cumbia tecno que se burla de las diferencias de clase.'],
      ['Baila duro', 'Energía pura para bailar, del disco de 2010 que lleva el mismo nombre.']
    ],
    parecidas: [
      ['Belanova', 'Rosa pastel', 'Electropop mexicano. Su vocalista, Denisse Guerrero, colaboró con María Daniela en un remix de «Pobre estúpida».'],
      ['Javiera Mena', 'Sufrir', 'Electropop chileno de pista de baile con letras muy personales.']
    ]
  }
};
const PLAYLIST = [
  ['María Daniela y su Sonido Lasser','Miedo'],
  ['María Daniela y su Sonido Lasser','El tuviera no existe'],
  ['María Daniela y su Sonido Lasser','Baila duro'],
  ['Belanova','Rosa pastel'],
  ['Javiera Mena','Sufrir']
];

/* ============ UTILIDADES ============ */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const YT = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
const GS = q => 'https://www.google.com/search?q=' + encodeURIComponent(q);
const ext = (href, txt, cls = 'btn') => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${txt} ↗</a>`;
function polaroid(foto, nombre) {
  const img = /^data:image\//.test(foto || '')
    ? `<img src="${esc(foto)}" alt="Foto de ${esc(nombre)}">`
    : `<svg viewBox="0 0 100 100" width="70%" aria-hidden="true"><circle cx="50" cy="38" r="17" fill="#fff" opacity=".85"/><path d="M16 100c0-30 14-42 34-42s34 12 34 42Z" fill="#fff" opacity=".85"/></svg>`;
  return `<div class="polaroid"><div class="ph">${img}</div><p>${esc(nombre)}</p></div>`;
}

/* ============ VENTANAS ============ */
function estudioHTML() {
  const d = DATA.estudio;
  return `<div class="split modal">${polaroid(d.foto, d.artista)}<div class="col">
    <p class="eje">Identidad · quién soy</p>
    <h3>${esc(d.obra)}</h3>
    <p class="by">de ${esc(d.artista)}</p>
    <p>${esc(d.bio)}</p>
    ${d.fragmento ? `<blockquote>${esc(d.fragmento)}</blockquote><p class="minor">${esc(d.artista)}, «${esc(d.obra)}»</p>` : `<p class="minor">El poema completo vive en sus libros. Búscalo en una biblioteca o con el enlace de abajo.</p>`}
    <p class="think"><b>Para pensar:</b> ${esc(d.pensar)}</p>
    <p class="links">${ext(GS(d.artista + ' ' + d.obra), 'Buscar el poema')}</p>
  </div></div>`;
}
function proyeccionHTML() {
  const d = DATA.proyeccion;
  return `<div class="split modal">${polaroid(d.foto, d.artista)}<div class="col">
    <p class="eje">Pertenencia · amistad, amor, relaciones</p>
    <h3>${esc(d.artista)}</h3>
    <p>${esc(d.bio)}</p>
    <div class="film"><h3 style="font-size:20px">${esc(d.peli)}</h3><p class="minor"><b>${esc(d.datos)}</b></p><p>${esc(d.sinopsis)}</p></div>
    <p class="links">${ext(d.enlace, 'Ver la película en Filmin')}${ext(YT(d.artista + ' ' + d.peli + ' documental'), 'Buscarla en YouTube')}</p>
    <p class="minor">Filmin pide suscripción y no está disponible en todos los países.</p>
    <p class="minor"><b>Otras películas suyas:</b> ${d.otras.map(o => ext(o[1], esc(o[0]), '')).join(' · ')}</p>
    <p class="think"><b>Para pensar:</b> ${esc(d.pensar)}</p>
  </div></div>`;
}
let ipodIdx = 0;
function tocadorHTML() {
  const d = DATA.tocador;
  return `<div class="modal"><p class="eje">Expresión · cuerpo y estética</p>
  <div class="split">
    <div class="col" style="flex:0 0 auto;align-items:center">
      <div class="ipod" aria-label="iPod con piedras y stickers">
        <div class="scr"><span style="font-size:12px">♪ sonando</span><b id="ip-t"></b><span id="ip-a" style="font-size:12px"></span></div>
        <div class="wheel">
          <span class="m">MENU</span>
          <button class="pv" id="ip-prev" type="button" aria-label="Canción anterior">⏮</button>
          <button class="nx" id="ip-next" type="button" aria-label="Canción siguiente">⏭</button>
          <a class="pl" id="ip-play" href="#" target="_blank" rel="noopener noreferrer" aria-label="Escuchar en YouTube, se abre en otra pestaña">▶ ❚❚</a>
          <span class="c"></span>
        </div>
        <i class="gem" style="width:12px;height:12px;left:8px;top:96px;background:#58b8ff"></i>
        <i class="gem" style="width:10px;height:10px;right:10px;top:70px;background:#e3224f"></i>
        <i class="gem" style="width:14px;height:14px;left:14px;bottom:12px;background:#9b7bff"></i>
        <i class="gem" style="width:9px;height:9px;right:16px;bottom:16px;background:#fff"></i>
      </div>
    </div>
    <div class="col">
      <h3>${esc(d.artista)}</h3>
      <p>${esc(d.bio)}</p>
      <p id="ip-desc" class="think"></p>
      <p><b>La intención:</b> ${esc(d.intencion)}</p>
    </div>
  </div>
  <p style="margin-top:10px"><b>Si te gusta, sigue con:</b></p>
  <ul class="rec">${d.parecidas.map(p => `<li><b>${esc(p[0])}</b>, «${esc(p[1])}». ${esc(p[2])} ${ext(YT(p[0] + ' ' + p[1]), 'Escuchar', '')}</li>`).join('')}</ul>
  <p class="minor">Las canciones se abren en YouTube, en otra pestaña.</p></div>`;
}
function initIpod() {
  const d = DATA.tocador, set = () => {
    const c = d.canciones[ipodIdx];
    $('#ip-t').textContent = c[0]; $('#ip-a').textContent = d.artista;
    $('#ip-desc').textContent = c[1];
    $('#ip-play').href = YT(d.artista + ' ' + c[0]);
  };
  $('#ip-prev').onclick = () => { ipodIdx = (ipodIdx + d.canciones.length - 1) % d.canciones.length; set(); };
  $('#ip-next').onclick = () => { ipodIdx = (ipodIdx + 1) % d.canciones.length; set(); };
  set();
}

/* buzón: guarda en la base compartida si hay sesión con permiso; si no, solo en este navegador */
const LS_KEY = 'casita_ideas_v1';
const readLocal = () => { try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) { return []; } };
const writeLocal = a => { try { localStorage.setItem(LS_KEY, JSON.stringify(a.slice(0, 50))); } catch (e) {} };
let dbRef = null, shared = [], dbState = 'pending';
(async () => {
  try {
    const db = await window.claude?.use?.('db');
    if (!db) { dbState = 'none'; return; }
    dbRef = db.collection('ideas');
    const timer = setTimeout(() => { if (dbState === 'pending') { dbState = 'slow'; renderIdeas(); } }, 10000);
    dbRef.orderBy('creado', 'desc').limit(50).onSnapshot(
      snap => { clearTimeout(timer); shared = snap.docs.map(d => d.data()); dbState = 'ok'; renderIdeas(); },
      () => { clearTimeout(timer); dbState = 'err'; renderIdeas(); }
    );
  } catch (e) { dbState = 'none'; }
})();
function jardinHTML() {
  return `<div class="modal mail">
    <p class="eje">Buzón de intercambio de ideas</p>
    <p>¿Falta una artista latinoamericana? ¿Una canción, un poema, una película, una idea para la casita? Déjala aquí.</p>
    <form id="f-idea" novalidate>
      <div><label for="idea-texto">Tu idea</label><textarea id="idea-texto" maxlength="500" required></textarea></div>
      <div style="margin-top:8px"><label for="idea-nombre">Tu nombre (opcional)</label><input id="idea-nombre" maxlength="40" autocomplete="off"></div>
      <p style="margin-top:10px"><button class="btn" type="submit">Enviar al buzón ♡</button></p>
      <p class="msg" id="idea-msg" role="status"></p>
    </form>
    <h3 style="font-size:20px">Ideas en el buzón</h3>
    <p class="minor" id="ideas-state"></p>
    <ul id="ideas"></ul>
  </div>`;
}
function renderIdeas() {
  const ul = $('#ideas'); if (!ul) return;
  const st = $('#ideas-state');
  const local = readLocal().map(i => ({ ...i, _local: true }));
  const all = [...local, ...shared].sort((a, b) => (b.creado || 0) - (a.creado || 0));
  st.textContent = dbState === 'ok' ? '' : dbState === 'pending' ? 'Abriendo el buzón compartido…' : dbState === 'slow' ? 'El buzón compartido tarda en responder. Puede que falten ideas.' : dbState === 'err' ? 'No se pudo abrir el buzón compartido. Solo ves las ideas de este navegador.' : 'Por ahora las ideas se guardan solo en este navegador.';
  ul.textContent = '';
  if (!all.length) { const li = document.createElement('li'); li.textContent = 'Todavía no hay ideas. La primera puede ser la tuya.'; ul.append(li); return; }
  all.forEach(i => {
    const li = document.createElement('li'), s = document.createElement('small'), p = document.createElement('span');
    s.textContent = (i.nombre ? i.nombre : 'Alguien de la casita') + (i.creado ? ' · ' + new Date(i.creado).toLocaleDateString('es-CO') : '') + (i._local ? ' · solo en este navegador' : '');
    p.textContent = i.texto; li.append(s, p); ul.append(li);
  });
}
function initJardin() {
  renderIdeas();
  $('#f-idea').addEventListener('submit', async e => {
    e.preventDefault();
    const texto = $('#idea-texto').value.trim(), nombre = $('#idea-nombre').value.trim(), msg = $('#idea-msg');
    if (texto.length < 3) { msg.textContent = 'Escribe al menos unas palabras para poder enviarla.'; return; }
    const item = { texto: texto.slice(0, 500), nombre: nombre.slice(0, 40), creado: Date.now() };
    let ok = false;
    if (dbRef) { try { await dbRef.add(item); ok = true; } catch (err) {} }
    if (ok) msg.textContent = '¡Gracias! Tu idea quedó en el buzón de la casita ♡';
    else { const l = readLocal(); l.unshift(item); writeLocal(l); msg.textContent = 'Tu idea quedó guardada en este navegador.'; }
    $('#idea-texto').value = ''; renderIdeas();
  });
}

const ROOMS = {
  estudio:    { title: 'cuaderno.txt', html: estudioHTML },
  proyeccion: { title: 'proyector.exe', html: proyeccionHTML, init: null },
  tocador:    { title: 'ipod.exe', html: tocadorHTML, init: initIpod },
  jardin:     { title: 'buzon.exe', html: jardinHTML, init: initJardin }
};
const ov = $('#ov'); let lastFocus = null;
function openRoom(key) {
  const r = ROOMS[key]; if (!r) return;
  lastFocus = document.activeElement;
  $('#win-title').textContent = r.title; $('#win-body').innerHTML = r.html();
  if (r.init) r.init();
  ov.hidden = false; document.body.style.overflow = 'hidden'; $('#win-close').focus();
}
function closeWin() { ov.hidden = true; document.body.style.overflow = ''; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
$('#win-close').addEventListener('click', closeWin);
ov.addEventListener('click', e => { if (e.target === ov) closeWin(); });
document.addEventListener('keydown', e => {
  if (ov.hidden) return;
  if (e.key === 'Escape') { closeWin(); return; }
  if (e.key === 'Tab') {
    const f = [...ov.querySelectorAll('a[href],button,input,textarea')].filter(x => !x.disabled);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
document.querySelectorAll('[data-open]').forEach(el => {
  el.addEventListener('click', () => openRoom(el.dataset.open));
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openRoom(el.dataset.open); } });
});

/* ============ REPRODUCTOR ============ */
let pIdx = 0;
function pSet(i) {
  pIdx = (i + PLAYLIST.length) % PLAYLIST.length;
  const [a, t] = PLAYLIST[pIdx];
  $('#p-art').textContent = a; $('#p-now').textContent = t; $('#p-play').href = YT(a + ' ' + t);
  document.querySelectorAll('#p-list button').forEach((b, k) => b.setAttribute('aria-current', k === pIdx ? 'true' : 'false'));
}
$('#p-list').innerHTML = PLAYLIST.map((p, i) => `<li><button type="button" data-i="${i}">${esc(p[1])} · ${esc(p[0])}</button></li>`).join('');
$('#p-list').addEventListener('click', e => { const b = e.target.closest('button'); if (b) pSet(+b.dataset.i); });
$('#p-prev').onclick = () => pSet(pIdx - 1);
$('#p-next').onclick = () => pSet(pIdx + 1);
$('#ptoggle').addEventListener('click', () => {
  const open = $('#ptoggle').getAttribute('aria-expanded') === 'true';
  $('#ptoggle').setAttribute('aria-expanded', String(!open)); $('#pbody').hidden = open;
});
pSet(0);

/* ============ DETALLES DE ÉPOCA ============ */
const NS = 'http://www.w3.org/2000/svg';
document.querySelectorAll('path[data-lights]').forEach(p => {
  const L = p.getTotalLength(), cols = ['#ff2f9e', '#ffe36e', '#58b8ff', '#9b7bff', '#fff'];
  for (let i = 0; i <= 16; i++) {
    const pt = p.getPointAtLength(L * i / 16), c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y + 8); c.setAttribute('r', 7);
    c.setAttribute('fill', cols[i % cols.length]); c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', 2);
    p.parentNode.insertBefore(c, p.nextSibling);
  }
});
(function jardin() {
  let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  let v = '<rect x="0" y="288" width="800" height="8" fill="#fff4fa"/><rect x="0" y="306" width="800" height="8" fill="#fff4fa"/>';
  for (let x = 4; x < 800; x += 26) v += `<path d="M${x} 330V272l8-12 8 12v58Z" fill="#fff" stroke="#ffb3da" stroke-width="2"/>`;
  $('#valla').innerHTML = v;
  const cols = ['#ff2f9e', '#ff7cc2', '#ffffff', '#9b7bff', '#ffd0e8'];
  let f = '';
  for (let i = 0; i < 34; i++) {
    const x = 20 + r() * 540, y = 340 + r() * 120, sc = .7 + r() * .7, c = cols[Math.floor(r() * cols.length)];
    let pet = ''; for (let k = 0; k < 5; k++) pet += `<ellipse cx="0" cy="-9" rx="6" ry="9" transform="rotate(${k * 72})"/>`;
    f += `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${sc.toFixed(2)})"><path d="M0 0V34" stroke="#3fae78" stroke-width="3"/><g fill="${c}" stroke="#e5168a" stroke-width="1">${pet}</g><circle r="5" fill="#ffe36e"/></g>`;
  }
  $('#flores').innerHTML = f;
})();
try {
  const n = (+localStorage.getItem('casita_visitas') || 0) + 1; localStorage.setItem('casita_visitas', n);
  $('#visits').textContent = 'Tus visitas a la casita: ' + String(n).padStart(4, '0');
} catch (e) {}
if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  let last = 0;
  addEventListener('pointermove', e => {
    const t = performance.now(); if (t - last < 60) return; last = t;
    const s = document.createElement('span'); s.className = 'sp'; s.textContent = ['✦', '♡', '★'][Math.floor(Math.random() * 3)];
    s.style.left = (e.clientX + 6) + 'px'; s.style.top = (e.clientY + 6) + 'px';
    document.body.append(s); setTimeout(() => s.remove(), 800);
  }, { passive: true });
}