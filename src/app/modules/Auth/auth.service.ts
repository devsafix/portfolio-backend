import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { createToken } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { setAuthCookie } from "../../../helpers/setCookie";
import { Response } from "express";
import { User } from "@prisma/client";

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

  const accessTokenPortfolio = createToken(
    { email: user.email, id: user.id },
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );

  setAuthCookie(res, { accessTokenPortfolio });

  return { accessTokenPortfolio };
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

const logoutUser = (res: Response) => {
  res.clearCookie("accessTokenPortfolio", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};

export const AuthService = {
  loginUser,
  getMyProfile,
  logoutUser,
};
