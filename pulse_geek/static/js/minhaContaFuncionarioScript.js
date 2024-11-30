document.addEventListener('DOMContentLoaded', () => {
    // Mapeia os botões (li) aos respectivos divs e títulos
    const sections = {
        LIminhaConta: { div: 'vizualizarConta', title: 'MINHA CONTA - FUNCIONARIO' },
        LIalterarSenha: { div: 'minhaSenha', title: 'Alterar Senha' },
        LIalterarEmail: { div: 'alterarEmail', title: 'Alterar Email' },
        LIapagar: { div: 'apagar', title: 'Apagar Conta' }
    };

    // Obtém todos os botões
    const buttons = document.querySelectorAll('.botoesConta');

    // Adiciona evento de clique em cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Oculta todos os divs, incluindo 'addCartao'
            Object.values(sections).forEach(section => {
                const sectionDiv = document.getElementById(section.div);
                if (sectionDiv) sectionDiv.style.display = 'none';
            });

            // Também esconde o 'addCartao' se visível
            const addCartaoDiv = document.getElementById('addCartao');
            if (addCartaoDiv) addCartaoDiv.style.display = 'none';

            // Exibe o div correspondente
            const targetSection = sections[button.id];
            const targetDiv = document.getElementById(targetSection.div);
            if (targetDiv) {
                targetDiv.style.display = 'block';
                // Atualiza o título
                const titleDiv = document.getElementById('tittleDiv');
                if (titleDiv) {
                    titleDiv.textContent = targetSection.title;
                }
            }
        });
    });
});