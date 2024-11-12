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