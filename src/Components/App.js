import React, {useState, useEffect} from "react";
import Header from "./Header";
import Banner from "./Banner";
import Filters from "./Filters";
import ProductsContainer from "./ProductsContainer";
import Footer from "./Footer";
import {URL_USER, URL_ADD_POINTS, URL_PRODUCTS} from "../utils/endpoints";
import "./styles.css";

// Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmE5ZmQ0OGI5NTIzZTAwMjA3ZTFmYzEiLCJpYXQiOjE2MDQ5NzU5NDR9._SMZVMV6an8csDM46O2Q1rYU3JGDmIdFmGH7z56wFuA
function App() {

  const [data, setData] =  useState({
    user: [],
    points: [],
    products: []
  });

  useEffect(() => {
    getUser();
    getPoints();
    getProducts();
  }, []);

  const getUser = async () => {
    const url = URL_USER;
    const headers = {
      "Content-Type": "Application/json",
      Autentication: process.env.CODING_CHALLENGE_TOKEN
    }
    const response = await fetch(url, headers);
    const user = await response.json();
    setData({
      ...data,
      user
    });
  }

  const getPoints = async () => {
    const headers = {
      method: 'POST',
      body: {
        "amount": 1000
      },
      "Content-Type": "Application/json",
      Autentication: process.env.CODING_CHALLENGE_TOKEN
    }
    const response = await fetch(URL_ADD_POINTS, headers);
    const points = await response.json();
    setData({
      ...data,
      points,
    });
  }

  
  const getProducts = async () => {
    const headers = {
      "Content-Type": "Application/json",
      Autentication: process.env.CODING_CHALLENGE_TOKEN
    }
    const response = await fetch(URL_PRODUCTS, headers);
    const products = await response.json();
    setData({
      ...data,
      products
    });
  }

  return (
    <div className="App">
      {console.log(data.user)}
      {console.log(data.points)}
      {console.log(data.products)}
      <Header />
      <Filters />
      <ProductsContainer />
      <Footer />
    </div>
  );
}

export default App;
