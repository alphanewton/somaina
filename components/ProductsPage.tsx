"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { products } from "@/products";

interface Product {
  name: string;
  images: string[];
  benefits: string;
  ingredients: string;
  usage: string;
}

interface ProductCarouselProps {
  items: Product[];
  category: string;
}

const ProductCarousel = ({ items, category }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const nextSlide = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const itemsToShow =
    window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
      <div className="flex overflow-hidden">
        {items.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
          <div
            key={item.name}
            className={`w-full ${
              itemsToShow === 2 ? "md:w-1/2" : "lg:w-1/3"
            } flex-shrink-0 px-2`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <button
                onClick={() => {
                  setSelectedProduct(item);
                  setSelectedImageIndex(0);
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
      )}
      {currentIndex + itemsToShow < items.length && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      )}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="relative h-64 mb-4">
                  <Image
                    src={selectedProduct.images[selectedImageIndex]}
                    alt={selectedProduct.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex space-x-2">
                  {selectedProduct.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-20 h-20 cursor-pointer ${
                        index === selectedImageIndex
                          ? "border-2 border-green-600"
                          : ""
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProduct.name} ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ingredients:</h4>
                  <p>{selectedProduct.ingredients}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How to use:</h4>
                  <p>{selectedProduct.usage}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <p>{selectedProduct.benefits}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex-grow mt-10">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="space-y-12">
        <ProductCarousel items={products.bodyCare} category="Body Care" />
        <ProductCarousel items={products.skinCare} category="Skin Care" />
        <ProductCarousel items={products.hairCare} category="Hair Care" />
      </div>
    </div>
  );
}
