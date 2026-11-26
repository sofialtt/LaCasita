const fondo = document.querySelector('#fondo');
const cerrar = document.querySelector('#cerrar');
let ultimoFoco = null;

function abrirVentana(clave) {
  const datos = HABITACIONES[clave];
  if (!datos) return;

  document.querySelector('#modal-titulo').textContent = datos.titulo;
  document.querySelector('#modal-eje').textContent = datos.eje;
  document.querySelector('#modal-encabezado').textContent = datos.encabezado;
  document.querySelector('#modal-autora').textContent = 'de ' + datos.autora;
  document.querySelector('#modal-texto').textContent = datos.texto;
  document.querySelector('#modal-poema').textContent = datos.poema;


  const enlace = document.querySelector('#modal-enlace');
  enlace.textContent = datos.enlaceTexto + ' ↗';
  enlace.href = datos.enlaceUrl;

  ultimoFoco = document.activeElement;
  fondo.hidden = false;
  cerrar.focus();
}

function cerrarVentana() {
  fondo.hidden = true;
  if (ultimoFoco) ultimoFoco.focus();
}

document.querySelectorAll('[data-abrir]').forEach(objeto => {
  const clave = objeto.dataset.abrir;
  objeto.addEventListener('click', () => abrirVentana(clave));
  objeto.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      abrirVentana(clave);
    }
  });
});

cerrar.addEventListener('click', cerrarVentana);
fondo.addEventListener('click', e => {
  if (e.target === fondo) cerrarVentana();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !fondo.hidden) cerrarVentana();
});