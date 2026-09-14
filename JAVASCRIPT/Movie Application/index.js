console.log("Hello, World!");

fetch("http://localhost:3000/users").then((res)=>{
  return res.json()
}).then((products)=>{
    console.log("my products",products);
});