import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import kitabat from "../images/kit.jpg";

export default function ProductsPage() {
  return (
    <div>
      <Hero img={kitabat} />
      <Products />
    </div>
  );
}
