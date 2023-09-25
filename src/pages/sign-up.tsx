import { type NextPage } from "next";
import { SignUp } from "@clerk/nextjs";

const SignUpPage: NextPage = () => {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-50">
			<SignUp />
      {/*Add use terms component*/}
    </main>
	)
}

export default SignUpPage;

