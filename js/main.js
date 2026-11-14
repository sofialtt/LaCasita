const visitas = (Number(localStorage.getItem('casita_visitas')) || 0) + 1;
localStorage.setItem('casita_visitas', visitas);
document.querySelector('#visitas').textContent =
  'Tus visitas a la casita: ' + String(visitas).padStart(4, '0');