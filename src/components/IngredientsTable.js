import {useDispatch,useSelector} from "react-redux"
import {totalAmount,subtractAmount} from "../store/cartSlice"
// import Total from "./Total"
const IngredientsTable = (props) => {
  const dispatch=useDispatch();
  // const ta=useSelector((state)=>state.cart.totalAmount)
  const checkHandler=(e)=>{
    if(e.target.checked){
      dispatch(totalAmount(props.list.price))
    }
    else{
      dispatch(subtractAmount(props.list.price))
    }

  }
    return( 
      <tr>
        <td>
          <img src={props.list.image} height={50} alt="......"/>
        </td>
        <td>
          {props.list.tname} ₹{props.list.price}
        </td>
        <td>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="check1" name="option1" value={props.list.price} onChange={checkHandler} />
        <label class="form-check-label" type="checkbox" id="check1">Add cart</label>
      </div>
      </td>
      </tr>
      
    
    );
  };
  
  export default IngredientsTable;
  