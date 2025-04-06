import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Screenshots() {
  const screenshots = [
    {
      id: "chatbot",
      title: "AI Chatbot Tutor",
      image: "/placeholder.svg?height=600&width=800&text=AI+Chatbot+Interface",
    },
    {
      id: "video",
      title: "Video Lectures",
      image: "/placeholder.svg?height=600&width=800&text=Video+Lectures+Interface",
    },
    {
      id: "multilingual",
      title: "Multilingual Support",
      image: "/placeholder.svg?height=600&width=800&text=Multilingual+Interface",
    },
    {
      id: "quizzes",
      title: "Quizzes & Progress",
      image: "/placeholder.svg?height=600&width=800&text=Quizzes+Interface",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See EduGem in Action</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Preview our intuitive interface and powerful features
          </p>
        </div>

        <Tabs defaultValue="chatbot" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto gap-48 grid-cols-2 md:grid-cols-4 mb-8">
            {screenshots.map((screenshot) => (
              <TabsTrigger key={screenshot.id} value={screenshot.id}>
                {screenshot.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {screenshots.map((screenshot) => (
            <TabsContent key={screenshot.id} value={screenshot.id}>
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
                    <Image
                      src={screenshot.image || "/placeholder.svg"}
                      alt={screenshot.title}
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

