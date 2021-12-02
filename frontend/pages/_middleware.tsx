import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../app/services/Auth.slice";

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
