
import { ADD_OWNER } from '../actions/addOwner';

const initialState = [];

const roomOwner = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_OWNER:
    return [
      ...state,
      action.payload
    ];
  default:
    return state;
  }
}

export default roomOwner;