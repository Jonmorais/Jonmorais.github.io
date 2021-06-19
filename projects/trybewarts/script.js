const loginInput = document.querySelector('#header-login');
const loginButton = document.querySelector('#login-button');
const passwordInput = document.querySelector('#header-password');

function validateEmail() {
  if (loginInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', validateEmail);

// Fim dos requisitos obrigatórios
