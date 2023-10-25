/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

const text = "Logra Casillas alli sacar gol";

function esPalindromo(text) {
    const nuevaCadena = text.toLowerCase().replaceAll(" ", "");
    const cadenaInvertida = nuevaCadena.split('').reverse().join('');

    if (nuevaCadena === cadenaInvertida) {
        return `La cadena "${text}" es un palíndromo.`;
    } else {
        return `La cadena "${text}" no es un palíndromo.`;
    }
}

showContent(7, esPalindromo(text));