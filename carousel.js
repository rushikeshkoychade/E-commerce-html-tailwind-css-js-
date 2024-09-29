let currentIndex = 0;

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
