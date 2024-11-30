// mudar section de login e cadastro
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector('.switch input');
    const cadastroSection = document.getElementById('cadastro');
    const loginSection = document.getElementById('login');
    const cadastroSectionMobile = document.getElementById('mobileCadastro');
    const toggleText = document.querySelector('.toggle-cadastro p');

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            cadastroSection.style.display = 'block';
            loginSection.style.display = 'none';
            toggleText.textContent = 'Fazer cadastro';
        }
        else {
            cadastroSection.style.display = 'none';
            loginSection.style.display = 'block';
            toggleText.textContent = 'Fazer login';
        }
    });
});


document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    const invalidCharacters = /[()\[\]{}<>,;:\\'"`|~!?#$%^&*+=/ ]/;

    // Limpar mensagem de erro
    errorMessage.textContent = '';

    // Validar email
    if (emailInput.value.length < 8) {
      errorMessage.textContent = 'O email deve ter pelo menos 8 caracteres.';
      event.preventDefault();
      return;
    }

    if (invalidCharacters.test(emailInput.value)) {
      errorMessage.textContent = 'O email contém caracteres inválidos.';
      event.preventDefault();
      return;
    }
  });