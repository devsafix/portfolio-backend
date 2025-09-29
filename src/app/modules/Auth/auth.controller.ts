import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const registerOwner = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.registerOwner(req.body);
    res.status(201).json({
      success: true,
      message: "Owner registered successfully!",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong!", error });
  }
};



export const AuthController = {
  registerOwner,
};
