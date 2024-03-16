import React from "react";
import { products } from "../constants";
import { PopularProductsCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Top</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Discover our latest collection of stylish and elegant watches. Crafted
          with precision and style, our watches are perfect for every occasion.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  sm:gap-2 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
