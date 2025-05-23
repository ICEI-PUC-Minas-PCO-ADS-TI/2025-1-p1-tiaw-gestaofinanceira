const apiCategoriasReceitas = '/categoriasReceitas'; // URL da API JSONServer

// Referências dos elementos do modal de categoria
const opcoesCategoriaReceita = document.getElementById('opcoesCategoriaReceita');
const modalCategoriaReceita = document.getElementById('modalCategoriaReceita');
const caixaCategoriaReceita = document.getElementById('caixaCategoriaReceita');
const btnAbrirModalCategoriaReceita = document.getElementById('btnAbrirModalCategoriaReceita');
const btnFecharModalCategoriaReceita = document.getElementById('btnFecharModalCategoriaReceita');
const btnSelecionarCategoriaReceita = document.getElementById('btnSelecionarCategoriaReceita');
const inputCategoriaReceita = document.getElementById('inputCategoriaReceita');
const btnAdicionarCategoriaReceita = document.getElementById('btnAdicionarCategoriaReceita');

// Função para buscar e exibir categorias no modal
function carregarCategoriasReceita() {
    fetch(apiCategoriasReceitas)
        .then(res => res.json())
        .then(categoriasReceita => {
            opcoesCategoriaReceita.innerHTML = ''; // Limpa antes de preencher
            categoriasReceita.forEach(catReceita => {
                let carregarCategoriaReceita = `
                    <input type="radio" id="categoria-receita-${catReceita.id}" name="categoriaReceita" value="${catReceita.nome}">
                    <label for="categoria-receita-${catReceita.id}">${catReceita.nome}</label>
                `;
                opcoesCategoriaReceita.innerHTML += carregarCategoriaReceita;
            });
        })
        .catch(err => {
            console.error("Erro ao carregar categorias:", err);
        });
}

// Abrir o modal de categoria quando o botão for clicado
btnAbrirModalCategoriaReceita.addEventListener('click', () => {
    modalCategoriaReceita.style.display = 'flex';
    carregarCategoriasReceita(); // Carrega as categorias ao abrir o modal
});

// Fechar o modal de categoria quando o botão de fechar for clicado
btnFecharModalCategoriaReceita.addEventListener('click', () => {
    modalCategoriaReceita.style.display = 'none';
});

// Função para selecionar a categoria
btnSelecionarCategoriaReceita.addEventListener('click', () => {
    const categoriaSelecionadaReceita = document.querySelector('input[name="categoriaReceita"]:checked')?.value;

    if (categoriaSelecionadaReceita) {
        // Preenche o campo de categoria com a categoria escolhida
        inputCategoriaReceita.value = categoriaSelecionadaReceita;
        modalCategoriaReceita.style.display = 'none'; // Fecha o modal após a seleção
    } else {
        alert("Selecione uma categoria."); // Exibe um alerta se nenhuma categoria for selecionada
    }
});
// Fecha o modal ao clicar fora da caixa
modalCategoriaReceita.addEventListener('click', function (event) {
    if (!caixaCategoriaReceita.contains(event.target)) {
        modalCategoriaReceita.style.display = 'none';
    }
});

//Alerta que a função de adicionar categoria não está implementada
btnAdicionarCategoriaReceita.addEventListener('click', () => {
    alert("Função de adicionar categoria não implementada.");
});