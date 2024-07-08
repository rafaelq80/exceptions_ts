
const resultado = converte('abc');

console.log(resultado);

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}