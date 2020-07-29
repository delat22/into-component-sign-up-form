const submitButton = document.getElementById('but');
const errorMsg = document.getElementsByTagName('small');
const inputForm = document.getElementsByTagName('input');



submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    for (let i = 0; i < inputForm.length; i++){
        if(inputForm[i].value.length === 0 ){
            inputForm[i].style.border = '1px solid red';
            inputForm[i].style.backgroundSize = '5%';
            errorMsg[i].style.display = 'inline-block';
            inputForm[i].removeAttribute('placeholder');
            inputForm[2].setAttribute('placeholder', 'email@example/com');
            
        }

        else{
            inputForm[i].style.border = '1px solid green';
            inputForm[i].style.backgroundSize = '0';
            errorMsg[i].style.display = 'none';
        }
    }
});
