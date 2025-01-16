import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const NavLinks = ({ isMobile }: { isMobile?: boolean }) => (
  <div className={`flex ${isMobile ? "flex-col space-y-4" : "items-center space-x-6"}`}>
    <div className={`flex max-w-sm items-center space-x-2 ${isMobile ? "w-full" : ""}`}>
      <Input type="text" placeholder="Search Services..." className={`${isMobile ? "w-full" : "max-w-xs"}`} />
      <Button type="submit" variant="secondary">
        {isMobile ? <IconSearch size={20} /> : "Search"}
      </Button>
    </div>
    <Link href="#" className="hover:underline">
      Status
    </Link>
    <Link href="#" className="hover:underline">
      Monitoring
    </Link>
    <Link href="#" className="hover:underline">
      Contact Support
    </Link>
    <div className={`flex ${isMobile ? "flex-col space-y-2" : "space-x-4"}`}>
      <Button asChild variant="outline">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 p-4 bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="text-2xl font-bold">Statify</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLinks />
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden p-2">
          <IconMenu2 size={24} />
        </SheetTrigger>
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

export default Navbar;
