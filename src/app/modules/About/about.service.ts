import { About } from "@prisma/client";
import prisma from "../../../shared/prisma";

const upsertAbout = async (payload: Partial<About>): Promise<About> => {
  const createData: About = {
    id: "singleton",
    heroText: payload.heroText || "",
    careerSummary: payload.careerSummary || "",
    interestText: payload.interestText || "",
    goalText: payload.goalText || "",
    resumeLink: payload.resumeLink || "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await prisma.about.upsert({
    where: { id: "singleton" }, // Always target the single document
    update: payload,
    create: createData,
  });
  return result;
};

const getAbout = async (): Promise<About | null> => {
  const result = await prisma.about.findUnique({
    where: { id: "singleton" },
  });
  return result;
};

export const AboutService = {
  upsertAbout,
  getAbout,
};
