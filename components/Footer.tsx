"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">समायना</h3>
          <p>Handmade Organic Herbal Toiletries for Natural Beauty</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p>Email: info@samaasnaa.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-200">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-200">
              <Instagram />
            </a>
            <a href="#" className="hover:text-green-200">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/terms" className="hover:text-green-200 mr-4">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:text-green-200">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
