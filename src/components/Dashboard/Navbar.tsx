"use client"
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { House, Menu, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { link } from "fs";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ? "text-foreground" : "text-muted-foreground";
  };
  return (
    <header className="sticky w-full rounded-lg top-0 flex h-16 items-center gap-[17rem] border-b bg-transparent backdrop-blur-lg px-4 md:px-6 z-[999]">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className={`flex items-center gap-2 text-lg font-semibold md:text-base`}
        >
          <House className="h-6 w-6" />
          <span className="sr-only">Statify</span>
        </Link>
        <Link
          href="/dashboard"
          className={`text-foreground transition-colors hover:text-foreground ${isActive("/dashboard")}`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/incidents"
          className={`hover:text-foreground ${isActive("/dashboard/incidents")}`}
        >
          Incidents
        </Link>
        <Link
          href="#sytems"
          className={`text-muted-foreground transition-colors hover:text-foreground`}
        >
          Systems
        </Link>
        <Link
          href="#analytics"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Analytics
        </Link>
        <Link
          href="#activity"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Activity
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <House className="h-6 w-6" />
              <span className="sr-only">Statify</span>
            </Link>
            <Link href="/dashboard" className={`hover:text-foreground ${isActive("/dashboard")}`}>
              Dashboard
            </Link>
            <Link
              href="/dashboard/incidents"
              className={`text-muted-foreground hover:text-foreground ${isActive("/dashboard/incidents")}`}
            >
              Incidents
            </Link>
            <Link
              href="#"
              className={`text-muted-foreground hover:text-foreground`}
            >
              Systems
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Activity Log
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search incidents..."
              className="pl-8 sm:w-[200px] md:w-[100px] lg:w-[200px]"
            />
          </div>
        </form>

        <SignedOut>
          <div className="border hidden sm:block text-sm sm:text-base font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white/90 px-4 py-2 rounded-lg bg-background/50">
            <SignInButton />
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
