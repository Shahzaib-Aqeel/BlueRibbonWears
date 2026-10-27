import React from "react";
import Image from "next/image";
import Link from "next/link";

const Service = [
  {
    image: "/labeling.jpg",
    title: "PRIVATE LABELING",
    description:
      "Blue Ribbon Wears provides custom private-label manufacturing for a wide range of clothing products. From sweatshirts and hoodies to casual clothing, gym wear, jackets, and more, we offer the best private labeling services at competitive prices. We guarantee the highest quality and precision in our production process, ensuring that your brand stands out in the market.",
  },
  {
    image: "/CUSTOM-EMBROIDERY.webp",
    title: "CUSTOM EMBROIDERY",
    description:
      "We manufacture and craft unique embroidery designs for your clothing items, tailored to your specific requirements. Whether you’re looking for a subtle logo or an intricate design, we can bring your vision to life. As the leading cloting manufacturer Pakistan, we deliver exceptional quality and attention to detail in every embroidery project.",
  },
  {
    image: "/SUBLIMATION-PRINTING.webp",
    title: "SUBLIMATION PRINTING",
    description:
      "We use advanced printing techniques to ensure that the ink infuses directly into the fabric, resulting in vibrant, long-lasting designs. Our experienced team of professionals pays close attention to every detail of the printing process, ensuring exceptional quality and timely delivery of your sublimated garments.",
  },
  {
    image: "/SCREEN-PRINTING.webp",
    title: "SCREEN PRINTING",
    description:
      "Looking for high-quality screen printing services for your clothing line? At Experto, we have the experience and expertise to produce custom screen-printed garments with precision and quality. With our commitment to excellence and attention to detail, we are confident that we can deliver the best screen-printed clothing for your brand.",
  },
];

function Services() {
  return (
    <div className="text-[#001F3F] py-16 bg-[#F6F8FA]">
      {/* Heading */}
      <div className="max-w-2xl mx-auto flex flex-col space-y-3 mb-10 text-center">
        <h1 className="text-4xl font-extrabold">OUR SERVICES</h1>
        <p>
          Comprehensive manufacturing solutions tailored to your business needs
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 justify-centerflex">
      {Service.map((item, index) => (
    <div
      key={index}
      className={`p-6 border-2 border-[#001F3F] rounded-xl shadow-lg hover:shadow-2xl shadow-[#001F3F] transition bg-white
        xl:${index === 3 ? "col-span-1 col-start-2" : ""}
      `}
    >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover hover:scale-105 transition-transform duration-300"
            />

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-10">{item.description}</p>

            <Link
              href="/contact"
              className="bg-[#001F3F] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#43B7FF] hover:text-white transition-colors"
            >
              INQUIRE NOW
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
