import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 p-4 bg-transparent backdrop-blur-lg shadow">
      <div className="text-2xl font-bold">Statify</div>
      <nav className="flex justify-evenly items-center space-x-8">
        <div className="flex max-w-sm items-center space-x-2 mx-16">
          <Input type="text" placeholder="Search Services..." />
          <Button type="submit" variant="secondary">Search</Button>
        </div>
        <div className="space-x-4">
          <Link href="#" className="hover:underline">
            Status
          </Link>
          <Link href="#" className="hover:underline">
            Monitoring
          </Link>
          <Link href="#" className="hover:underline">
            Contact Support
          </Link>
        </div>

        <div className="flex max-w-sm items-center space-x-2">
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
