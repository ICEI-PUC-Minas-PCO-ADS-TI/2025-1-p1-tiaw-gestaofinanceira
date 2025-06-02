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
    .then(([receitas, categoriasReceita]) => {
        const mapaCategoriasReceita = {};
        categoriasReceita.forEach(catReceita => {
            mapaCategoriasReceita[catReceita.nome] = catReceita;
        });
        for (let i = receitas.length-1; i > receitas.length-4; i--) {
            let receita = receitas[i];
            let categoria = mapaCategoriasReceita[receita.categoria];
            divReceitas.innerHTML += `
            <div class="transacao">
                <div class="transacao-info">
                    <div class="icon-bg">
                        <i data-lucide="${categoria.icon}" class="icons icon-recentes"></i>
                    </div>
                    <div class="categoria">
                        <h4>${receita.titulo}</h4>
                        <p>${receita.data}</p>      
                    </div>
                </div>
                <p>R$ ${receita.valor}</p>
            </div> 
            `;
            somaReceitas += parseFloat(receita.valor);
        }
        lucide.createIcons();
        divSomaReceitas.innerHTML = ``
        divSomaReceitas.innerHTML = `
            <h4>Total Receitas</h4>
            <p>R$ ${somaReceitas.toFixed(2)}</p>`;
    })

}
addEventListener('DOMContentLoaded',exibeReceitas);

/*
function somarReceitas() {
    fetch('/receitas') // substitua por sua URL real se for diferente
        .then(res => res.json())
        .then(receitas => {

            // Soma os valores das receitas
            const totalReceitas = receitas.reduce((soma, receita) => {
                return soma + parseFloat(receita.valor);
            }, 0);

            console.log("Total de Receitas: R$ " + totalReceitas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

            const hoje = new Date();
            const mesAtual = hoje.getMonth();   
            const anoAtual = hoje.getFullYear();

            const receitasMesAtual = receitas.filter(receita => {
                const dataReceita = new Date(receita.data); // formatando como "YYYY-MM-DD"
                return dataReceita.getMonth() === mesAtual && dataReceita.getFullYear() === anoAtual;
            });

            const totalReceitasMes = receitasMesAtual.reduce((soma, receita) => {
                return soma + parseFloat(receita.valor);
            }, 0);

            console.log("Total de Receitas no mês atual: R$ " + totalReceitasMes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

        })
        .catch(error => {
            console.error("Erro ao buscar receitas:", error);
        });
}

document.addEventListener('DOMContentLoaded', somarReceitas);
*/