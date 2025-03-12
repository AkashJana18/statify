"use client";

import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import { IconBrandGoogle } from "@tabler/icons-react";

export function SocialSignIn() {
  const { signUp, isLoaded } = useSignUp();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSocialSignUp = async (
    strategy: "oauth_google" | "oauth_github"
  ) => {
    if (!isLoaded || !signUp) return;

    try {
      if (strategy === "oauth_google") {
        setIsGoogleLoading(true);
      } else {
        setIsGithubLoading(true);
      }

      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError(
          `An error occurred during ${
            strategy === "oauth_google" ? "Google" : "GitHub"
          } sign-up`
        );
      }
    } finally {
      setIsGoogleLoading(false);
      setIsGithubLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        variant="outline"
        className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white"
        onClick={() => handleSocialSignUp("oauth_google")}
        disabled={isGoogleLoading || !isLoaded}
      >
        {isGoogleLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <IconBrandGoogle className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
      <Button
        variant="outline"
        className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white"
        onClick={() => handleSocialSignUp("oauth_github")}
        disabled={isGithubLoading || !isLoaded}
      >
        {isGithubLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Github className="mr-2 h-4 w-4" />
        )}
        GitHub
      </Button>
      {error && <p className="col-span-2 text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
}
