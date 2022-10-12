// console.log('hello')



function addMovie(event) {
    event.preventDefault
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);
    const list = document.querySelector('ul');
    list.appendChild('movie');
    inputField = '';
}

const form = document.querySelector('form');
const button = document.querySelector('button');
button.addEventListener('click', addMovie);