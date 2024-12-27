import { Star, Quote } from 'lucide-react'
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marco Kihn",
      title: "Amazing services",
      content: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
      
    },
    {
      name: "Kristin Hester",
      title: "Everything simple",
      content: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
      
    },
    {
      name: "Zion Cisneros",
      title: "Awesome, thank you!",
      content: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
      
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b ">
      <div className=" px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Testimonials from Our Customers
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative flex flex-col p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="flex space-x-1 mb-4">
               
                  <Star
                  
                    className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                  />
                  <Star
                  
                    className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                  />
                  <Star
                  
                    className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                  />
                  <Star
                  
                    className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                  />
                  <Star
                  
                    className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
                  />
            
              </div>
              <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
              <p className="text-gray-500 italic flex-grow">{testimonial.content}</p>
              <div className="flex items-center space-x-4 mt-6">
                <div className='w-16 h-16 bg-black rounded-full'>

                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Happy Client</p>
                </div>
              </div>
              <Quote className="absolute bottom-6 right-6 w-8 h-8 text-teal-500 opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
