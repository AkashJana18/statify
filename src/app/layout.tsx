import { Background } from "@/components/Background";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en suppressHydrationWarning">
        <body
          className={`${montserrat.variable} antialiased`} // Use Montserrat variable
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Background>
              <div className="relative z-30">
                {children}
                <Footer />
              </div>
            </Background>
            <Toaster richColors/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
