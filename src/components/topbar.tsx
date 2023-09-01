import { UserButton } from "@clerk/nextjs";

export const Topbar = () => {
	return (
		<main>
			<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>

				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="" className="flex items-center">
						<img src="https://res.cloudinary.com/dbx69s7id/image/upload/v1693408558/logo_m1xmbz.png" className="h-8 mr-3" alt="Mill Logo"/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mill</span>
					</a>
					
					<div className="flex md:order-2">
						<UserButton afterSignOutUrl="/"/>
					</div>
				</div>
			</nav>
		</main>
  );
}