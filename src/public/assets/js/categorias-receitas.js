const apiContas = '/categoriasReceitas'; // URL da API JSONServer

// Referências dos elementos do modal de categoria
const opcoesCategoriaReceita = document.getElementById('opcoesCategoriaReceita');
const modalCategoriaReceita = document.getElementById('modalCategoriaReceita');
const caixaCategoriaReceita = document.getElementById('caixaCategoriaReceita');
const btnAbrirModalCategoriaReceita = document.getElementById('btnAbrirModalCategoriaReceita');
const btnFecharModalCategoriaReceita = document.getElementById('btnFecharModalCategoriaReceita');
const btnSelecionarCategoriaReceita = document.getElementById('btnSelecionarCategoriaReceita');
const inputCategoriaReceita = document.getElementById('inputCategoriaReceita');

// Função para buscar e exibir categorias no modal
function carregarCategoriasReceita() {
    fetch(apiContas)
        .then(res => res.json())
        .then(categoriasReceita => {
            opcoesCategoriaReceita.innerHTML = ''; // Limpa antes de preencher
            categoriasReceita.forEach(catReceita => {
                let carregarCategoriaReceita = `
                    <input type="radio" 
                        id="categoria-receita-${catReceita.id}" 
                        name="categoriaReceita" 
                        value="${catReceita.id}"
                        data-nome="${catReceita.nome}"
                        data-icon="${catReceita.icon}">
                    <label for="categoria-receita-${catReceita.id}" class="categoriasReceitas">
                        <div class="cat-icon">
                            <div class="icon-bg">
                                <i data-lucide="${catReceita.icon}" style="color: var(--gray-50);"></i>
                            </div>
                            <span> ${catReceita.nome}</span>
                        </div>
                        <i data-lucide="chevron-right" style="color: var(--gray-600);"></i>
                    </label>
                `;
                opcoesCategoriaReceita.innerHTML += carregarCategoriaReceita;
            });
            lucide.createIcons();
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
    const categoriaSelecionadaReceita = document.querySelector('input[name="categoriaReceita"]:checked');

    if (categoriaSelecionadaReceita) {
        // Preenche o campo de categoria com a categoria escolhida
        //inputCategoriaReceita.value = categoriaSelecionadaReceita;
        modalCategoriaReceita.style.display = 'none'; // Fecha o modal após a seleção
        inputCategoriaReceita.style.display = 'flex';
        
        const categoriaId = categoriaSelecionadaReceita.value; 
        inputCategoriaReceita.value = categoriaSelecionadaReceita.getAttribute('data-nome');
        inputCategoriaReceita.setAttribute('catReceita-id', categoriaId);

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
