import React from 'react'
import { Globe, Shield, Truck, CheckCircle2, Sparkles, Star, Clock, Zap } from "lucide-react";


const highlights = [
    {
      icon: Globe,
      title: "Global Export",
      description:
        "Serving clients worldwide with reliable international shipping",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Committed to delivering top-notch products that meet global standards",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Ensuring your orders arrive on schedule, every time",
    },
    {
      icon: CheckCircle2,
      title: "Custom Solutions",
      description: "Tailored manufacturing services to fit your unique needs",
    },
    {
      icon: Sparkles,
      title: "Innovative Designs",
      description: "Bringing fresh and trendy designs to the apparel market",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Dedicated to exceeding client expectations with every order",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available to assist you with your manufacturing needs",
    },
    {
      icon: Zap,
      title: "Sustainable Practices",
      description: "Committed to eco-friendly manufacturing processes",
    },
  ];

function Highlights() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <highlight.icon className="h-10 w-10 text-[#3C83F6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#001F3F] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Highlights
