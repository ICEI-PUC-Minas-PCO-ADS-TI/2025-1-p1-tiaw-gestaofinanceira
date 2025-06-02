const apiReceitas = '/receitas'; // URL da API JSONServer

// Script para abrir e fechar o modal
const caixaReceita = document.getElementById('caixaReceita');
const modalReceita = document.getElementById('modalReceita');
function abrirModalReceita() {
    modalReceita.style.display = 'flex';
}
function fecharModalReceita() {
    modalReceita.style.display = 'none';
}
// Botão para abrir o modal
document.getElementById('btnAbrirModalReceita').addEventListener('click', abrirModalReceita);
// Botão para fechar o modal e descartar alterações
const btnDescartarReceita = document.getElementById('btnDescartarReceita')
btnDescartarReceita.addEventListener('click', function () {
    formReceita.reset();
    // Força o valor atual da data no campo
    document.getElementById('dataReceita').value = new Date().toISOString().split('T')[0];
    inputCategoriaReceita.style.display = 'none';
 });

// Fecha o modal ao clicar fora da caixa e mantém as alterações
modalReceita.addEventListener('click', function (event) {
    if (!caixaReceita.contains(event.target)) {
        fecharModalReceita();
    }
});


// Função para adicionar receita no banco de dados	
function addReceita(receitas) {
    fetch(apiReceitas, {
        // Faz uma requisição para o servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(receitas),
    })
        // Envia a requisição para o servidor
        .then(response => response.json())
        // Se a requisição for bem sucedida, exibe uma mensagem de sucesso
        .then(data => {
            alert("Receita adicionada: " + receitas.titulo); // Exibe uma mensagem de sucesso
            fecharModalReceita(); // Fecha o modal após adicionar a receita
            exibeReceitas(); // Atualiza a lista de receitas
        })
        // Se houver erro, exibe uma mensagem de erro
        .catch(error => {
            alert("Erro ao adicionar receita:");
        });
}

// Função para adicionar evento de clique no botão "Adicionar Receita" e processar os dados do formulário
const btnAddReceita = document.getElementById("btnAddReceita");
const formReceita = document.getElementById('formReceita');
btnAddReceita.addEventListener('click', function () {

    // Verifica se o formulário está preenchido corretamente
    if (!formReceita.checkValidity()) {
        alert("Preencha o formulário corretamente.");
        return;
    }

    // Obtem os valores dos campos do formulário
    let campoTituloReceita = document.getElementById('inputTituloReceita').value;
    let campoValorReceita = document.getElementById('inputValorReceita').value;
    let campoDataReceita = document.getElementById('dataReceita').value;
    let campoCategoriaReceita = document.getElementById('inputCategoriaReceita').value;
    let campoFrequencia = document.querySelector('input[name="frequenciaReceita"]:checked')?.value;
    let campoParcelas = document.getElementById('parcelasReceita').value;
    let campoRecorrencia = document.querySelector('input[name="tipoRecorrenciaReceita"]:checked')?.value;
    let campoObservacaoReceita = document.getElementById('inputObservacaoReceita').value;

    // Função que busca o número de receitas para não gerar um ID aleatório
    fetch(apiReceitas)
    .then(res => res.json())
    .then(numReceitas => {
        // Cria um objeto com os dados do formulário
        let receitas = {
            titulo: campoTituloReceita,
            valor: campoValorReceita,
            data: campoDataReceita,
            categoria: campoCategoriaReceita,
            frequencia: campoFrequencia,
            parcelas: campoParcelas,
            recorrencia: campoRecorrencia,
            observacao: campoObservacaoReceita,
        };
        // Adiciona o objeto receitas no banco de dados
        addReceita(receitas);
    });
    


    // Limpa o formulário
    formReceita.reset();
    campoDataReceita.value = dataAtualReceita; // Mantém o campo de data com a data atual

});

// Habilita ou desabilita o campo de recorrência, habilita com as opções recorrente e parcelada
document.querySelectorAll('input[name="frequenciaReceita"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        const opcoes = document.getElementById('opcoesRecorrenciaReceita');
        if (this.value === 'recorrente' || this.value === 'parcelada') {
            opcoes.style.display = 'block';
        } else {
            opcoes.style.display = 'none';
        }
    });
});

// Habilita o campo de parcelas se a opção "parcelada" for selecionada
document.querySelectorAll('input[name="frequenciaReceita"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        const opcoes = document.getElementById('opcaoParcelasReceita');
        if (this.value === 'parcelada') {
            opcoes.style.display = 'block';
        } else {
            opcoes.style.display = 'none';
        }
    });
});

//Preenche o campo de data com a data atual
addEventListener('DOMContentLoaded', function (){
    const campoDataReceita = document.getElementById('dataReceita');
    const dataAtualReceita = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
    campoDataReceita.value = dataAtualReceita;
})




//Modal nova transação
// Script para abrir e fechar o modal
const caixaNovaTransacao = document.getElementById('container');
const modalNovaTransacao = document.getElementById('modalNovaTransacao');
function abrirModalTransacao() {
    modalNovaTransacao.style.display = 'flex';
}
function fecharModalTransacao() {
    modalNovaTransacao.style.display = 'none';
}
// Botão para abrir o modal
document.getElementById('btnAbrirModalNovaTransacao').addEventListener('click', abrirModalTransacao);
// Fecha o modal ao clicar fora da caixa e mantém as alterações
modalNovaTransacao.addEventListener('click', function (event) {
    if (!caixaNovaTransacao.contains(event.target)) {
        fecharModalTransacao();
    }
});