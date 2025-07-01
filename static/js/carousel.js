let currentSlide = 0;

function getImgs() {
  return document.querySelectorAll('#carousel .carousel-img');
}

function showSlide(n) {
  const imgs = getImgs();
  if (!imgs.length) return;
  currentSlide = (n + imgs.length) % imgs.length;
  imgs.forEach((img, i) => {
    img.style.display = (i === currentSlide) ? 'block' : 'none';
  });
}

function moveCarousel(dir) {
  showSlide(currentSlide + dir);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
}); 