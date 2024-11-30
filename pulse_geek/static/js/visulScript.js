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

// Carregar os produtos quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutosOferta();
    carregarLancamentos();
});