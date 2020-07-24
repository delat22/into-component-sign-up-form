const submitButton = document.getElementById('but');
const errorMsg = document.getElementsByTagName('small');
const inputForm = document.getElementsByTagName('input');



submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    for (let i = 0; i < inputForm.length; i++){
        if(inputForm[i].value.length === 0 ){
            inputForm[i].style.border = '1px solid red';
            inputForm[i].style.backgroundSize = '5%';
            errorMsg[i].style.display = 'inline';
            inputForm[2].placeholder='email@example.com';
        }

        else{
            inputForm[i].style.border = '1px solid green';
            inputForm[i].style.backgroundSize = '0';
            errorMsg[i].style.display = 'none';
        }
    }
});


/***
submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    if (firstName.value.length === 0 && lastName.value.length === 0 && password.value.length === 0 && email.value.length === 0){
        firstName.style.border = '1px solid red';
        lastName.style.border = '1px solid red';
        password.style.border = '1px solid red';
        email.style.border = '1px solid red';
        errorMsg.style.display = 'inline'
    }

    else{
        firstName.style.border = '1px solid green';
        lastName.style.border = '1px solid green';
        password.style.border = '1px solid green';
        email.style.border = '1px solid green';
        errorMsg.style.display = 'none'
    }
    
}); ****/