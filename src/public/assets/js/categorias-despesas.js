const apiCategoriasDespesas = '/categoriasDespesas'; // URL da API JSONServer

// Referências dos elementos do modal de categoria
const opcoesCategoriaDespesa = document.getElementById('opcoesCategoriaDespesa');
const modalCategoriaDespesa = document.getElementById('modalCategoriaDespesa');
const caixaCategoriaDespesa = document.getElementById('caixaCategoriaDespesa');
const btnAbrirModalCategoriaDespesa = document.getElementById('btnAbrirModalCategoriaDespesa');
const btnFecharModalCategoriaDespesa = document.getElementById('btnFecharModalCategoriaDespesa');
const btnSelecionarCategoriaDespesa = document.getElementById('btnSelecionarCategoriaDespesa');
const inputCategoriaDespesa = document.getElementById('inputCategoriaDespesa');
const btnAdicionarCategoriaDespesa = document.getElementById('btnAdicionarCategoriaDespesa');

// Função para buscar e exibir categorias no modal
function carregarCategorias() {
    fetch(apiCategoriasDespesas)
        .then(res => res.json())
        .then(categoriasDespesa => {
            opcoesCategoriaDespesa.innerHTML = ''; // Limpa antes de preencher
            categoriasDespesa.forEach(catDespesa => {
                let carregarCategoriaDespesa = `
                    <input type="radio" 
                        id="categoria-despesa-${catDespesa.id}" 
                        name="categoriaDespesa" 
                        value="${catDespesa.id}" 
                        data-nome="${catDespesa.nome}" 
                        data-icon="${catDespesa.icon}">
                    <label for="categoria-despesa-${catDespesa.id}" class="categoriasReceitas">
                        <div class="cat-icon">
                            <div class="icon-bg">
                                <i data-lucide="${catDespesa.icon}" style="color: var(--gray-50);"></i>
                            </div>
                            <span> ${catDespesa.nome}</span>
                        </div>
                        <i data-lucide="chevron-right" style="color: var(--gray-600);"></i>
                    </label>
                `;
                opcoesCategoriaDespesa.innerHTML += carregarCategoriaDespesa;
            });
            lucide.createIcons();
        })
        .catch(err => {
            console.error("Erro ao carregar categorias:", err);
        });
}

// Abrir o modal de categoria quando o botão for clicado
btnAbrirModalCategoriaDespesa.addEventListener('click', () => {
    modalCategoriaDespesa.style.display = 'flex';
    carregarCategorias(); // Carrega as categorias ao abrir o modal
});

// Fechar o modal de categoria quando o botão de fechar for clicado
btnFecharModalCategoriaDespesa.addEventListener('click', () => {
    modalCategoriaDespesa.style.display = 'none';
    formDespesa.reset(); // Reseta o formulário ao fechar o modal
});

// Função para selecionar a categoria
btnSelecionarCategoriaDespesa.addEventListener('click', () => {
    const categoriaSelecionadaDespesa = document.querySelector('input[name="categoriaDespesa"]:checked');

    if (categoriaSelecionadaDespesa) {
        // Preenche o campo de categoria com a categoria escolhida
        inputCategoriaDespesa.value = categoriaSelecionadaDespesa;

        const categoriaId = categoriaSelecionadaDespesa.value; 
        inputCategoriaDespesa.value = categoriaSelecionadaDespesa.getAttribute('data-nome');
        inputCategoriaDespesa.setAttribute('catDespesa-id', categoriaId);

        modalCategoriaDespesa.style.display = 'none'; // Fecha o modal após a seleção
        inputCategoriaDespesa.style.display = 'flex';
    } else {
        alert("Selecione uma categoria."); // Exibe um alerta se nenhuma categoria for selecionada
    }
});
// Fecha o modal ao clicar fora da caixa
modalCategoriaDespesa.addEventListener('click', function (event) {
    if (!caixaCategoriaDespesa.contains(event.target)) {
        modalCategoriaDespesa.style.display = 'none';
    }
});

//Alerta que a função de adicionar categoria não está implementada
btnAdicionarCategoriaDespesa.addEventListener('click', () => {
    alert("Função de adicionar categoria não implementada.");
});