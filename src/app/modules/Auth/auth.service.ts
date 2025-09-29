import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { User } from "../../../generated/prisma";
import config from "../../../config";

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

export const AuthService = {
  registerOwner,
};
