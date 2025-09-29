import express from "express";
import { ProjectController } from "./project.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

// Public routes
router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getSingleProject);

// Protected routes (owner only)
router.post("/", auth(), ProjectController.createProject);
router.patch("/:id", auth(), ProjectController.updateProject);
router.delete("/:id", auth(), ProjectController.deleteProject);

export const ProjectRoutes = router;
