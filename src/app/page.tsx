import { Header, Landing } from "@/components";

export default function Home() {
  return (
    <section>
      <div className="mx-4">
        <Header />
      </div>
      <div className="w-screen h-screen flex justify-left items-center">
        <Landing />
      </div>
    </section>
  );
}
