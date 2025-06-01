async function carregarDados() {
    try {
        const response = await fetch('banco.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar dados');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        return {
            receitas: [],
            despesas: []
        };
    }
}

function calcularSaldo(dados) {
    const totalReceitas = dados.receitas.reduce((total, receita) => total + receita.valor, 0);
    const totalDespesas = dados.despesas.reduce((total, despesa) => total + despesa.valor, 0);
    return totalReceitas - totalDespesas;
}

function calcularTotalMes(dados, tipo) {
    const hoje = new Date();
    const mesAtual = hoje.getMonth(); // Pega o mês atual (0-11)
    const anoAtual = hoje.getFullYear();

    return dados[tipo].reduce((total, item) => {
        // Converte a string de data para objeto Date
        const [ano, mes, dia] = item.data.split('-').map(Number);
        const dataItem = new Date(ano, mes - 1, dia); // Ajusta mês para formato JS (0-11)

        // Compara mês e ano
        if (dataItem.getMonth() === mesAtual && dataItem.getFullYear() === anoAtual) {
            return total + item.valor;
        }
        return total;
    }, 0);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

async function atualizarDashboard() {
    const dados = await carregarDados();

    // Atualizar saldo
    const saldo = calcularSaldo(dados);
    document.getElementById('saldo-atual').textContent = formatarMoeda(saldo);

    // Atualizar receitas do mês
    const receitasMes = calcularTotalMes(dados, 'receitas');
    document.getElementById('receitas-mes').textContent = formatarMoeda(receitasMes);

    // Atualizar despesas do mês (mostrar como valor negativo)
    const despesasMes = calcularTotalMes(dados, 'despesas');
    document.getElementById('despesas-mes').textContent = formatarMoeda(-despesasMes);
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

// Inicializa o dashboard quando a página carregar
document.addEventListener('DOMContentLoaded', atualizarDashboard);




