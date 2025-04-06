import { MessageSquare, Video, Globe, BarChart } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-violet-600" />,
      title: "Gemini-powered Chatbot Tutor",
      description: "Get instant answers to your questions and personalized explanations from our AI tutor.",
    },
    {
      icon: <Video className="h-10 w-10 text-blue-500" />,
      title: "AI-Generated Lectures",
      description: "Watch custom-generated video lectures on any topic, tailored to your learning style.",
    },
    {
      icon: <Globe className="h-10 w-10 text-violet-600" />,
      title: "Multilingual Interface",
      description: "Learn in your preferred Indian language with full support for regional languages.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Daily Quizzes and Progress Tracking",
      description: "Reinforce your learning with adaptive quizzes and track your improvement over time.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powered by <span className="text-violet-600">AI</span>, Built for{" "}
            <span className="text-blue-500">Students</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            EduGem combines cutting-edge AI technology with educational expertise to create a learning experience like
            no other.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

