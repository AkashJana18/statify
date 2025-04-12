import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import { ReactNode } from "react";

import Navbar from "@/components/Dashboard/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat", // Define the variable for Montserrat
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Statify",
  description: "Created by Akash Jana",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
              <div className="">
                <Navbar/>
                {children}
              </div>
  );
}