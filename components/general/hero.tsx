"use client";

import Image from "next/image";
import MyImage from "@/public/pic.jpg";

import {
  ArrowUpRight,
  ContactIcon,
  Folder,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  SquareCode,
  Terminal,
} from "lucide-react";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
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

const floatVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ============================================================
   HERO
============================================================ */

export function Hero() {
  const [typedText, setTypedText] = useState("");

  const fullText = "Soham";

  /* ----------------------------------------------------------
     Typing animation
  ---------------------------------------------------------- */

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index += 1;

      setTypedText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 130);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      {/* Technical grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.3]
          dark:opacity-[0.15]
          [background-image:linear-gradient(to_right,hsl(var(--foreground)/0.035)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.035)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Soft radial fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_55%_40%,transparent_0%,hsl(var(--background)/0.45)_55%,hsl(var(--background))_100%)]
        "
      />

      {/* ======================================================
          LEFT AMBIENT GLOW

          Static on small/mid screens.
          Animated only on large screens.
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-[300px]
          w-[300px]
          rounded-full
          bg-primary/[0.05]
          blur-[70px]

          lg:h-[450px]
          lg:w-[450px]
          lg:bg-primary/[0.06]
          lg:blur-[120px]
        "
        animate={{
          x: [0, 45, 0],
          y: [0, -25, 0],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================
          IMAGE-SIDE GLOW

          Smaller + less expensive on mobile.
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[30%]
          h-[240px]
          w-[240px]
          rounded-full
          bg-primary/[0.04]
          blur-[70px]

          lg:h-[350px]
          lg:w-[350px]
          lg:bg-primary/[0.055]
          lg:blur-[110px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================
          FLOATING DETAILS
      ====================================================== */}

      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute left-[6%] top-[25%] hidden sm:block"
      >
        <div className="h-2 w-2 rounded-full bg-primary/50 shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute right-[11%] top-[20%] hidden sm:block"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-primary/35" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-[18%] left-[28%] hidden sm:block"
      >
        <div className="h-2.5 w-2.5 rounded-full border border-primary/30" />
      </motion.div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-80px)]
          max-w-[1450px]
          grid-cols-1
          items-center
          gap-12
          px-4
          pb-16
          pt-8

          sm:px-6

          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-10
          lg:px-8
          lg:pt-2
        "
      >
        {/* ====================================================
            LEFT SIDE
        ==================================================== */}

        <div className="relative">
          {/* Terminal header */}

          <motion.div
            variants={itemVariants}
            className="
              mb-7
              inline-flex
              items-center
              gap-3
              border
              border-border/70
              bg-background/70
              px-3
              py-2
              font-mono
              text-xs
              backdrop-blur-sm
            "
          >
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
            </div>

            <span className="ml-1 text-foreground/60">~/portfolio</span>

            <Terminal className="ml-2 h-3.5 w-3.5 text-primary" />
          </motion.div>

          {/* ==================================================
              DEVELOPER LABEL
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-primary">
              01
            </span>

            <span className="h-px w-8 bg-primary/50" />

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60">
              FullStack Developer
            </span>

            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </motion.div>

          {/* ==================================================
              NAME
          ================================================== */}

          <motion.h1
            variants={itemVariants}
            className="
              text-[clamp(4rem,7.5vw,6.5rem)]
              font-bold
              leading-[1]
              tracking-[-0.035em]
              text-foreground
            "
          >
            {typedText}
          </motion.h1>

          {/* Underline */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: typedText === fullText ? "100%" : 0,
              opacity: typedText === fullText ? 1 : 0,
            }}
            transition={{
              width: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
            className="
              mt-5
              h-[3px]
              max-w-[clamp(14rem,40vw,30rem)]
              bg-primary
            "
          />

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <motion.div variants={itemVariants} className="mt-8 max-w-2xl">
            <p
              className="
                font-mono
                text-xl
                leading-7
                tracking-[-0.01em]
                sm:leading-8
              "
            >
              Passionate about building modern, scalable web applications, with
              strong interest in full-stack development, problem-solving, and
              creating clean, user-focused digital experiences. Looking to apply
              practical project experience to real-world development work and
              continue growing as a developer.
            </p>
          </motion.div>

          {/* ==================================================
              BUTTONS
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {/* Explore */}

            <Link
              href="#projects"
              className="
                group
                relative
                flex
                h-12
                items-center
                gap-3
                overflow-hidden
                border
                border-primary
                bg-primary
                px-5
                font-mono
                text-sm
                font-semibold
                text-primary-foreground
                transition-all
                duration-300
                hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]
              "
            >
              <Folder className="h-4 w-4" />

              <span>Explore work</span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-10
                  w-8
                  skew-x-[-20deg]
                  bg-white/20
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />
            </Link>

            {/* Connect */}

            <Link
              href="#contact"
              className="
                group
                flex
                h-12
                items-center
                gap-3
                border
                border-border
                bg-background/50
                px-5
                font-mono
                text-sm
                font-semibold
                text-foreground
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-primary/50
                hover:bg-primary/5
              "
            >
              <ContactIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

              <span>Connect</span>
            </Link>
          </motion.div>

          {/* ==================================================
              SOCIAL LINKS
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-3"
          >
            {[
              {
                href: "https://www.linkedin.com/in/soham225",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              {
                href: "https://github.com/Soham225",
                label: "GitHub",
                Icon: Github,
              },
              {
                href: "mailto:sohamdutta225@gmail.com",
                label: "Email",
                Icon: Mail,
              },
              {
                href: "tel:+919609646695",
                label: "Phone",
                Icon: Phone,
              },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-border/70
                  bg-background/50
                  text-foreground/60
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <Icon
                  className="
                    h-[17px]
                    w-[17px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>
            ))}

            <div
              className="
                ml-2
                hidden
                items-center
                gap-2
                font-mono
                text-[10px]
                uppercase
                tracking-widest
                text-foreground/50
                sm:flex
              "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Open to opportunities
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            RIGHT SIDE — PROFILE
        ==================================================== */}

        <motion.div
          variants={itemVariants}
          className="
            relative
            flex
            items-center
            justify-center
            lg:-translate-y-1
          "
        >
          {/* ==================================================
              MAIN GLOW

              Smaller on mobile.
          ================================================== */}

          <motion.div
            className="
              absolute
              h-[280px]
              w-[280px]
              rounded-full
              bg-primary/[0.06]
              blur-[65px]

              sm:h-[360px]
              sm:w-[360px]

              lg:h-[460px]
              lg:w-[460px]
              lg:bg-primary/[0.08]
              lg:blur-[90px]
            "
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ==================================================
              OUTER ORBIT

              Hidden on small/mid screens.
              This is one of the more expensive animations.
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              hidden
              h-[440px]
              w-[440px]
              rounded-full
              border
              border-dashed
              border-primary/20

              lg:block
            "
          />

          {/* ==================================================
              SECOND ORBIT

              Hidden below lg.
          ================================================== */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              hidden
              h-[490px]
              w-[490px]
              rounded-full
              border
              border-primary/10

              lg:block
            "
          />

          {/* ==================================================
              PROFILE IMAGE
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
              scale: 1.025,
            }}
            className="
              relative
              h-72
              w-72

              sm:h-[360px]
              sm:w-[360px]

              lg:h-[410px]
              lg:w-[410px]
            "
          >
            {/* Outer frame */}

            <div className="absolute -inset-3 border border-primary/20" />

            {/* Corner accents */}

            <div className="absolute -left-5 -top-5 h-8 w-8 border-l-2 border-t-2 border-primary" />

            <div className="absolute -bottom-5 -right-5 h-8 w-8 border-b-2 border-r-2 border-primary" />

            {/* Image */}

            <div className="group relative h-full w-full overflow-hidden rounded-full border-[5px] border-background shadow-2xl">
              <Image
                src={MyImage}
                alt="Soham"
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 360px, 410px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-primary/10
                  via-transparent
                  to-transparent
                  opacity-60
                "
              />

              {/* ==================================================
                  SCANLINE

                  Hidden on small/mid screens.
              ================================================== */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  hidden
                  h-px
                  bg-primary/60
                  shadow-[0_0_12px_hsl(var(--primary)/0.6)]

                  lg:block
                "
                animate={{
                  top: ["0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* ==================================================
              FLOATING CODE BADGE
          ================================================== */}

          <motion.div
            variants={floatVariants}
            animate="animate"
            className="
              absolute
              -bottom-3
              right-[3%]
              border
              border-primary/30
              bg-background/80
              px-3
              py-2
              font-mono
              text-[10px]
              text-primary
              shadow-lg
              backdrop-blur-md
              sm:right-[5%]
            "
          >
            <div className="flex items-center gap-2">
              <SquareCode className="h-3.5 w-3.5" />

              <span>0x90</span>
            </div>
          </motion.div>

          {/* ==================================================
              SIDE LABEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            className="
              absolute
              -right-2
              top-10
              hidden
              translate-x-full
              border-l
              border-primary/40
              pl-3
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-foreground/50

              lg:block
            "
          >
            <span className="text-primary">01</span>
            <br />
            creative
            <br />
            developer
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ======================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          font-mono
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-foreground/45

          md:flex
        "
      >
        <span className="text-primary">&gt;</span>

        <span>scroll to explore</span>

        <motion.span
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}