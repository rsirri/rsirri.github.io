// ================================
// DECLARATIONS - all at top
// ================================
const navLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('.section');
const revealElements = document.querySelectorAll('.reveal');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-links');

// ================================
// SMOOTH SCROLLING
// ================================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Reveal all sections first before scrolling
            revealElements.forEach(el => el.classList.add('visible'));
            
            // Close hamburger menu if open
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');

            // Then scroll
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 50);
        }
    });
});

// ================================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ================================
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ================================
// TYPING ANIMATION
// ================================
const typingElement = document.querySelector('#typing-text');

const titles = [
    'SAP BTP & RAP Full Stack Developer',
    'S/4HANA & Clean Core Specialist',
    'Fiori & UI5 & CAPM Developer',
    'SAP AI Integration Explorer'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, 500);
        return;
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(type, speed);
}

type();

// ================================
// HAMBURGER MENU
// ================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// ================================
// SCROLL REVEAL
// ================================
// Reveal all sections immediately on load
window.addEventListener('load', () => {
    revealElements.forEach(el => el.classList.add('visible'));
});

// Also observe for animation effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.05 });

revealElements.forEach(el => observer.observe(el));

// ================================
// CERTIFICATIONS FILTER
// ================================
function filterCards(category, clickedBtn) {
    
    // Step 1: Get all cards and filter buttons
    const allCards = document.querySelectorAll('.cert-card');
    const allButtons = document.querySelectorAll('.filter-btn');

    // Step 2: Remove active class from all buttons and add to the clicked one
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Step 3: Add active class to the clicked button
    clickedBtn.classList.add('active');

    // Step 4: Loop through every card and decide show or hide
    allCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' ) { 
            card.classList.remove('hidden');
        } else if (cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}   