document.addEventListener('DOMContentLoaded', () => {
    // Mapeia os botões (li) aos respectivos divs e títulos
    const sections = {
        LIminhaConta: { div: 'vizualizarConta', title: 'Minha Conta' },
        LIalterarSenha: { div: 'minhaSenha', title: 'Alterar Senha' },
        LIalterarEmail: { div: 'alterarEmail', title: 'Alterar Email' },
        LIcartões: { div: 'attCartao', title: 'Cartões' },
        LIapagar: { div: 'apagar', title: 'Apagar Conta' },
        LIenderecos: { div: 'endereco', title: 'Meus Endereços' }
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

document.addEventListener("DOMContentLoaded", () => {
    // Elementos
    const addInfoCartao = document.getElementById("addInfoCartao");
    const attInfoCartao = document.getElementById("attInfoCartao");
    const addCartaoSection = document.getElementById("addCartao");
    const attCartaoSection = document.getElementById("attCartao");

    // Função para mostrar ou ocultar seções
    function toggleSections() {
        // Verifica qual seção está visível e alterna
        if (attCartaoSection.style.display === "none") {
            attCartaoSection.style.display = "block";
            addCartaoSection.style.display = "none";
            // Atualiza o título
            const titleDiv = document.getElementById("tittleDiv");
            if (titleDiv) {
                titleDiv.textContent = "Atualizar Cartão";
            }
        } else {
            attCartaoSection.style.display = "none";
            addCartaoSection.style.display = "block";
            // Atualiza o título
            const titleDiv = document.getElementById("tittleDiv");
            if (titleDiv) {
                titleDiv.textContent = "Adicionar Cartão";
            }
        }
    }

    // Eventos de clique
    if (addInfoCartao) {
        addInfoCartao.addEventListener("click", toggleSections);
    }
    if (attInfoCartao) {
        attInfoCartao.addEventListener("click", toggleSections);
    }
});