const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const orderForm = document.getElementById('orderForm');
const formSuccess = document.getElementById('formSuccess');
const registerForm = document.getElementById('registerForm');
const welcomeCard = document.getElementById('welcomeCard');
const userGreeting = document.querySelector('.user-greeting');

function showWelcome(firstName) {
  if (!welcomeCard || !userGreeting) return;
  userGreeting.textContent = `Hello, ${firstName}!`;
  welcomeCard.hidden = false;
}

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

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = registerForm.firstName.value.trim();
    const lastName = registerForm.lastName.value.trim();
    const email = registerForm.email.value.trim();
    const phone = registerForm.phone.value.trim();
    const password = registerForm.password.value.trim();

    if (!/^[0-9]{6}$/.test(password)) {
      alert('Password must be 6 digits.');
      return;
    }

    const user = { firstName, lastName, email, phone };
    localStorage.setItem('dadinKowaUser', JSON.stringify(user));
    registerForm.reset();
    showWelcome(firstName);
  });
}

const storedUser = localStorage.getItem('dadinKowaUser');
if (storedUser) {
  try {
    const user = JSON.parse(storedUser);
    if (user && user.firstName) {
      showWelcome(user.firstName);
    }
  } catch (error) {
    console.error('Failed to parse user data', error);
  }
}
