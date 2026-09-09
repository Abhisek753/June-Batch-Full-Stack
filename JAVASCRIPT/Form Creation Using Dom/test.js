// // console.log("App running");
// localStorage.setItem("name","Abhisek");
// localStorage.setItem("name2","vinay");

// const name=localStorage.getItem("name2");
// console.log(name);


// sessionStorage.setItem("name","Abhisek");
// sessionStorage.setItem("name2","vinay");

// const namedata=sessionStorage.getItem("name2");
// console.log(namedata);

const userdata={
    name:"Arun",
    age:25
}

localStorage.setItem("userdata",JSON.stringify(userdata));

const getdata=localStorage.getItem("userdata");
console.log(getdata)