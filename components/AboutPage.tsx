"use client";

import Image from "next/image";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex-grow mt-10">
      <h1 className="text-3xl font-bold mb-8">About समासना</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/about.png"
            alt="About समासना"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="mb-4">
            समासना was born out of a passion for natural beauty and a commitment
            to sustainable living. Our journey began in a small kitchen, where
            we experimented with age-old recipes and organic ingredients to
            create products that are good for you and the planet.
          </p>
          <p className="mb-4">
            Today, we continue to handcraft each product with the same
            dedication and care. Our philosophy is simple: use nature&apos;s
            best ingredients to nurture your skin and hair, without any harmful
            chemicals or artificial additives.
          </p>
          <p className="mb-4">
            We source our ingredients from local organic farms, supporting rural
            communities and ensuring the highest quality. Our packaging is
            eco-friendly, and we&apos;re constantly working to reduce our
            environmental footprint.
          </p>

          <p>
            When you choose समासना, you&apos;re not just choosing a beauty
            product. You&apos;re choosing a lifestyle that values health,
            sustainability, and natural beauty. Join us in our mission to make
            the world a little more beautiful, one product at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
