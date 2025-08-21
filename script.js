document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('bird-image');
  const creditAuthor = document.getElementById('credit-author');
  const creditLink = document.getElementById('credit-link');
  const controls = document.getElementById('controls');
  const caption = document.querySelector('figcaption');
  const desc = document.getElementById('bird-description');

  if (!img || !creditAuthor || !creditLink || !controls || !caption || !desc) return;

  const buttons = Array.from(controls.querySelectorAll('[data-bird]'));

const BIRDS = {
  1: {
    file: 'images/birds/bird1.jpg',
    alt: 'Rainbow lorikeet perched on a branch; bright green body, blue head, and orange chest',
    url: 'https://unsplash.com/photos/blue-yellow-and-red-bird-yC3tqMoLuKA',
    author: 'David Clode',
    name: 'Rainbow Lorikeet',
    scientific: 'Trichoglossus moluccanus'
  },
  2: {
    file: 'images/birds/bird2.jpg',
    alt: 'Australian magpie standing on a railing, side view',
    url: 'https://unsplash.com/photos/a-bird-standing-on-a-railing-Raj8QduQtgc',
    author: 'Chris Gresham-Britt',
    name: 'Australian Magpie',
    scientific: 'Gymnorhina tibicen'
  },
  3: {
    file: 'images/birds/bird3.jpg',
    alt: 'Kookaburra close-up with brown and white plumage, head turned to the right',
    url: 'https://unsplash.com/photos/brown-and-white-bird-in-close-up-photography-fSD-9Wa5ZBA',
    author: 'Mikaela Egan',
    name: 'Laughing Kookaburra',
    scientific: 'Dacelo novaeguineae'
  },
  4: {
    file: 'images/birds/bird4.jpg',
    alt: 'Sulphur-crested cockatoo perched on a branch, white feathers and yellow crest',
    url: 'https://unsplash.com/photos/a-white-bird-with-a-yellow-mohawk-sitting-on-a-tree-branch-S7tuc4_JYKU',
    author: 'pen_ash',
    name: 'Sulphur-crested Cockatoo',
    scientific: 'Cacatua galerita'
  },
  5: {
    file: 'images/birds/bird5.jpg',
    alt: 'Emu standing on grass in daylight, long neck and brown plumage',
    url: 'https://unsplash.com/photos/gray-ostrich-on-green-grass-field-during-daytime-fyzZicuzcE8',
    author: 'Melissa Keizer',
    name: 'Emu',
    scientific: 'Dromaius novaehollandiae'
  }
};


  function selectBird(n) {
    const b = BIRDS[n];
    if (!b) return;
img.src = b.file;
img.alt = b.alt;

caption.innerHTML = `<em>${b.scientific}</em> — ${b.name}<br>
  Photo by <span id="credit-author">${b.author}</span> on
  <a id="credit-link" href="${b.url}">Unsplash</a>.`;

desc.textContent = `${b.name}: ${b.alt}`;

    buttons.forEach(x => x.setAttribute('aria-pressed', 'false'));
    const active = buttons.find(x => x.dataset.bird === String(n));
    if (active) active.setAttribute('aria-pressed', 'true');
  }

  buttons.forEach(btn => {
    btn.type = 'button';
    btn.addEventListener('click', () => selectBird(parseInt(btn.dataset.bird, 10)));
    btn.addEventListener('keydown', (e) => {
      const i = buttons.indexOf(btn);
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = buttons[(i + 1) % buttons.length];
        next.focus(); next.click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = buttons[(i - 1 + buttons.length) % buttons.length];
        prev.focus(); prev.click();
      }
    });
  });

  const start = parseInt((buttons.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.bird) || '1', 10);
  selectBird(start);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
      toggle.setAttribute('aria-pressed', (!dark).toString());
    });
  }
});
