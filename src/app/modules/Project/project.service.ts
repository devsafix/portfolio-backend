import { Project } from "@prisma/client";
import prisma from "../../../shared/prisma";

// For owner access
const createProject = async (payload: Project): Promise<Project> => {
  // Normalize the tags before saving
  const normalizedTags = payload.tags.map((tag) =>
    tag.toLowerCase().replace(/\s+/g, "-")
  );

  const result = await prisma.project.create({
    data: {
      ...payload,
      tags: normalizedTags,
    },
  });
  return result;
};

// For public access
const getAllProjects = async (query?: { tag?: string }): Promise<Project[]> => {
  const whereClause: any = {};

  // If a tag is provided in the query, filter by it
  if (query?.tag) {
    whereClause.tags = {
      has: query.tag,
    };
  }

  const result = await prisma.project.findMany({
    where: whereClause,
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
  // Normalize the tags before saving
  const normalizedTags = (payload.tags ?? []).map((tag) =>
    tag.toLowerCase().replace(/\s+/g, "-")
  );

  const result = await prisma.project.update({
    where: { id },
    data: {
      ...payload,
      tags: normalizedTags.length > 0 ? normalizedTags : undefined,
    },
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
