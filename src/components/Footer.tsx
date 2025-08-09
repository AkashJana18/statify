"use client"
import { CardsChat } from "@/components/Chat"; // Import the Chat component
import {
  IconBrandGithub,
  IconMail,
  IconMessageChatbot,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { ThemeButton } from "./ui/theme-btn";
import { ScrollToTop } from "./ScrollToTop";//Import Scroll to Top component

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="p-2 bg-transparent border-t backdrop-blur-lg w-full fixed left-0 bottom-0 z-[99]">
      <div className="flex justify-between items-center gap-4 sm:gap-0 px-2">
        {/* Footer Text */}
        <p className="text-center sm:text-left mx-2 sm:text-sm text-xs">
          Built by Akash &gt;{" "}
          <span className="font-bold text-primary dark:text-purple-500">
            Statify
          </span>{" "}
          © 2025.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center sm:justify-end items-center sm:gap-2 gap-1">
          {/* Email Button */}
          <Link href="mailto:akashjana663@gmail.com">
            <Button variant="outline" size="icon">
              <IconMail />
            </Button>
          </Link>

          {/* GitHub Button */}
          <Link
            href="https://github.com/AkashJana18/statify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <IconBrandGithub />
            </Button>
          </Link>

          {/* Theme Toggle Button */}
          <ThemeButton />

          {/* Chatbot Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsChatOpen((prev) => !prev)}
          >
            <IconMessageChatbot />
          </Button>
        </div>
      </div>
      {/* Add scroll to top component */}
      <ScrollToTop/>
      {/* Chat Component - Toggle Visibility */}
      {isChatOpen && <CardsChat />}
    </footer>
  );
};

export default Footer;
