import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

const app = express();

// database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> {
        console.log('connected')
        app.listen(process.env.PORT, () => {
          console.log(`App is listening....`);
        });
    })
    .catch(()=> console.log('no connection'))



app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome')
})


 