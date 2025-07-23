import { About } from "@/components/About";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />

      <section className="relative min-h-screen">
        <About />
      </section>
    </main>
  );
}
