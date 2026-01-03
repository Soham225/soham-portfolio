import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import SAAS_Image from "@/public/saas.png";
import { Separator } from "../ui/separator";
import Lab from "@/public/lab.png";
import { FolderKanban, GithubIcon, Rss } from "lucide-react";
import FileAnalyzer from "@/public/fileanalyzer.png";
import { buttonVariants } from "../ui/button";
import {
  BetterAuthLogo,
  JavascriptLogo,
  NeonLogo,
  NextJsLogo,
  PrismaLogo,
  ShadcnLogo,
  TailwindLogo,
  TypeScriptLogo,
} from "./logos";

export function MyProjects() {
  return (
    <Card className="bg-transparent  border hover:border-primary transition-all duration-300 mt-4">
      <CardHeader className="space-y-4">
        <CardTitle className=" text-3xl md:text-5xl font-sans flex items-center justify-between gap-4">
          <h1>
            My <span className="text-primary">Projects</span>
          </h1>
          <Link
            href={"https://github.com/Soham225"}
            className={buttonVariants({})}
          >
            <GithubIcon /> Github
          </Link>
        </CardTitle>
        <CardDescription className="font-semibold font-sans text-2xl">
          <div className="flex items-center gap-2 md:gap-4">
            <span className="font-mono text-xl">
              Here are some of my projects
            </span>
            <span>
              <FolderKanban size={30} className="text-primary" />
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <Link href={"https://soham-hirenest.vercel.app/"}>
            <div className="flex flex-col max-w-md w-full hover:shadow-lg transition-all duration-300 hover:border-primary border rounded-lg">
              <Image
                src={SAAS_Image}
                alt="1st project"
                height={300}
                className="w-auto rounded-t-lg"
              />
              <div className="p-2 space-y-1">
                <h1 className="text-center font-sans font-semibold ">
                  <span className="text-primary">B2B SAAS</span> Marketplace
                  Platform
                </h1>
                <p className="text-muted-foreground font-semibold text-balance text-center">
                  Next js ** Prisma ** Neon ** Stripe ** Tailwind CSS ** ShadCn
                  UI ** Inngest ** Arcjet ...
                </p>
              </div>
              <div className="flex justify-around items-center p-2 space-y-1">
                <p className="text-primary font-semibold font-sans border border-border bg-card rounded-lg p-2">
                  View project
                </p>
                <p className="flex items-center text-primary font-semibold font-sans border border-border bg-card rounded-lg p-2 gap-2 ">
                  <span>
                    <Rss size={20} />
                  </span>
                  Live app
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={
              "https://soham-lab-git-main-soham-duttas-projects-2bb0f675.vercel.app/"
            }
          >
            <div className="flex flex-col max-w-md w-full hover:shadow-lg transition-all duration-300 hover:border-primary border rounded-lg">
              <Image
                src={Lab}
                alt="2nd project"
                height={300}
                className="w-auto rounded-t-lg"
              />
              <div className="p-2 space-y-1">
                <h1 className="text-center font-sans font-semibold ">
                  <span className="text-primary">AI Powered</span> Lab Report
                  Analyzer
                </h1>
                <p className="text-muted-foreground font-semibold text-balance text-center">
                  Next js ** Prisma ** Neon ** Tailwind CSS ** ShadCn UI **
                  Gemini ** LangChain ** ...
                </p>
              </div>
              <div className="flex justify-around items-center p-2 space-y-1">
                <p className="text-primary font-semibold font-sans border border-border bg-card rounded-lg p-2">
                  View project
                </p>
                <p className="flex items-center text-primary font-semibold font-sans border border-border bg-card rounded-lg p-2 gap-2 ">
                  <span>
                    <Rss size={20} />
                  </span>
                  Live app
                </p>
              </div>
            </div>
          </Link>
          <Link
            href={"https://v0-ai-chat-with-file-processing-rte.vercel.app/"}
          >
            <div className="flex flex-col max-w-md w-full hover:shadow-lg transition-all duration-300 hover:border-primary border rounded-lg">
              <Image
                src={FileAnalyzer}
                alt="3rd project"
                height={300}
                className="w-auto rounded-t-lg"
              />
              <div className="p-2 space-y-1">
                <h1 className="text-center font-sans font-semibold ">
                  <span className="text-primary">AI Powered</span> File Analyzer
                  (Group Project)
                </h1>
                <p className="text-muted-foreground font-semibold text-balance text-center">
                  Next js ** Vercel - V0 ** Tailwind CSS ** ShadCn UI ** Gemini
                  ** Lucid React ...
                </p>
              </div>
              <div className="flex justify-around items-center p-2 space-y-1">
                <p className="text-primary font-semibold font-sans border border-border bg-card rounded-lg p-2">
                  View project
                </p>
                <p className="flex items-center text-primary font-semibold font-sans border border-border bg-card rounded-lg p-2 gap-2 ">
                  <span>
                    <Rss size={20} />
                  </span>
                  Live app
                </p>
              </div>
            </div>
          </Link>
        </div>
      </CardContent>
      <div className="mx-6 rounded-lg">
        <div className="flex items-center justify-around rounded-lg border hover:border-primary transition-all duration-300 gap-2 p-4">
          <NextJsLogo />
          <ShadcnLogo />
          <PrismaLogo />
          <NeonLogo />

          <JavascriptLogo />
          <TypeScriptLogo />
          <TailwindLogo />
          <BetterAuthLogo />
        </div>
      </div>
    </Card>
  );
}
