/**
 * Receb String
 * @param moeda
 * @returns
 */
export default function moedaParaNumero(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaParaNumero.js.map