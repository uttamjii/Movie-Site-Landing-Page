const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {

const itemNumber =  movieLists[index].querySelectorAll("img").length;
let clickCounter = 0;


    arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth/270);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){

        movieLists[index].style.transform = `translateX(${movieLists[index].computedStyleMap().get("transform")[0].x.value - 300}px)
    `;

}else{
 movieLists[index].style.transform = "translateX(0)";
 clickCounter = 0;
}
    // console.log(clickCounter);
    })
})


//Toggle

const ball = document.querySelector(".toggle-ball");
const item = document.querySelectorAll(".container,.movee-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
item.forEach(item=>{
	item.classList.toggle('active')
})
ball.classList.toggle("active")
})

