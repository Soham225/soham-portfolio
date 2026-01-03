import { ThemeToggle } from "@/components/general/themetoggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Code2,
  Contact,
  FolderClosed,
  Menu,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <h1 className=" text-3xl font-bold flex items-center justify-center gap-2">
        <div className="rounded-full p-2 bg-card text-primary border border-border">
          <Code2 size={25} />
        </div>
      </h1>
      <div className=" flex items-center gap-6  px-4 py-2 rounded-lg ">
        <div className="hidden  md:flex">
          <Link
            href={"#about"}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-semibold font-mono"
            )}
          >
            About
          </Link>
          <Link
            href={"#projects"}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-semibold font-mono"
            )}
          >
            Projects
          </Link>
          <Link
            href={"#certificate"}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-semibold font-mono"
            )}
          >
            Certifications
          </Link>
          <Link
            href={"#contact"}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-semibold font-mono"
            )}
          >
            Contact
          </Link>
        </div>

        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "font-semibold font-mono"
          )}
        >
          Resume
        </Link>
        <ThemeToggle />
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu size={25} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mt-2" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={"#about"}>
                    <span>
                      <User />
                    </span>
                    <span>About</span>
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem asChild>
                  <Link href={"#projects"}>
                    <span>
                      <FolderClosed />
                    </span>
                    <span>Projects</span>
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem asChild>
                  <Link href={"#certificate"}>
                    <span>
                      <ShieldCheck />
                    </span>
                    <span>Certificates</span>
                  </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem asChild>
                  <Link href={"#contact"}>
                    <span>
                      <Contact />
                    </span>
                    <span>Contact</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
