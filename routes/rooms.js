import  Express  from "express";
import  Rooms  from "../models/Rooms.js";
import { GetALLRooms, UpdateRooms, createRoom, deleteRooms } from "../controller/roomsControler.js";
import { getRounds } from "bcrypt";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = Express.Router();

/**************CRUD*************
 * UPDATE
 * DELETE
 * CREATE
 * GET
 * GETALL
 * **************************** */


/* !!!!!!!!!!!!!!!!!!! @ADD HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.post("/:hotelid" ,verifyAdmin, createRoom);

/* !!!!!!!!!!!!!!!!!!! @UPDATE HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.put("/:id" ,verifyAdmin,UpdateRooms);



/* !!!!!!!!!!!!!!!!!!! @UPDATE HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.delete("/:id/:hotelid" ,verifyAdmin, deleteRooms);


/* !!!!!!!!!!!!!!!!!!! @GET BYID HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.get("/:id" ,verifyAdmin, getRounds );


/* !!!!!!!!!!!!!!!!!!! @GET  HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.get("/" ,verifyAdmin, GetALLRooms);
 

export default router;
