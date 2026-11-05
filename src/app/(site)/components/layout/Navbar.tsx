"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggleButton from "../ui/themeToggleButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const pill = `
    px-4 py-2
    rounded-2xl
    uppercase
    tracking-logo
    text-md
    transition-all
    duration-500
    hover:-translate-y-[1px]
  `;

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (href: string) => {
  const active =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return `
    ${pill}
    relative

    after:content-['']
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-[2px]
    after:h-[1px]
    after:rounded-full
    after:bg-primary
    after:transition-all
    after:duration-500

    ${
      active
        ? `
          text-primary

          after:w-[65%]
          after:shadow-[0_0_10px_hsl(var(--primary))/0.45]
        `
        : `
          text-foreground/90

          after:w-0

          hover:text-primary
          hover:after:w-[40%]
        `
    }
  `;
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700
      ${
        scrolled
          ? "pt-2 px-6 md:px-12"
          : "pt-0 px-4 md:px-10 lg:px-16"
      }`}
    >
      <div className="w-full flex justify-center">
        <div
          className={`
            py-2
            relative inline-flex items-center
            rounded-2xl
            transition-all duration-700
            backdrop-blur-2xl
            glass-nav
            bg-background/25
            isolate

            ${
              scrolled
                ? "glass-nav-scrolled"
                : ""
            }

            px-6 md:px-8 xl:px-12
          `}
        >
          {/* DESKTOP NAV */}
          <nav
            className="
              hidden xl:flex
              items-center
              justify-center
              gap-1 lg:gap-2 xl:gap-4 2xl:gap-6
              text-sm xl:text-md
              tracking-[0.12em]
              whitespace-nowrap
              flex-1
              min-w-0
            "
          >
            <div
              className="
                px-4 py-2
                rounded-2xl
                text-primary
                tracking-logo
              "
            >
              <ThemeToggleButton />
            </div>

            <Link className={navLink("/")} href="/">
              About
            </Link>

            <Link className={navLink("/gallery")} href="/gallery">
              Gallery
            </Link>

            <Link className={navLink("/experience")} href="/experience">
              Experience
            </Link>

            <Link className={navLink("/investment")} href="/investment">
              Investment
            </Link>

            <Link
              className={`${navLink("/reserve")} font-bold`}
              href="/reserve"
            >
              Reserve
            </Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              xl:hidden
              flex items-center justify-center
              w-10 h-10
              rounded-full
              bg-primary/10
              border border-primary/50
              text-foreground
              transition-all duration-500
              hover:bg-primary/50
              hover:scale-[1.03]
              hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            xl:hidden
            absolute top-full right-0 mt-3
            w-[60vh] max-w-[30vh] sm:max-w-sm
            rounded-3xl
            glass-nav
            bg-background/30
            backdrop-blur-2xl
            px-5 sm:px-7
            py-4 sm:py-5
            shadow-[0_18px_60px_rgba(0,0,0,0.14)]
            animate-fade-in-soft
            transition-all duration-300
          "
        >
          <div
            className="
              flex flex-col gap-3
              text-sm uppercase tracking-logo
              text-foreground/90
            "
          >
            <ThemeToggleButton />

            <div
              className="
                flex flex-col gap-5
                text-sm uppercase
                text-foreground/90
              "
            >
              <Link
                className={`${navLink("/")} text-center`}
                onClick={() => setMenuOpen(false)}
                href="/"
              >
                About
              </Link>

              <Link
                className={`${navLink("/gallery")} text-center`}
                onClick={() => setMenuOpen(false)}
                href="/gallery"
              >
                Gallery
              </Link>

              <Link
                className={`${navLink("/experience")} text-center`}
                onClick={() => setMenuOpen(false)}
                href="/experience"
              >
                Experience
              </Link>

              <Link
                className={`${navLink("/investment")} text-center`}
                onClick={() => setMenuOpen(false)}
                href="/investment"
              >
                Investment
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                className={`${navLink("/reserve")} text-center font-bold`}
                href="/reserve"
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}