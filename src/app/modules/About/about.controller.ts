import { Request, Response, NextFunction } from "express";
import { AboutService } from "./about.service";

const upsertAbout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AboutService.upsertAbout(req.body);
    res.status(200).json({
      success: true,
      message: "About information updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAbout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AboutService.getAbout();
    res.status(200).json({
      success: true,
      message: "About information retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AboutController = {
  upsertAbout,
  getAbout,
};
