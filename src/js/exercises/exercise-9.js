/* 
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/



const randomNumberS = [];

for (let i = 0; i < 10; i++) {
    const randomNumB = Math.round(Math.random() * 100);

    randomNumberS.push(randomNumB);

    
}

const minNumbeR = Math.min(...randomNumberS);
const maxNumbeR = Math.max(...randomNumberS);


let result2= "Mínimo: " + minNumbeR + " Máximo: " + maxNumbeR+ " Array: " + randomNumberS;

showContent(9, result2);