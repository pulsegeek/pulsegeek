// Config do Menu cascata

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const dropdownMenu = document.getElementById('menuSuspenso');
    const cardsMenu = document.getElementById('cardsMenu');
    const rpgMenu = document.getElementById('rpgMenu');
    const submenuCards = cardsMenu.querySelector('.submenu');
    const submenuRPG = rpgMenu.querySelector('.submenu');
    
    let inactivityTimeout;

    // Função para fechar todos os menus
    function closeAllMenus() {
        dropdownMenu.style.display = 'none';
        submenuCards.style.display = 'none';
        submenuRPG.style.display = 'none';
    }

    // Função para resetar o timer de inatividade
    function resetInactivityTimeout() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(closeAllMenus, 3000); // 3 segundos de inatividade
    }

    // Controla a visibilidade do menu suspenso
    menuIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        resetInactivityTimeout();
    });

    // Controla a visibilidade do submenu do "CARDS"
    cardsMenu.addEventListener('click', function (event) {
        event.stopPropagation();
        submenuCards.style.display = submenuCards.style.display === 'block' ? 'none' : 'block';
        submenuRPG.style.display = 'none';
        resetInactivityTimeout();
    });

    // Controla a visibilidade do submenu do "RPG"
    rpgMenu.addEventListener('click', function (event) {
        event.stopPropagation();
        submenuRPG.style.display = submenuRPG.style.display === 'block' ? 'none' : 'block';
        submenuCards.style.display = 'none';
        resetInactivityTimeout();
    });

    // Reseta o timer ao interagir com o menu principal
    dropdownMenu.addEventListener('mouseenter', resetInactivityTimeout);
    dropdownMenu.addEventListener('mouseleave', resetInactivityTimeout);

    // Oculta os menus ao clicar fora deles
    document.addEventListener('click', function () {
        closeAllMenus();
    });
});

// menu mobile
document.getElementById('menuIconMobile').addEventListener('click', () => {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-50%';
        overlay.style.display = 'none';
    } else {
        sideMenu.style.left = '0';
        overlay.style.display = 'block';
    }
});

// Ocultar menu ao clicar no overlay
document.getElementById('overlay').addEventListener('click', () => {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const subCards = document.getElementById('subCards');
    const subRPG = document.getElementById('subRPG');

    sideMenu.style.left = '-50%';
    overlay.style.display = 'none';
    subCards.style.display = 'none';
    subRPG.style.display = 'none';
});

// Comportamento dos submenu
document.addEventListener('DOMContentLoaded', () => {
    const setaCards = document.getElementById('setaCards');
    const subCards = document.getElementById('subCards');

    const setaRPG = document.getElementById('setaRPG');
    const subRPG = document.getElementById('subRPG');

    // Função para alternar exibição do submenu
    function toggleSubmenu(button, submenu) {
        const isHidden = submenu.style.display === 'none';
        submenu.style.display = isHidden ? 'block' : 'none';
    }

    // Eventos para clique
    setaCards.addEventListener('click', () => toggleSubmenu(setaCards, subCards));
    setaRPG.addEventListener('click', () => toggleSubmenu(setaRPG, subRPG));
});
