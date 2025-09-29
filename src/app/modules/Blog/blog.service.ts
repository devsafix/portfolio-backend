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

// For public access
const getSingleBlog = async (slug: string): Promise<Blog | null> => {
  const result = await prisma.blog.findUnique({
    where: {
      slug,
      published: true,
    },
  });
  return result;
};

// For owner access
const updateBlog = async (
  id: string,
  payload: Partial<Blog>
): Promise<Blog> => {
  if (payload.title) {
    payload.slug = slugify(payload.title, { lower: true, strict: true });
  }

  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

// For owner access
const deleteBlog = async (id: string): Promise<Blog> => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
