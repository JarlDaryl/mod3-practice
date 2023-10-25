/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/


function sortRating(a, b) {
    return b.rating - a.rating;
}
movies.sort(sortRating);

showContent(11, movies);