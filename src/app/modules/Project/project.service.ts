import { Project } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

// For owner access
const createProject = async (payload: Project): Promise<Project> => {
  const result = await prisma.project.create({
    data: payload,
  });
  return result;
};

// For public access
const getAllProjects = async (): Promise<Project[]> => {
  const result = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

export const ProjectService = {
  createProject,
  getAllProjects,
};
