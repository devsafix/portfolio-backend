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

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUser(res, req.body);
    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      data: result,
    });
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Invalid credentials", error });
  }
};

const getMyProfile = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await AuthService.getMyProfile(user.id);
    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized", error });
  }
};

export const AuthController = {
  registerOwner,
  loginUser,
  getMyProfile,
};
