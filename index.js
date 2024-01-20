import  Express  from "express";
import dotenv from"dotenv";
import mongoose from "mongoose";
import authRoutr from "./routes/auth.js";
import houtelRoutr from "./routes/hotes.js";
import roomsRoutr from "./routes/rooms.js";
import userRoutr from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=Express();

dotenv.config();



/********************Connecter TO mongoDB*************/
        const connect= async()=>{
            try{
            await mongoose.connect(process.env.MONGO);
            console.log("COnnected TOmongoBD")

                }catch(err){
                    throw err;
                        }

                };
/*********************************************************/




mongoose.connection.on("disconnected",()=>{
    console.log("mongoBD disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
});


app.use( cors());
app.use(cookieParser());
app.use(Express.json());
/*****************API Router***************** */
app.use("/api/auth", authRoutr);
app.use("/api/users", userRoutr);
app.use("/api/hotel", houtelRoutr);
app.use("/api/rooms", roomsRoutr);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Something went wrong!",
      stack: err.stack,
    });
  });
  

/***************************************** */



app.listen( 4000 , ()=>{
    connect()
    console.log("server runnig ")
});

