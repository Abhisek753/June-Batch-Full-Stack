

// const container=document.querySelector("#container");
// const heading=document.createElement("h1");
// heading.textContent="This is my skillians batch class.";
// const paragraph=document.createElement("span");
// paragraph.textContent="Hello all students. This class is dedicated for dom manupulation"


// container.append(heading,paragraph);
// // container.append(paragraph);
 
// console.log(heading)






// const container=document.querySelector("#container");
// const heading=document.createElement("h1");
// heading.textContent="This is my skillians batch class.";

// const paragraph=document.createElement("span");
// paragraph.textContent="Hello all students. This class is dedicated for dom manupulation"

// container.appendChild(heading);
// container.after(paragraph)

// const namedata=document.querySelector(".data");
// console.log(namedata);
// namedata.remove();

// let firstname=document.querySelector(".fname");
// const button=document.querySelector("#btn");

// button.addEventListener("click",()=>{
//     firstname.textContent="Kumkum"
//     firstname.style.color="red";
//     console.log("User clicked the button");
//     alert("Name changed");
// })


let fullname=document.querySelector("#fullname");

fullname.addEventListener("input",()=>{
    let data=fullname.value;
    console.log(data);
})
