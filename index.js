// console.log('hello')
const message = document.querySelector("#message");
const form = document.querySelector('form');
const button = document.querySelector('button');

//always have your selectors together at the beginning

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input');
    let inputValue = inputField.value
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.addEventListener('click', crossOffMovie);
    movieTitle.textContent = inputValue;
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener('click', deleteMovie)
    deleteBtn.textContent = 'X';
    movie.appendChild(deleteBtn);
    const list = document.querySelector('ul');
    list.appendChild(movie);
    inputField.value = '';
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = 'Movie Deleted!';
}

function crossOffMovie (event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie Added Back!'
    }
}


button.addEventListener('click', addMovie);