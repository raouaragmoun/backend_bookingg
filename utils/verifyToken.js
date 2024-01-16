import Jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
    // Extract token from the request header
    const token = req.headers['authorization'];

    if (!token) {
        return next(createError(401, "Unauthorized: Token is missing"));
    }

    // Verify the token
    Jwt.verify(token, "raoua", (err, user) => {
        if (err) return next(createError(401, "Unauthorized: Token is not valid"));
        req.user = user;
        next();
    });
};

export const veriyUser = (req, res, next) => {
    verifyToken(req, res, next,() => {
        if (err) return next(createError(403, "TOKEN IS NOT VALID"));

        if (req.user._id == req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "Unauthorized: User does not have permission"));
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next,() => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "admin not exist"));
        }
    });
};

