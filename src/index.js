import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({
    path : "./.env"
});




import connectDB from './db/index.js';


connectDB()
.then(()=>{
    app.listen(precess.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
}).then(() =>{
    app.on("error",(error)=>{
            console.log("error", error);
            throw error
        })
})
.catch((err)=>{
    console.log("MONGPDB ID FAILED ", err);
})

// import express, { application } from "express"

// const app = express()

// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error", error);
//             throw error
//         })
//         app.listen(process.env.PORT,() =>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR : ", error)
//         throw err
//     }
// })