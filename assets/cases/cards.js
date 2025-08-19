(function(){
  const chips = Array.from(document.querySelectorAll('.chip'));
  const q = document.getElementById('q');
  const cards = Array.from(document.querySelectorAll('.card'));

  function apply(){
    const active = chips.find(c => c.dataset.active === 'true');
    const filter = active ? active.dataset.filter : 'all';
    const term = (q?.value || '').trim().toLowerCase();
    cards.forEach(card => {
      const tags = (card.dataset.tags || '').toLowerCase();
      const hay = (card.textContent || '').toLowerCase();
      const matchTag = (filter === 'all') || tags.includes(filter);
      const matchText = term === '' || hay.includes(term);
      card.classList.toggle('hidden', !(matchTag && matchText));
    });
  }

  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => c.dataset.active = 'false');
    chip.dataset.active = 'true';
    apply();
  }));

  q?.addEventListener('input', apply);

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q?.focus(); }
  });
})();
