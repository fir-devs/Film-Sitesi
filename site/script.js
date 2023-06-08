

/* movie list */
const arrows = document.querySelectorAll(".arrow");
 const movielists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
  const widthRatio=Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movielists[i].querySelectorAll("img").length;
arrow.addEventListener("click", function () {
    clickCounter++;
  if(imageItem -(4 + clickCounter) + (4- widthRatio) >=0 ) {
  movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;

} else{
    movielists[i].style.transform ="translateX(0)";
    clickCounter=0;
}
});

});

/*search */
function search_user(){
const search_user=document.querySelector("input");
search_user.addEventListener("keyup",function(){
let data=this.value.toUpperCase();
let li=document.querySelectorAll("ul li .card");


for(let i=0; i<li.length; i++){
  console.log(li[i].innerHTML);
  if(li[i].innerHTML.toUpperCase().indexOf(data)> -1){
    li[i].style.display="";
   
  }else{
    li[i].style.display="none";
  }
  
}  

});
}
search_user();

/* dark mode */
const ball= document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.navbar,.navbar a,#search_input,.sidebar,.sidebar a,.video-container,.content-box,.content-title,.content-box p,.--testimonial-box-container,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title");

ball.addEventListener("click",function(){
  items.forEach((item)=>item.classList.toggle("active"));
});





