import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import TechStack from "@/components/tech-stack"
import Screenshots from "@/components/screenshots"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechStack />
        <Screenshots />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

