let movie = {
    name : "Forrest Gump",
    duration : 2.5,
    releaseDate : 1994,
    genre : "Drama, comedy, action"
}

function exibirPropriedades(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop]);
        }
    }
}

exibirPropriedades(movie);