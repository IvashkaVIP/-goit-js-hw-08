import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  emailarea: document.querySelector('input')
};

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('input',throttle(onFormInput,500))
refs.form.addEventListener('submit', onFormSubmit);
//refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextareaInput();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('отправляем форму');
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function populateTextareaInput() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //console.log(savedData);

   if (savedData) {
       refs.emailarea.value = savedData.email || '';
       refs.textarea.value = savedData.message || '';
    }
        
}
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    //console.log(formData);

}