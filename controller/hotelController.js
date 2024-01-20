import Hotel from "../models/Hotel.js";
import Rooms from "../models/Rooms.js";

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



 /****************** @nombre imta3 hotel fi city *********************************** */
 export const countByCity = async (req, res, next) => {
    const cities= req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            ///hotel.find({city : city })
            return Hotel.countDocuments({ city : city })
        }))
            res.status(200).json(list);
    }catch(err){
        next(err);
    }
};


 export const countByType = async (req,res,next)=>{
    try{
    const hotelCount =await Hotel.countDocuments({type : "hotel"})
    const Countapartement =await Hotel.countDocuments({type : "apartement"})
    const resortCount =await Hotel.countDocuments({type : "resort"})
    const villaCount =await Hotel.countDocuments({type : "villa"})
    const cabineCount =await Hotel.countDocuments({type : "cabine"})
            res.status(200).json([
                {type : "hotel" , hotelCount},
                {type : "apartement" , Countapartement},
                {type : "resort" , resortCount},
                {type : "villa" , villaCount},
                {type : "cabine" ,cabineCount},
            ]);
    }catch(err){
        next(err);
    }
};




export const GetALLHotel = async (req, res, next) => {
    const { featured, limit, min, max, ...otherFilters } = req.query;

    try {
        let query = { featured: featured === 'true' };

        if (min !== undefined && max !== undefined) {
            query.Price = {
                $gte: parseInt(min, 10) || 1,
                $lte: parseInt(max, 10) || 999,
            };
        }

        const hotels = await Hotel.find(query).limit(parseInt(limit, 10) || 0);
        res.status(200).json(hotels);
    } catch (err) {
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



 export const GetHotelRoom = async (req,res,next)=>{

    try{
        const hotels =await  Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotels.rooms.map((room)=>{
            return Rooms.findById(room);
        })
        );
         res.status(200).json(list);
     }catch(err){
       next(err);
       console.log("eeeeeeeeeee")
     }
    
 };





     