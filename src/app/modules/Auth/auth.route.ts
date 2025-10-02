import express from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/register", AuthController.registerOwner);
router.post("/login", AuthController.loginUser);
router.post("/logout", AuthController.logoutUser);

router.get("/me", auth(), AuthController.getMyProfile);

export const AuthRoutes = router;
