import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  console.log('poletelo');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onTextareaInput(e) {
  let message = e.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    const { email, message } = savedMessage;
    refs.form.value = email ? email : ``;
    refs.textarea.value = message ? message : ``;
  }
}
populateTextarea();
