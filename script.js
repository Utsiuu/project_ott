const movies = [
  {
    title: "Stranger Things",
    image: "assets/posters/stra ger.things.jpg",
    genre: "Sci-Fi, Thriller"
  },
  {
    title: "Harry Potter",
    image: "assets/posters/harrypotter.jpg",
    genre: "Fantasy, Adventure"
  },
  {
    title: "IT",
    image: "assets/posters/it.jpg",
    genre: "Horror, Mystery"
  },
  {
    title: "f1",
    image: "assets/posters/f1.jpg",
    genre: "Action, sports"
  },
   {
    title: "Avengers Endgame",
    image: "assets/posters/endgame.jpg",
    genre: "Action, sci-fi"
  }
];

const container = document.getElementById("movie-container");

function displayMovies(movieList) {
  container.innerHTML = "";
  movieList.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" />
      <div class="info">
        <h4>${movie.title}</h4>
        <p>${movie.genre}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

displayMovies(movies);

document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
  displayMovies(filtered);
});
