import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <section id="about" className="relative">
        <About />
      </section>
      <section id="experiences" className="relative">
        <Experience />
      </section>
    </main>
  );
}
