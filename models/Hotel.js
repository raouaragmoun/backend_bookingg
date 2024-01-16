import mongoose from "mongoose";

const { Schema } = mongoose;

const hotelShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },

    adress:{
        type:String,
        required:true
    },

    distance:{
        type:String,
        required:true
    },

    photos:{
        type:[String],
    },
    description:{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        min: 0,
        max:5
    },


    rooms:{
        type:[String],
    },


    Price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default: false,
    },
    title:{
        type:String,
        default: false,
    }
});


export default mongoose.model("Hotel" ,hotelShema);
