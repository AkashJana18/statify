import { useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

interface SignUpFormProps {
  signUpWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SignupForm = ({ signUpWithEmail, clerkError }: SignUpFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, isLoaded } = useSignUp();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpWithEmail({ emailAddress: email, password });
  };

  const handleGoogleSignUp = async () => {
    if (!isLoaded || !signUp) return;
    try {
      await signUp.create({
        strategy: "oauth_google",
        redirectUrl: "/sign-in",
      });
    } catch (err: any) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("An error occurred during Google sign-up. Please try again.");
      }
    }
  };

  return (
    <div className="">
      <div className="">
        <h1 className="mb-6 text-3xl font-light text-white">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 border-slate-600 text-white caret-slate-700 focus:border-white"
            placeholder="Email address"
            type="email"
            required
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 border-slate-600 text-white caret-slate-700 focus:border-white"
            placeholder="Password"
            type="password"
            required
          />
          {(clerkError || error) && (
            <p className="text-red-500 mb-4">{clerkError || error}</p>
          )}
          <button
            className="w-full h-12 mb-6 text-sm font-light text-white hover:text-blue-900 hover:bg-white bg-slate-700 rounded-md"
            type="submit"
          >
            Create an account
          </button>
        </form>
        <p className="text-sm font-light text-center text-white">
          Already have an account?
          <Link className="ml-2 text-slate-200" href="/sign-in">
            Login
          </Link>
        </p>
        {/* <button
          onClick={handleGoogleSignUp}
          className="w-full h-12 mt-6 text-sm font-light text-white hover:text-blue-900 hover:bg-white bg-slate-700 rounded-md"
        >
          Sign up with Google
        </button> */}
      </div>
    </div>
  );
};

export default SignupForm;
