import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-violet-600 to-blue-500">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-lg text-white/90">
            Join thousands of students already using EduGem to learn smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
              Join Beta Program
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
          <p className="text-sm text-white/70">No credit card required. Free 14-day trial available.</p>
        </div>
      </div>
    </section>
  )
}

