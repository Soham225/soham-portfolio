import { About } from "@/components/general/about";
import { Certificate } from "@/components/general/certificates";
import { Contact } from "@/components/general/contact";
import { Hero } from "@/components/general/hero";

import { MyProjects } from "@/components/general/project";

export default function Home() {
  return (
    <div className="flex flex-col mt-6 md:px-6 space-y-12">
      <Hero />

      <section id="about">
        <About />
      </section>
      <section id="projects">
        <MyProjects />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
