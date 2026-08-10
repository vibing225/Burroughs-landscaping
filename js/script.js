// --- Config-driven content demo ---
// In production this object comes from one config file per client project.
const config = {
  businessName: "Burroughs Landscaping",
  phone: "830.377.1780",
  serviceAreas: ["Kerrville", "Ingram", "Hunt", "Fredericksburg", "Boerne", "Center Point"]
};

// Preloader
window.addEventListener('load', function () {
  setTimeout(function () {
    const el = document.getElementById('preloader');
    if (el) el.classList.add('hide');
  }, 1300);
});

function closeMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.remove('open');
}
function openMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.add('open');
}
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// Sticky header shadow
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 8);
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mark current page's nav link as active
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, #mobileMenu a.nav-item').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
})();

// Demo contact form (no backend wired up yet)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const note = document.getElementById('formNote');
    if (note) note.textContent = "This is a concept site — hook this form up to email or a form service before going live.";
  });
}
