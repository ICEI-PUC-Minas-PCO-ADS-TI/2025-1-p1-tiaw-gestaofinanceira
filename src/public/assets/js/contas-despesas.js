// Referências dos elementos do modal de categoria
const opcoesContaDespesa = document.getElementById('opcoesContaDespesa');
const modalContaDespesa = document.getElementById('modalContaDespesa');
const caixaContaDespesa = document.getElementById('caixaContaDespesa');
const btnAbrirModalContaDespesa = document.getElementById('btnAbrirModalContaDespesa');
const btnFecharModalContaDespesa = document.getElementById('btnFecharModalContaDespesa');
const btnSelecionarContaDespesa = document.getElementById('btnSelecionarContaDespesa');
const inputContaDespesa = document.getElementById('inputContaDespesa');

// Função para buscar e exibir categorias no modal
function carregarContasDespesa() {
    fetch(apiCategoriasReceitas)
        .then(res => res.json())
        .then(contas => {
            opcoesContaDespesa.innerHTML = ''; // Limpa antes de preencher
            contas.forEach(conta => {
                let addContas = `
                    <input type="radio" 
                        id="conta-despesa-${conta.id}" 
                        name="conta" 
                        value="${conta.id}"
                        data-nome="${conta.nome}"
                        data-icon="${conta.icon}">
                    <label for="conta-despesa-${conta.id}" class="categoriasReceitas">
                        <div class="cat-icon">
                            <div class="icon-bg" style="background-color: ${conta.cor}">
                                <i data-lucide="wallet" style="color: var(--gray-900, #141414)"></i>
                            </div>
                            <span> ${conta.nome}</span>
                        </div>
                        <i data-lucide="chevron-right" style="color: var(--gray-600);"></i>
                    </label>
                `;
                opcoesContaDespesa.innerHTML += addContas;
            });
            lucide.createIcons();
        })
        .catch(err => {
            console.error("Erro ao carregar contas:", err);
        });
}

// Abrir o modal de categoria quando o botão for clicado
btnAbrirModalContaDespesa.addEventListener('click', () => {
    modalContaDespesa.style.display = 'flex';
    console.log("btn abrir modal Despesa");
    carregarContasDespesa(); // Carrega as categorias ao abrir o modal
});

// Fechar o modal de categoria quando o botão de fechar for clicado
btnFecharModalContaDespesa.addEventListener('click', () => {
    modalContaDespesa.style.display = 'none';
});

// Função para selecionar a categoria
btnSelecionarContaDespesa.addEventListener('click', () => {
    const categoriaSelecionadaReceita = document.querySelector('input[name="conta"]:checked');

    if (categoriaSelecionadaReceita) {
        // Preenche o campo de categoria com a categoria escolhida
        //inputContaDespesa.value = categoriaSelecionadaReceita;
        modalContaDespesa.style.display = 'none'; // Fecha o modal após a seleção
        inputContaDespesa.style.display = 'flex';
        
        const categoriaId = categoriaSelecionadaReceita.value; 
        inputContaDespesa.value = categoriaSelecionadaReceita.getAttribute('data-nome');
        inputContaDespesa.setAttribute('catReceita-id', categoriaId);

    } else {
        alert("Selecione uma categoria."); // Exibe um alerta se nenhuma categoria for selecionada
    }
});
// Fecha o modal ao clicar fora da caixa
modalContaDespesa.addEventListener('click', function (event) {
    if (!caixaContaDespesa.contains(event.target)) {
        modalContaDespesa.style.display = 'none';
    }
});
