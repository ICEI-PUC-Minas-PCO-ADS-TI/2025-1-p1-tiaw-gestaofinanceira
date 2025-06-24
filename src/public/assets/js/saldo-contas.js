function saldoContas(){
    Promise.all([
        fetch('/receitas').then(res => res.json()),
        fetch('/despesas').then(res => res.json()),
        fetch('/contas').then(res => res.json())
    ])

    .then(([receitas, despesas, contas]) => {
        const mapaContas = {};
        contas.forEach(conta => {
            mapaContas[conta.nome] = conta;
        });

        const despesasPorConta = despesas.reduce((acc, despesa) => {
            const conta = despesa.conta;
            const valor = parseFloat(despesa.valor) || 0;
            acc[conta] = (acc[conta] || 0) + valor;
            return acc;
        }, {});
        console.log(despesasPorConta);

        const receitasPorConta = receitas.reduce((acc, receita) => {
            const conta = receita.conta;
            const valor = parseFloat(receita.valor) || 0;
            acc[conta] = (acc[conta] || 0) + valor;
            return acc;
        }, {});
        console.log(receitasPorConta);
        
        const saldoPorConta = {};

        // Itera por todas as contas conhecidas (das receitas e despesas)
        const contasEnvolvidas = new Set([
            ...Object.keys(receitasPorConta),
            ...Object.keys(despesasPorConta)
        ]);

        contasEnvolvidas.forEach(conta => {
            const receita = receitasPorConta[conta] || 0;
            const despesa = despesasPorConta[conta] || 0;
            saldoPorConta[conta] = receita - despesa;
        });

        console.log(saldoPorConta);

    const divSaldoContas = document.getElementById("saldo-contas");
    divSaldoContas.innerHTML = "";
    divSaldoContas.innerHTML = Object.entries(saldoPorConta).map(([conta, saldo]) => {
        const cor = saldo > 0 ? "var(--Verde)" : saldo < 0 ?  "var(--red-500)" : "var(--gray-900)";
        const corConta = mapaContas[conta].cor;
        return `
            <div class="conta">
                <div class="conta-info">
                    <div class="bg-carteira" style="background-color: ${corConta};">
                        <i data-lucide="wallet" class="icons" style="color: black;"></i>
                    </div>
                    <h4>${conta}:</h4>
                </div>
                <p style="color: ${cor}">R$ ${saldo.toFixed(2)}</p>
            </div>`;
        }).join("");
    lucide.createIcons();
    
    })
}
addEventListener('DOMContentLoaded', saldoContas);