import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import config from "../../config";

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      throw new Error("You are not authorized!");
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret as Secret);

    // Attach user to request object
    (req as any).user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
