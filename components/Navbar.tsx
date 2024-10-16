"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-green-700 text-white p-4 fixed w-full top-0 z-20 block lg:flex"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          समायना
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu />
        </button>
      </div>

      {/* Collapsible Menu for Mobile */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-2 mt-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="block p-2 hover:text-green-200 transition duration-300"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/about"
              className="block p-2 hover:text-green-200 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/products"
              className="block p-2 hover:text-green-200 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/contact"
              className="block p-2 hover:text-green-200 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="hover:text-green-200 transition duration-300"
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link
            href="/about"
            className="hover:text-green-200 transition duration-300"
          >
            About
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link
            href="/products"
            className="hover:text-green-200 transition duration-300"
          >
            Products
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="hover:text-green-200 transition duration-300"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
