import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
/*********************** LOGIN ******************************** */

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username }); // Await here

    if (!user) return next(createError(404, "user not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return next(createError(401, "Incorrect password"));


    const token = user.generatedAUthToken();

        res.status(200).json({
            _id : user._id,
            isAdmin : user.isAdmin,
            profilephoto : user.profilephoto,
            token,

        });
    
        
  } catch (err) {
    next(err);
  }
};

/*********************** REGISTER ******************************** */
export const register = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordCrypt = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: passwordCrypt,
    });

    await newUser.save();
    res.status(200).json("User created");
  } catch (err) {
    next(err);
  }
};
