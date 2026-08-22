const modal = document.getElementById('trial-modal');
const form = document.getElementById('trial-form');
const statusMsg = document.getElementById('form-status');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const desktopNav = document.querySelector('.desktop-nav');
const navLinks = document.querySelectorAll('.desktop-nav a');

// Modal Logic
function openModal() { 
    modal.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
}

function closeModal() { 
    modal.classList.remove('active'); 
    document.body.style.overflow = 'auto'; 
    statusMsg.innerText = ''; 
    form.reset(); 
}

document.querySelector('.close-modal').addEventListener('click', closeModal);

modal.addEventListener('click', (e) => { 
    if (e.target === modal) closeModal(); 
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Form Submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusMsg.style.color = 'var(--onyx)';
    statusMsg.innerText = "Thanks — we've received your request. We'll be in touch shortly.";
    setTimeout(closeModal, 3000);
});

// Mobile Menu Logic
mobileMenuToggle.addEventListener('click', () => {
    desktopNav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        desktopNav.classList.remove('active');
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => { 
    observer.observe(el); 
});
