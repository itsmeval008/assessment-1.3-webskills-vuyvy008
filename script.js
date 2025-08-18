document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('bird-image');
  const caption = document.getElementById('bird-caption');
  const desc = document.getElementById('bird-description');
  const buttons = document.querySelectorAll('.bird-btn');
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // TODO: Replace with your real bird data (Session 3)
  const birds = {
    1: { src: '', alt: 'Bird 1', text: 'Bird 1 description.' },
    2: { src: '', alt: 'Bird 2', text: 'Bird 2 description.' },
    3: { src: '', alt: 'Bird 3', text: 'Bird 3 description.' },
    4: { src: '', alt: 'Bird 4', text: 'Bird 4 description.' },
    5: { src: '', alt: 'Bird 5', text: 'Bird 5 description.' },
  };

  // Exactly 1 bird shown on first view: choose Bird 1 (Session 3 will set src)
  function showBird(id) {
    const b = birds[id];
    image.src = b.src || '';
    image.alt = b.alt;
    caption.textContent = b.alt;
    desc.textContent = b.text;
  }
  showBird(1);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-bird');
      showBird(id);
    });
  });

  toggle.addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
    toggle.setAttribute('aria-pressed', String(!dark));
  });
});
