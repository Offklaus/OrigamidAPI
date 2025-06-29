import Estatisticas from './Estastisticas.js';
import fetchData from './fetchData.js';
import normalizarTransacao from './normalizarTransacao.js';
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstastiticas(transacoes);
}
function preencherEstastiticas(transacoes) {
    const data = new Estatisticas(transacoes);
    const tottalElement = document.querySelector("#total span");
    if (tottalElement) {
        tottalElement.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    console.log(data);
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
        <tr>
            <td>${transacao.nome}</td>
            <td>${transacao.email}</td>
            <td>R$:${transacao.moeda}</td>
            <td>${transacao.pagamento}</td>
            <td>${transacao.status}</td>
        </tr>
            
        `;
    });
}
handleData();
//# sourceMappingURL=script.js.map