import Link from "next/link";
import { Footer } from "~/components/footer";

export const LandingPage = () => {
	const handleClickScroll = (ref: string) => {
    const element = document.getElementById(ref);
    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
	
  return (
    <main className="flex min-h-screen w-screen flex-col bg-neutral-50">
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
              <Link href={`/sign-up`}>
                <button type="button" className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:bg-sky-800">Login</button>
              </Link>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-sky-600 rounded md:bg-transparent md:text-sky-700  md:p-0" aria-current="page">Home</a>
                </li>
                <li onClick={() => handleClickScroll("section-about")}>
                  <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">O que é a Mill</span>
                </li>
                <li onClick={() => handleClickScroll("section-prices")}>
                  <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">Preços</span>
                </li>
                <li onClick={() => handleClickScroll("section-learn")}>
                  <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0">Aprenda</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
        <div className="h-5/6 mt-16 block w-full overflow-hidden bg-cover bg-center bg-[url('https://res.cloudinary.com/dbx69s7id/image/upload/v1693410256/cover_oes3df.jpg')]">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="pl-40 py-20 max-w-xl">
              <h2 className="text-6xl text-white">Leve suas finanças para o próximo nível</h2>
              <p className="mt-2 text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
              <button type="button" className="text-white mt-10 bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:bg-sky-800">Faça sua conta grátis</button>
            </div>
          </div>
        </div>

        <div id="section-about" className="px-20 py-16">
          <h2 className="text-sky-700 text-4xl font-semibold text-center">O que é a Mill?</h2>
          <p className="text-gray-400 py-8 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/> 
          incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet.</p>
          <div className="space-y-8 lg:grid justify-items-center lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0 lg:mx-20">
            <div className="px-8 flex flex-col">
              <span className="features-icon material-symbols-outlined text-sky-700 text-center flex justify-center">stadia_controller</span>
              <h3 className="text-gray-500 text-1xl font-semibold text-center mb-4">Gamificação</h3>
              <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div className="px-8 flex flex-col">
              <span className="features-icon material-symbols-outlined text-sky-700 text-center flex justify-center">school</span>
              <h3 className="text-gray-500 text-1xl font-semibold text-center mb-4">Educação Financeira</h3>
              <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div className="px-8 flex flex-col">
              <span className="features-icon material-symbols-outlined text-sky-700 text-center flex justify-center">fitness_center</span>
              <h3 className="text-gray-500 text-1xl font-semibold text-center mb-4">Prática</h3>
              <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
          </div>
        </div>

        <div id="section-prices" className="bg-sky-500 bg-opacity-10 px-20 py-16">
          <h2 className="text-sky-700 text-4xl font-semibold text-center">Preços</h2>
          <p className="text-gray-400 py-8 text-center">Selecione o plano que mais cobina com você</p>

          <div className="space-y-8 lg:grid justify-items-center lg:grid-cols-3 sm:gap-6 xl:gap-12 lg:space-y-0">
            {/*Pricing Card*/}
            <div></div>
            <div className="flex flex-col p-6 max-w-lg w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Free</h3>
              <p className="font-light text-gray-500 sm:text-lg ">Melhor opção para iniciar</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">R$0</span>
                <span className="text-gray-500">/mês</span>
              </div>
              {/*List*/}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
              </ul>
              <Link href={`/sign-up`}>
                <button type="button" className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:bg-sky-800">Começar a usar</button>
              </Link>
            </div>
            {/*Pricing Card*/}
            {/*<div className="flex flex-col p-6 max-w-lg w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Pro</h3>
              <p className="font-light text-gray-500 sm:text-lg">Uma opção para ter uma experiência mais completa</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">R$8,99</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span>Lorem ipsum dolor</span>
                </li>
              </ul>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>*/}
            <div></div>
          </div>
        </div>

        <div id="section-learn" className="px-20 py-16 flex flex-col items-center">
          <h2 className="text-sky-700 text-4xl font-semibold text-center">Aprenda</h2>
          <p className="text-gray-400 py-8 text-center">Se inscreva a nossa newsletter receba informações reelevantes e icas sobre finanças</p>

          <input type="text" id="first_name" className="bg-gray-50 max-w-md mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-300 focus:border-sky-500 block w-full p-2.5" placeholder="Email"/>

          <button type="button" className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Me inscrever</button>
        </div>

        <Footer></Footer>
      </main>
  );
};