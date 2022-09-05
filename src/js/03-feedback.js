import throttle from 'lodash.throttle';

const forma = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email = null, message = null } = formData;

document.querySelector('input').value = email;
document.querySelector('textarea').value = message;

forma.addEventListener('input', _.throttle(saveLocalStorage, 500));
forma.addEventListener('submit', showConsole);

function saveLocalStorage(event) {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function showConsole(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.clear();
}
