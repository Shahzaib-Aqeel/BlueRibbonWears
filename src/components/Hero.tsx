import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Award } from 'lucide-react';

function Hero() {
  return (
    <div>
      <section className="min-h-screen relative">
        <div className="absolute inset-0">
          <Image
            src="/heros.jpg"
            alt="Blue Ribbon Wears"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-white/80 to-white/40" />

        <div className="relative z-10 flex min-h-screen items-center mx-4">
          <div className="">
            <div className="inline-flex items-center rounded-full bg-gray-700 px-4 py-2 mb-6 ">
              <Award className="h-4 w-4 text-[#3C83F6] mr-2" />
              <span className="text-sm font-medium text-[#3C83F6]">
                10+ Years of Excellence
              </span>
            </div>
            <h1 className="mb-2 text-[#001F3F] text-6xl font-extrabold">
              Premium Clothing
            </h1>
            <h1 className="mb-2 text-[#001F3F] text-6xl font-extrabold ">
              Manufacturing for
            </h1>
            <h1 className="mb-4 text-[#3C83F6] text-6xl font-extrabold ">
              Global Markets
            </h1>
            <p className="mb-8 max-w-2xl text-gray-600 mx-auto text-lg">
              Partner with Blue Ribbon Wears for high-quality apparel
              manufacturing and export. From design to delivery, we bring your
              vision to life with precision and care.
            </p>
            <Link
              href="/collections"
              className="bg-[#001F3F] text-white hover:text-[#001F3F] font-semibold px-8 py-3 rounded-lg hover:bg-[#43B7FF] transition-colors"
            >
              EXPLORE PRODUCTS
            </Link>
            <Link
              href="/contact"
              className="bg-white px-8 py-3 rounded-lg text-[#001F3F] font-semibold hover:bg-[#43B7FF] hover:text-white transition-colors ml-4"
            >
              REQUEST QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
