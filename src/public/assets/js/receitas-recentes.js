function exibeReceitas() {
    const divReceitas = document.getElementById("transacoes-receitas");
    const divSomaReceitas = document.getElementById("soma-receitas");
    let somaReceitas = 0;
    // Remove todas as linhas do corpo da tabela
    divReceitas.innerHTML = "";

    Promise.all([
        fetch('/receitas').then(res => res.json()),
        fetch('/categoriasReceitas').then(res => res.json())
    ])
    .then(([receitasGerais, categoriasReceita]) => {
        const usuario = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
        const receitas = receitasGerais.filter(rec => rec.user === usuario.id);
        
        const mapaCategoriasReceita = {};
        categoriasReceita.forEach(catReceita => {
            mapaCategoriasReceita[catReceita.nome] = catReceita;
        });
        if (receitas.length === 0) {
            divReceitas.innerHTML = `<p>Nenhuma receita encontrada.</p>`;
            return;
        }
        for (let i = receitas.length - 1; i >= 0 && i >= receitas.length - 4; i--) {
            let receita = receitas[i];
            let categoria = mapaCategoriasReceita[receita.categoria];
            divReceitas.innerHTML += `
            <div class="transacao" data-receita-id="${receita.id}">
                <div class="transacao-info">
                    <div class="icon-bg bg-recentes-receita">
                        <i data-lucide="${categoria.icon}" class="icons icon-recentes icon-recentes-receita"></i>
                    </div>
                    <div class="categoria">
                        <h4>${receita.titulo}</h4>
                        <p>${new Date(receita.data).toLocaleDateString('pt-BR')}</p>  
                    </div>
                </div>
                <p style="color:var(--Verde);">R$ ${receita.valor}</p>
            </div> 
            `;
            somaReceitas += parseFloat(receita.valor);
        }
        lucide.createIcons();
        divSomaReceitas.innerHTML = ``
        divSomaReceitas.innerHTML = `
            <h4>Total Receitas</h4>
            <p>R$ ${somaReceitas.toFixed(2)}</p>`;

        divReceitas.querySelectorAll('.transacao').forEach(div => {
        div.addEventListener('click', async () => {
            console.log("Receita clicada:", div.dataset.receitaId);
            const id = div.dataset.receitaId;    
            const res = await fetch(`/receitas/${id}`);
            const receita = await res.json();
            abrirModalEdicao(receita);
        });
    })
});

}
addEventListener('DOMContentLoaded',exibeReceitas);

const modal = document.getElementById('modalReceita');
const caixa = document.getElementById('modalNovaTransacao');
const input = document.getElementById('inputCategoriaReceita');
const editarReceita = document.getElementById('editarReceita');
const tituloAddReceita = document.getElementById('tituloAddReceita');
const btnAlterar = document.getElementById('btnAlterarReceita');
const btnSalvar = document.getElementById('btnAddReceita');
const btnExcluir = document.getElementById('btnExcluirReceita');
const btnLimpar = document.getElementById('btnDescartarReceita');

function abrirModalEdicao(receita) {
    console.log("abrirModalEdicaoReceita ativado.");
    console.log('Categoria recebida:', receita.categoria);

    modal.style.display = 'flex';
    caixa.style.display = 'flex';
    input.style.display = 'flex';
    editarReceita.style.display= 'flex';
    tituloAddReceita.style.display = 'none';
    inputConta.style.display = 'flex';
    btnAlterar.style.display = 'flex';
    btnExcluir.style.display = 'flex';
    btnSalvar.style.display = 'none';
    btnLimpar.style.display = 'none';    
    btnAlterar.onclick = () => atualizarReceita(receita.id);
    btnExcluir.onclick = () => excluirReceita(receita.id);
    // Preenche os campos
    document.getElementById('inputTituloReceita').value = receita.titulo;
    document.getElementById('inputDescricaoReceita').value = receita.descricao;
    document.getElementById('inputValorReceita').value = receita.valor;
    document.getElementById('dataReceita').value = receita.data;
    document.getElementById('inputConta').value = receita.conta;
    document.getElementById('inputCategoriaReceita').value = receita.categoria;
}

function atualizarReceita(id) {
    const receitaAtualizada = {
        titulo: document.getElementById('inputTituloReceita').value,
        descricao: document.getElementById('inputDescricaoReceita').value,
        valor: document.getElementById('inputValorReceita').value,
        data: document.getElementById('dataReceita').value,
        conta: document.getElementById('inputConta').value,
        categoria: document.getElementById('inputCategoriaReceita').value,
        user: usuarioCorrente.id
    };
    alert("Receita atualizada com sucesso!");
    fetch(`/receitas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(receitaAtualizada)
    }).then(() => {
        window.location.reload();
        fecharModal();
        exibeReceitas();
    });
}

function excluirReceita(id) {
    alert("Receita excluída com sucesso!");
    fetch(`/receitas/${id}`, {
        method: 'DELETE'
    }).then(() => {
        window.location.reload();
        fecharModal();
        exibeReceitas();
    });
}

function fecharModal() {
    atualizarSaldo();
    modal.style.display = 'none';
    caixa.style.display = 'none';
}
