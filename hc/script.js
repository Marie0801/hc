document.addEventListener('DOMContentLoaded', function() {
    // Function to add the fade-in class
    function fadeInSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.classList.remove('fade-in'));

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('fade-in');
        }
    }

    // Add event listeners to links
    document.getElementById('link-acceuil').addEventListener('click', function(event) {
        event.preventDefault();
        fadeInSection('acceuil');
    });

    document.getElementById('link-apropos').addEventListener('click', function(event) {
        event.preventDefault();
        fadeInSection('apropos');
    });

    document.getElementById('link-contact').addEventListener('click', function(event) {
        event.preventDefault();
        fadeInSection('contact');
    });

    // Initially fade in the first section
    fadeInSection('acceuil');
});

//pour les images

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const newTransform = `translateX(-${currentSlide * 100}%)`;
    document.querySelector('.carousel-images').style.transform = newTransform;
}

// Change slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// fonction du bouton dans le header
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
