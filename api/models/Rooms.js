import mongoose from "mongoose";

const { Schema } = mongoose;

const roomsShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    Price:{
        type:Number,
        required:true
    },

    maxPeople:{
        type:Number,
        required:true
    },
   
    description:{
        type:String,
        required:true
    },

    rommNumber:[{number:Number ,
     unavailebleDates: {type : [Date] }}],
    },
    { timestamps : true}
);


export default mongoose.model("Rooms" ,roomsShema);
