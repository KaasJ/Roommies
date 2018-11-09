import { ADD_MATCH_OWNER_LIST } from '../actions/addMatchesOwner';

const initialState = [];

const addMatchOwnerList = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_MATCH_OWNER_LIST:
    return [...state,
      action.payload
    ];
  default:
    return state;
  }
}

export default addMatchOwnerList;