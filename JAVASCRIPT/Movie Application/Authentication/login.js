document.getElementById("login-form").addEventListener('submit',async(e)=>{
     e.preventDefault();
     const email=document.getElementById("email").value;
     const password=document.getElementById("password").value;

     try{
        const response=await fetch("http://localhost:3000/users");
        const users=await response.json();
        const user=users.find(u=>u.email===email && u.password===password)
        
        if(user){
            alert("Login Successful");
            localStorage.setItem("loggedInUser",JSON.stringify(user));
            window.location.href="../index.html";
        }else{
            alert("Invalid email or password");
        }
     }catch(err){
         console.log("Error:",err);
         alert("Error logging in");
     }
   
})