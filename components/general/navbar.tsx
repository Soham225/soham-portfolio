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
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        flex
        items-center
        justify-between
        pb-2
        border-b
        border-b-primary/20
        sticky
        top-0
        z-50
        bg-background
      "
    >
      {/* ============================================================
          LOGO
      ============================================================ */}

      <motion.h1
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="text-3xl font-bold flex items-center justify-center gap-2"
      >
        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="
            relative
            rounded-full
            p-2
            bg-card
            text-primary
            border
            border-primary
          "
        >
          {/* subtle pulse */}
          <motion.div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-primary
            "
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Code2 size={20} className="relative z-10" />
        </motion.div>

        <span className="font-semibold font-sans text-[1rem] sm:text-2xl underline underline-offset-8">
          SOHAM
        </span>
      </motion.h1>

      {/* ============================================================
          RIGHT SIDE
      ============================================================ */}

      <div className="flex items-center gap-6 px-4 py-2 rounded-lg">
        {/* ========================================================
            DESKTOP NAV
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="hidden md:flex"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.25 + index * 0.07,
              }}
              whileHover={{
                y: -2,
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "group relative font-semibold font-mono",
                )}
              >
                {item.label}

                {/* tiny animated underline */}
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[1px]
                    w-0
                    -translate-x-1/2
                    bg-primary
                    transition-all
                    duration-300
                    group-hover:w-1/2
                  "
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ========================================================
            RESUME
        ======================================================== */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            relative
            inline-block
            rounded-xl
            overflow-hidden
            p-[1.5px]
            border
          "
        >
          {/* rotating glow */}
          <div
            className="
              absolute
              inset-0
              animate-[spin_5s_linear_infinite]
              bg-conic
              from-primary
              via-transparent
              via-transparent
              to-primary
            "
          />

          {/* secondary moving glow */}
          <motion.div
            className="
              absolute
              inset-0
              rounded-xl
              bg-primary/20
              blur-md
            "
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Link
            href="/view-resume"
            className="
              group
              relative
              text-sm
              flex
              items-center
              rounded-xl
              bg-background
              p-2
              sm:px-7
              py-2
              font-mono
              font-semibold
              transition-colors
              duration-300
              hover:text-primary
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
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:scale-150
              "
            />
          </Link>
        </motion.div>

        {/* ========================================================
            THEME TOGGLE
        ======================================================== */}

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
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
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                whileTap={{
                  scale: 0.9,
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
                    <span>
                      <User />
                    </span>
                    <span>About</span>
                  </Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem asChild>
                  <Link
                    href="#projects"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <span>
                      <FolderClosed />
                    </span>
                    <span>Projects</span>
                  </Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem asChild>
                  <Link
                    href="#certificate"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <span>
                      <ShieldCheck />
                    </span>
                    <span>Certificates</span>
                  </Link>
                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem asChild>
                  <Link
                    href="#contact"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    <span>
                      <Contact />
                    </span>
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
