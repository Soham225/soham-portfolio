"use client";

import { ThemeToggle } from "@/components/general/themetoggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Code2,
  Contact,
  FolderClosed,
  Menu,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const navItems = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#certificate",
    label: "Certifications",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        border-b
        border-b-primary/20
        bg-background
        pb-2
      "
    >
      {/* ============================================================
          LOGO
      ============================================================ */}

      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.05,
          ease: "easeOut",
        }}
        className="
          flex
          items-center
          justify-center
          gap-2
          text-3xl
          font-bold
        "
      >
        {/* Logo icon */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.06,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          className="
            relative
            rounded-full
            border
            border-primary
            bg-card
            p-2
            text-primary
          "
        >
          <Code2 size={20} className="relative z-10" />
        </motion.div>

        {/* Name */}
        <span
          className="
            font-sans
            text-[1rem]
            font-semibold
            underline
            underline-offset-8
            sm:text-2xl
          "
        >
          SOHAM
        </span>
      </motion.h1>

      {/* ============================================================
          RIGHT SIDE
      ============================================================ */}

      <div
        className="
          flex
          items-center
          gap-3
          rounded-lg
          px-2
          py-2
          sm:gap-4
          sm:px-4
        "
      >
        {/* ========================================================
            DESKTOP NAV
        ======================================================== */}

        <div className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "group relative font-mono font-semibold",
              )}
            >
              {item.label}

              {/* Simple hover underline */}
              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-primary
                  transition-all
                  duration-200
                  group-hover:w-1/2
                "
              />
            </Link>
          ))}
        </div>

        {/* ========================================================
            RESUME
        ======================================================== */}

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            relative
            inline-block
            overflow-hidden
            rounded-xl
            border
            border-primary/50
            p-px
          "
        >
          <Link
            href="/view-resume"
            className="
              group
              relative
              flex
              items-center
              rounded-xl
              bg-background
              px-3
              py-2
              font-mono
              text-sm
              font-semibold
              transition-colors
              duration-200
              hover:text-primary
              sm:px-7
            "
          >
            Resume
            <span
              className="
                ml-2
                h-1
                w-1
                rounded-full
                bg-primary
                opacity-0
                transition-opacity
                duration-200
                group-hover:opacity-100
              "
            />
          </Link>
        </motion.div>

        {/* ========================================================
            THEME TOGGLE
        ======================================================== */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 18,
          }}
        >
          <ThemeToggle />
        </motion.div>

        {/* ========================================================
            MOBILE MENU
        ======================================================== */}

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                whileTap={{
                  scale: 0.92,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-md
                  p-1
                  text-foreground
                  hover:text-primary
                "
                aria-label="Open navigation menu"
              >
                <Menu size={25} />
              </motion.button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mt-2" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="#about"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <User />
                    <span>About</span>
                  </Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem asChild>
                  <Link
                    href="#projects"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <FolderClosed />
                    <span>Projects</span>
                  </Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem asChild>
                  <Link
                    href="#certificate"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <ShieldCheck />
                    <span>Certificates</span>
                  </Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem asChild>
                  <Link
                    href="#contact"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <Contact />
                    <span>Contact</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
}