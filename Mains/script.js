// script.js


document.addEventListener('DOMContentLoaded', () => {
    const videoHero = document.querySelector('.video-hero');
    let isDragging = false;
    let offsetX, offsetY;

    // Handle dragging
    videoHero.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - videoHero.getBoundingClientRect().left;
        offsetY = e.clientY - videoHero.getBoundingClientRect().top;
        videoHero.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            videoHero.style.left = `${e.clientX - offsetX}px`;
            videoHero.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        videoHero.style.transition = 'top 0.2s ease, left 0.2s ease'; // Re-enable transition
    });

    // Handle touch events for mobile devices
    videoHero.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - videoHero.getBoundingClientRect().left;
        offsetY = touch.clientY - videoHero.getBoundingClientRect().top;
        videoHero.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            videoHero.style.left = `${touch.clientX - offsetX}px`;
            videoHero.style.top = `${touch.clientY - offsetY}px`;
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        videoHero.style.transition = 'top 0.2s ease, left 0.2s ease'; // Re-enable transition
    });

    // Handle hiding
    const hideButton = document.createElement('button');
    hideButton.className = 'hide-button';
    hideButton.innerText = 'Hide';
    document.body.appendChild(hideButton);

    hideButton.addEventListener('click', () => {
        if (videoHero.style.display === 'none') {
            videoHero.style.display = 'block';
            hideButton.innerText = 'Hide';
        } else {
            videoHero.style.display = 'none';
            hideButton.innerText = 'Show';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slides');
    const slideCount = document.querySelectorAll('.carousel-slide').length;
    let currentIndex = 0;

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;
        }
        updateCarousel();
    });

    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }
    
});


document.addEventListener('DOMContentLoaded', function() {
    var chatbotContainer = document.getElementById('chatbot-container');
    
    document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        // Adjust the value based on where you want the chatbot to appear
        if (scrollPosition > 200) {
            chatbotContainer.classList.add('visible');
        } else {
            chatbotContainer.classList.remove('visible');
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const overviewElement = document.getElementById('intro');
    overviewElement.classList.add('bounce-animation');
});
