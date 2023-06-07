import { NextResponse, type NextMiddleware } from "next/server";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "./constants";
import { typedFetch } from "./utils";

export const config = {
  matcher: [
    "/auth/:path*",
    "/home/:path*",
    "/",
    "/chat/:path*",
    "/config/:path*"
  ]
};

const AUTH_ROUTE = [
  "/auth/sign-in",
  "/auth/email-auth",
  "/auth/find-pw",
  "/auth/sign-up"
];

const middleware: NextMiddleware = async request => {
  const AC_TOKEN = request.cookies.get(AC_TOKEN_KEY)?.value;
  const RE_TOKEN = request.cookies.get(RE_TOKEN_KEY)?.value;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const where = request.nextUrl.pathname;

  const _redirect = (_url: URL | string) =>
    NextResponse.redirect(new URL(_url, request.url));

  // 로그인이 필요하지 않은 경우

  if (AUTH_ROUTE.includes(where)) {
    if (AC_TOKEN || RE_TOKEN) {
      // 로그인이 된 상태로 접근하는 경우
      return _redirect("/home");
    }

    return null;
  }

  if (!AC_TOKEN || !RE_TOKEN) {
    return _redirect("/auth/sign-in");
  }

  try {
    await typedFetch(`${API_URL}/member/info?v1=1`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AC_TOKEN}`
      },
      method: "GET"
    });

    // AC 토큰이 유효하므로
    return null;
  } catch (error) {
    // TODO: 토큰 재발급 플로우

    return _redirect("/auth/sign-in");
  }
};

export default middleware;
