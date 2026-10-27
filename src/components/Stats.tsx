import React from 'react'
import { Globe, Factory, TrendingUp, Users } from "lucide-react";

const statistics = [
    { value: "10+", label: "Years Experience", icon: TrendingUp },
    { value: "30+", label: "Countries Served", icon: Globe },
    { value: "1M+", label: "Products Manufactured", icon: Factory },
    { value: "500+", label: "Happy Clients", icon: Users },
  ];

function Stats() {
  return (
    <div>
      <section className="py-12 bg-[#3C83F6] text-[#001F3F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl xl:text-5xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm xl:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats
