import { Response } from "express";

export interface AuthTokens {
  accessTokenPortfolio?: string;
}

export const setAuthCookie = (res: Response, tokenInfo: AuthTokens) => {
  if (tokenInfo.accessTokenPortfolio) {
    res.cookie("accessTokenPortfolio", tokenInfo.accessTokenPortfolio, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 2592000000,
      path: "/",
    });
  }
};

// export const setAuthCookie = (res: Response, tokenInfo: AuthTokens) => {
//   if (tokenInfo.accessTokenPortfolio) {
//     res.cookie("accessTokenPortfolio", tokenInfo.accessTokenPortfolio, {
//       httpOnly: true,
//       secure: true, // true for https
//       sameSite: "none", // Required for cross-origin in production
//       maxAge: 2592000000,
//       path: "/",
//       // Don't set domain if frontend and backend are on different domains
//     });
//   }
// };
