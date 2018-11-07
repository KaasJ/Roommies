import {ADD_TENANT} from '../actions/addTenant';

const initialState = [];

const tenantPreferences = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TENANT:
      return [
        action.payload
      ];
    default:
      return state;
  } 
}

export default tenantPreferences;