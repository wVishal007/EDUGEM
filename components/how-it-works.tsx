import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in seconds and get started right away.",
    },
    {
      number: "02",
      title: "Choose Grade & Language",
      description: "Select your grade level and preferred language for learning.",
    },
    {
      number: "03",
      title: "Chat with AI Tutor",
      description: "Ask questions and get instant, personalized explanations.",
    },
    {
      number: "04",
      title: "Get Videos + Notes",
      description: "Access AI-generated video lectures and comprehensive notes.",
    },
    {
      number: "05",
      title: "Practice & Track",
      description: "Reinforce your learning with quizzes and track your progress.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Get started with EduGem in just a few simple steps
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-center text-gray-500">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+1.5rem)] right-0">
                    <ArrowRight className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

