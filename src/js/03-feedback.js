import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

// refs.form.addEventListener('input', e => {
// formData[e.target.name] = e.target.value;
// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// console.log(formData);
// });
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log('poletelo');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onTextareaInput(e) {
  // let message = e.target.value;
  // localStorage.setItem(STORAGE_KEY, message);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);
  if (savedMessage) {
    const { email, message } = savedMessage;
    refs.inputEmail.value = email ? email : ``;
    refs.textarea.value = message ? message : ``;
  }
}
populateTextarea();
