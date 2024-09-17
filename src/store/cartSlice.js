import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    ingredients: [],
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(removeItem);
      state.items = removeItem;
    },
    clearCart: (state, action) => {
      return { items: [] };
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    //ingredients functions
    addIngredients: (state, action) => {
      state.ingredients.push(action.payload);
      console.log("inside addIngredients");
      console.log(action.payload);
    },
    clearIngredients: (state, action) => {
      return { ingredients: [] };
    },
    removeIngredients:(state, action)=>{
      const removeItem=state.ingredients.filter(
        (item)=>item.id!==action.payload.id
      )
      console.log(removeItem)
      state.ingredients=removeItem;
    },
    getTotalPrice: (state, action) => {
      const total = state.items.reduce((sum, val) => sum + val.price, 0);
      console.log(`total price: ${total}`);
      state.totalPrice = total;
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  addIngredients,
  clearIngredients,
  removeIngredients,
} = cartSlice.actions;





































































































































































































// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
  
//   initialState: {
//     items: [],
//     totalAmount:0,
//     ingredients:[]  


//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
    
//     clearCart: (state, action) => {
//       return { items: [] };
//     },
//     totalAmount:(state,action)=>{
//       state.totalAmount+=action.payload
//     },
//     subtractAmount:(state,action)=>{
//       state.totalAmount-=action.payload
//     },

//     addIngredients:(state,action)=>{
//       state.ingredients.push(action.payload)
//     },

//     clearIngredients:(state,action)=>{
//       return { ingredients: [] };
//     }
    
//   },
// });

// export default cartSlice.reducer;

// export const 
// { addItem, clearCart,
//   totalAmount,subtractAmount,
//   addIngredients,clearIngredients } = cartSlice.actions;

















































































