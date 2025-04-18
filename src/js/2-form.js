const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

if (form.elements.email) form.elements.email.value = formData.email || '';
if (form.elements.message) form.elements.message.value = formData.message || '';

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Будь ласка, заповніть усі поля перед відправкою.');
    return;
  }

  console.log({ email, message });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
});
