import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


import { ReactComponent as ShoppingIcon } from '../../asssets/shopping-bag.svg';


import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}




const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})



// const mapStateToProps = ({ cart: { cartItems } }) => {
//   // console.log('I AM BEING CALLED EVERYTIME');
//   return {
//     itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
//   }
// }

// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})



export default connect
  (
    mapStateToProps,
    mapDispatchToProps
  )
  (CartIcon);
