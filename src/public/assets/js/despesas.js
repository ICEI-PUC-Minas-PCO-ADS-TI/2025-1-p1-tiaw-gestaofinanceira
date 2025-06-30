const apiDespesas = '/despesas'; // URL da API JSONServer

// Script para abrir e fechar o modal
const caixaDespesa = document.getElementById('caixaDespesa');
const modalDespesa = document.getElementById('modalDespesa');
function abrirModalDespesa() {
    modalDespesa.style.display = 'flex';
    //Preenche o campo de data com a data atual
    const campoDataDespesa = document.getElementById('dataDespesa');
    const dataAtualDespesa = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
    campoDataDespesa.value = dataAtualDespesa;
}
function fecharModalDespesa() {
    modalDespesa.style.display = 'none';
    formDespesa.reset();
}
// Botão para abrir o modal
document.getElementById('btnAbrirModalDespesa').addEventListener('click', abrirModalDespesa);
// Botão para fechar o modal e descartar alterações
const btnDescartarDespesa = document.getElementById('btnDescartarDespesa')
btnDescartarDespesa.addEventListener('click', function () {
    modalDespesa.style.display = 'none';
    formDespesa.reset();
 });

// Fecha o modal ao clicar fora da caixa
modalDespesa.addEventListener('click', function (event) {
    if (!caixaDespesa.contains(event.target)) {
        fecharModalDespesa();
    }
});

// Função para adicionar despesa no banco de dados	
function addDespesa(Despesas) {
    fetch(apiDespesas, {
        // Faz uma requisição para o servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Despesas),
    })
        // Envia a requisição para o servidor
        .then(response => response.json())
        // Se a requisição for bem sucedida, exibe uma mensagem de sucesso
        .then(data => {
            alert("Despesa adicionada: " + Despesas.titulo); // Exibe uma mensagem de sucesso
            fecharModalDespesa(); // Fecha o modal após adicionar a Despesa
            window.location.reload();
        })
        // Se houver erro, exibe uma mensagem de erro
        .catch(error => {
            alert("Erro ao adicionar Despesa:");
        });
}

// Função para adicionar evento de clique no botão "Adicionar Despesa" e processar os dados do formulário
const btnAddDespesa = document.getElementById("btnAddDespesa");
const formDespesa = document.getElementById('formDespesa');
btnAddDespesa.addEventListener('click', function () {

    // Verifica se o formulário está preenchido corretamente
    if (!formDespesa.checkValidity()) {
        alert("Preencha o formulário corretamente.");
        return;
    }

    // Obtem os valores dos campos do formulário
    let campoTituloDespesa = document.getElementById('inputTituloDespesa').value;
    let campoDescricao = document.getElementById('inputDescricaoDespesa').value;
    let campoValorDespesa = document.getElementById('inputValorDespesa').value;
    let campoDataDespesa = document.getElementById('dataDespesa').value;
    let campoCategoriaDespesa = document.getElementById('inputCategoriaDespesa').value;
    let campoContaDespesa = document.getElementById('inputContaDespesa').value;

    // Cria um objeto com os dados do formulário
    let despesas = {
        titulo: campoTituloDespesa,
        descricao: campoDescricao,
        valor: campoValorDespesa,
        data: campoDataDespesa,
        categoria: campoCategoriaDespesa,
        conta: campoContaDespesa,
        user: usuarioCorrente.id
    };

    // Adiciona o objeto Despesas no banco de dados
    addDespesa(despesas);

    // Limpa o formulário
    formDespesa.reset();
});