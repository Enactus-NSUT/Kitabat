import React from "react";
import "./Cart.css";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default function Cart() {
  return (
    <section className="page">
      {/* title */}
      <div className="container py-5">
        <Title title="your cart items" center />
      </div>
      {/* cart columns */}
      <CartColumns />
      {/* cart list */}
      <CartList />
      {/* cart totals */}
      <CartTotals />
    </section>
  );
}
