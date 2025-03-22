function validationForm(event){
    event.preventDefault();

    
    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirm-email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const message = document.getElementById('message').value.trim();

    
    const errorMessage = document.getElementById('error-message');
    const errorEmail = document.getElementById('error-email');
    const errorConfirmEmail = document.getElementById('error-confirm-email');
    const errorPhone = document.getElementById('error-phone');
    const errorAddress = document.getElementById('error-address');
    const errorMessageContent = document.getElementById('error-message-msg');

    let isValid = true;

    
    if(username.length < 6 ){
        errorMessage.textContent = 'required 6 characters at least';
        isValid = false;
    } else {
        errorMessage.textContent = '';
    }


    const emailRegex = /^[a-zA-Z0-9.!]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
    if(email.length < 8 || !emailRegex.test(email)){
        errorEmail.textContent = 'please enter a valid email';
        isValid = false;
    } else {
        errorEmail.textContent = '';
    }

    
    if(confirmEmail !== email){
        errorConfirmEmail.textContent = 'Email do not match';
        isValid = false;
    } else {
        errorConfirmEmail.textContent = '';
    }

    
    const phoneRegex = /^(0030)?[0-9]{10}$/;
    if(!phoneRegex.test(phone)){
        errorPhone.textContent = 'your phone number is incorrect';
        isValid = false;
    } else {
        errorPhone.textContent = '';
    }

    
    if (address.length === 0){
        errorAddress.textContent = 'address not valid';
        isValid = false;
    } else {
        errorAddress.textContent = '';
    }

    
    if (message.length < 15){
        errorMessageContent.textContent = 'your message is too short';
        isValid = false;
    } else {
        errorMessageContent.textContent = '';
    }

    
    if(isValid){
        console.log('form is valid');
        document.getElementById('contact-form').submit();
    } else {
        console.log('error');
    }
}

document.getElementById('contact-form').addEventListener('submit', validationForm);