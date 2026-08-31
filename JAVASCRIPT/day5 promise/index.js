console.log("Hello world");

function getUsers(){
  let data= fetch("https://jsonplaceholder.typicode.com/users/1/posts");
  console.log(data)
 return data;
}
getUsers().then((result)=>{
      return result.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Error while getting api response",err);
})
