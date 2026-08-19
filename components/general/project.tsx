"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";

import { FolderKanban, GithubIcon, Rss, ArrowUpRight } from "lucide-react";

import { motion, type Variants } from "motion/react";

import SAAS_Image from "@/public/saas.png";
import axon from "@/public/axon.png";
import FileAnalyzer from "@/public/fileanalyzer.png";

import {
  BetterAuthLogo,
  JavascriptLogo,
  NeonLogo,
  NextJsLogo,
  PrismaLogo,
  ReactLogo,
  ShadcnLogo,
  TailwindLogo,
  TypeScriptLogo,
} from "./logos";

/* ============================================================
   ANIMATIONS
============================================================ */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   PROJECT DATA
============================================================ */

const projects = [
  {
    href: "https://soham-hirenest.vercel.app/",
    image: SAAS_Image,
    alt: "B2B SaaS Marketplace",
    title: (
      <>
        <span className="text-primary">B2B SAAS</span> Marketplace Platform
      </>
    ),
    description:
      "Next.js · React.js · Prisma · Neon · Stripe · Tailwind CSS · Shadcn UI · Inngest · Arcjet",
  },

  {
    href: "https://axon-roan.vercel.app",
    image: axon,
    alt: "AXON AI Ticketing System",
    title: (
      <>
        <span className="text-primary">AXON</span> — AI Powered Ticketing System
      </>
    ),
    description:
      "Next.js · React.js · Prisma · Neon · Tailwind CSS · Shadcn UI · Gemini · Inngest · Better Auth",
  },

  {
    href: "https://v0-ai-chat-with-file-processing-rte.vercel.app/",
    image: FileAnalyzer,
    alt: "AI File Analyzer",
    title: (
      <>
        <span className="text-primary">AI Powered</span> File Analyzer
      </>
    ),
    description:
      "Next.js · React.js · Vercel v0 · Tailwind CSS · Shadcn UI · Gemini · Lucide React",
  },
];

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  href,
  image,
  alt,
  title,
  description,
}: {
  href: string;
  image: typeof SAAS_Image;
  alt: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <motion.div variants={cardVariants}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <motion.div
          whileHover={{
            y: -5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 24,
          }}
          className="
            group
            relative
            flex
            h-full
            w-full
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-border/70
            bg-background/40
            transition-colors
            duration-300
            hover:border-primary/60
            md:max-w-md
          "
        >
          {/* ==================================================
              IMAGE
          ================================================== */}

          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={alt}
              width={600}
              height={350}
              className="
                h-auto
                w-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* View icon */}

            <div
              className="
                absolute
                right-4
                top-4
                flex
                h-9
                w-9
                translate-y-1
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-background/80
                text-foreground
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* ==================================================
              INFO
          ================================================== */}

          <div className="flex flex-1 flex-col p-4">
            <h2
              className="
                text-center
                font-sans
                text-base
                font-semibold
                leading-6
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-2
                text-center
                font-mono
                text-xs
                leading-6
                text-foreground/55
              "
            >
              {description}
            </p>

            {/* ==================================================
                ACTIONS
            ================================================== */}

            <div className="mt-auto flex items-center justify-center gap-3 pt-5">
              <span
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-border
                  bg-background/70
                  px-3
                  py-2
                  font-mono
                  text-xs
                  font-medium
                  text-primary
                  transition-colors
                  duration-200
                  group-hover:border-primary/40
                "
              >
                View project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-border
                  bg-background/70
                  px-3
                  py-2
                  font-mono
                  text-xs
                  font-medium
                  text-primary
                  transition-colors
                  duration-200
                  group-hover:border-primary/40
                "
              >
                <Rss className="h-3.5 w-3.5" />
                Live app
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ============================================================
   MY PROJECTS
============================================================ */

export function MyProjects() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={containerVariants}
    >
      <Card
        className="
          group
          relative
          mt-4
          overflow-hidden
          border
          border-border/70
          bg-transparent
          transition-colors
          duration-300
          hover:border-primary/50
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <CardHeader className="space-y-4">
          <motion.div variants={itemVariants}>
            <CardTitle
              className="
                flex
                items-center
                justify-between
                gap-4
                text-3xl
                font-sans
                md:text-5xl
              "
            >
              <h1>
                My <span className="text-primary">Projects</span>
              </h1>

              <Link
                href="https://github.com/Soham225"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                <GithubIcon />
                GitHub
              </Link>
            </CardTitle>
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardDescription
              className="
                flex
                items-center
                gap-2
                font-mono
                text-xl
                text-foreground/60
                md:gap-4
              "
            >
              <span>Here are some of my projects</span>

              <FolderKanban size={28} className="shrink-0 text-primary" />
            </CardDescription>
          </motion.div>
        </CardHeader>

        <motion.div variants={itemVariants}>
          <Separator />
        </motion.div>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <CardContent className="pt-6">
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {projects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </CardContent>

        {/* ==================================================
            TECH STACK
        ================================================== */}

        <motion.div variants={itemVariants} className="mx-6 mb-6">
          <div
            className="
              group/stack
              relative
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              overflow-hidden
              rounded-xl
              border
              border-primary/20
              bg-background/30
              p-5
              md:justify-around
              md:gap-2
            "
          >
            {/* ==================================================
                STATIC AMBIENT GLOW
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-40
                w-40
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-primary/[0.06]
                blur-[60px]
              "
            />

            {/* ==================================================
                SUBTLE STATIC GRID
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.10]
                [background-image:linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            {/* ==================================================
                LOGOS
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-wrap
                items-center
                justify-center
                gap-5
                md:justify-around
                md:gap-2
              "
            >
              {[
                NextJsLogo,
                ReactLogo,
                ShadcnLogo,
                PrismaLogo,
                NeonLogo,
                JavascriptLogo,
                TypeScriptLogo,
                TailwindLogo,
                BetterAuthLogo,
              ].map((Logo, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.3,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  className={index === 8 ? "hidden md:block" : ""}
                >
                  <Logo />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}