console.log("test");
const axios=require("axios");

async function getUser(){
    try{
      const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
    }catch(err){
        console.log(err)
    }
}
getUser();