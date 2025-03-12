"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import SigninForm from "@/components/Auth/SigninForm";

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signInWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      setClerkError(err.errors[0].message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      if (!signIn) {
        throw new Error("signIn is not defined");
      }
      const result = await signIn.create({
        strategy: "google_one_tap",
        token: "your-google-one-tap-token", // Replace with the actual token
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SigninForm signInWithEmail={signInWithEmail} clerkError={clerkError} />
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
};

export default Signin;
