import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      width="35"
                      src={`../${item.image}`}
                      // src={item.image}
                      alt="cart item"
                    />
                    <div className="mt-3 des">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount : {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total : Rs.{cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="link">
                cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 97px;
  right: 0;
  width: 100%;
  height: 100%;
  background: #e6b800;
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid black;
  border-top: 2px solid black;
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
  h4{
    color:black;
  }
  .link {
  padding: 0.5rem 1rem;
  background: black;
  color: var(--mainWhite);
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  outline: 2px solid black;
  outline-offset: 4px;
  border: none;
  transition: var(--mainTransition);
}
.link:hover {
  background: var(--darkGrey);
  text-decoration: none;
  color: #e6b800;
  outline-color: var(--darkGrey);
}
h6{
  color:white;
}
`;
