export default function formInit() {

    document.querySelector('.form__container').addEventListener('submit', (e) => e.preventDefault(), false);
    
    document.querySelector('.form__button').addEventListener('click', function(e) {
        let name = document.querySelector('.form__container .name');
        let email = document.querySelector('.form__container .email');
    
        if(!name.validity.valid) {
            name.focus();
            return;
        }
    
        if(!email.validity.valid) {
            email.focus();
            return;
        }
    
        let subject = document.querySelector('.form__container .subject');
        let description = document.querySelector('.form__container .form__description');
    
        document.getElementById('model-subject').innerText  = subject.value && subject.value.length > 0
            ? `Subject: ${subject.value}`
            : 'Without subject';
        document.getElementById('model-description').innerText  = description.value && description.value.length > 0
            ? `Description: ${description.value}`
            : 'Without description';
        document.querySelector('.window__modal').classList.add('window__modal_visible');
    });
}