document.addEventListener('DOMContentLoaded', () => {
    // Mapeia os botões (li) aos respectivos divs
    const sections = {
        LIminhaConta: 'vizualizarConta',
        LIalterarSenha: 'minhaSenha',
        LIalterarEmail: 'alterarEmail',
        LIcartões: 'attCartao',
        LIapagar: 'apagar',
        attInfoCartao: 'addCartao',
        addInfoCartao: 'attCartao'
    };

    // Obtém todos os botões
    const buttons = document.querySelectorAll('.botoesConta');

    // Adiciona evento de clique em cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Oculta todos os divs
            Object.values(sections).forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) section.style.display = 'none';
            });

            // Exibe o div correspondente
            const targetId = sections[button.id];
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.style.display = 'block';
        });
    });
});