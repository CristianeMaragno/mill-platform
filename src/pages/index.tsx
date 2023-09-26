import Head from "next/head";
import { LandingPage } from "~/components/landingPage";
import { Dashboard } from "~/components/dashboard";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const {user} = useUser();

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
        <div className={`${!user ? "flex" : "hidden"}`}>
          <LandingPage/>
        </div>
        <div className={`${user ? "flex" : "hidden"}`}>
          <Dashboard/>
        </div>
      </main>
    </>
  );
}
