"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import SignupForm from "@/components/Auth/SignupForm";
import VerifyForm from "@/components/Auth/VerifyForm";
import { toast } from "sonner";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const [verifyError, setVerifyError] = useState("");

  const signUpWithEmail = async ({
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
      await signUp.create({
        emailAddress,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast.success("Verification code sent to your email");
      setVerifying(true);
    } catch (err: any) {
      toast.error(err.errors[0].longMessage);
      setClerkError(err.errors[0].longMessage);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
        toast.success("Verification code sent to your email");
        setVerifying(true);
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        toast.success("Account verified successfully");
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.log("Error:", JSON.stringify(err, null, 2));
      setVerifyError(err.errors[0].longMessage);
      toast.error(err.errors[0].longMessage);
    }
  };

  return (
    <>
      {!verifying ? (
        <SignupForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />
      ) : (
        <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} verifyError={verifyError} setVerifing={setVerifying} />
      )}
    </>
  );
};

export default Signup;
