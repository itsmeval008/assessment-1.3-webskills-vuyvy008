document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('bird-image');
  const creditAuthor = document.getElementById('credit-author');
  const creditLink = document.getElementById('credit-link');
  const buttons = document.querySelectorAll('#controls [data-bird]');
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // 5 birds (local files + alt text + Unsplash links)
  const BIRDS = {
    1: {
      file: 'images/birds/bird1.jpg',
      alt: 'Rainbow lorikeet perched on a branch; bright green body, blue head, and orange chest',
      url: 'https://unsplash.com/photos/blue-yellow-and-red-bird-yC3tqMoLuKA',
      author: 'David Clode'
    },
    2: {
      file: 'images/birds/bird2.jpg',
      alt: 'Australian magpie standing on a railing, side view',
      url: 'https://unsplash.com/photos/a-bird-standing-on-a-railing-Raj8QduQtgc',
      author: 'Chris Gresham-Britt'
    },
    3: {
      file: 'images/birds/bird3.jpg',
      alt: 'Kookaburra close-up with brown and white plumage, head turned to the right',
      url: 'https://unsplash.com/photos/brown-and-white-bird-in-close-up-photography-fSD-9Wa5ZBA',
      author: 'Mikaela Egan'
    },
    4: {
      file: 'images/birds/bird4.jpg',
      alt: 'Sulphur-crested cockatoo perched on a branch, white feathers and yellow crest',
      url: 'https://unsplash.com/photos/a-white-bird-with-a-yellow-mohawk-sitting-on-a-tree-branch-S7tuc4_JYKU',
      author: 'pen_ash'
    },
    5: {
      file: 'images/birds/bird5.jpg',
      alt: 'Emu standing on grass in daylight, long neck and brown plumage',
      url: 'https://unsplash.com/photos/gray-ostrich-on-green-grass-field-during-daytime-fyzZicuzcE8',
      author: 'Melissa Keizer'
    }
  };

  // Click to switch birds
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const n = btn.getAttribute('data-bird');
      const b = BIRDS[n];

      // Update image + alt + credit
      img.src = b.file;
      img.alt = b.alt;
      creditAuthor.textContent = b.author;
      creditLink.href = b.url;

      // Update pressed state for a11y
      buttons.forEach(x => x.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  // Theme toggle (uses your CSS variables)
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', isDark ? 'light' : 'dark');
      toggle.setAttribute('aria-pressed', (!isDark).toString());
    });
  }
});
