import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextareaInput();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);

  // console.log(message);
}

function populateTextareaInput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
