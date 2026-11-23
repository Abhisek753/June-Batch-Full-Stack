const express=require("express");
const studentRoutes=require("./routes/studentRoutes");
const app=express();

app.use(express.json());

app.use("/api/students",studentRoutes);


app.listen(5000,()=>{
    console.log("Server is running at port 5000");
})