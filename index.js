import  Express  from "express";
import dotenv from"dotenv";
import mongoose from "mongoose";
import authRoutr from "./routes/auth.js";
import houtelRoutr from "./routes/hotes.js";
import roomsRoutr from "./routes/rooms.js";
import userRoutr from "./routes/user.js";
import cookieParser from "cookie-parser";
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



app.use(cookieParser());
app.use(Express.json());
/*****************API Router***************** */
app.use("/api/auth", authRoutr);
app.use("/api/users", userRoutr);
app.use("/api/hotel", houtelRoutr);
app.use("/api/rooms", roomsRoutr);

app.use((err ,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message ||" Somthing went wrong § "
return res.status(500).json({
    sucess:false,
    status: errorStatus,
    message:errorMessage,
    stack: err.stack

})  
});

/***************************************** */



app.listen(3000 , ()=>{
    connect()
    console.log("server runnig ")
});

