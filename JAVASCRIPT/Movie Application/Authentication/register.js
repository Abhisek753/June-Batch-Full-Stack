document.getElementById("register-form").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
   
    try{
       const response=await fetch(" http://localhost:3000/users",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password})
       });
       if(response.ok){
        alert("Registration successful");
        window.location.href="login.html";
       }else{
        alert("Registration failed");
       }
    }catch(err){
        console.error("Error registering user:", err);
        alert("Error while registering");
    }
})