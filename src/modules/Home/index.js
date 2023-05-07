import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import StateCard from "../../Components/StateCard";
import ProductsCard from "../../Components/ProductsCard/index";
import Categories from "../../Components/Categories";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await responce.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div>Loading......</div>
      )}
      <StateCard />
    </>
  );
}

export default Home;
