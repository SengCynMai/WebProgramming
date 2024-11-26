const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const genres = [
  { name: 'Action', image: 'images/action.jpg' },
  { name: 'Drama', image: 'images/drama.jpg' },
  { name: 'Comedy', image: 'images/comedy.jpg' }
];

const genreContainer = document.getElementById('genre-container');
if (genreContainer) {
  genres.forEach(genre => {
    const genreDiv = document.createElement('div');
    genreDiv.classList.add('genre');
    genreDiv.innerHTML = `
      <img src="${genre.image}" alt="${genre.name} Movies">
      <p>${genre.name}</p>
    `;
    genreContainer.appendChild(genreDiv);
  });
}

const searchBar = document.getElementById('search-bar');
const movieList = document.getElementById('movie-list');
if (searchBar && movieList) {
  searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const movieItems = movieList.getElementsByTagName('li');
    for (let movie of movieItems) {
      const text = movie.textContent.toLowerCase();
      movie.style.display = text.includes(query) ? '' : 'none';
    }
  });
}
