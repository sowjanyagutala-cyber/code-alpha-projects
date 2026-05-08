// Function to add a background color to the navbar after scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 8%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = '#fff';
    }
});

// Professional Welcome Message
console.log("Welcome to Soujanya's Professional Portfolio!");