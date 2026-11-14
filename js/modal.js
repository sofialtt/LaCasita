const fondo = document.querySelector('#fondo');
const cerrar = document.querySelector('#cerrar');
let ultimoFoco = null;

function abrirVentana() {
  ultimoFoco = document.activeElement;
  fondo.hidden = false;
  cerrar.focus();
}

function cerrarVentana() {
  fondo.hidden = true;
  if (ultimoFoco) ultimoFoco.focus();
}

document.querySelectorAll('[data-abrir]').forEach(objeto => {
  objeto.addEventListener('click', abrirVentana);
  objeto.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      abrirVentana();
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