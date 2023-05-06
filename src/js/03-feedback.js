const refs = {
    form: document.querySelector('.feedback-form'),
    textarea : document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', ontextareaInput);

function onFormSubmit(evt) {

};

function ontextareaInput(evt) {
    const message = evt.currentTarget.value;

    localStorage.setItem('feedback-form-state', message);

    // console.log(message);
    
};
