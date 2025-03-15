const API_KEY = "e1f0ea6bd4624b907cd5abe3612a5321";  // Palitan ito ng tunay mong API key
const BASE_URL = "https://api.themoviedb.org/3";

async function searchMovies() {
    let query = document.getElementById("search-box").value;
    if (!query) return alert("Enter a movie name!");

    try {
        let response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        let data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function displayMovies(movies) {
    let container = document.getElementById("movies-container");
    container.innerHTML = "";

    if (movies.length === 0) {
        container.innerHTML = "<p>No movies found.</p>";
        return;
    }

    movies.forEach(movie => {
        let movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.overview}</p>
        `;
        container.appendChild(movieCard);
    });
}

// Load Adsterra Ad
function loadAdsterra() {
    let adContainer = document.getElementById("adsterra-ad");
    adContainer.innerHTML = '<script type="text/javascript" src="//plxxx.adsterra.com/..."><\/script>';
}

loadAdsterra();
