const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {

    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieLists[index].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        
        if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            clickCounter++;
            let currentTransform = movieLists[index].computedStyleMap().get("transform")[0].x.value;
            movieLists[index].style.transform = `translateX(${currentTransform - 300}px)`;
        } else {
            movieLists[index].style.transform = "translateX(0)";
            clickCounter = 0; // Reset clickCounter when resetting the transform
        }
        
    });
});


// DARK MODE 

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, h1");

ball.addEventListener("click", function(){

    items.forEach((item) => item.classList.toggle("active"));

})
