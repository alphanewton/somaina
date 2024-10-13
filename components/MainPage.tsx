"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Leaf, Recycle, Heart } from "lucide-react";

export function MainPage() {
  return (
    <div className="container mx-auto px-4 flex-grow mt-10">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-[60px] font-bold mb-4">समायना</h1>
        <div className="flex justify-center">
          <Image
            src="/mainpage.png"
            alt="Handmade Organic Products"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg mb-8"
          />
        </div>
        <p className="text-2xl mb-8">
          Handmade Organic Herbal Toiletries for Natural Beauty
        </p>
        <Link href="/products">
          <div className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 inline-block">
            Explore Our Products
          </div>
        </Link>
      </section>

      {/* Product Highlights */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Best Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center">
              <Image
                src={`/super-papaya-soap.png`}
                alt="super-papaya-soap"
                width={300}
                height={300}
                className="rounded-lg mb-4 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Super Papaya Soap</h3>
            <p className="mb-4">
              A hand made herbal soap with essential oils for all skin types
              Paraben, SLS, SLES, Sulphate free.
            </p>
            <Link
              href={`/products`}
              className="text-green-600 hover:text-green-800"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center">
              <Image
                src={`/magical-neem-tulsi-soap.png`}
                alt="magical-neem-tulsi-soap"
                width={300}
                height={300}
                className="rounded-lg mb-4 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Magical Neem Tulsi Soap
            </h3>
            <p className="mb-4">
              A hand made herbal soap with essential oils for all skin types
              Paraben, SLS, SLES, Sulphate free.
            </p>
            <Link
              href={`/products`}
              className="text-green-600 hover:text-green-800"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center">
              <Image
                src={`/kumkumadi-tailam-serum.png`}
                alt="kumkumadi-tailam-serum"
                width={300}
                height={300}
                className="rounded-lg mb-4 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Kumkumadi Tailam Serum
            </h3>
            <p className="mb-4">
              A hand made herbal soap with essential oils for all skin types
              Paraben, SLS, SLES, Sulphate free.
            </p>
            <Link
              href={`/products`}
              className="text-green-600 hover:text-green-800"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-green-50 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About समायना</h2>
          <p className="text-lg mb-6">
            At समायना, we are committed to creating handmade, organic, and
            natural beauty products. Our journey began with a simple idea: to
            provide high-quality, chemical-free toiletries that nourish your
            skin and respect the environment.
          </p>
          <p className="text-lg mb-6">
            Every product is carefully crafted using traditional methods and
            infused with the goodness of natural ingredients. We take pride in
            our paraben-free, sulphate-free formulations that bring out your
            natural beauty.
          </p>
          <Link href="/about" className="text-green-600 hover:text-green-800">
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose समायना
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Star className="w-12 h-12 text-green-600 mb-4" />,
              text: "100% Handmade",
            },
            {
              icon: <Leaf className="w-12 h-12 text-green-600 mb-4" />,
              text: "Organic Ingredients",
            },
            {
              icon: <Recycle className="w-12 h-12 text-green-600 mb-4" />,
              text: "Eco-Friendly Packaging",
            },
            {
              icon: <Heart className="w-12 h-12 text-green-600 mb-4" />,
              text: "Cruelty-Free",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {item.icon}
              <p className="text-lg font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Narzary",
              text: "I love how gentle समायना's products are on my sensitive skin. The lemon soap is my favorite!",
            },
            {
              name: "Rahul Brahma",
              text: "The quality of these products is unmatched. I've switched all my toiletries to समायना.",
            },
            {
              name: "Anita Basumatary",
              text: "Not only do these products work great, but I also feel good about supporting a brand that cares for the environment.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-8">
          Experience the समायना Difference
        </h2>
        <Link
          href="/products"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 mr-4"
        >
          Browse All Products
        </Link>
        <Link
          href="/contact"
          className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
