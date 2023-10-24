/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/


let myStr = "Pancha plancha con cuatro planchas. ¿Con cuántas planchas plancha Pancha?"
const vowels = "aeiouAEIOUáÁéÉíÍóÓúÚ"

let vowelCount = 0;

for (let i = 0; i < myStr.length; i++) {
    const posAct = myStr[i];

    if (vowels.includes(posAct)) {
        vowelCount++;
    }
}


let result = `The number of vowels is ${vowelCount}`;



showContent(3, result);
