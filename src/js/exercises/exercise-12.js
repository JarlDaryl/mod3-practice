/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/



function peliculasDrama(movies) {
    return movies
    .filter((movie) => movie.category === categories.drama)
    .map((movie) =>({ title: movie.title, description: movie.description}));
}

const dramaMovies = peliculasDrama(movies);

showContent(12, dramaMovies)