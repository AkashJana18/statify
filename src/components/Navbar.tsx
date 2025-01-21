"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ThemeButton } from "./ui/theme-btn";

const NavLinks = ({ isMobile }: { isMobile?: boolean }) => (
  <div
    className={`flex ${
      isMobile ? "flex-col space-y-4" : "items-center space-x-6"
    }`}
  >
    <div
      className={`flex max-w-sm items-center space-x-2 ${
        isMobile ? "w-full" : ""
      }`}
    >
      <Input
        type="text"
        placeholder="Search Services..."
        className={`${isMobile ? "w-full" : "max-w-xs"}`}
      />
      <Button type="submit" variant="default">
        {isMobile ? <IconSearch size={20} /> : "Search"}
      </Button>
    </div>
    <Link href="#" className="hover:text-foreground text-foreground/80">
      User
    </Link>
    <Link href="#" className="hover:text-foreground text-foreground/80">
      Admin Panel
    </Link>

    <div className={`flex ${isMobile ? "flex-col space-y-2" : "space-x-4"}`}>
      <SignedOut>
        <Button>
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 p-4 bg-background/50 backdrop-blur-lg shadow-md z-50 border-b">
      <Link href="/" className="text-2xl font-bold">
        Statify
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLinks />
        <ThemeButton />
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <div className="md:hidden p-2 flex justify-center items-center gap-4">
          <ThemeButton />
          <SheetTrigger>
            <IconMenu2 size={24} />
          </SheetTrigger>
        </div>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Statify</SheetTitle>
          </SheetHeader>
          <NavLinks isMobile />
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false }); // Ensure client-side rendering
