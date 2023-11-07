/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/



function esIsograma(cadena) {

    cadena = cadena.toLowerCase();
  
    const ocurrencias = {};
  
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i];
      
      if (ocurrencias[letra]) {
        return `La cadena '${cadena}' no es un isograma`;
      } else {

        ocurrencias[letra] = true;
      }
    }
  
    return `La cadena '${cadena}' es un isograma`;
  }
  
  const cadena1 = "hola mundo";
  const cadena2 = "Aprendiendo JavaScript";
  
  showContent(17, esIsograma(cadena1));
  showContent(17, esIsograma(cadena2));
  