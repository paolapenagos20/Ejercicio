// cambios de estructura y estilos con JavaScript
(function () {
  const btnMenu = document.getElementById('btnMenu');
  const menu = document.getElementById('menu');
  const btnTema = document.getElementById('btnTema');
  const form = document.getElementById('Formud');
  const msg = document.getElementById('msg');

  // menú
  btnMenu.addEventListener('click', () => {
    const expanded = btnMenu.getAttribute('aria-expanded') === 'true';
    btnMenu.setAttribute('aria-expanded', String(!expanded));
    menu.hidden = expanded;
  });

  // Cambio de tema agregando<body>
  btnTema.addEventListener('click', () => {
    const pressed = btnTema.getAttribute('aria-pressed') === 'true';
    btnTema.setAttribute('aria-pressed', String(!pressed));
    document.body.classList.toggle('dark');
  });

  // Modificación del DOM validar y mostrar mensaje
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const jornada = form.jornada.value.trim();

    if (!nombre || !correo || !jornada) {
      msg.textContent = 'Por favor completa todos los campos.';
      msg.style.color = 'crimson';
      return;
    }
    msg.textContent = `¡Gracias, ${nombre}! Te enviaremos información al correo ${correo}.`;
    msg.style.color = 'green';
    form.reset();
  });
})();
