document.addEventListener('DOMContentLoaded', () => {
  // Header-only iteration: navigation links are standard anchors.
});


// V7 central hero CTA — connects to the existing trial modal.
document.addEventListener('DOMContentLoaded', () => {
  const heroButton = document.querySelector('.hero-free-trial');
  const modal = document.getElementById('modal');
  const closeButton = modal?.querySelector('.close');

  if (heroButton && modal) {
    heroButton.addEventListener('click', () => modal.classList.add('open'));
  }

  if (closeButton && modal) {
    closeButton.addEventListener('click', () => modal.classList.remove('open'));
  }

  modal?.addEventListener('click', (event) => {
    if (event.target.classList.contains('shade')) {
      modal.classList.remove('open');
    }
  });
});
