import {
  Contact2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  School,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <Card className="bg-transparent border hover:border-primary transition-all duration-300 mb-4">
      <CardHeader>
        <CardTitle className="text-5xl font-sans text-primary">
          My Contact Information
        </CardTitle>
        <CardDescription className="font-mono text-xl flex items-center gap-3">
          <span>Feel free to connect with me</span>
          <span>
            <Contact2 className="text-primary" size={30} />
          </span>
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 font-sans gap-4">
          <div className="flex flex-col gap-8 max-w-md w-full rounded-lg p-4 border bg-transparent mx-auto font-mono   text-sm md:text-2xl   hover:border-primary transition-all duration-300">
            <div className="font-bold flex items-center gap-3">
              <User className="text-primary" />
              <h1>Soham Dutta</h1>
            </div>
            <div className="font-bold flex items-center gap-3">
              <School className="text-primary" />
              <h2>Techno India University</h2>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <MapPin className="text-primary" />
              </span>
              <span>India, West Bengal</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>+91 9609646695</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>sohamdutta225@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-md w-full rounded-lg p-4 border bg-transparent mx-auto font-mono   border hover:border-primary transition-all duration-300 ">
            <div className="flex flex-col justify-center items-start gap-10 text-sm md:text-2xl ">
              <Link
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "w-full "
                )}
                href={"https://www.linkedin.com/in/soham225"}
              >
                <Linkedin size={100} className="text-primary" />
                <span className="font-mono">Connect via linkedin</span>
              </Link>

              <a
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "w-full"
                )}
                href="mailto:sohamdutta225@gmail.com"
              >
                <Mail className="text-primary" />
                <span className="font-mono">Send me an email</span>
              </a>

              <Link
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "w-full"
                )}
                href="tel:+919609646695"
              >
                <Phone className="text-primary" />
                <span className="font-mono">Schedule a call</span>
              </Link>

              <Link
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "w-full"
                )}
                href={"https://github.com/Soham225"}
              >
                <Github className="text-primary" />
                <span className="font-mono">Connect through GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
      {/* <div className=" mx-2 p-4 rounded-lg border hover:border-primary transition-all duration-300 flex items-center justify-center gap-10">
        <Link
          className={buttonVariants()}
          href={"https://www.linkedin.com/in/soham225"}
        >
          <Linkedin />
        </Link>

        <Link
          className={buttonVariants()}
          href="mailto:sohamdutta225@gmail.com"
        >
          <Mail />
        </Link>

        <Link className={buttonVariants()} href="tel:+919609646695">
          <Phone />
        </Link>

        <Link className={buttonVariants()} href={"https://github.com/Soham225"}>
          <Github />
        </Link>
      </div> */}
    </Card>
  );
}
