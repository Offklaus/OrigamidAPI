export default function stringToDate(texto: string): Date {
    const [data, tempo] = texto.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);// transforma a array de strings em números
    const [hora, minuto] = tempo.split(":").map(Number); // transforma a array de strings em números
    return new Date(ano, mes - 1, dia, hora, minuto); // new Date só recebe number
}