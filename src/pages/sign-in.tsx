import { type NextPage } from "next";
import { SignIn } from "@clerk/nextjs";

const SignInPage: NextPage = () => {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-50">
			<SignIn />
    </main>
	)
}

export default SignInPage;

