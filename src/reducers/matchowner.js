import { ADD_MATCH_OWNER } from '../actions/addMatchOwner';

const initialState = [];

const matchOwner = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_MATCH_OWNER:
    return [
      action.payload
    ];
  default:
    return state;
  }
}

export default matchOwner;