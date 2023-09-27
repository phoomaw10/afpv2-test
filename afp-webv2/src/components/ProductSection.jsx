import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    title: "Speedy Mouse",
    description: "Cat Toy",
    image: "/images/spmu.jpeg",
    price: "150 Baht",
    tag: ["All", "Toy"],
  },
  {
    id: 2,
    title: "Royal Canin",
    description: "Cat Food",
    image: "/images/royal.png",
    tag: ["All", "Food"],
  },
  {
    id: 3,
    title: "Smarty Cat",
    description: "Cat Toy",
    image: "/images/catnip.jpeg",
    tag: ["All", "Toy"],
  },
  {
    id: 4,
    title: "Kitty Jelly",
    description: "Cat Food",
    image: "/images/kitjel.png",
    tag: ["All", "Toy"],
  },
  {
    id: 5,
    title: "Kitty Potion",
    description: "Cat Shampoo",
    image: "/images/kipo.jpeg",
    tag: ["All", "Bath"],
  },
  {
    id: 6,
    title: "Cat Toilet",
    description: "Plastic Cat Toilet",
    image: "/images/cattoi.png",
    tag: ["All", "Others"],
  },
];
const ProductSection = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-bold text-white mb-4">
        Our Products
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imgUrl={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
