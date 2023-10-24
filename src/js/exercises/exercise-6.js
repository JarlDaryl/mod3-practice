/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/


const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    const randomNumb = Math.round(Math.random() * 100);

    randomNumbers.push(randomNumb);

    
}

const minNumber = Math.min(...randomNumbers);
const maxNumber = Math.max(...randomNumbers);


let total= "Mínimo: " + minNumber + " Máximo: " + maxNumber+ " Array: " + randomNumbers;

showContent(6, total);