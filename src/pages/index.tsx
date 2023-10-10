import Head from "next/head";
import { PageControl } from "~/components/pageControl";
import { useUser } from "@clerk/nextjs";
import { CreateChatBot } from "~/components/bubble";

export default function Home() {
  const {user} = useUser();

  CreateChatBot();

  return (
    <>
      <Head>
        <title>Mill</title>
        <meta name="description" content="Mill plataforma gamificada de educação financeira" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <main>{/* Melhorar renderização condicional da home */}
        <PageControl logged={user ? true : false}/>
      </main>
    </>
  );
}
