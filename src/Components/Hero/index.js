import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const responce = await fetch("https://fakestoreapi.com/products");
  //     const data = await responce.json();
  //     console.log(data);
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <>
      {/* <Carousel fade>
        {products.map((product) => {
          const { title, description, image } = product;
          return (
            <Carousel.Item>
              <img
                classNameName="object-contain object-center w-full h-full block"
                src={product?.image}
                alt={product?.image}
              />
              <Carousel.Caption>
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-left">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
