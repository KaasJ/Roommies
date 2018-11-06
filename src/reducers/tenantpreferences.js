import {ADD_TENAT} from '../actions/addtenat';

const initialState = [];

const tenantPreferences = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TENAT:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  } 
}

export default tenantPreferences;