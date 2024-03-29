import React from "react";
import "./SingleProductPage.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import kitabat from "../images/kit.jpg";
import { ProductConsumer } from "../context";
export default function SingleProductPage() {
  return (
    <div>
      <Hero img={kitabat} title="single product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("hello from loading");
            return <h1>product loading....</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <section className="page">
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      // src={image}
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h3 className="text-title mb-4">Product :{title} </h3>
                    <h3 className="text-capitalize mb-4">
                      company : {company}
                    </h3>
                    <h5 className="text-capitalize mb-4">
                      price : Rs.{price}
                    </h5>
                    <p className="text-capitalize title mt-3">
                      some info about product :
                    </p>
                    <p>{
                      description.map(items =>{
                        return(
                          <p>{items}</p>
                          )
                      })
                    }</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      add to cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </div>
  );
}
