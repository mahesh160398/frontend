import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addIngredients } from "../store/cartSlice";


const Build = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleChange = (item, event) => {
    if (event.target.checked) {
      setOrderedItems([...orderedItems, item]);
      setTotalCost((total) => total + parseInt(item.price));
    } else {
      setOrderedItems(orderedItems.filter((i) => i.name !== item.name));
      setTotalCost((total) => total - parseInt(item.price));
    }
  };

  const dispatch = useDispatch();
  const AddItemHandler = () => {
    console.log("inside AddItemHandler");
    console.log(orderedItems);
    dispatch(addIngredients(orderedItems));
  };

  let [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/ingredients/list")
      .then((res) => {
        console.log(res.data.data);
        setIngredients(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div>
      <div className="container">
        <p className="py-3">
          Pizzeria now gives you options to build yout own pizza. customize yout
          pizza by choosing ingredients from the list given below
        </p>
        <div className="row justify-content-center">
          <table className="table table-bordered table-striped w-50">
            <tbody>
              {ingredients.map((items, index) => {
                return (
                  <tr>
                    <td>
                      <img src={items.image} height={50} alt="..."></img>
                    </td>
                    <td className="text-center align-middle">
                      <h6 className="font-weight-bold">
                        {items.tname} ₹{items.price}.00
                      </h6>
                    </td>
                    <td className="text-warning align-middle">
                      <input
                        type="checkbox"
                        name={items.name}
                        onChange={(event) => handleChange(items, event)}
                      />
                      <label className="form-check-label mx-2" for={items.id}>
                        Add
                      </label>
                    </td>
                  </tr>
                );
              })}
              <tr className="border">
                <h6 className="font-weight-bold text-primary">
                  Total Cost: {totalCost}
                </h6>
                <button
                  className="btn border border-warning bg-dark text-primary"
                  onClick={() => {
                    AddItemHandler();
                  }}
                >
                  Build Pizza
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Build;











































// import { useEffect, useState} from "react";
// import {useSelector,useDispatch} from "react-redux"
// import IngredientsTable from "./IngredientsTable";
// import axios from "axios";

// import { addIngredients,clearIngredients } from "../store/cartSlice";
// const Build = () => {
//   let [orderedItems, setOrderItems]=useState([]);
//   let [ingredients, setIngredients] = useState([]);
  
//   const ta=useSelector((state)=>state.cart.totalAmount)
//   const ingredients1=useSelector((state)=>state.cart.ingredients)
  
//   const checkHandler=(item,e)=>{
//     if(e.target.checked){
//       setOrderItems(...[orderedItems,item]);
//     }
//     else{
//       setOrderItems(orderedItems.filter((i) => i.name !== item.name));
//     }
//   }
//   const dispatch = useDispatch();
//   const BuildHandler=()=>{
//     console.log("Check Build")
//     console.log(orderedItems)
//     dispatch(addIngredients(orderedItems))
//   }
  
//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/ingredients/list")
//       .then((res) => {
//         console.log(res.data.data);
//         setIngredients(res.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <p className="py-3">
//         Pizzeria now gives you options to build yout own pizza. customize yout
//         pizza by choosing ingredients from the list given below
//       </p>
//       <div className="container">
//         <table class="table table-bordered table-hover w-50">
//           <tbody>
//             {ingredients.map((items) => {
//               return <IngredientsTable key={items.empId} list={items} />;
//             })}
//             <tr>
//         <p className="text-warning">TotalAmount is: <span className="text-black"> {ta} </span></p>
        
//         <button className="btn btn-dark text-color-warning" onChange={BuildHandler}>Build Pizza</button>
//         </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Build;

























































































