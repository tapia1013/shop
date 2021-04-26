// set initial state cause app doesnt know what it is. The same as this.state = {currentUsr:null}
const INITIAL_STATE = {
  currentUser: null
}

// pass INITIAL_STATE as state default value
const userReducer = (state = INITIAL_STATE, action) => {
  // return state based on action that is passed
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
}


export default userReducer;