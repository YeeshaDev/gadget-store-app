import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'

const fecthLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }else {
    return [];
  }

}

const StoreInLocalStorage= (data)  => {
  localStorage.setItem('cart',JSON.stringify(data))
}

const initialState = {
cartItem:[],
favItem:[],
totalAmount:0,
totalQuantity:0,
wishListAmount:0,
wishListQuantity:0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //add item to cart
    addItem:(state,action) => {
        const newItem = action.payload; 
        const existingItem = state.cartItem.find(
            (item) => item.id === newItem.id)
            state.totalQuantity++;
            if(!existingItem){
              state.cartItem.push({
                id:newItem.id,
                name:newItem.name,
                img:newItem.img,
                price:newItem.price,
                description: newItem.description,
                quantity:1,
                totalPrice:newItem.price,
                
              })  
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice= Number(existingItem.totalPrice) + Number(newItem.price);
              
            }
            state.totalAmount = state.cartItem.reduce((total,item) => total + (Number(item.price)  * Number(item.quantity)),0)
            //StoreInLocalStorage(state.newItem)
            console.log(newItem)
    },
    //add item to wishlist
    addToWishList:(state,action) => {
      const wishList = action.payload; 
      const existingItem = state.favItem.find(
          (item) => item.id === wishList.id)
          state.wishListQuantity++;
          if(!existingItem){
            state.favItem.push({
              id:wishList.id,
              name:wishList.name,
              img:wishList.img,
              price:wishList.price,
              category:wishList.category,
              quantity:1,
              totalPrice:wishList.price
            })  
          }
          else{
              existingItem.quantity++;
              existingItem.totalPrice= Number(existingItem.totalPrice) + 
              Number(wishList.price);
            
          }
          state.wishListAmount = state.favItem.reduce((total,item) => total + Number(item.price)  *
           Number(item.quantity),0)
          console.log(wishList)
  },

  //delete item from cart
  removeFromCart: (state, action) => {
    const id = action.payload;
    const existingItem = state.cartItem.find(
      (item) => item.id === id)

      if(existingItem) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }
      state.totalAmount = state.cartItem.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)
    /*const DeleteItems = state.cartItem.filter((item) => {
      return item.id !== action.payload;
    });
    state.cartItem = DeleteItems;*/
  },
  
  //clear all items
  clearCart:(state,action) => {
    state.cartItem = [];
  
  }
  }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer