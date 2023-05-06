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
    //formData = {};
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function populateTextareaInput() {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //console.log('saveData: ' , savedData);

   if (formData) {
       refs.emailarea.value = formData.email || '';
       refs.textarea.value = formData.message || '';
    }
        
}
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function onFormInput(evt) {
  
  console.log(formData);
  formData[evt.target.name] = evt.target.value;
  console.log(`formData[${evt.target.name}]: = `, formData[evt.target.name]);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  //console.log(formData);
}