import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../Components/ProductsCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function CategoryProduct() {
    const {name} = useParams()
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const fetchProducts = async () => {
      const responce = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await responce.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if(!Object.keys(products).length > 0) return <div>Loading.......</div>


  return <>
  <Header />
    <ProductsCard products={products} />
    <Footer />
  </>;
}

export default CategoryProduct;
