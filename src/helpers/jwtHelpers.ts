import jwt, { Secret, SignOptions } from "jsonwebtoken";

export const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expiresIn: string
) => {
  return jwt.sign(payload, secret, { expiresIn } as SignOptions);
};
