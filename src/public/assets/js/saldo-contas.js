function saldoContas(){
    Promise.all([
        fetch('/receitas').then(res => res.json()),
        fetch('/despesas').then(res => res.json()),
        fetch('/contas').then(res => res.json())
    ])

    .then(([receitasGerais, despesasGerais, contas]) => {
        const usuario = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
        const despesas = despesasGerais.filter(des => des.user === usuario.id);
        const receitas = receitasGerais.filter(rec => rec.user === usuario.id);
        
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
    if(receitas.length == 0 && despesas.length == 0){
        divSaldoContas.innerHTML = `
            <div class="conta">
                <div class="conta-info">
                    <div class="bg-carteira" style="background-color: var(--gray-100);">
                        <i data-lucide="wallet" class="icons" style="color: black;"></i>
                    </div>
                    <h4>Carteira:</h4>
                </div>
                <p style="color:var(--gray-900)">R$0,00</p>
            </div>`;
            lucide.createIcons();
    }
    else{
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
    }
    })
}
addEventListener('DOMContentLoaded', saldoContas);

const btnNovaConta = document.getElementById("btnNovaConta");
btnNovaConta.addEventListener("click", () => {
    alert("Funcionalidade em desenvolvimento!");
});