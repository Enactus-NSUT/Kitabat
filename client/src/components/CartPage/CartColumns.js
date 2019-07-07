import React from "react";
import "./Cart.css";
export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase titles">products</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase titles">name of product</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase titles">price</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase titles">quantity</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase titles">remove</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase titles">total</p>
        </div>
        {/* end of single column */}
      </div>
    </div>
  );
}
