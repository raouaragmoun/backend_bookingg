import  Express  from "express";
import  Hotel  from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { GetALLHote, GetALLHotel, GetHotel, UpdateHotel, countByCity, createHotel, deleteHotel } from "../controller/hotelController.js";
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

router.post("/" ,verifyAdmin, createHotel );

/* !!!!!!!!!!!!!!!!!!! @UPDATE HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.put("/:id" ,verifyAdmin, UpdateHotel);



/* !!!!!!!!!!!!!!!!!!! @UPDATE HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.delete("/:id" ,verifyAdmin, deleteHotel);


/* !!!!!!!!!!!!!!!!!!! @GET BYID HOTEL !!!!!!!!!!!!!!!!!!!!! */

router.get("/:id" ,verifyAdmin, GetHotel);


/* !!!!!!!!!!!!!!!!!!! @GET  HOTEL !!!!!!!!!!!!!!!!!!!!! */
router.get("/countByCity", countByCity);
router.get("/countByType" ,GetALLHotel);

router.get("/h" ,verifyAdmin,GetALLHotel);


export default router;
