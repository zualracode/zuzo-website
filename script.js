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

modal.addEventListener('click', (e) => { 
    if (e.target === modal) closeModal(); 
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusMsg.innerText = "Thanks — we've received your request. We'll be in touch shortly.";
    setTimeout(closeModal, 3000);
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { root: null, rootMargin: '0px', threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => { 
    observer.observe(el); 
});