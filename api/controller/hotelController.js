import Hotel from "../models/Hotel.js";



 export const createHotel = async (req,res,next)=>{
   
        const newHotel= new Hotel(req.body);
        try{
            const savedHotel= await newHotel.save();
            res.status(200).json(savedHotel);
        }catch(err){
            next(err);
        }
    
}

export const UpdateHotel = async (req,res,next)=>{
   
    try{
        const UpdatedHotel= await Hotel.findByIdAndUpdate(req.params.id , { $set : req.body}, {new : true});
        res.status(200).json(UpdatedHotel);
    }catch(err){
    next(err)       
 }
 };

 export const deleteHotel = async (req,res,next)=>{

    try{
        const UpdatedHotel= await Hotel.findByIdAndDelete(req.params.id );
        res.status(200).json({message : "hotel Delete avec succes"});
    }catch(err){
       next(err);
    }

 };

 export const GetHotel = async (req,res,next)=>{

    const hotel =await  Hotel.findById(
        req.params.id,
       );
        try{
            res.status(200).json(hotel);
        }catch(err){
        
       next(err);
    }

 };


 export const countByCity = async (req, res, next) => {
    const cities= req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({ city : city })
        }))
            res.status(200).json(list);
    }catch(err){
        next(err);
    }
};


 export const countByname = async (req,res,next)=>{

    const hotel =await  Hotel.findById(
        req.params.id,
       );
        try{
            res.status(200).json(hotel);
        }catch(err){
        
       next(err);
    }

 };


 export const GetALLHotel = async (req,res,next)=>{

    try{
        const hotels =await  Hotel.find();
         res.status(200).json(hotels);
     }catch(err){
       next(err);
     }
     

 };


 
 export const GetALLHote = async (req,res,next)=>{

    try{
        const hotels =await  Hotel.find();
         res.status(200).json(hotels);
     }catch(err){
       next(err);
     }
     

 };








     