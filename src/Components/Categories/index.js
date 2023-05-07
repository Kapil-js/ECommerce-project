import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard';

function Categories() {


  
    const [category, setCategory] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      const responce = await fetch("https://fakestoreapi.com/products/categories");
      const data = await responce.json();
      setCategory(data);
    };
    fetchCategories();
  }, []);


  if(!Object.keys(category).length > 0) return <div>Loading.......</div>


  return (
    <>
      <FeatureCard cards={category} />
    </>
  );
}

export default Categories