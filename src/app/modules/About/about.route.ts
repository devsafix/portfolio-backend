import express from "express";
import { AboutController } from "./about.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

// Public route to fetch the about information for your frontend
router.get("/", AboutController.getAbout);

// Protected route for the owner to create or update the information
router.post("/", auth(), AboutController.upsertAbout);

export const AboutRoutes = router;
