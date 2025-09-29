import express from "express";
import { BlogController } from "./blog.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

// Public routes
router.get("/", BlogController.getAllBlogs);
router.get("/:slug", BlogController.getSingleBlog);

// Protected routes (owner only)
router.post("/", auth(), BlogController.createBlog);
router.patch("/:id", auth(), BlogController.updateBlog);
router.delete("/:id", auth(), BlogController.deleteBlog);

export const BlogRoutes = router;
