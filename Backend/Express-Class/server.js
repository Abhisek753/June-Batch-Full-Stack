
const express=require("express");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
});
app.get("/student",(req,res)=>{
    res.send("Welcome to student page");
});
app.post("/student",(req,res)=>{
    console.log("Student data to save",req.body);
    res.send("Student created");
});
app.delete("/student/:id",(req,res)=>{
    console.log("Student data to delete",req.params.id);
    res.send("Student deleted");
});
app.get("/students",(req,res)=>{
    const city=req.query.city;
    const age=req.query.age;
    const data={"city":city,"age":age}
    res.json({message:"filter data",students:{"city":city,"age":age}});
});

app.listen(5000,()=>{
    console.log("Express server running at port 5000");
})