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

// For public access
const getSingleProject = async (id: string): Promise<Project | null> => {
  const result = await prisma.project.findUnique({
    where: { id },
  });
  return result;
};

// For owner access
const updateProject = async (
  id: string,
  payload: Partial<Project>
): Promise<Project> => {
  const result = await prisma.project.update({
    where: { id },
    data: payload,
  });
  return result;
};

// For owner access
const deleteProject = async (id: string): Promise<Project> => {
  const result = await prisma.project.delete({
    where: { id },
  });
  return result;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
