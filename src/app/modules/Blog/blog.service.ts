import slugify from "slugify";
import prisma from "../../../shared/prisma";
import { Blog } from "../../../generated/prisma";

const createBlog = async (payload: Blog): Promise<Blog> => {
  const slug = slugify(payload.title, {
    lower: true,
    strict: true,
  });

  const result = await prisma.blog.create({
    data: {
      ...payload,
      slug: slug,
    },
  });
  return result;
};

// For public access
const getAllBlogs = async (): Promise<Blog[]> => {
  const result = await prisma.blog.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
};
