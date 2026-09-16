const carousalImages=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSUEPcFR4TAV7a0gWPUfuoUjqyfiSjjBGOdA1_a-2014L-BTVxs0buKg&s=10","https://static.vecteezy.com/system/resources/thumbnails/084/769/908/small/vintage-cinema-movie-theater-film-reel-projector-illustration-retro-style-advertise-poster-with-text-and-light-beam-free-vector.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlq0P4QHC_R3WcfQXix3Bdr_Zg_nTRHEEyzv8r3Mi2IA&s"
]
let currentSlide=0;
const carousalContainer=document.getElementById("carousal-container");

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
initCarausal()