/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function posicionEnAlfabeto(frase) {

    const nuevaFrase = frase.toLowerCase().replaceAll(" ", "");


    const positions = [];


    for (let i = 0; i < nuevaFrase.length; i++) {
        const char = nuevaFrase[i];
        const position = alphabet.indexOf(char) + 1;
        positions.push(position);
    }
    return positions;
}

let frase = "Estoy aprendiendo Javascript";


showContent(8, posicionEnAlfabeto(frase));