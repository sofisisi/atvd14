/* Arrow Functions é uma forma mais compilada de utilizar as funções, ela recebe esse nome pela sintaxe que parece com uma seta "=>". 
Com a arrow functions, quando temos apenas um bloco de código, não é necessário utilizar a função "return" */ 

function ex1(){
    const numeros = [3, 5, 6, 10, 8];
// Recebe um array de números
    const dobrarNumeros = numeros.map ((numeros) => numeros * 2);
//".map" passa por cada elemento do array e devolve um novo array
    console.log(dobrarNumeros); 
// Mostra esse novo array no console
}
function ex2() {
    const palavras = [ "mão", "paralelepipedo", "coração", "janela", "passarinho" ];
// Rcecebe um array de palavras
    const ordenarPalavras = palavras.sort((a, b) => a.length - b.length);
// ".sort" ordena os elementos do array pelo comprimento 
    console.log(ordenarPalavras)
// Mostra esse novo array de palavras no console
}
//
function ex3() {
    const numeros = [ 5, 8, 12, 23, 4];
// Recebe um array de números 
    const numerosPares = numeros.filter((numeros) => numeros % 2 === 0)
// ".filter" filtra os elementos que são divisíveis por dois
    console.log(numerosPares); 
// Mostra o novo array de numeros pares
}