import { Request, Response, NextFunction } from "express";
import { BlogService } from "./blog.service";

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.createBlog(req.body);
    res.status(201).json({
      success: true,
      message: "Blog created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.getAllBlogs();
    res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { slug } = req.params;
    const result = await BlogService.getSingleBlog(slug);
    res.status(200).json({
      success: true,
      message: "Blog retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
