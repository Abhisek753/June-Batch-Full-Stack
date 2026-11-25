const logger=(req,res,next)=>{
    const time=new Date().toLocaleString()
     console.log(`Today data is ${time},${req.method}`);
     next();
}

module.exports=logger;