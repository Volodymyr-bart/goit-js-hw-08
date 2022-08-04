import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

if (localStorage.getItem(STORAGE_KEY)) {
  currentValueForm();
}

let formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

function onFormSubmit(e) {
  e.preventDefault();
  const savesData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savesData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function currentValueForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    const { email, message } = savedMessage;
    refs.inputEmail.value = email ? email : ``;
    refs.textarea.value = message ? message : ``;
  }
}
