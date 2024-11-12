//Script para o carrossel de imagens

var slideIndex = 1;
var timer;

function showSlides(n) {
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    clearTimeout(timer);
    timer = setTimeout(showSlides, 5000, slideIndex += 1); // Chama a função a cada 5 segundos
}

showSlides(slideIndex); // Inicializa o carrossel

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

// JavaScript para Carregar Produtos (Simulação)
// Produtos de ofertas
const produtosOferta = [
    {
        nome: "Booster Pack - The Infinite Forbidden",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos1.jpg"
    },
    {
        nome: "Booster Pack - The Infinite Forbidden",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos1.jpg"
    },
    {
        nome: "Booster Pack - The Infinite Forbidden",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos1.jpg"
    },
    {
        nome: "Booster Pack - The Infinite Forbidden",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos1.jpg"
    }
];

// Produtos de lançamentos
const produtosLancamentos = [
    {
        nome: "Novidade Pack - Forbidden Horizons",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos2.jpg"
    },
    {
        nome: "Novidade Pack - Forbidden Horizons",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos2.jpg"
    },
    {
        nome: "Novidade Pack - Forbidden Horizons",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos2.jpg"
    },
    {
        nome: "Novidade Pack - Forbidden Horizons",
        precoNovo: "R$ 000,00",
        precoAntigo: "R$ 000,00",
        imagem: "img/produtos/podutos2.jpg"
    }
];

// Função para carregar produtos de ofertas
function carregarProdutosOferta() {
    const container = document.querySelector('.produtoOferta');
    produtosOferta.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto-card');

        card.innerHTML = `
            <div>
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <h3 style="text-align: left; margin-left: 5%;">${produto.nome}</h3>
            <p class="preco-novo">${produto.precoNovo}</p>
            <p class="preco-antigo">${produto.precoAntigo}</p>
        `;
        container.appendChild(card);
    });
}

// Função para carregar produtos de lançamentos
function carregarLancamentos() {
    const container = document.querySelector('.produtoLancados');
    produtosLancamentos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto-card');

        card.innerHTML = `
            <div>
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <h3 style="text-align: left; margin-left: 5%;">${produto.nome}</h3>
            <p class="preco-novo">${produto.precoNovo}</p>
            <p class="preco-antigo">${produto.precoAntigo}</p>
        `;
        container.appendChild(card);
    });
}

// Carregar os produtos quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutosOferta();
    carregarLancamentos();
});
