import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { createToken } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { setAuthCookie } from "../../../helpers/setCookie";
import { Response } from "express";
import { User } from "@prisma/client";

const registerOwner = async (
  payload: User
): Promise<Omit<User, "password">> => {
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await prisma.user.create({
    data: {
      email: payload.email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const loginUser = async (
  res: Response,
  payload: Pick<User, "email" | "password">
) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { email: payload.email },
  });

  const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const accessToken = createToken(
    { email: user.email, id: user.id },
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );

  setAuthCookie(res, { accessToken });

  return { accessToken };
};

const getMyProfile = async (
  userId: string
): Promise<Omit<User, "password"> | null> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};



export const AuthService = {
  registerOwner,
  loginUser,
  getMyProfile,

};
