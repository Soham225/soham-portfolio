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
import { ShieldCheck } from "lucide-react";

export function Certificate() {
  return (
    <Card className="bg-transparent border hover:border-primary transition-all duration-300 mt-4">
      <CardHeader>
        <CardTitle className="text-3xl md:text-5xl font-bold font-sans text-primary">
          Certifications
        </CardTitle>
        <CardDescription className="text-xl flex items-center gap-2">
          <span className="font-mono">View my certifications</span>
          <span className="text-primary">
            <ShieldCheck size={25} />
          </span>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src={AIML}
            alt="AI ML"
            className="rounded-lg w-full h-32 md:h-64 border hover:bg-primary transition-all duration-300"
          />
          <Image
            src={Alteryx}
            alt="Alteryx"
            className="rounded-lg w-full h-32 md:h-64 border hover:bg-primary transition-all duration-300"
          />
          <Image
            src={DataAnalytics}
            alt="Data Analytics"
            className="rounded-lg w-full  h-32 md:h-64 border hover:bg-primary transition-all duration-300"
          />
          <Image
            src={Postman}
            alt="Postman"
            className="rounded-lg w-full h-32 md:h-64 border hover:bg-primary transition-all duration-300"
          />
        </div>
      </CardContent>
    </Card>
  );
}
