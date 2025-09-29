import { Request, Response, NextFunction } from "express";
import { ProjectService } from "./project.service";

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ProjectService.createProject(req.body);
    res.status(201).json({
      success: true,
      message: "Project created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProjectController = {
  createProject,
};
