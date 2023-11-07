/* 
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/



function filterByActor(movies, actor) {
    return movies.filter(movie => movie.actors.includes(actor));
}

function highestRating(movies) {
    const resultado = movies.sort((movie1, movie2) =>{
        if (movie1.rating < movie2.rating) return -1;
        if (movie1.rating > movie2.rating) return 1;
        return 0;
    });
    return resultado.pop();
}

function moviesByActors(movies) {
    const result = [];
    
    ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"].forEach((actor => {
        const actorMovies = filterByActor(movies, actor);
        const actorHighest = highestRating(actorMovies);
        result.push(actorHighest);
    }));
}


showContent(14, moviesByActors);