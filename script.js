document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    const navLinks = document.querySelectorAll('.desktop-nav a');
    const trialModal = document.getElementById('trial-modal');
    const trialForm = document.getElementById('trial-form');
    const formSuccess = document.querySelector('.form-success');
    const openTrialButtons = document.querySelectorAll('.open-trial');
    const modalClose = trialModal?.querySelector('.modal-close');
    const modalBackdrop = trialModal?.querySelector('.modal-backdrop');

    function openModal() {
        if (!trialModal) return;
        trialModal.classList.add('active');
        trialModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        modalClose?.focus();
    }

    function closeModal() {
        if (!trialModal) return;
        trialModal.classList.remove('active');
        trialModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    openTrialButtons.forEach(button => button.addEventListener('click', openModal));
    modalClose?.addEventListener('click', closeModal);
    modalBackdrop?.addEventListener('click', closeModal);

    trialForm?.addEventListener('submit', event => {
        event.preventDefault();
        trialForm.hidden = true;
        if (formSuccess) formSuccess.hidden = false;
    });

    if (mobileMenuToggle && desktopNav) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = desktopNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('is-open', isOpen);
            mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                desktopNav.classList.remove('active');
                mobileMenuToggle.classList.remove('is-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', event => {
            if (!desktopNav.classList.contains('active')) return;
            if (!desktopNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                desktopNav.classList.remove('active');
                mobileMenuToggle.classList.remove('is-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;

        closeModal();

        if (desktopNav?.classList.contains('active')) {
            desktopNav.classList.remove('active');
            mobileMenuToggle?.classList.remove('is-open');
            mobileMenuToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});
