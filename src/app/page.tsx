import Hero from "@/components/hero";
import Nav from "@/components/navbar";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white text-black pt-16 dark:bg-black">
        <Nav />
        <div className="relative w-full max-w-6xl min-h-[600px] overflow-hidden mx-auto">
          <Hero />
        </div>
      </main>
    </>
  );
}