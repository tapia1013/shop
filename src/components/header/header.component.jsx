import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';



import { ReactComponent as Logo } from '../../asssets/crown.svg'


import './header.styles.scss';


const Header = ({ currentUser }) => {
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
      </div>
    </div>
  )
}


// state is the top level rootReducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);