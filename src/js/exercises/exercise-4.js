/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/


let myStr ="Hi, I am learning Javascript";
const vowels = "aeiouAEIOUáÁéÉíÍóÓúÚ";


let newStr = "";

for (i = 0; i < myStr.length; i++) {
    const posAct = myStr[i];

    if (!vowels.includes(posAct)) {
        newStr += posAct;
    }
}





showContent(4, newStr);