import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
                Learn Smarter with AI. Meet EduGem.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Your personal tutor powered by Google Gemini — video lectures, instant doubt solving, and more.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600">
                Try for Free
              </Button>
              <Button variant="outline" className="gap-1">
                <Play size={16} />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-gray-900">2,000+</span> students already learning
              </div>
            </div>
          </div>
          <div className="lg:pl-10 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWR5fGVufDB8fDB8fHww"
                alt="EduGem AI Tutor Interface"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

