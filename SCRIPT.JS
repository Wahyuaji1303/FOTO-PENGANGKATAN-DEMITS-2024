document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-target]');
  buttons.forEach(btn =>
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (!target) return;
      showPage(target);
    })
  );

  // Nomor WA (087872921673 -> 6287872921673)
  const waNumber = '6287872921673';
  const message = encodeURIComponent(
    'Halo Mas, ini Agisna. Bolehkah aku minta foto kebersamaan kita waktu pengangkatan tadi? Aku ingin menyimpannya sebagai kenangan manis.'
  );
  const waLink = document.getElementById('wa-link');
  waLink.setAttribute('href', `https://wa.me/${waNumber}?text=${message}`);

  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
