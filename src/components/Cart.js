import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../store/cartSlice";
// import App from "../App";
import { Link } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const ingredientItems = useSelector((store) => store.cart.ingredients);

  console.log(cartItems);
  console.log(ingredientItems);

  const dispatch = useDispatch();
  const clearCartHandler = () => {
    if (cartItems.length > 0) {
      dispatch(clearCart());
      console.log(cartItems.length);
    }
  };

  const multiply = (qnt, price) => {
    return qnt * price;
  };

  const getCartTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice };
  };

  const getIngredientsTotal = () => {
    let totalPrice = 0;
    if (ingredientItems && ingredientItems.length > 0) {
      ingredientItems[0].forEach((item) => {
        totalPrice += item.price;
      });
    }
    return { totalPrice };
  };

  const getTotal = (s1, s2) => {
    return s1 + s2;
  };

  const removeCartHandler = (item) => {
    dispatch(removeItem(item));
    console.log(item);
  };

  return (
    <div className="row">
      <div className="col-lg-8">
        <div class="title p-3">
          <div class="row">
            <div class="col">
              <h4 className="text-start">
                <b>Shopping Cart</b>
              </h4>
            </div>
            <div className="col align-items-center text-end text-muted">
              {cartItems.length} Items
              <button
                className="btn btn-danger mx-2"
                onClick={() => clearCartHandler()}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        {cartItems && cartItems.length > 0 && (
          <>
            <div
              className="row border-top border-bottom"
              style={{ paddingLeft: "20px" }}
            >
              {cartItems.map((product) => {
                return (
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img
                        src={product.image}
                        width={120}
                        height={120}
                        alt="..."
                      />
                    </div>
                    <div className="col mx-3">
                      <h5 className="row text-muted text-start">
                        {product.name}
                      </h5>
                      <div className="row">{product.type}</div>
                    </div>
                    <div className="row col">
                      <button
                        className="col btn btn-warning"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </button>
                      <p className="col">{product.quantity}</p>
                      <button
                        className="col btn btn-warning"
                        onClick={() => dispatch(incrementQuantity(product.id))}
                      >
                        +
                      </button>
                    </div>
                    <div className="col">Rs.{product.price}</div>
                    <div className="col">
                      Rs. {multiply(product.quantity, product.price)}
                      <button
                        className="btn"
                        onClick={() => {
                          removeCartHandler(product);
                        }}
                      >
                        &#10005;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-end p-3 mx-5">
              Sub Total: <strong>Rs.{getCartTotal().totalPrice}</strong>
            </div>
          </>
        )}
      </div>
      <div className="col-md-4 p-4">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <div className="row border-top">
          <div className="col mt-3 text-left underline">Ingredients</div>
          <div className="col mt-3 text-right underline">Price</div>
        </div>
        <div className="my-3">
          {ingredientItems &&
            ingredientItems[0].map((items) => {
              return (
                <div className="row">
                  <div className="col" style={{ paddingLeft: "0px" }}>
                    {items.tname}
                  </div>
                  <div className="col text-right">Rs.{items.price}</div>
                </div>
              );
            })}
        </div>

        <hr></hr>

        <div>
          Addons Total: <strong>Rs.{getIngredientsTotal().totalPrice}</strong>
        </div>

        <div className="row border-top mt-3">
          <div className="col">TOTAL PRICE</div>
          <div className="col text-right">
            <strong>
              Rs.
              {getTotal(
                getCartTotal().totalPrice,
                getIngredientsTotal().totalPrice
              )}
            </strong>
          </div>
        </div>
        {/* <button className="btn border-warning my-2" >CHECKOUT</button> */}
        <button className="btn bg-info border-warning my-2" ><Link to="/success" style={{color:"black"}}>CHECKOUT</Link></button>

      </div>
    </div>
  );
};

export default Cart;





















































// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../store/cartSlice";
// import ingredients1 from "./Build";
// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const clearCartHandler = () => {
//     dispatch(clearCart());
//   };

//   // const addCartHandler=()=>{
//   //   dispatch(addCart());
//   // }
//   return (
//     <div>
//       {/* <h1>Cart Component</h1> */}
//       <button className="btn btn-danger" onClick={clearCartHandler}>
//         All Clear Cart
//       </button>
// <div>
//         {cartItems.length >0 &&(
//             cartItems.map((product) => {
//               return (
//                 <div
//                   className="card flex flex-wrap gap-10 justify-center"
//                   style={{
//                     width: "18rem",
//                     margin: "3px",
//                     display: "flex",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   <img src={product.image} className="card-img-top" alt="..." />
//                   <div className="card-body ">
//                     <h5 className="card-title">{product.name}</h5>
//                     <p className="card-text">Rs. {product.price}</p>
//                   </div>

//                 </div>
//               );
//             }) 
//       )}
//       </div>
//       {cartItems.length===0 &&(
//         <h5>Cart is Empty</h5>
//       )}
//       <div>
//         <span>
//           {ingredients1}
//         </span>
//       </div>
//     </div>



//   );
// };

// export default Cart;





























































































