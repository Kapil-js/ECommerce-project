import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/ProductsCard";
import Categories from "../../Components/Categories";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await fetch("https://fakestoreapi.com/products");
      const data = await responce.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
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
        <ProductCard products={products} />
      ) : (
        <div>Loading......</div>
      )}
      <Footer />
    </>
  );
}

export default Products;
