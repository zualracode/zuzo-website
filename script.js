// Modal Logic
const modal = document.getElementById('trial-modal');
const form = document.getElementById('trial-form');
const statusMsg = document.getElementById('form-status');

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

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Form submission handler (Frontend prototype)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Insert backend integration here later (e.g., fetch request to API/Formspree)
    statusMsg.innerText = "Thanks — we've received your request. We'll be in touch shortly.";
    form.reset();
    setTimeout(closeModal, 3000);
});

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
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