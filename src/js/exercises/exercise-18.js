/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/


function convertirAHashtag(cadena) {
    const palabras = cadena.split(' ');
  
    const palabrasTransformadas = palabras.map(palabra => {

      const palabraConMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
      return palabraConMayuscula;
    });
  
    const hashtag = '#' + palabrasTransformadas.join('');
  
    return hashtag;
  }
  
  const cadena = "Programando en Javascript";
  const hashtag = convertirAHashtag(cadena);
  

  showContent(18, hashtag); 