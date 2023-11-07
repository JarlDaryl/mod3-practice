/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/


function obtenerSiglo(year) {
    const siglo = Math.ceil(year / 100);
    
    return siglo;
  }

  const year = 2023;
  const siglo = obtenerSiglo(year);
  console.log(`El año ${year} pertenece al siglo ${siglo}`);
  

  showcontent(16, obtenerSiglo(1990)); 