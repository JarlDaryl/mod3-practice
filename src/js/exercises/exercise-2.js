/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/

const num = 9;


function evenOrOdd(num) {
if (num % 2 === 0) {
    return 'even';
}   else {
    return 'odd';
}
}



let result = `Number ${num} is ${evenOrOdd()}`;



showContent(2, result);