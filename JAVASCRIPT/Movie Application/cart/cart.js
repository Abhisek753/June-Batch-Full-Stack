const carousalImages=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSUEPcFR4TAV7a0gWPUfuoUjqyfiSjjBGOdA1_a-2014L-BTVxs0buKg&s=10","https://static.vecteezy.com/system/resources/thumbnails/084/769/908/small/vintage-cinema-movie-theater-film-reel-projector-illustration-retro-style-advertise-poster-with-text-and-light-beam-free-vector.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlq0P4QHC_R3WcfQXix3Bdr_Zg_nTRHEEyzv8r3Mi2IA&s"
]
let currentSlide=0;
const carousalContainer=document.getElementById("carousal-container");
const movieContainer=document.getElementById("movie-container")
let allMovies=[];

async function getMoviesData(){
   try{
     const response=await fetch("http://localhost:3000/cart");
    allMovies=await response.json();
    displayCartMovies(allMovies)
   
   }catch(err){
     console.log("Something went wrong",err)
   }
}

async function removeFromCart(movieId){
  try{
    await fetch(`http://localhost:3000/cart/${movieId}`,{
        method:"DELETE",
    })
    alert("Movie removed from cart");
    getMoviesData();
  }catch(err){
    console.log(err);
  }
}






function displayCartMovies(movies=allMovies){
  if(!movieContainer){
    console.log("Movie Container is missing");
  }
//  console.log("all movies",movies);
  if(movies.length==0){
    movieContainer.innerHTML=`<p>No movies found</p>`
  }
  movies.forEach((movie)=>{
    const card=document.createElement("div");
    card.className="movie-card";
    card.innerHTML=`
   <div class="movie-poster">
    <img src=${movie.poster} />
    </div>
    <div class="movie-info">
        <h2 class="movie-title">${movie.title}</h2> 
        <p class="movie-year">${movie.year}</p>
        <div class="movie-rating">
          <span class="rating">⭐ ${movie.rating}</span>
        </div>
        <div class="movie-genre">
          ${movie.Category}
        </div>
        <div class="movie-buttons">
          <button class="btn btn-remove">Delete</button>
          
        </div>
    </div>
    `
     let removeBtn=card.querySelector(".btn-remove");
     removeBtn.addEventListener("click",()=>{
        removeFromCart(movie.id);
     })
     removeBtn.style.backgroundColor="red";
     removeBtn.style.color="white";
     removeBtn.style.border="none";
     
   movieContainer.appendChild(card);
  })

 
}









getMoviesData();


