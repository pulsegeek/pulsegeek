document.addEventListener('DOMContentLoaded', function () {
    const botaoProximo = document.getElementById('proximaEtapa')
    const escolherEndereco = document.getElementById('escolherEndereco')
    const formasPagamento = document.getElementById('formasPagamento')
    const cartaoCredito = document.getElementById('cartaoCredito')

    botaoProximo.addEventListener('click', function (event) {
        escolherEndereco.style.display = 'none';
        formasPagamento.style.display = "block";
        cartaoCredito.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Obter todos os botões de rádio
    const radios = document.querySelectorAll('input[name="card-cred"]');

    // Função para alternar a visibilidade das divs
    function toggleDivs() {
        const selectedId = this.id.replace("radio-", ""); // Obter o ID correspondente
        const divs = document.querySelectorAll("div[id]");

        divs.forEach(div => {
            if (div.id === selectedId) {
                div.style.display = "block"; // Exibir a div correspondente
            } else {
                div.style.display = "none"; // Ocultar as outras
            }
        });
    }

    // Adicionar evento de mudança a cada botão de rádio
    radios.forEach(radio => {
        radio.addEventListener("change", toggleDivs);
    });
});

// Desmarca o input de rádio se já estiver selecionado
document.querySelector('radio1').addEventListener('click', function () {
    if (this.checked) {
        this.checked = false;
    }
});

document.querySelector('radio2').addEventListener('click', function () {
    if (this.checked) {
        this.checked = false;
    }
});