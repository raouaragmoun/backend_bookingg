import  Express  from "express";
import  Hotel  from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { GetALLHote, GetALLHotel, GetHotel, GetHotelRoom, UpdateHotel, countByCity, countByType, createHotel, deleteHotel } from "../controller/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = Express.Router();

/**************CRUD*************
 * UPDATE
 * DELETE
 * CREATE
 * GET
 * GETALL
 * **************************** */
router.get("/countByType" ,countByType);

router.get("/countByCity", countByCity);

router.get("/room/:id", GetHotelRoom);

/* !!!!!!!!!!!!!!!!!!! @ADD HOTEL !!!!!!!!!!!!!!!!!!!!! */
router.get("/h" ,GetALLHotel);
router.post("/" , createHotel );

/* !!!!!!!!!!!!!!!!!!! @UPDATE HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.put("/:id" ,verifyAdmin, UpdateHotel);



/* !!!!!!!!!!!!!!!!!!! @UPDATE HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.delete("/:id" ,verifyAdmin, deleteHotel);


/* !!!!!!!!!!!!!!!!!!! @GET BYID HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.get("/:id" , GetHotel);


/* !!!!!!!!!!!!!!!!!!! @GET  HOTEL !!!!!!!!!!!!!!!!!!!!! */





export default router;
