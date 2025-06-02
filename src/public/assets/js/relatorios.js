let dataAtual = new Date();
console.log(dataAtual);
const dataReal = new Date();


function alterarMes(diferenca) {
    dataAtual.setMonth(dataAtual.getMonth() + diferenca);
    //atualizarInterface();
    carregarDadosDoMes(dataAtual.getMonth(), dataAtual.getFullYear());
    renderizaMeses();
}

// formata a data para exibir o mês e o ano
function formatarData(data) {
    return data.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}

function formatarMesAno(data) {
    const nomeMes = data.toLocaleDateString('pt-BR', { month: 'long' });
    const mesFormatado = nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1);
    const ano = data.getFullYear();
    return `${mesFormatado}, ${ano}`;
}

function formatarMes(mes) {
    mesv1 = mes.toLocaleDateString('pt-BR', { month: 'long' });
    return mesv1.charAt(0).toUpperCase() + mesv1.slice(1);
}


// Função que filtra as despesas e receitas do mês selecionado
function carregarDadosDoMes(mes, ano) {
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

        carregarGraficoBalanco(receitasDoMes, despesasDoMes);
        carregarGraficoReceitas(receitasDoMes);
        carregarGraficoDespesas(despesasDoMes);
    });
}

let grafico;
// Função que cria o gráfico de balanço do mês
function carregarGraficoBalanco(receitas, despesas) {

    const totalReceitas = receitas.reduce((somaReceita, receita) => {
        return somaReceita + parseFloat(receita.valor);
    }, 0);
    const totalDespesas = despesas.reduce((somaDespesa, despesa) => {
        return somaDespesa + parseFloat(despesa.valor);
    }, 0);


    const balanco = document.getElementById('grafico-balanco').getContext('2d');

    if (grafico) {
        grafico.destroy();
    }
    const dadosVazios = totalReceitas === 0 && totalDespesas === 0;

    grafico = new Chart(balanco, {
        type: 'doughnut',
        data: {
            labels: ['Receitas', 'Despesas'],
            datasets: [{
                label: 'Balanço do Mês',
                data: dadosVazios ? [1, 1] : [totalReceitas, totalDespesas],
                backgroundColor: dadosVazios ? ['#ccc', '#ccc'] : ['#00C500', '#F00'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        },
        plugins: [{
            id: 'mensagemSemDados',
            afterDraw: (chart) => {
                if (dadosVazios) {
                    const { ctx, width, height } = chart;
                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '--var(--gray900)';
                    ctx.font = '16px sans-serif';
                    ctx.fillText('Sem transações neste mês', width / 2, height / 2);
                    ctx.restore();
                }
            }
        }]
    });

    const tituloGrafico = document.getElementById('titulo-grafico');
    tituloGrafico.innerHTML = `<h4>${formatarMesAno(dataAtual)}</h4>`;

    const dadosGraficoBalanco = document.getElementById('dados-grafico-balanco');
    dadosGraficoBalanco.innerHTML = `
        <div class="dados-balanco"> 
            <p>Receitas do mês:</p>
            <span>R$ ${totalReceitas.toFixed(2)}</span>
        </div>
        <div class="dados-balanco"> 
            <p>Despesas do mês:</p>
            <span> R$ ${totalDespesas.toFixed(2)}</span>
        </div>
        <div class="dados-balanco"> 
            <p>Balanço do mês:</p>
            <span>R$ ${(totalReceitas - totalDespesas).toFixed(2)}</span>
        </div>`
    console.log(totalReceitas + " - " + totalDespesas);
}

let graficoReceitas;
// Função que cria o gráfico de receitas do mês por categoria
function carregarGraficoReceitas(receitas) {
    const receitasPorCategoria = receitas.reduce((acc, receita) => {
        const categoria = receita.categoria || 'Outros';
        const valor = parseFloat(receita.valor) || 0;
        acc[categoria] = (acc[categoria] || 0) + valor;
        return acc;
    }, {});

    const categorias = Object.keys(receitasPorCategoria);
    const valores = Object.values(receitasPorCategoria);

    const ctx = document.getElementById('grafico-receitas').getContext('2d');

    if (graficoReceitas) {
        graficoReceitas.destroy();
    }
    const dadosVazios = valores.length === 0;

    graficoReceitas = new Chart(ctx, {
        type: 'pie', // ou 'bar'
        data: {
            labels: categorias,
            datasets: [{
                label: 'Receitas por Categoria',
                data:  dadosVazios ? [1, 1] : valores,
                backgroundColor: dadosVazios ? ['#ccc', '#ccc'] : ['#00C500', '#F00']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        },
        plugins: [{
            id: 'mensagemSemDados',
            afterDraw: (chart) => {
                if (dadosVazios) {
                    const { ctx, width, height } = chart;
                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '--var(--gray900)';
                    ctx.font = '16px sans-serif';
                    ctx.fillText('Sem receitas neste mês', width / 2, height / 2);
                    ctx.restore();
                }
            }
        }]
    });

    const dadosGraficoReceitas = document.getElementById('dados-grafico-receitas');
    dadosGraficoReceitas.innerHTML = categorias.map((categoria, i) => `
        <div class="dados-balanco"> 
            <p>${categoria}:</p>
            <span>R$ ${valores[i].toFixed(2)}</span>
        </div>
        `).join('');
}

let graficoDespesas;
// Função que cria o gráfico de despesas do mês por categoria
function carregarGraficoDespesas(despesas) {
    const despesasPorCategoria = despesas.reduce((acc, despesa) => {
        const categoria = despesa.categoria || 'Outros';
        const valor = parseFloat(despesa.valor) || 0;
        acc[categoria] = (acc[categoria] || 0) + valor;
        return acc;
    }, {});

    const categorias = Object.keys(despesasPorCategoria);
    const valores = Object.values(despesasPorCategoria);

    const ctx = document.getElementById('grafico-despesas').getContext('2d');

    if (graficoDespesas) {
        graficoDespesas.destroy();
    }
    const dadosVazios = valores.length === 0 || valores.every(v => v === 0);

    graficoDespesas = new Chart(ctx, {
        type: 'pie', // ou 'bar'
        data: {
            labels: categorias,
            datasets: [{
                label: 'Despesas por Categoria',
                data:  dadosVazios ? [1, 1] : valores,
                backgroundColor: dadosVazios ? ['#ccc', '#ccc'] : ['#00C500', '#F00']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        },
        plugins: [{
            id: 'mensagemSemDados',
            afterDraw: (chart) => {
                if (dadosVazios) {
                    const { ctx, width, height } = chart;
                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '--var(--gray900)';
                    ctx.font = '16px sans-serif';
                    ctx.fillText('Sem despesas neste mês', width / 2, height / 2);
                    ctx.restore();
                }
            }
        }]
    });

    const dadosGraficoDespesas = document.getElementById('dados-grafico-despesas');
    dadosGraficoDespesas.innerHTML = categorias.map((categoria, i) => `
        <div class="dados-balanco"> 
            <p>${categoria}:</p>
            <span>R$ ${valores[i].toFixed(2)}</span>
        </div>
        `).join('');
}



addEventListener('DOMContentLoaded', () => {
    carregarDadosDoMes(dataAtual.getMonth(), dataAtual.getFullYear());
    carregarGraficoBalanco();
    alterarMes(0);
});


function renderizaMeses() {
    const baseData = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
    
    const mesAnterior = new Date(baseData);
    mesAnterior.setMonth(baseData.getMonth() - 1);
    const mesAtual = new Date(baseData);
    const mesSeguinte = new Date(baseData);
    mesSeguinte.setMonth(baseData.getMonth() + 1);
    
    mesAnteriorFormatado = formatarMes(mesAnterior);
    mesAtualFormatado = formatarMes(mesAtual);
    mesSeguinteFormatado = formatarMes(mesSeguinte);
    
    const mesesContainer = document.getElementById('meses');
    mesesContainer.innerHTML = `
    <span onclick="alterarMes(-1)">${mesAnteriorFormatado}</span>
    <span style="font-weight: bold; text-decoration: underline;">
    ${mesAtualFormatado}
    </span>
    <span onclick="alterarMes(1)">${mesSeguinteFormatado}</span>
    `;


    const diferencaMeses = Math.abs(
        (dataAtual.getFullYear() - dataReal.getFullYear()) * 12 +
        (dataAtual.getMonth() - dataReal.getMonth())
    );
    if (diferencaMeses >= 2) {
        btnHoje.style.display = 'inline-block'; // mostra o botão
    } else {
        btnHoje.style.display = 'none'; // esconde o botão
    }
}

const btnAnterior = document.getElementById('btn-anterior');
btnAnterior.addEventListener('click', () => {
    alterarMes(-1);
});

const btnProximo = document.getElementById('btn-proximo');
btnProximo.addEventListener('click', () => {
    alterarMes(1);
});

const btnHoje = document.getElementById('btn-hoje');
btnHoje.addEventListener('click', () => {
    const diferencaMeses =
        (dataReal.getFullYear() - dataAtual.getFullYear()) * 12 +
        (dataReal.getMonth() - dataAtual.getMonth());
    alterarMes(diferencaMeses);
});

// Inicialização
renderizaMeses();
