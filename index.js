import express from "express";
//import space


//declartion/iitailZation
const app=express();
const PORT=4000;

//Middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
   // res.status(200).json({message:"hi all welcome to our first app  "})
   res.status(200).send(`<div style="background-color:Aqua;color:black;font-size:100px">welcom to my app</div>`)
})

//running port
app.listen(PORT,()=>{
 console.log(`App is listening on the port ${PORT}`);
})