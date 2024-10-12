"use client";

import { useState } from "react";
import Image from "next/image";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex-grow mt-10">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Support Us</h2>
          <p className="mb-4 text-center">
            If you&apos;d like to support our mission, you can make a donation
            using the QR code below:
          </p>
          <Image
            src="/qr-code.png"
            alt="Donation QR Code"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="text-center">Thank you for your support!</p>
        </div>
      </div>
    </div>
  );
}
