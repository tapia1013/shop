import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';



import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import CheckoutPage from './pages/checkout/checkout.component';






class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //   }
  // }


  unsubscribeFromAuth = null;



  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if db has updated with any new data, onSnapshot same as setState
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      // if no userAuth or is logged out
      else {
        setCurrentUser(userAuth)
      }

    })
  }




  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  // we can remove currentUser in <header/>
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={
              () => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndUpPage />)}
          />
        </Switch>
      </div>
    )
  }
}



// this is for Redirect
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



// we use dispatch to props cause we dont need users anymore unlike the headers.js so we use dispatch, cause it just sets it
const mapDispatchToProps = dispatch => ({
  // current users action passes through here
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// we use connect to connect state to childs, we use null cause we dont need any Map To State arg
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);





