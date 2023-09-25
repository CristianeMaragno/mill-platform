import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
	afterAuth(auth, req, evt) {
		// handle users who aren't authenticated
		if (!auth.userId && !auth.isPublicRoute) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return redirectToSignIn({ returnBackUrl: req.url });
		}
		// redirect them to organization selection page
		/*if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/dashboard"){
			const orgSelection = new URL('/dashboard', req.url)
			return NextResponse.redirect(orgSelection)
		}*/
	},

	publicRoutes: ["/"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
