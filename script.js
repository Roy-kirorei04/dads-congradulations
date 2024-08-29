let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
