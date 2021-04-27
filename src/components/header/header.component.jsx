import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';



import { ReactComponent as Logo } from '../../asssets/crown.svg'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';


const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
          currentUser ? (
            <div
              className="option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link
              to="/signin"
              className="option"
            >
              SIGN IN
            </Link>
          )
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}


// state is the top level rootReducer...({user: {}}) is what we do when we want to destructure nested values
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);