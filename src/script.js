let elInputUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  } else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}


let elInputPassword = document.querySelector('#password');
let elInputPasswordRetype = document.querySelector('#password-retype');
let elMismatchMessage = document.querySelector('.mismatch-message');

function isMatch(password1, password2) {
  return password1 === password2;
}

elInputPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add('hide');
  } else {
    elMismatchMessage.classList.remove('hide');
  }
};
