function exibeDespesas() {
    const divDespesas = document.getElementById("transacoes-despesas");
    const divSomaDespesas = document.getElementById("soma-despesas");
    let somaDespesas = 0;
    // Remove todas as linhas do corpo da tabela
    divDespesas.innerHTML = "";

    Promise.all([
        fetch('/despesas').then(res => res.json()),
        fetch('/categoriasDespesas').then(res => res.json())
    ])
    .then(([despesas, categoriasDespesa]) => {
        const mapaCategoriasDespesa = {};
        categoriasDespesa.forEach(catDespesa => {
            mapaCategoriasDespesa[catDespesa.nome] = catDespesa;
        });
        if (despesas.length === 0) {
            divDespesas.innerHTML = `<p>Nenhuma despesa encontrada.</p>`;
            return;
        }
        for (let i = despesas.length - 1; i >= 0 && i >= despesas.length - 4; i--) {
            let despesa = despesas[i];
            let categoria = mapaCategoriasDespesa[despesa.categoria];
            divDespesas.innerHTML += `
            <div class="transacao" data-despesa-id="${despesa.id}">
                <div class="transacao-info">
                    <div class="icon-bg">
                        <i data-lucide="${categoria.icon}" class="icons icon-recentes"></i>
                    </div>
                    <div class="categoria">
                        <h4>${despesa.titulo}</h4>
                        <p>${new Date(despesa.data).toLocaleDateString('pt-BR')}</p>    
                    </div>
                </div>
                <p style="color:var(--red-500);">R$ ${despesa.valor}</p>
            </div> 
            `;
            somaDespesas += parseFloat(despesa.valor);
        }
        lucide.createIcons();
        divSomaDespesas.innerHTML = ``
        divSomaDespesas.innerHTML = `
            <h4>Total Despesas</h4>
            <p>R$ ${somaDespesas.toFixed(2)}</p>`;

        divDespesas.querySelectorAll('.transacao').forEach(div => {
        div.addEventListener('click', async () => {
            console.log("Despesa clicada:", div.dataset.despesaId);
            const id = div.dataset.despesaId;    
            const res = await fetch(`/despesas/${id}`);
            const despesa = await res.json();
            abrirModalEdicaoDespesa(despesa);
        });
    })
});
};
addEventListener('DOMContentLoaded',exibeDespesas);


const inputDespesa = document.getElementById('inputCategoriaDespesa');
const btnAlterarDespesa = document.getElementById('btnAlterarDespesa');
const btnSalvarDespesa = document.getElementById('btnAddDespesa');
const btnExcluirDespesa = document.getElementById('btnExcluirDespesa');
const btnLimparDespesa = document.getElementById('btnDescartarDespesa');

function abrirModalEdicaoDespesa(despesa) {
    console.log("abrirModalEdicao ativado.");
    console.log('Categoria recebida:', despesa.categoria);

    modalDespesa.style.display = 'flex';
    caixa.style.display = 'flex';
    inputDespesa.style.display = 'flex';
    btnAlterarDespesa.style.display = 'flex';
    btnExcluirDespesa.style.display = 'flex';
    btnSalvarDespesa.style.display = 'none';
    btnLimparDespesa.style.display = 'none';    
    btnAlterarDespesa.onclick = () => atualizarDespesa(despesa.id);
    btnExcluirDespesa.onclick = () => excluirDespesa(despesa.id);
    // Preenche os campos
    document.getElementById('inputTituloDespesa').value = despesa.titulo;
    document.getElementById('inputValorDespesa').value = despesa.valor;
    document.getElementById('dataDespesa').value = despesa.data;
    document.getElementById('inputCategoriaDespesa').value = despesa.categoria;
}

function atualizarDespesa(id) {
    const despesaAtualizada = {
        titulo: document.getElementById('inputTituloDespesa').value,
        valor: parseFloat(document.getElementById('inputValorDespesa').value),
        data: document.getElementById('dataDespesa').value,
        categoria: document.getElementById('inputCategoriaDespesa').value
    };
    alert("Despesa atualizada com sucesso!");
    fetch(`/despesas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(despesaAtualizada)
    }).then(() => {
        fecharModal();
        exibeDespesas();
    });
}

function excluirDespesa(id) {
    alert("Despesa excluída com sucesso!");
    fetch(`/despesas/${id}`, {
        method: 'DELETE'
    }).then(() => {
        fecharModal();
        exibeDespesas();
    });
}

function fecharModal() {
    atualizarSaldo();
    modalDespesa.style.display = 'none';
    caixa.style.display = 'none';
}
