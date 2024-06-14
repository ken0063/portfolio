import { Projects, Header, Landing, Skills, Contact } from "@/components";

export default function Home() {
  return (
    <section className="mt-10 md:mt-0">
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}
