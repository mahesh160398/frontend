import React, { useState } from "react";
import { addItem } from "../store/cartSlice";
import {useDispatch} from "react-redux"

const ProductCard = (props) => {
  const [buttonText,setButtonText]=useState("Add to cart")
    const dispatch = useDispatch();
    const AddItemHandler = () => {
      setButtonText("Added")
      setTimeout(()=>{
        setButtonText("Add to cart")
      },2000)
      dispatch(addItem(props.list));
      console.log(props.list);
    };
  return (
    <div className="card shadow mt-2 h-100 gap-2">
      <div className="row p-3">
        <div className="col-lg-3 text-start">
          <h4>{props.list.name}</h4>
          {props.list.type === "veg" ? (
            <div className="bg-success" style={{height:"20px",width:"20px"}}></div>
          ) : (
            <div className="bg-danger" style={{height:"20px",width:"20px"}}></div>
          )}
          <h6>₹{props.list.price}</h6> 
        </div>
        <div className="col-lg-6 text-start p-0">
          <p><b>Description: </b>
            {props.list.description}</p>
          <p>
            <b>Ingredients: </b>
            {props.list.ingredients.join()}
          </p>
          <p>
            <b>Toopings: </b>
            {props.list.topping.join()}
          </p>
        </div>
        <div className="col-lg-3">
          <img src={props.list.image} height={120} width={120} alt="...."/>
          <button className="btn btn-sm btn-warning text-white" onClick={AddItemHandler}>
          {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
