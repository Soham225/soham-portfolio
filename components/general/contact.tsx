"use client";

import {
  Contact2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  School,
  User,
  ArrowUpRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const contactItems = [
  {
    icon: User,
    label: "Name",
    value: "Soham Dutta",
  },
  {
    icon: School,
    label: "University",
    value: "Techno India University",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "West Bengal, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9609646695",
    href: "tel:+919609646695",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sohamdutta225@gmail.com",
    href: "mailto:sohamdutta225@gmail.com",
  },
];

const contactLinks = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/soham225",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send me a message",
    href: "mailto:sohamdutta225@gmail.com",
  },
  {
    icon: Phone,
    title: "Call",
    description: "Let's have a conversation",
    href: "tel:+919609646695",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Explore my work",
    href: "https://github.com/Soham225",
  },
];

export function Contact() {
  return (
    <Card
      className="
        relative
        mb-4
        overflow-hidden
        border
        bg-transparent
        transition-all
        duration-500
        hover:border-primary/50
      "
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
          [background-image:linear-gradient(to_right,hsl(var(--primary)/0.035)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.035)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Static ambient glow - cheaper than continuous animation */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[350px]
          w-[350px]
          rounded-full
          bg-primary/[0.07]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-primary/[0.05]
          blur-[100px]
        "
      />

      {/* ============================================================
          HEADER
      ============================================================ */}

      <CardHeader className="relative z-10 space-y-4 pb-6">
        <CardTitle className="flex items-center gap-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Let's <span className="text-primary">Connect</span>
          <Contact2 className="h-7 w-7 text-primary md:h-9 md:w-9" />
        </CardTitle>

        <CardDescription className="max-w-2xl font-mono text-sm leading-7 text-foreground/60 md:text-base">
          Feel free to reach out for opportunities, collaborations, projects, or
          simply to have a conversation.
        </CardDescription>
      </CardHeader>

      <Separator />

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <CardContent className="relative z-10 p-5 md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* ========================================================
              PERSONAL INFORMATION
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border/70
              bg-background/40
              p-5
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-primary/40
            "
          >
            {/* Small accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/60" />

            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Personal details
              </p>

              <p className="mt-2 font-mono text-sm text-foreground/45">
                A few ways to reach me
              </p>
            </div>

            <div className="space-y-2">
              {contactItems.map(({ icon: Icon, label, value, href }, index) => {
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 4 }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-transparent
                      p-3
                      transition-all
                      duration-300
                      hover:border-primary/20
                      hover:bg-primary/[0.04]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-border/70
                        bg-background/60
                        text-primary
                        transition-all
                        duration-300
                        group-hover:border-primary/40
                        group-hover:bg-primary/10
                      "
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                        {label}
                      </p>

                      <p className="mt-1 truncate font-mono text-sm font-medium text-foreground/85 md:text-[15px]">
                        {value}
                      </p>
                    </div>

                    {href && (
                      <ArrowUpRight
                        className="
                          ml-auto
                          h-4
                          w-4
                          shrink-0
                          text-foreground/30
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-primary
                        "
                      />
                    )}
                  </motion.div>
                );

                return href ? (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* ========================================================
              SOCIAL / CONTACT OPTIONS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border/70
              bg-background/40
              p-5
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-primary/40
            "
          >
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Find me online
              </p>

              <p className="mt-2 font-mono text-sm text-foreground/45">
                Choose your preferred way to connect
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map(
                ({ icon: Icon, title, description, href }, index) => (
                  <Link
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.12 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ x: 4 }}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-border/60
                        bg-background/30
                        p-3
                        transition-all
                        duration-300
                        hover:border-primary/40
                        hover:bg-primary/[0.05]
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-border
                          bg-background/70
                          text-primary
                          transition-all
                          duration-300
                          group-hover:border-primary/50
                          group-hover:bg-primary/10
                          group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.12)]
                        "
                      >
                        <Icon className="h-[19px] w-[19px]" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-mono text-sm font-semibold text-foreground">
                          {title}
                        </p>

                        <p className="mt-1 font-mono text-[11px] text-foreground/40">
                          {description}
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                          ml-auto
                          h-4
                          w-4
                          shrink-0
                          text-foreground/25
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-primary
                        "
                      />
                    </motion.div>
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}