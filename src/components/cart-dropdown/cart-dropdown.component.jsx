import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-items.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'


import './cart-dropdown.styles.scss'





const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}




// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// })

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})



export default connect(mapStateToProps)(CartDropdown);




// video 24 of redux1 section