import Image from "next/image";
import MyImage from "@/public/pic.jpg";

import {
  ContactIcon,
  Folder,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  SquareCode,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div>
      <div className="space-y-4">
        <p className="text-xl font-semibold font-mono">
          Welcome to my <span className="text-primary">Portfolio</span>
        </p>

        <div className="text-3xl md:text-5xl font-extrabold font-sans flex items-center gap-8">
          <h1>
            Soham <span className="text-primary">Dutta</span>
          </h1>
          <SquareCode size={40} className="text-primary" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
          <Sparkles className="w-4 h-4" />
          <span>FullStack Web Developer</span>
        </div>
      </div>

      {/* About Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between p-6">
        {/* Text */}
        <div className="md:col-span-1">
          <div className="bg-transparent leading-relaxed space-y-6">
            <p className="text-balance text-2xl font-mono tracking-tight font-medium">
              Passionate about building modern, scalable web applications, with
              strong interest in full-stack development, problem-solving, and
              creating clean, user-focused digital experiences. Looking to apply
              practical project experience to real-world development work and
              continue growing as a developer.
            </p>
            <div className=" hidden md:flex items-center gap-6 mt-10">
              <Link
                className={cn(buttonVariants(), "size-sm md:size-lg")}
                href={"#projects"}
              >
                <Folder />
                Explore My Work
              </Link>
              <Link
                className={cn(buttonVariants(), "size-sm md:size-lg")}
                href={"#contact"}
              >
                <ContactIcon />
                Connect With Me
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <Image
            src={MyImage}
            alt="Soham Dutta"
            height={350}
            width={350}
            className="rounded-full object-cover border-4 border-primary/20 hover:shadow-lg"
            priority
          />
        </div>
      </div>

      <div className=" justify-around md:justify-normal flex items-center gap-6 ">
        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href={"https://www.linkedin.com/in/soham225"}
        >
          <Linkedin />
        </Link>

        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="mailto:sohamdutta225@gmail.com"
        >
          <Mail />
        </Link>

        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href="tel:+919609646695"
        >
          <Phone />
        </Link>

        <Link
          className={buttonVariants({ variant: "secondary", size: "lg" })}
          href={"https://github.com/Soham225"}
        >
          <Github />
        </Link>
      </div>
    </div>
  );
}
