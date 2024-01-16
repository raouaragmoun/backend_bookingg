import  Express  from "express";
import { GetALUserl, GetUser, UpdatedUser, deleteUser } from "../controller/userController.js";
import { verifyAdmin, verifyToken, veriyUser } from "../utils/verifyToken.js";



const router = Express.Router();

/**************CRUD*************
 * UPDATE
 * DELETE
 * CREATE
 * GET
 * GETALL
 * **************************** */


// router.get("/checkauthenfied" , verifyToken , (req, res , next )=>{
//     res.send("hello user , you are logged  ")
// });

// router.get("/checkuser/:id" , veriyUser , (req, res , next )=>{
//     res.send("hello user , you are logged and you can delete you acount ")
// });

// router.get("/checkedAdmin/:id" , verifyAdmin , (req, res , next )=>{
//     res.send("hello admin , you are logged and you can delete alll acount ")
// });


/* !!!!!!!!!!!!!!!!!!! @UPDATEUser !!!!!!!!!!!!!!!!!!!!! */

router.put("/:id" ,veriyUser, UpdatedUser);



/* !!!!!!!!!!!!!!!!!!! @UPDATEUser !!!!!!!!!!!!!!!!!!!!! */

router.delete("/:id" ,veriyUser, deleteUser);


/* !!!!!!!!!!!!!!!!!!! @GET BYID User !!!!!!!!!!!!!!!!!!!!! */

router.get("/:id" ,veriyUser, GetUser);


/* !!!!!!!!!!!!!!!!!!! @GET User !!!!!!!!!!!!!!!!!!!!! */

router.get("/" ,verifyAdmin, GetALUserl);
 

export default router;
