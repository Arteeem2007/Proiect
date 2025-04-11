document.addEventListener('DOMContentLoaded', function() {
    const openLinkText = document.getElementById('openLink');

    openLinkText.addEventListener('click', function() {
        window.location.href = 'https://www.exemplu.com';
    });

    const links = document.querySelectorAll('.scroll-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    let currentIndex = 0;
    const images = document.querySelectorAll('.brand-gallery img');

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0.5';
            }
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 2000);
});
