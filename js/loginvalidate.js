var username = document.querySelector('#username')
// var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message){
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.add('error')
  small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error')
    small.innerText = ''
  }


function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError=true;
            showError(input, 'Can not leave the field blank')
        }else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

// function checkEmailError(input){
//     const regexEmail =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     input.value = input.value.trim()

//     let isEmptyError = !regexEmail.test(input.value)
//    if(regexEmail.test(input.value)){
//         showSuccess(input)
//    }else{
//         showError(input, 'Email valid')
//    }

//    return isEmptyError

// }

function checkLengthError(input, min ,max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input, `Must have at least ${min} character`)
        return true
    }

    if(input.value.length > max){
        showError(input, `Must not exceed ${max} characters.`)
        return true
    }

    return false

}


function checkMatchPasswordError(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput,'Passwords do not match')
        return true
    }
        return false
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, password, confirmPassword])
    // let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 4, 20)
    let isPasswordLengthError = checkLengthError(password, 4, 20)
    let isMatchError = checkMatchPasswordError(password, confirmPassword)

    if(isEmptyError || isUsernameLengthError || isPasswordLengthError || isMatchError){
        // do thing
    }else{
        //logic,call API.....
    }

})