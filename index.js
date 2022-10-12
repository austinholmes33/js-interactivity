// console.log('hello')
const message = document.querySelector("#message");


function addMovie(event) {
    event.preventDefault
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);
    const deleteBtn = createElement('button');
    deleteBtn.textContent('X')
    movie.appendChild(deleteBtn)
    const list = document.querySelector('ul');
    list.appendChild(movie);
    inputField = '';
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent('Movie Deleted!');
}

function crossOffMovie (event) {
    event.target.classList.toggle(".checked");
    if (event.target.classList.contains('.checked')) {
        message.textContent('Movie Watched!')
    } else {
        message.textContent('Movie Added Back!')
    }
}

const form = document.querySelector('form');
const button = document.querySelector('button');
button.addEventListener('click', addMovie);
button.addEventListener('click', deleteMovie);
button.addEventListener('click', crossOffMovie);