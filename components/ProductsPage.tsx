"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Product {
  name: string;
  images: string[];
  benefits: string;
  ingredients: string;
  indications: string;
  note: string;
}

interface ProductCarouselProps {
  items: Product[];
  category: string;
}

const products = {
  soaps: [
    {
      name: "Super Papaya",
      images: [
        "/papaya-soap-1.png",
        "/papaya-soap-2.png",
        "/papaya-soap-3.png",
      ],
      benefits:
        "Organic papaya soap with fruit extract, vitamin C & E, and antioxidants can lighten your skin, reduce irregular pigmentation and improve collagen production.",
      ingredients:
        "Papaya fruit - 500 grams finely chopped, Melt & Pour Soap Base, Vitamin E 1 tsp, Lavender Essential Oil",
      indications:
        "The soap also contains vitamin A, another important nutrient for the skin. It promotes the production of new skin cells, and may help reduce dark spots.",
      note: "Ideal to use every day or twice a day. It is recommended to use at least 7 weeks for better results.",
    },
    {
      name: "Magical Neem Tulsi",
      images: ["/neem-soap-1.png", "/neem-soap-2.png", "/neem-soap-3.png"],
      benefits:
        "Their antibacterial and antifungal properties relieve skin infections, providing a healthy and natural glow. Using a soap infused with the goodness of neem and Tulsi is good for our skin and washes away environmental impurities that cause skin concerns.",
      ingredients:
        "Neem, Tulsi, transparent glycerine soap base, vitamin E, Lemon grass essential oll, coconut oil.",
      indications:
        "Wet skin with water. Apply soap on a body and generously massage over all to create lather. Rinse off with warm or cold water.",
      note: "Idle to be used every day or twice a day.",
    },
    {
      name: "Lavender Oatmeal Soap",
      images: [
        "/lavender-oatmeal-soap-1.jpg",
        "/lavender-oatmeal-soap-2.jpg",
        "/lavender-oatmeal-soap-3.jpg",
      ],
      benefits:
        "Lavender soothes and relaxes while oatmeal gently exfoliates, making this soap perfect for sensitive and dry skin.",
      ingredients:
        "Ground oatmeal, Lavender essential oil, Shea butter, Olive oil, Lye",
      indications:
        "Helps calm irritated skin, reduces redness, and provides gentle exfoliation. The lavender scent promotes relaxation.",
      note: "Suitable for daily use. For extra moisturizing benefits, leave lather on skin for a minute before rinsing.",
    },
    {
      name: "Charcoal Detox Soap",
      images: ["/charcoal-soap-1.jpg", "/charcoal-soap-2.jpg"],
      benefits:
        "Activated charcoal deeply cleanses pores, removing toxins and impurities from the skin.",
      ingredients:
        "Activated charcoal powder, Coconut oil, Palm oil, Castor oil, Tea tree essential oil",
      indications:
        "Excellent for oily and acne-prone skin. Helps reduce excess sebum and unclogs pores.",
      note: "Use 2-3 times a week. Follow with a moisturizer as charcoal can be drying for some skin types.",
    },
    {
      name: "Goat Milk & Honey Soap",
      images: [
        "/goat-milk-soap-1.jpg",
        "/goat-milk-soap-2.jpg",
        "/goat-milk-soap-3.jpg",
      ],
      benefits:
        "Goat milk is rich in lactic acid which gently exfoliates, while honey provides natural antibacterial properties and intense moisture.",
      ingredients: "Fresh goat milk, Raw honey, Olive oil, Coconut oil, Lye",
      indications:
        "Suitable for all skin types, especially dry and sensitive skin. Helps maintain skin's natural pH balance.",
      note: "Can be used daily. Store in a dry place to extend the soap's life.",
    },
    {
      name: "Turmeric Brightening Soap",
      images: ["/turmeric-soap-1.jpg", "/turmeric-soap-2.jpg"],
      benefits:
        "Turmeric has natural brightening properties that can help even out skin tone and reduce the appearance of dark spots.",
      ingredients:
        "Turmeric powder, Sandalwood powder, Coconut oil, Palm oil, Castor oil",
      indications:
        "Helps improve skin complexion, reduces inflammation, and has anti-aging properties.",
      note: "Use 2-3 times a week. May temporarily stain light-colored washcloths.",
    },
    {
      name: "Rose Clay Facial Soap",
      images: [
        "/rose-clay-soap-1.jpg",
        "/rose-clay-soap-2.jpg",
        "/rose-clay-soap-3.jpg",
      ],
      benefits:
        "Pink clay gently detoxifies and exfoliates, while rose essential oil nourishes and balances the skin.",
      ingredients:
        "Rose clay, Rose essential oil, Rosehip oil, Coconut oil, Olive oil",
      indications:
        "Suitable for normal to dry skin types. Helps improve skin texture and provides a gentle cleansing experience.",
      note: "Ideal for daily use. For best results, follow with a rose water toner.",
    },
    {
      name: "Lemongrass Citrus Soap",
      images: ["/lemongrass-soap-1.jpg", "/lemongrass-soap-2.jpg"],
      benefits:
        "Lemongrass oil is naturally astringent and toning, while citrus oils invigorate and brighten the skin.",
      ingredients:
        "Lemongrass essential oil, Orange essential oil, Coconut oil, Olive oil, Shea butter",
      indications:
        "Great for oily and congested skin. Helps tone and tighten pores while providing a refreshing cleanse.",
      note: "Use in the morning for an invigorating start to your day. Avoid use before sun exposure as citrus oils can be photosensitizing.",
    },
  ],
  oils: [
    {
      name: "Gwjwr Oil",
      images: ["/oil-1.png"],
      benefits:
        "A blend of nourishing oils that hydrate, balance, and promote a healthy, radiant complexion.",
      ingredients:
        "Jojoba oil, Rosehip oil, Argan oil, Frankincense essential oil, Lavender essential oil",
      indications:
        "Suitable for all skin types. Helps reduce fine lines, even out skin tone, and improve overall skin texture.",
      note: "Apply 3-5 drops to cleansed face and neck, morning and night. Can be used under moisturizer or alone.",
    },
    {
      name: "Swmkhwa Oil",
      images: ["/oil-2.png"],
      benefits:
        "A rich blend of oils that nourish the scalp, promote hair growth, and add shine to dull, lifeless hair.",
      ingredients:
        "Coconut oil, Castor oil, Amla oil, Rosemary essential oil, Peppermint essential oil",
      indications:
        "Helps strengthen hair, reduce hair fall, and promote healthy hair growth. Can also help with dandruff and dry scalp.",
      note: "Apply to scalp and hair lengths, leave on for at least 30 minutes or overnight before washing. Use 1-2 times a week.",
    },
    {
      name: "Kumkumadi Tailam Serum",
      images: ["/serum-1.png"],
      benefits:
        "A soothing blend of oils that calm the senses, hydrate the skin, and promote relaxation.",
      ingredients:
        "Sweet almond oil, Grapeseed oil, Lavender essential oil, Chamomile essential oil, Vitamin E",
      indications:
        "Ideal for dry, sensitive skin. Helps reduce inflammation and redness while deeply moisturizing.",
      note: "Apply to damp skin after bathing for best absorption. Can also be added to bath water for a luxurious, moisturizing soak.",
    },
  ],
  creams: [
    {
      name: "Hydrating Night Cream",
      images: ["/night-cream-1.jpg", "/night-cream-2.jpg"],
      benefits:
        "A rich, nourishing cream that hydrates and repairs skin while you sleep.",
      ingredients:
        "Shea butter, Cocoa butter, Hyaluronic acid, Rosehip oil, Frankincense essential oil",
      indications:
        "Suitable for all skin types, especially dry and mature skin. Helps reduce fine lines and improve skin elasticity.",
      note: "Apply a small amount to face and neck before bed. For extra hydration, layer over facial oil.",
    },
    {
      name: "Brightening Vitamin C Cream",
      images: [
        "/vitamin-c-cream-1.jpg",
        "/vitamin-c-cream-2.jpg",
        "/vitamin-c-cream-3.jpg",
      ],
      benefits:
        "A lightweight cream enriched with Vitamin C to brighten skin, even out skin tone, and protect against environmental stressors.",
      ingredients:
        "Vitamin C (L-Ascorbic Acid), Vitamin E, Ferulic Acid, Aloe Vera gel, Jojoba oil",
      indications:
        "Helps fade dark spots, boost collagen production, and provide antioxidant protection.",
      note: "Apply in the morning after cleansing and before sunscreen. Store in a cool, dark place to preserve the Vitamin C.",
    },
    {
      name: "Soothing Aloe Vera Gel",
      images: ["/aloe-gel-1.jpg", "/aloe-gel-2.jpg"],
      benefits:
        "A cooling, soothing gel that calms irritated skin, reduces redness, and provides light hydration.",
      ingredients:
        "Aloe Vera gel, Cucumber extract, Chamomile extract, Glycerin, Allantoin",
      indications:
        "Ideal for sunburns, minor skin irritations, and as a light moisturizer for oily skin types.",
      note: "Can be used as needed throughout the day. Store in the refrigerator for an extra cooling effect.",
    },
  ],
};

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
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <p>{selectedProduct.benefits}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ingredients:</h4>
                  <p>{selectedProduct.ingredients}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Indications:</h4>
                  <p>{selectedProduct.indications}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Note:</h4>
                  <p>{selectedProduct.note}</p>
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
        <ProductCarousel items={products.soaps} category="Soaps" />
        <ProductCarousel items={products.oils} category="Oils & Serums" />
        <ProductCarousel items={products.creams} category="Creams" />
      </div>
    </div>
  );
}
