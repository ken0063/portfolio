import { AboutMe, Header, Landing } from "@/components";

export default function Home() {
  return (
    <section className="flex flex-col min-h-[100dvh]">
      <div className="mx-4">
        <Header />
      </div>
      <div className="w-screen h-screen flex justify-left items-center">
        <Landing />
      </div>
      <div className="w-screen h-screen flex justify-left items-center">
        <AboutMe />
      </div>
    </section>
  );
}
