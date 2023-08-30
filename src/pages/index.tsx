import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Mill</title>
        <meta name="description" content="Mill plataforma gamificada de educação financeira" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen bg-neutral-50">
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
              <button type="button" className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:bg-sky-800">Login</button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-sky-600 rounded md:bg-transparent md:text-sky-700  md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">O que é a Mill</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">Aprenda</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">Preços</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
        <div className="h-5/6 w-full overflow-hidden bg-cover bg-center bg-[url('https://res.cloudinary.com/dbx69s7id/image/upload/v1693410256/cover_oes3df.jpg')]">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="pl-48 max-w-xl">
              <h2 className="text-5xl text-white">Leve suas finanças para o pŕoximo nível</h2>
              <p className="mt-2 text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
              <button type="button" className="text-white mt-10 bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:bg-sky-800">Faça sua conta grátis</button>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
