import mongoose from "mongoose";

const { Schema } = mongoose;


import  Jwt  from "jsonwebtoken";














const UserShema = new mongoose.Schema({
    username: {
        type: String,
        ///
        required: true,
        ///yfasa8il fara8art 
        trim: true,
        /// iykown 2 cararactere
        minilength: 2,
        ///akther 7aja 2
        maxlength: 100,
        

    },
    email: {
        type: String,
        required: true,
        ///yfasa8il fara8art 
        trim: true,
        /// iykown 2 cararactere
        minilength: 5,
        ///akther 7aja 2
        maxlength: 100,
        ////mich mitkarira
        unique: true,
    },


    password: {
        type:String,
        required: true,
        trim: true,
        /// iykown 2 cararactere
        minilength: 8,
    },

    profilephoto :{
         type: Object,
         default:{
            url: "https://pixabay.com/fr/illustrations/user-icon-icono-de-usuario-2098873/",
            publicId: null,

         }
    },

    bio: {
            type:String,
    },
    isAdmin: {
        type:Boolean,
        default: false,
    },

    isAccountVerified: {
        type : Boolean,
        default : false,
    },
    
},{
    timestamps: true,

} );
////genrated token
UserShema.methods.generatedAUthToken = function () {
    return Jwt.sign({_id: this._id, isAdmin: this.isAdmin }, "raoua");
};


//user Model
export default mongoose.model("User" ,UserShema);

