let dataAtual = new Date();
addEventListener('DOMContentLoaded', () => {
    carregarDados(dataAtual.getMonth(), dataAtual.getFullYear());
});
function atualizarSaldo(){
    carregarDados(dataAtual.getMonth(), dataAtual.getFullYear());
}
function carregarDados(mes, ano) {
    Promise.all([
        fetch('/receitas').then(res => res.json()),
        fetch('/despesas').then(res => res.json())
    ]).then(([receitas, despesas]) => {
        const receitasDoMes = receitas.filter(r => {
            const data = new Date(r.data);
            return data.getMonth() === mes && data.getFullYear() === ano;
        });

        const despesasDoMes = despesas.filter(d => {
            const data = new Date(d.data);
            return data.getMonth() === mes && data.getFullYear() === ano;
        });

        atualizarDashboard(receitasDoMes, despesasDoMes, receitas, despesas);
    });
}

function calcularSaldo(receitas, despesas) {
    const totalReceitas = receitas.reduce((somaReceita, receita) => {
        return somaReceita + parseFloat(receita.valor);
    }, 0);
    const totalDespesas = despesas.reduce((somaDespesa, despesa) => {
        return somaDespesa + parseFloat(despesa.valor);
    }, 0);
    let saldo = (totalReceitas - totalDespesas);
    return saldo;
}


function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function atualizarDashboard(receitasDoMes, despesasDoMes, receitas, despesas) {
    // Atualizar saldo
    const saldo = calcularSaldo(receitas, despesas);
    document.getElementById('saldo-atual').textContent = formatarMoeda(saldo);
    const totalReceitas = receitasDoMes.reduce((somaReceita, receita) => {
        return somaReceita + parseFloat(receita.valor);
    }, 0);
    const totalDespesas = despesasDoMes.reduce((somaDespesa, despesa) => {
        return somaDespesa + parseFloat(despesa.valor);
    }, 0);

    // Atualizar receitas do mês
    document.getElementById('receitas-mes').innerHTML = `
    <h5 style="color:red; margin-top:0;">${formatarMoeda(totalReceitas)}</h5>
    `;

    // Atualizar despesas do mês (mostrar como valor negativo)
    document.getElementById('despesas-mes').textContent = formatarMoeda(-totalDespesas);
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const eyeIcon = document.getElementById('eyeIcon');
    const values = document.querySelectorAll('.valor');
    
    let valuesVisible = true;
    
    toggleButton.addEventListener('click', function() {
        valuesVisible = !valuesVisible;
        
        // Atualiza o ícone
        if (valuesVisible) {
            eyeIcon.innerHTML = `
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        } else {
            eyeIcon.innerHTML = `
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                <line x1="2" x2="22" y1="2" y2="22"/>
            `;
        }
        
        // Alterna a visibilidade dos valores
        values.forEach(value => {
            value.classList.toggle('hidden-value', !valuesVisible);
        });
    });
});

