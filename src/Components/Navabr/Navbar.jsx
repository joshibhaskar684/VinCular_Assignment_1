

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Industries",
    href: "#industries",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
         
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg">
              V
            </div>

            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vincular
              </h2>

              <p className="text-[11px] text-muted-foreground -mt-1">
                Compliance Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                <span className="flex items-center gap-1">
                  {item.label}

                  {item.label === "Services" && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </span>

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <button className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition">
              Login
            </button>

            <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:scale-105 transition">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-[500px] border-t border-border"
            : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-muted-foreground hover:bg-muted hover:text-foreground transition"
              >
                <span>{item.label}</span>

                {item.label === "Services" && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full rounded-xl border border-border px-5 py-3 font-medium hover:bg-muted transition">
              Login
            </button>

            <button className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-medium text-white shadow-lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}