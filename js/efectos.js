const simbolos = ['✦', '♡', '★'];
const sinAnimaciones = matchMedia('(prefers-reduced-motion: reduce)').matches;
const conMouse = matchMedia('(pointer: fine)').matches;

if (conMouse && !sinAnimaciones) {
  let ultimo = 0;

  addEventListener('pointermove', e => {
    const ahora = performance.now();
    if (ahora - ultimo < 60) return;
    ultimo = ahora;

    const brillo = document.createElement('span');
    brillo.className = 'brillo';
    brillo.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    brillo.style.left = (e.clientX + 6) + 'px';
    brillo.style.top = (e.clientY + 6) + 'px';
    document.body.append(brillo);

    setTimeout(() => brillo.remove(), 800);
  }, { passive: true });
}