import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const process = [
  {
    step: "01",
    image: "/Concept-Development.webp",
    title: "Concept Development",
    description:
      " This is the stage where we work with our clients to understand their vision and ideas. We create design sketches and patterns based on the client's needs and finalize the details for production.",
  },
  {
    step: "02",
    image: "/Sampling.webp",
    title: "Sampling",
    description:
      "Once the design is finalized, we create a prototype of the garment. This is called a sample. We provide the sample to the client for review and make necessary changes.",
  },
  {
    step: "03",
    image: "/Grading-.webp",
    title: "Grading",
    description:
      "After the sample is approved, we grade the pattern to create sizes. This involves adjusting the pattern to ensure proper fit across different sizes.",
  },
  {
    step: "04",
    image: "/Material-Sourcing.webp",
    title: "Material Sourcing",
    description:
      "Once grading is complete, we source materials needed for production. We ensure that the materials are of high quality and meet the client's requirements.",
  },
  {
    step: "05",
    image: "/Cutting-and-Sewing.webp",
    title: "Cutting and Sewing",
    description:
      "The pattern is printed on the material and then cut to the required size. The pieces are then sewn together to create the final garment.",
  },
  {
    step: "06",
    image: "/Quality-Control.webp",
    title: "Quality Control",
    description:
      "Every garment goes through a thorough quality control process to ensure that the finished product meets our high standards.",
  },
  {
    step: "07",
    image: "/Packaging.webp",
    title: "Packaging and Shipping",
    description:
      "The finished garments are then packaged and shipped to the client.",
  },
];

function Manufacturing_Process() {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#001F3F]">
          Here’s Our Clothing Manufacturing Process
        </h2>
        <p className="mt-4 text-gray-600">
          A streamlined process designed for quality, efficiency, and
          reliability.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-50 bottom-45 w-1 bg-[#001F3F] -translate-x-1/2" />

        <div className="space-y-16">
          {process.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center  ${
                  isRight ? "md:justify-end " : "md:justify-start"
                }`}
              >
                {/* Card */}
                <div
                  className={`relative bg-[#F6F8FA] p-6 rounded-xl shadow-md w-full md:w-[45%] hover:scale-105 transition-transform duration-300
                    ${isRight ? "md:mr-0" : "md:ml-0"}
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  ></Image>
                  <span className="absolute -top-4 -left-4 bg-[#001F3F] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold">
                    {item.step}
                  </span>

                  <h3 className="text-2xl font-bold text-[#001F3F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                  {isRight ? (
                    <ArrowRight className="w-12 h-12 p-2 bg-[#001F3F] text-white rounded-full shadow-md" />
                  ) : (
                    <ArrowLeft className="w-12 h-12 p-2 bg-[#001F3F] text-white rounded-full shadow-md" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Manufacturing_Process;
