/* 
EJERCICIO 1:
Muestra el siguiente saludo pasando un nombre como parámetro
“Hello <name>, how are you doing today?”
*/

function greeting(name) {
  return `Hello ${name}, how are you doing today?`;
}

showContent(1, greeting("John"));
