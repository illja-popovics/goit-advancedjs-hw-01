
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

// Load saved data from localStorage
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  emailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
}

// Save form data to localStorage
const saveFormData = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

// Add input event listeners
form.addEventListener('input', saveFormData);

// Handle form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
