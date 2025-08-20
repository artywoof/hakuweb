document.addEventListener("DOMContentLoaded", () => {
// smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// ticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header.site');
    if (window.scrollY > 10) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
});
// toggle navigation menu
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // ปิดเมนูเมื่อคลิกลิงก์
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
  // ปิดเมนูเมื่อคลิกนอก nav
  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      e.target !== navToggle
    ) {
      nav.classList.remove('open');
    }
  });
}
// Scale App-Ui.png on scroll 
window.addEventListener('scroll', function() {
  var appImg = document.querySelector('.hero');
  if (!appImg) return;
  var minScale = 1;
  var maxScale = 1.25;
  var start = 0; // px
  var end = 800; // px
  var percent = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
  var scale = minScale + (maxScale - minScale) * percent;
  appImg.style.transform = 'scale(' + scale + ')';
  appImg.style.transition = 'transform 0.22s cubic-bezier(.4,2,.6,1), opacity 0.22s cubic-bezier(.4,2,.6,1)';
});
window.addEventListener('scroll', function() {
  var appImg = document.querySelector('.app-ui');
  if (!appImg) return;
  var minScale = 1;
  var maxScale = 1.50;
  var minOpacity = 1;
  var maxOpacity = 0;
  var start = 0; // px
  var end = 800; // px
  var scrollY = window.scrollY;
  var percent = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
  var scale = minScale + (maxScale - minScale) * percent;
  var opacity = minOpacity + (maxOpacity - minOpacity) * percent;
  appImg.style.transform = 'scale(' + scale + ')';
  appImg.style.opacity = opacity;
  appImg.style.transition = 'transform 0.22s cubic-bezier(.4,2,.6,1), opacity 0.22s cubic-bezier(.4,2,.6,1)';
});
  document.getElementById('y').textContent = new Date().getFullYear();
// simple console log for debug
console.log("Website loaded successfully.");
});
