import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer: React.FC = () => {
  const logos = [
    "/footer-logo-1.png",
    "/footer-logo-2.png",
    "/footer-logo-3.png",
  ];

  return (
    <motion.footer
      className="bg-green-800 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">समासना</h3>
          <p>Handmade Organic Herbal Toiletries for Natural Beauty</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            {["About Us", "Products", "Contact Us"].map((item) => (
              <motion.li key={item} whileHover={{ x: 5 }}>
                <Link
                  href={`/${item.toLowerCase().split(" ")[0]}`}
                  className="hover:text-green-200"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-green-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Our Partners</h3>
          <div className="flex space-x-4">
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="w-20 h-20"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 समासना. All rights reserved.</p>
        <p>
          <Link href="/" className="hover:text-green-200">
            Terms & Conditions
          </Link>{" "}
          |
          <Link href="/" className="hover:text-green-200 ml-2">
            Privacy Policy
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
