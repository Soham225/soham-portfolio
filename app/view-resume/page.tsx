import Image from "next/image";
import resume from "@/public/resume.png";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Resume() {
  return (
    <div className="min-h-screen w-full  justify-center items-center flex flex-col gap-4">
      <Link
        href={"/"}
        className={cn(buttonVariants(), "flex items-center gap-2")}
      >
        <span>
          <ArrowLeft />
        </span>
        <span>Go Back</span>
      </Link>
      <Image src={resume} alt="My Resume" className="h-auto w-auto" />
    </div>
  );
}
