document.addEventListener('DOMContentLoaded', () => {
    // Mapeia os botões (li) aos respectivos divs e títulos
    const sections = {
        LIminhaConta: { div: 'vizualizarConta', title: 'Minha Conta' },
        LIalterarSenha: { div: 'minhaSenha', title: 'Alterar Senha' },
        LIalterarEmail: { div: 'alterarEmail', title: 'Alterar Email' },
        LIcartões: { div: 'attCartao', title: 'Cartões' },
        LIapagar: { div: 'apagar', title: 'Apagar Conta' },
        LIenderecos: { div: 'gerenciarEndereco', title: 'Meus Endereços' }
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
            const addEndereco = document.getElementById('addEndereco');
            if (addCartaoDiv) addCartaoDiv.style.display = 'none';
            if (addEndereco) addEndereco.style.display = 'none';

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

// cartoes
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

// endereços
document.addEventListener("DOMContentLoaded", () => {
    // Elementos
    const addInfoEndereco = document.getElementById("addInfoEndereco");
    const attInfoEnderecos = document.getElementById("attInfoEnderecos");
    const addEndereco = document.getElementById("addEndereco");
    const gerenciarEndereco = document.getElementById("gerenciarEndereco");

    // Função para mostrar ou ocultar seções
    function toggleSections() {
        // Verifica qual seção está visível e alterna
        if (gerenciarEndereco.style.display === "none") {
            gerenciarEndereco.style.display = "block";
            addEndereco.style.display = "none";
            // Atualiza o título
            const titleDiv = document.getElementById("tittleDiv");
            if (titleDiv) {
                titleDiv.textContent = "Atualizar Cartão";
            }
        } else {
            gerenciarEndereco.style.display = "none";
            addEndereco.style.display = "block";
            // Atualiza o título
            const titleDiv = document.getElementById("tittleDiv");
            if (titleDiv) {
                titleDiv.textContent = "Adicionar Cartão";
            }
        }
    }

    // Eventos de clique
    if (addInfoEndereco) {
        addInfoEndereco.addEventListener("click", toggleSections);
    }
    if (attInfoEnderecos) {
        attInfoEnderecos.addEventListener("click", toggleSections);
    }
});


// Menu mobile
document.getElementById('menuIconConta').addEventListener('click', () => {
    const sideMenuConta = document.getElementById('sideMenuConta');
    const overlay = document.getElementById('overlay');

    if (sideMenuConta.style.right === '0px') {
        sideMenuConta.style.right = '-50%';
        overlay.style.display = 'none';
    } else {
        sideMenuConta.style.right = '0';
        overlay.style.display = 'block';
    }
});

// Ocultar menu ao clicar no overlay
document.getElementById('overlay').addEventListener('click', () => {
    const sideMenuConta = document.getElementById('sideMenuConta');
    const overlay = document.getElementById('overlay');
    const subCards = document.getElementById('subCards');
    const subRPG = document.getElementById('subRPG');

    sideMenuConta.style.right = '-50%';
    overlay.style.display = 'none';
    subCards.style.display = 'none';
    subRPG.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    // Mapeia os botões (li) aos respectivos divs e títulos
    const sections = {
        contaCel: { div: 'vizualizarConta', title: 'Minha Conta' },
        senhaCel: { div: 'minhaSenha', title: 'Alterar Senha' },
        emailCel: { div: 'alterarEmail', title: 'Alterar Email' },
        cartaoCel: { div: 'attCartao', title: 'Cartões' },
        apagarCel: { div: 'apagar', title: 'Apagar Conta' },
        enderecoCel: { div: 'gerenciarEndereco', title: 'Meus Endereços' }
    };

    // Obtém todos os botões
    const buttons = document.querySelectorAll('.liContaMobile');

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
            const addEndereco = document.getElementById('addEndereco');
            if (addCartaoDiv) addCartaoDiv.style.display = 'none';
            if (addEndereco) addEndereco.style.display = 'none';

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