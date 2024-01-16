import User from '../models/User.js';


 export const createUser = async (req,res,next)=>{
   
        const newUser= new User(req.body);
        try{
            const savedUser= await newUser.save();
            res.status(200).json(savedUser);
        }catch(err){
            next(err);
        }
    
}

export const UpdatedUser = async (req,res,next)=>{
   
    try{
        const UpdatedUser= await User.findByIdAndUpdate(req.params.id , { $set : req.body}, {new : true});
        res.status(200).json(UpdatedUser);
    }catch(err){
    next(err)       
 }
 };

 export const deleteUser = async (req,res,next)=>{

    try{
        const UpdatedUser= await User.findByIdAndDelete(req.params.id );
        res.status(200).json({message : "hotel Delete avec succes"});
    }catch(err){
       next(err);
    }

 };


 export const GetUser = async (req,res,next)=>{

    const user =await  User.findById(
        req.params.id,
       );
        try{
            res.status(200).json(user);
        }catch(err){
        
       next(err);
    }

 };


 export const GetALUserl = async (req,res,next)=>{

    try{
        const user =await  User.find();
         res.status(200).json(user);
     }catch(err){
       next(err);
     }
     

 };





     