// if we pass invalid token or not pass so getting error

import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const authenticatedApiRoute = [pathname.startsWith("/api/users")];
  if (authenticatedApiRoute.includes(true)) {
    const cookie = request.cookies.get("jwt-token");

    if (!cookie || !cookie?.value) {
      return NextResponse.json({ msg: "unauthenticated" }, { status: 401 });
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(cookie.value, secret);
    } catch (error) {
      return NextResponse.json(
        { msg: "internal server error" },
        { status: 500 }
      );
    }
  }
}


//wild card characther match every path
export const config ={
    matcher : "/:path*",
}