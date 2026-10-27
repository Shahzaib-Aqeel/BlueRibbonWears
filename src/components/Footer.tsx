import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-600 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Blue Ribbon Wears"
                width={150}
                height={150}
                className="h-auto w-30 -ml-11"
              />
              <h3 className="text-lg font-bold text-[#001F3F] -ml-10">
                Blue Ribbon Wears
              </h3>
            </div>
            <p className="text-sm text-[#001F3F]">
              Leading clothing manufacturer specializing in import-export trade.
              Quality apparel for global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#001F3F]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#001F3F] hover:text-[#3C83F6] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-[#001F3F] hover:text-[#3C83F6] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#001F3F] hover:text-[#3C83F6] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#001F3F] hover:text-[#3C83F6] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#001F3F]">
              Product Categories
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-[#001F3F]">T-Shirts & Tops</li>
              <li className="text-sm text-[#001F3F]">Shirts & Blouses</li>
              <li className="text-sm text-[#001F3F]">Pants & Trousers</li>
              <li className="text-sm text-[#001F3F]">Dresses & Skirts</li>
              <li className="text-sm text-[#001F3F]">Outerwear & Jackets</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#001F3F]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-[#001F3F]">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>blueribbonwears@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-[#001F3F]">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-[#001F3F]">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Fashion District, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="text-[#001F3F] font-bold mr-1">
              Blue Ribbon Wears.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
