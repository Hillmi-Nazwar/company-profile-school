import Navbar from "@/components/Navbar";
import { navLinks } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {navLinks.map((link, i) => (
          <section
            key={link.href}
            id={link.href.slice(1)}
            className={`flex min-h-screen items-center justify-center ${
              i === 0 ? "bg-brand-dark" : i % 2 ? "bg-cream" : "bg-white"
            }`}
          >
            <h2
              className={`font-heading text-5xl font-extrabold ${
                i === 0 ? "text-white" : "text-brand"
              }`}
            >
              {link.label} (sementara)
            </h2>
          </section>
        ))}
      </main>
    </>
  );
}