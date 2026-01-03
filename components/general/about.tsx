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

export function About() {
  return (
    <Card className="bg-transparent  border hover:border-primary transition-all duration-300 mt-4">
      <CardHeader>
        <CardTitle className="text-3xl font-sans font-bold text-primary ">
          <span>About Myself</span>
        </CardTitle>
        <CardDescription className="text-xl font-mono flex items-center gap-3">
          An introduction about me
          <CircleUserRound size={30} className="text-primary" />
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="rounded-lg">
            <p className="text-balance text-2xl font-mono tracking-tight font-medium">
              My name is Soham. I’m interested in full-stack web development and
              enjoy building real-world web applications using modern tools and
              workflows. I primarily work with Next.js, Prisma, Neon and have
              experience developing scalable features such as authentication,
              background jobs, and secure FullStack web apps. I focus on
              building complete products end-to-end and I’m actively looking for
              opportunities where I can contribute, learn and grow as a
              full-stack developer.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={Stack}
              alt="stack image"
              height={400}
              width={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
