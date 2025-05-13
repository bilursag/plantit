import Categories from "@/components/categories";
import { FeaturedProducts } from "@/components/featured-products";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center bg-white text-black pt-16 dark:bg-black">
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Testimonials />
        <Newsletter />
        <Features />
      </main>
      <Footer />
    </>
  );
}