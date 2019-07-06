import React from "react";
import Hero from "../components/Hero";
import Info from "../components/HomePage/Info";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <div>
      <Hero title="" max="true">
        {/*<Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>*/}
      </Hero>
      <Info/>
      <Featured />
    </div>
  );
}
