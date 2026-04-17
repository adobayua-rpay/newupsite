import { NextRequest, NextResponse } from "next/server"

const MINTLIFY_HOST = "panaptico-3309e257.mintlify.app"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/docs") || pathname.startsWith("/mintlify-assets")) {
    const url = new URL(request.url)
    url.hostname = MINTLIFY_HOST
    url.port = ""
    url.protocol = "https:"

    const headers = new Headers(request.headers)
    headers.set("Host", MINTLIFY_HOST)
    headers.set("X-Forwarded-Host", "panaptico.com")
    headers.set("X-Forwarded-Proto", "https")

    return NextResponse.rewrite(url, { headers })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/docs/:path*", "/mintlify-assets/:path*"],
}
