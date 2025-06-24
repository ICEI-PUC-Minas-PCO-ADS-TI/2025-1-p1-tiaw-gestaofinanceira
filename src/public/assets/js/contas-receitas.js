const apiCategoriasReceitas = '/contas'; // URL da API JSONServer

// Referências dos elementos do modal de categoria
const opcoesConta = document.getElementById('opcoesConta');
const modalConta = document.getElementById('modalConta');
const caixaConta = document.getElementById('caixaConta');
const btnAbrirModalConta = document.getElementById('btnAbrirModalConta');
const btnFecharModalConta = document.getElementById('btnFecharModalConta');
const btnSelecionarConta = document.getElementById('btnSelecionarConta');
const inputConta = document.getElementById('inputConta');

// Função para buscar e exibir categorias no modal
function carregarContas() {
    fetch(apiCategoriasReceitas)
        .then(res => res.json())
        .then(contas => {
            opcoesConta.innerHTML = ''; // Limpa antes de preencher
            contas.forEach(conta => {
                let addContas = `
                    <input type="radio" 
                        id="categoria-receita-${conta.id}" 
                        name="conta" 
                        value="${conta.id}"
                        data-nome="${conta.nome}"
                        data-icon="${conta.icon}">
                    <label for="categoria-receita-${conta.id}" class="categoriasReceitas">
                        <div class="cat-icon">
                            <div class="icon-bg" style="background-color: ${conta.cor}">
                                <i data-lucide="wallet" style="color: var(--gray-900, #141414)"></i>
                            </div>
                            <span> ${conta.nome}</span>
                        </div>
                        <i data-lucide="chevron-right" style="color: var(--gray-600);"></i>
                    </label>
                `;
                opcoesConta.innerHTML += addContas;
            });
            lucide.createIcons();
        })
        .catch(err => {
            console.error("Erro ao carregar contas:", err);
        });
}

// Abrir o modal de categoria quando o botão for clicado
btnAbrirModalConta.addEventListener('click', () => {
    modalConta.style.display = 'flex';
    console.log("btn abrir modal");
    carregarContas(); // Carrega as categorias ao abrir o modal
});

// Fechar o modal de categoria quando o botão de fechar for clicado
btnFecharModalConta.addEventListener('click', () => {
    modalConta.style.display = 'none';
});

// Função para selecionar a categoria
btnSelecionarConta.addEventListener('click', () => {
    const contaSelecionadaReceita = document.querySelector('input[name="conta"]:checked');

    if (contaSelecionadaReceita) {
        modalConta.style.display = 'none'; // Fecha o modal após a seleção
        inputConta.style.display = 'flex';
        
        const categoriaId = contaSelecionadaReceita.value; 
        inputConta.value = contaSelecionadaReceita.getAttribute('data-nome');
        inputConta.setAttribute('catReceita-id', categoriaId);

    } else {
        alert("Selecione uma categoria."); // Exibe um alerta se nenhuma categoria for selecionada
    }
});
// Fecha o modal ao clicar fora da caixa
modalConta.addEventListener('click', function (event) {
    if (!caixaConta.contains(event.target)) {
        modalConta.style.display = 'none';
    }
});
