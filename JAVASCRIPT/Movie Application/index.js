const carousalImages=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSUEPcFR4TAV7a0gWPUfuoUjqyfiSjjBGOdA1_a-2014L-BTVxs0buKg&s=10","https://static.vecteezy.com/system/resources/thumbnails/084/769/908/small/vintage-cinema-movie-theater-film-reel-projector-illustration-retro-style-advertise-poster-with-text-and-light-beam-free-vector.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlq0P4QHC_R3WcfQXix3Bdr_Zg_nTRHEEyzv8r3Mi2IA&s"
]
let currentSlide=0;
const carousalContainer=document.getElementById("carousal-container");
const movieContainer=document.getElementById("movie-container");
const searchInput=document.getElementById("search-input");
let allMovies=[];

searchInput.addEventListener("input",(e)=>{
 const searchValue=e.target.value.toLowerCase();
 const filteredMovies=allMovies.filter((movie)=>{
    return movie.title.toLowerCase().includes(searchValue);
 });
 console.log(filteredMovies)
 displayMovies(filteredMovies)
})

async function getMoviesData(){
   try{
     const response=await fetch("http://localhost:3000/movies");
    allMovies=await response.json();
    displayMovies(allMovies)
   
   }catch(err){
     console.log("Something went wrong",err)
   }
}
 async function handleCart(movie){
  try{
     await fetch("http://localhost:3000/cart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(movie)
     })
     alert("Movies added to caet");
  }catch(err){
    console.log(err);
  }
 }

function displayMovies(movies=allMovies){
  if(!movieContainer){
    console.log("Movie Container is missing");
  }
//  console.log("all movies",movies);
  if(movies.length==0){
    movieContainer.innerHTML=`<p>No movies found</p>`
  };
  movieContainer.innerHTML="";
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
          <button class="btn btn-cart">🛒Cart</button>
          <button class="btn btn-favourite">❤️Favourites</button>
        </div>
    </div>
    `
    let cartBtn=card.querySelector(".btn-cart");
    cartBtn.addEventListener("click",(e)=>{
      e.stopPropagation();
      handleCart(movie);

    })
   movieContainer.appendChild(card);
  })

 
}



function initCarausal(){
  console.log("test")
  carousalContainer.innerHTML="";
  carousalImages.forEach((imgUrl,index)=>{
    const slide=document.createElement("div");
    slide.className="carousal-slide"
    
    if(index===0){
      slide.classList.add("active");
    }
    const img=document.createElement("img");
    img.className="carousal-image"
    img.src=imgUrl
    img.alt=`Slide ${index+1}`
    slide.appendChild(img);
    carousalContainer.appendChild(slide);
  })
}

 function updateCarousal(){
    const slides=document.querySelectorAll(".carousal-slide");
    slides?.forEach((slide,index)=>{
      if(index===currentSlide){
       
        slide.classList.add("active");
      }else{
        slide.classList.remove("active");
      }
    })
  }
 function changeSlide(direction){
  console.log(direction);
  currentSlide=(currentSlide+direction+carousalImages.length)%carousalImages.length;
  console.log("currentSlide",currentSlide);
    updateCarousal()

 }

  function autoNext(){
    currentSlide=(currentSlide+1)%carousalImages.length;
    updateCarousal();
  }
  setInterval(autoNext,3000);

getMoviesData();


initCarausal()