import Rooms from "../models/Rooms.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res , next)=>{
    
    const hotelId = req.params.hotelid;
    const newromms = new Rooms(req.body)

    try{
        const savedRoom= await newromms.save();
        try{
           await Hotel.findByIdAndUpdate(hotelId , {
            //// to ajouter to base donner push utuliser dans mongo db  
            $push : {rooms: savedRoom._id}
        });    
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next (err); 
    }
};


export const UpdateRooms = async (req,res,next)=>{
    const hotelId = req.params.hotelid;

    try{
        const UpdatedRooms= await Rooms.findByIdAndUpdate(req.params.id , { $set : req.body}, {new : true});
        res.status(200).json(UpdatedHot);
    }catch(err){
    next(err)       
 }
 };

 export const deleteRooms = async (req,res,next)=>{
    const hotelId = req.params.hotelid;
        try{
           await Hotel.findByIdAndUpdate(hotelId , {
            //// to ajouter to base donner push utuliser dans mongo db  
            $pull : {rooms: req.params.id}
        });    
              
        res.status(200).json({message : "rooms Delete avec succes"});
    }catch(err){
       next(err);
    }

 };


 export const GetRooms = async (req,res,next)=>{

    const rooms =await  Rooms.findById(
        req.params.id,
       );
        try{
            res.status(200).json(rooms);
        }catch(err){
        
       next(err);
    }

 };


 export const GetALLRooms = async (req,res,next)=>{

    try{
        const rooms =await  Rooms.find();
         res.status(200).json(rooms);
     }catch(err){
       next(err);
     }
     

 };


