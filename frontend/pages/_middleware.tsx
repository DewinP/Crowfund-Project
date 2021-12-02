import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(
  req: NextRequest,
  res: NextResponse,
  ev: NextFetchEvent
) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/projects");
  }
  return NextResponse.next();
}
