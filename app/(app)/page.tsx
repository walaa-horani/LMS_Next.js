import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Steps } from "@/components/Steps";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

/**
 * Renders the site's home page by composing the top-level layout sections.
 *
 * The returned element is a `main` container styled with the app's global layout classes
 * and contains the Navbar, Hero, Features, Courses, Steps, Pricing, and Footer components
 * in document order.
 *
 * @returns The JSX element representing the assembled home page layout.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Steps />
      <Pricing />
      <Footer />
    </main>
  );
}