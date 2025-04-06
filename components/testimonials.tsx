import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Class 10 Student",
      avatar: "/placeholder.svg?height=80&width=80&text=PS",
      content:
        "EduGem has completely transformed how I study. The AI tutor explains concepts in a way that's easy to understand, and the video lectures are perfect for revision.",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      role: "Class 12 Student",
      avatar: "/placeholder.svg?height=80&width=80&text=RP",
      content:
        "I was struggling with physics until I found EduGem. The personalized learning path and practice quizzes helped me improve my grades significantly.",
      rating: 5,
    },
    {
      name: "Ananya Gupta",
      role: "College Freshman",
      avatar: "/placeholder.svg?height=80&width=80&text=AG",
      content:
        "Being able to learn in Hindi makes such a difference! The multilingual support is amazing, and the AI tutor never gets tired of answering my questions.",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Real feedback from students using EduGem to enhance their learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

