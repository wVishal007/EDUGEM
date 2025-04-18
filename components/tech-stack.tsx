import Image from "next/image"

export default function TechStack() {
  const technologies = [
    {
      name: "Next.js",
      icon: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
    },
    {
      name: "Tailwind CSS",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Google Gemini API",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy9ucswKvd8dPqg9CvrmJiEH5ngED9xLgrQ&s",
    },
    {
      name: "Google Cloud Speech-to-Text",
      icon: "https://s3.amazonaws.com/appforest_uf/f1616165045456x858473254254147000/google-cloud-2038785-1721675-2.png",
    },
    {
      name: "Firebase",
      icon: "data:image/png;base64,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",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powered by Modern Technology</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We use cutting-edge technologies to deliver the best learning experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

