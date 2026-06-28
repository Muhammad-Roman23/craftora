import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold mb-5">
              🌸 FlowerLamp
            </h2>

            <p className="text-gray-400 leading-8">
              Premium handcrafted flower lamps designed
              to bring elegance, warmth and timeless
              beauty into every modern home.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="#"
                  className="hover:text-white duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white duration-300"
                >
                  Products
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>info@flowerlamp.com</span>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <span>Karachi, Pakistan</span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} FlowerLamp. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Crafted with ❤️ using React & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;