import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const token = request.nextauth?.token;
    const isIndexPage = pathname === '/';
    const isEmptyUrl = pathname === '/';

    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
    const isGuestRoute = guestRoutes.some((route) => pathname.startsWith(route));

    if (isEmptyUrl) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    if (!token && isAuthRoute) {
        const redirectUrl = new URL('/login', request.url);
        redirectUrl.searchParams.set('callbackUrl', request.nextUrl.href);
        return NextResponse.redirect(redirectUrl);
    }

    if (token && (isIndexPage || isGuestRoute)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  },
  {
    callbacks: {
      async authorized({ req, token }) {
        return true;
      },
    },
  }
)

const authRoutes = ['/dashboard']
const guestRoutes = [
  '/login',
  '/register',
]
