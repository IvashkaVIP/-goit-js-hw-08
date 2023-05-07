import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  emailarea: document.querySelector('input'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.form.email.setAttribute('required', '');
refs.form.message.setAttribute('required', '');

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextareaInput();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('отправляем форму');
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateTextareaInput() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  if (formData) {
    refs.emailarea.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
