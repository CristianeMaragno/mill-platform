import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";

import { Footer } from "~/components/footer";
import { Topbar } from "~/components/topbar";
import { Bubble } from "@typebot.io/nextjs";

const Dashboard: NextPage = () => {
  const { data } = api.module.getAll.useQuery();
  console.log(data);

  const {user} = useUser();
  if(!user) return null;
  
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-50">
		  <Topbar></Topbar>
      <Bubble
        typebot="my-typebot-mg8w5tz"
        theme={{ button: { backgroundColor: "#479AC2" } }}
      />

      <div className="w-full mt-16 py-12 px-28 bg-sky-500 bg-opacity-10 lg:grid lg:grid-cols-2">
        <div>
          <h2 className="text-gray-600 text-2xl font-semibold">Faça seu diagnóstico financeiro</h2>
          <p className="text-gray-400 py-2">Responda algumas perguntas e entenda quais os pontos que você precisa melhorar</p>
        </div>
        
        <div className="flex justify-end items-center">
          <button type="button" className="text-white max-h-9 bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Responder questionário</button>
        </div>
      </div>

      <div className="p-16">
        <h2 className="text-sky-700 text-4xl font-semibold text-center">Seu painel</h2>
        <p className="text-gray-400 py-8 text-center">Comece a aprender sobre finanaças agora de forma fácil e
        <br/>divertida. Abaixo você encontra os nossos módulos liberados de acordo com sua necessidade no momento.</p>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 xl:gap-6 lg:space-y-0">
        {data?.map((module) => 
          (
            module.name
          ))
        }
      </div>

      <Footer></Footer>
    </main>
	)
}

export default Dashboard;

