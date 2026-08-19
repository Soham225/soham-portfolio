"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import AIML from "@/public/AIML.png";
import Alteryx from "@/public/Alteryx.png";
import Postman from "@/public/postman.png";
import DataAnalytics from "@/public/DataAnalytics.png";

import { Separator } from "../ui/separator";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const certificates = [
  {
    image: AIML,
    title: "AI & Machine Learning",
    number: "01",
  },
  {
    image: Alteryx,
    title: "Alteryx",
    number: "02",
  },
  {
    image: DataAnalytics,
    title: "Data Analytics",
    number: "03",
  },
  {
    image: Postman,
    title: "Postman",
    number: "04",
  },
];

export function Certificate() {
  return (
    <Card
      className="
        relative
        mt-4
        overflow-hidden
        border
        bg-transparent
        transition-all
        duration-500
        hover:border-primary/50
      "
    >
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(to_right,hsl(var(--primary)/0.035)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.035)_1px,transparent_1px)]
          [background-size:44px_44px]
        "
      />

      {/* Ambient glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-primary/[0.07]
          blur-[110px]
        "
        animate={{
          x: [0, -45, 0],
          y: [0, 40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/4
          h-[280px]
          w-[280px]
          rounded-full
          bg-primary/[0.045]
          blur-[100px]
        "
        animate={{
          x: [0, 60, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header */}
      <CardHeader className="relative z-10 space-y-4 pb-6">
        <CardTitle
          className="
            flex
            items-center
            gap-4
            text-3xl
            font-semibold
            tracking-tight
            md:text-5xl
          "
        >
          <span>
            My <span className="text-primary">Certifications</span>
          </span>

          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShieldCheck className="h-7 w-7 text-primary md:h-9 md:w-9" />
          </motion.div>
        </CardTitle>

        <CardDescription
          className="
            max-w-2xl
            font-mono
            text-sm
            leading-7
            text-foreground/60
            md:text-base
          "
        >
          A collection of certifications and learning milestones from my
          technical journey.
        </CardDescription>
      </CardHeader>

      <Separator />

      {/* Certificates */}
      <CardContent className="relative z-10 p-5 md:p-8">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {certificates.map(({ image, title, number }, index) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-1
                  rounded-2xl
                  bg-primary/[0.08]
                  opacity-0
                  blur-xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border/70
                  bg-background/50
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  group-hover:border-primary/50
                  group-hover:bg-background/70
                "
              >
                {/* Top metadata */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-border/60
                    px-4
                    py-3
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    Certificate
                  </span>

                  <span className="font-mono text-[10px] text-foreground/35">
                    {number}
                  </span>
                </div>

                {/* Certificate image */}
                <div
                  className="
                    relative
                    flex
                    h-[250px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    bg-background/80
                    sm:h-[270px]
                    lg:h-[250px]
                  "
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="
                      object-contain
                      p-1
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  {/* Subtle image gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-background/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Hover shine */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-[70%]
                      w-1/3
                      skew-x-[-20deg]
                      bg-white/[0.08]
                      transition-all
                      duration-700
                      group-hover:left-[130%]
                    "
                  />

                  {/* Corner arrow */}
                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-black/30
                      text-white/70
                      opacity-0
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        font-mono
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      {title}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border/70
                      text-primary
                      transition-all
                      duration-300
                      group-hover:border-primary/40
                      group-hover:bg-primary/10
                    "
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-primary
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
