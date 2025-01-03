// Light/Dark Mode Toggle
const modeToggleButton = document.createElement('button');
modeToggleButton.innerText = '🌙'; // Moon icon for dark mode toggle
modeToggleButton.id = 'mode-toggle';
document.body.appendChild(modeToggleButton);

modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        modeToggleButton.innerText = '🌞'; // Sun icon for light mode
    } else {
        modeToggleButton.innerText = '🌙'; // Moon icon for dark mode
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth Scroll for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth',
        });
    });
});

// Optional: You can also add event listeners for form validation if needed
// Example: Validating the Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault(); // Prevent form submission if fields are empty
            alert('Please fill in all fields!');
        }
    });
}
