import { SET_USER } from '../actions/setuser';

const initialState = [];

const users = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_USER:
    return [action.payload];
  default:
    return state;
  }
}

export default users;