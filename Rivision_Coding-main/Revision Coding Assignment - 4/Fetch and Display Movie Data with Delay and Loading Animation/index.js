const moviesEl = document.getElementById('movies-grid')
const loaderEl = document.getElementById('loader')
const apiKey = 'YOUR_API_KEY' 
const apiUrl = `https://www.omdbapi.com/?s=Avengers&apikey=${apiKey}`

const fetchMovies = async () => {
    loaderEl.style.display = 'block'
    moviesEl.innerHTML = ''
    try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        if (data.Response === 'True') {
            renderMovies(data.Search)
        } else {
            moviesEl.innerHTML = `<p>${data.Error}</p>`
        }
    } catch (err) {
        moviesEl.innerHTML = '<p>Failed to fetch movies. Please check your connection.</p>'
    } finally {
        loaderEl.style.display = 'none'
    }
}

const renderMovies = (movies) => {
    moviesEl.innerHTML = ''
    movies.forEach(movie => {
        const card = document.createElement('div')
        card.className = 'card'

        const poster = movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450?text=No+Image' : movie.Poster

        card.innerHTML = `
            <img src="" alt="${movie.Title}">
            <div class="card-info">
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            </div>
        `
        moviesEl.appendChild(card)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(fetchMovies, 5000)
})








