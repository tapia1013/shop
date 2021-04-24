import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if db has updated with any new data, onSnapshot same as setState
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      // if no userAuth or is logged out
      else {
        this.setState({ currentUser: userAuth })
      }

    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
