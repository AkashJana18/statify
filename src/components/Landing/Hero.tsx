import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full px-4 pt-16 sm:pt-20 lg:pt-24">
      <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-t from-neutral-800 via-neutral-700 to-neutral-600 dark:from-neutral-800 dark:via-white dark:to-white">
          Monitor and Analyse Your Services in Real-Time
        </h1>
        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-center w-[90%] sm:w-[75%] md:w-[60%] dark:text-neutral-500 text-neutral-600">
          Track the performance of your websites, APIs, and databases
          effortlessly with role-based access and analytics.
        </p>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-4">
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
          <Link href="https://github.com/AkashJana18/statify">
            <button className="border text-sm font-medium relative border-neutral-200 bg-transparent backdrop-blur-lg dark:border-white/[0.2] text-black dark:text-white/90 px-4 py-2 rounded-lg">
              <div className="flex gap-2 items-center">
                <span className="text-md">Star on Github</span>
                <IconBrandGithub />
              </div>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
