import { Project } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

// For owner access
const createProject = async (payload: Project): Promise<Project> => {
  const result = await prisma.project.create({
    data: payload,
  });
  return result;
};

export const ProjectService = {
  createProject,
};
