"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          समायना
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-green-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-green-200 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="hover:text-green-200 transition duration-300"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-200 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
