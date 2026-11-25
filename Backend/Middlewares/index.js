const express=require('express');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const connectDB = require('./config/db');
require('dotenv').config();
const app=express();
app.use(express.json());
app.use(logger);
const port=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Home route");
});
// app.use(auth);
app.post("/save",auth,(req,res)=>{
    res.send("Save data");
});


connectDB();
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})