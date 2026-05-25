"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { GrLanguage } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-white/10",
        "bg-black/70 backdrop-blur-sm",
        className
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="text-neutral-400 transition-colors hover:text-white">
            <GrLanguage size={18} />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="border-white/10 bg-neutral-900"
          >
            <DropdownMenuItem asChild>
              <Link href="/pt">🇧🇷 Português</Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/en">🇺🇸 English</Link>
            </DropdownMenuItem>

            
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};