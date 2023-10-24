/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/


function repetitions(text) {
    let result = "";
  
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      result += letter.toUpperCase();

      for (let j = 0; j < i; j++) {
        result += letter.toLowerCase();
      }
    }
  
    return result;
  }
  
  showContent(5, repetitions('code'));
  showContent(5, repetitions('list'));
  showContent(5, repetitions('function'));