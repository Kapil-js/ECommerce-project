import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../modules/Home";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  };

   const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <button onClick={userlogout} className="logout inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700  rounded text-base md:mt-0 py-2">Log Out</button>
          <h1>{logindata[0].name}</h1>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};

export default Details;
