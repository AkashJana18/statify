"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState("true");
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex flex-wrap sm:flex-nowrap max-w-full sm:max-w-fit backdrop-blur fixed top-6 inset-x-4 sm:inset-x-0 mx-auto border rounded-lg shadow-md z-[5000] px-6 sm:px-10 py-2 border-white/[0.2] items-center justify-center gap-4 sm:space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex gap-1 text-neutral-800 dark:hover:text-neutral-300 hover:text-neutral-950"
            )}
          >
            {/* Icon: Visible on smaller screens only */}
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* Nav Item Name: Visible on larger screens only */}
            <span className="hidden sm:block text-sm sm:text-base !cursor-pointer">
              {navItem.name}
            </span>
          </Link>
        ))}
        <Link href={"/dashboard"}>
          <button className="border hidden sm:block text-sm sm:text-base font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white/90 px-4 py-2 rounded-lg bg-background/50">
            <span>Dashboard</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
