let currentImageIndex = 0;
const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
];

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentImageIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    document.getElementById("lightbox-img").src = images[currentImageIndex];
}

// Close lightbox on clicking outside the image
window.onclick = function(event) {
    const lightbox = document.getElementById("lightbox");
    if (event.target == lightbox) {
        closeLightbox();
    }
}