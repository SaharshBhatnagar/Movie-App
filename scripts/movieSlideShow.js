let movieSlide = '';

movieSlides.forEach((slide) => {
    movieSlide += `
                <img src="${slide.src}" class="card-scroll">
            `;
})

document.querySelector('.container').innerHTML = movieSlide;

console.log(movieSlide);