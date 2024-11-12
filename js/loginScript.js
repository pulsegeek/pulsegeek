// Seleciona todos os ícones de "olho" para mostrar/ocultar senha
document.querySelectorAll('.alterarSenha').forEach(function(alterarIcon) {
    alterarIcon.addEventListener('click', function () {
        const senhaInput = this.previousElementSibling;
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
            this.src = 'img/icons/olhoAberto.png';
            this.alt = 'Esconder Senha';
        } else {
            senhaInput.type = 'password';
            this.src = 'img/icons/olhoSenha.png';
            this.alt = 'Mostrar Senha';
        }
    });
});

// mudar section de login e cadastro
document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector('.switch input');
    const cadastroSection = document.getElementById('cadastro');
    const loginSection = document.getElementById('login');
    const toggleText = document.querySelector('.toggle-cadastro p');

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            cadastroSection.style.display = 'block';
            loginSection.style.display = 'none';
            toggleText.textContent = 'Fazer cadastro';
        } else {
            cadastroSection.style.display = 'none';
            loginSection.style.display = 'block';
            toggleText.textContent = 'Fazer login';
        }
    });
});