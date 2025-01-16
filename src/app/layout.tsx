import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat", // Define the variable for Montserrat
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Statify",
  description: "Created by Akash Jana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en suppressHydrationWarning">
      <body
        className={`${montserrat.variable} antialiased`} // Use Montserrat variable
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
