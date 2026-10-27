import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 text-[#03256C] sticky top-0 z-50">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center h-16">
            <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Blue Ribbon Wears Logo"
            width={120}
            height={40}
            className="w-auto mt-3"
          />
          <h1 className="absolute left-24 top-1/2 -translate-y-1/2 font-extrabold text-lg text-[#03256C]">
            BLUE RIBBON WEARS
          </h1>
          </Link>
        </div>

        <ul className="flex space-x-12  text-[#001F3F] font-semibold transition-colors duration-300">
          <Link href={"/"} className="flex items-center space-x-2 hover:underline group">
            {" "}
            <div className="w-2 h-2 bg-[#304D6D] group-hover:bg-blue-500 rounded-full"></div>{" "}
            <h1> Home </h1>
          </Link>
          <Link href={"/products"} className="flex items-center space-x-2 hover:underline group">
            {" "}
            <div className="w-2 h-2 bg-[#304D6D]  group-hover:bg-blue-500 rounded-full"></div> <h1> Products </h1>
          </Link>
          <Link href={"/conatct"} className="flex items-center space-x-2 hover:underline group">
            {" "}
            <div className="w-2 h-2 bg-[#304D6D]  group-hover:bg-blue-500 rounded-full"></div> <h1> Contact Us </h1>
          </Link>
          <Link href={"/about"} className="flex items-center space-x-2 hover:underline group">
            {" "}
            <div className="w-2 h-2 bg-[#304D6D]  group-hover:bg-blue-500 rounded-full"></div> <h1> About Us </h1>
          </Link>
        </ul>
        <div>
            <Search className="mr-10 text-gray-600 hover:text-gray-800 cursor-pointer mr-15" />
        </div>
      </div>
    </nav>
  );
}
