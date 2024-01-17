var inputName = document.getElementById('inputName'),
  inputEmail = document.getElementById('inputEmail'),
  inputPass = document.getElementById('inputPass'),
  inCorrect = document.getElementById('inCorrect'),
  signUp = document.getElementById('signUp'),
  adminName = document.getElementById('adminName');

var listUser = [];

if (localStorage.getItem('users') != null) {
  listUser = JSON.parse(localStorage.getItem('users'));
}

signUp.addEventListener('click', function () {
  var userAccounts = {
    userName: inputName.value,
    userEmail: inputEmail.value,
    userPass: inputPass.value,
  };

  if (checkInputs() == true) {
    getAlert('All inputs are empty', 'red');
  } else {
    if (checkEmailIsExist() == true) {
      getAlert('This email is exist', 'yellow');
    } else {
      listUser.push(userAccounts);
      localStorage.setItem('users', JSON.stringify(listUser));
      getAlert('Sign up is success ', 'green');
      clearData();
    }
  }
});

function checkInputs() {
  if (
    inputName.value == '' ||
    inputEmail.value == '' ||
    inputPass.value == ''
  ) {
    return true;
  } else {
    return false;
  }
}

function clearData() {
  inputName.value = '';
  inputEmail.value = '';
  inputPass.value = '';
}

function getAlert(message, color) {
  inCorrect.innerHTML = message;
  inCorrect.style.color = color;
}

function checkEmailIsExist() {
  for (let i = 0; i < listUser.length; i++) {
    if (
      listUser[i].userName == inputName.value &&
      listUser[i].userPass == inputPass.value
    ) {
      inCorrect.innerHTML = 'This is Email is Exist';
      return true;
    } else {
      return false;
    }
  }
}
