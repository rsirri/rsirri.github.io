// ================================================
// SMOOTH SCROLLING
// ================================================
// Get all navigation links that start with '#'
const navLinks = document.querySelectorAll('a[href^="#"]');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent the default anchor click behavior
    e.preventDefault(); // Stop the instant jump

    const targetId = this.getAttribute('href'); // Get the target ID from the href attribute get "#about", "#services", etc.
    const targetSection = document.querySelector(targetId); // Find the target section element

    targetSection.scrollIntoView({ 
        behavior: 'smooth', // Glide smoothly
        Block: 'start' // Align the top of the section with the top of the viewport
     }); // Scroll to the target section smoothly

    });

});

// ================================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ================================
const sections = document.querySelectorAll('.section');

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

// You can add multiple titles - it will cycle through them
const titles = [
    'SAP BTP & RAP Full Stack Developer',
    'S/4HANA & Clean Core Specialist',
    'Fiori & UI5 & CAPM Developer',
    'SAP AI Integration Explorer'
];

let titleIndex = 0;    // which title we're on
let charIndex = 0;     // which character we're on
let isDeleting = false; // are we typing or deleting

function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        // Remove one character
        typingElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add one character
        typingElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    // Finished typing the full title
    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause 2 seconds before deleting
        return;
    }

    // Finished deleting
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length; // Move to next title
        setTimeout(type, 500); // Pause before typing next
        return;
    }

    // Speed — typing is slower than deleting
    const speed = isDeleting ? 40 : 80;
    setTimeout(type, speed);
}

// Start the typing animation when page loads
type();

// ================================
// HAMBURGER MENU TOGGLE
// ================================
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
    }); 
});