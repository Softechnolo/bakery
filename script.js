const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const orderForm = document.getElementById('orderForm');
const formSuccess = document.getElementById('formSuccess');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formSuccess.hidden = false;
    orderForm.reset();
  });
}
