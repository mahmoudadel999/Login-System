var adminName = document.getElementById('adminName'),
  logoutButton = document.getElementById('logoutButton');

if (localStorage.getItem('userName') != null) {
  adminName.innerHTML = `Welcome ${localStorage.getItem('userName')}`;
}

function logout() {
  window.location.href = './login.html';
  localStorage.removeItem('userName');
}

logoutButton.addEventListener('click', logout);
