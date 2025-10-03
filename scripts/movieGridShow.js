let movieGrid = '';

movieData.forEach((grid) => {
    movieGrid += `
    <div class="movie-card">
                <div class="card-poster" style="background-image: url(${grid.image});"></div>
                <span class="rating">${grid.rating}</span>
                <div class="card-content">
                    <h3 class="title">${grid.title}</h3>
                </div>
            </div>
            `;
})

document.querySelector('.movies-grid').innerHTML = movieGrid;

console.log(movieGrid);