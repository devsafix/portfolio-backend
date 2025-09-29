import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BlogRoutes } from "../modules/Blog/blog.route";
import { ProjectRoutes } from "../modules/Project/project.route";

const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: AuthRoutes },
  { path: "/blogs", route: BlogRoutes },
  { path: "/projects", route: ProjectRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
