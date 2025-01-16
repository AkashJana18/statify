import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-background/50">
      <div className="flex justify-between items-center">
        <p className="mx-2">
          Built by Akash &gt; <span className="font-bold">Statify</span> © 2025.
        </p>
        <div className="space-x-4">
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="mailto:akashjana663@gmail.com" className="hover:underline">
            Contact
          </Link>
        </div>

        <Link
          href="https://github.com/AkashJana18/statify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={40} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
