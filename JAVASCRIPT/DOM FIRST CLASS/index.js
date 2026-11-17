// let data=[2,3,4,5];
// console.log(data);

// let title=document.getElementById("title");
// console.log(title.textContent);
// title.innerText="Dom Class"
// console.log(title.textContent);

// // let textData=document.getElementsByClassName("text");
// // textData[1].textContent="modified data";
// // console.log(textData[1].textContent);

// const para=document.getElementsByTagName("p")
// console.log(para[0]);


// let animal=document.querySelector("#animal");
// console.log(animal);

// let animal2=document.querySelector(".tom");
// console.log("2nd tag",animal2);


// let animal=document.querySelectorAll(".tom");
// console.log("span tag",animal[0]);

// TEXTCONTENT

// let title=document.getElementById("title");
// title.innerText="Create a navbar"
// console.log(title.textContent);

// let title=document.getElementById("title");
// title.innerHTML="<h1>Create a navbar</h1>"
// title.style.color="red";
// title.style.backgroundColor="teal"
// console.log(title.innerHTML);

const inputinfo=document.getElementById("info");
inputinfo.setAttribute("placeholder","Enter your name");
// inputinfo.setAttribute("class","firstname");
inputinfo.classList.add("firstname","lastname");
inputinfo.classList.remove("lastname");
inputinfo.style.color="blue"