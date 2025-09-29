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

const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ProjectService.getAllProjects();
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await ProjectService.getSingleProject(id);
    res.status(200).json({
      success: true,
      message: "Project retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await ProjectService.updateProject(id, req.body);
    res.status(200).json({
      success: true,
      message: "Project updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
};
