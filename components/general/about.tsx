"use client";

import Image from "next/image";
import Stack from "@/public/TechStack.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Separator } from "../ui/separator";
import { CircleUserRound } from "lucide-react";
import { motion, type Variants } from "motion/react";

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   ABOUT
============================================================ */

export function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={containerVariants}
    >
      <Card
        className="
          group
          relative
          mt-2
          overflow-hidden
          border
          border-border/70
          bg-transparent
          transition-colors
          duration-500
          hover:border-primary/50
          sm:mt-4
        "
      >
        {/* ==================================================
            SUBTLE BACKGROUND GLOW
            Desktop only — avoids expensive blur on mobile
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            hidden
            h-72
            w-72
            rounded-full
            bg-primary/[0.05]
            blur-[100px]
            md:block
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ==================================================
            HEADER
        ================================================== */}

        <CardHeader className="relative">
          <motion.div variants={itemVariants}>
            <CardTitle
              className="
                text-3xl
                font-sans
                font-bold
                tracking-tight
                text-primary
                sm:text-4xl
              "
            >
              About Myself
            </CardTitle>
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardDescription
              className="
                flex
                items-center
                gap-3
                font-mono
                text-lg
                text-foreground/60
                sm:text-xl
              "
            >
              <span>An introduction about me</span>

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CircleUserRound size={28} className="text-primary" />
              </motion.div>
            </CardDescription>
          </motion.div>
        </CardHeader>

        {/* Animated separator */}
        <motion.div variants={itemVariants}>
          <Separator />
        </motion.div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <CardContent className="relative">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">
            {/* ==================================================
                TEXT
            ================================================== */}

            <motion.div variants={itemVariants}>
              <p
                className="
                  max-w-2xl
                  text-balance
                  font-mono
                  text-xl
                  font-medium
                  leading-8
                  tracking-tight
                  sm:text-xl
                  sm:leading-9
                "
              >
                My name is Soham. I’m interested in full-stack web development
                and enjoy building real-world web applications using modern
                tools and workflows. I primarily work with Next.js, React.js,
                Prisma, Neon and have experience developing scalable features
                such as authentication, background jobs, and secure FullStack
                web apps. I focus on building complete products end-to-end and
                I’m actively looking for opportunities where I can contribute,
                learn and grow as a full-stack developer.
              </p>
            </motion.div>

            {/* ==================================================
                TECH STACK
            ================================================== */}

            <motion.div
              variants={imageVariants}
              className="
                relative
                flex
                items-center
                justify-center
                py-6
              "
            >
              {/* ==================================================
                  IMAGE GLOW
                  Desktop only
              ================================================== */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  hidden
                  h-64
                  w-64
                  rounded-full
                  bg-primary/[0.07]
                  blur-[80px]
                  md:block
                "
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ==================================================
                  FLOATING IMAGE
                  Floating animation only on desktop
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.035,
                  y: -5,
                }}
                className="
                  relative
                  z-10
                  w-full
                  max-w-[400px]
                  cursor-default
                "
              >
                <Image
                  src={Stack}
                  alt="Technology stack"
                  width={400}
                  height={400}
                  className="
                    w-full
                    rounded-lg
                    object-contain
                    transition-[filter]
                    duration-700
                    group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.12)]
                  "
                />
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}