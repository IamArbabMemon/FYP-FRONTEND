import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

export const productSlice = createSlice({
  name: 'productCount',
  initialState:{
    cartItems: []
},
  reducers: {
    addToCart(state, action){
        console.log(`current:`,current(state));
        const item = action.payload;
        let productItem = state.cartItems.find(product => product._id === item._id);
        if(productItem){
          productItem.qty += 1;
        }else{
          state.cartItems = [item,...state.cartItems];
        }
    },

    incrementQ(state, action){
        const item = action.payload;
        let productItem = state.cartItems.find(product => product._id === item._id);
        if(productItem){
          productItem.qty += 1;
        }
    },

    decrementQ(state, action){
        const item = action.payload;
        let productItem = state.cartItems.find(product => product._id === item._id);
        if(productItem){
          productItem.qty -= 1;
          if(productItem.qty === 0){
            state.cartItems = state.cartItems.filter(product => product._id !== item._id);
          }
        }
    },

    removeFromCart(state, action){
        const item = action.payload;
        state.cartItems = state.cartItems.filter(product => product._id !== item._id);
    }

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementQ, decrementQ, removeFromCart } = productSlice.actions

export default productSlice.reducer