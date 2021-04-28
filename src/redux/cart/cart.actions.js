import CartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})


export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})


// new action to clear cart when X is clicked
export const ClearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

