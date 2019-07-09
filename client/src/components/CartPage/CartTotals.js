import React from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <form name="f1" id="form1" method="post" action="https://lit-ridge-76018.herokuapp.com/">
                  
                  <input type="hidden" id="TXN_AMOUNT" name="TXN_AMOUNT" value={value.cartTotal} />
                  <button type="submit" className="btn btn-outline-danger text-capitalize mb-4">Submit</button>
                  </form>
                <h3>subtotal : Rs.{cartSubTotal}</h3>
                <h3>total : Rs.{cartTotal}</h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
