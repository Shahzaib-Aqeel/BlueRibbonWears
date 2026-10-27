import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const whyChooseUs = [
    'Competitive pricing for bulk orders',
    'Fast turnaround times',
    'Flexible payment terms',
    'Sample development available',
    'Best manufacturing',
    'Eco-friendly production options',
  ];

function Choose() {
  return (
    <div>
      <section className="py-16 xl:py-24 bg-[#F6F8FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#001F3F] xl:text-5xl mb-6">
                Why Choose Blue Ribbon Wears?
              </h2>
              <p className="text-lg text-[#001F3F] mb-8">
                We combine cutting-edge manufacturing technology with decades of expertise 
                to deliver exceptional results for our clients worldwide.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle2 className="h-6 w-6 text-[#001F3F] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-base text-[#001F3F]">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/choose.jpg"
                alt="Fashion Design Studio"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#3C83F6] p-6 rounded-lg shadow-xl hidden xl:block">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Choose
