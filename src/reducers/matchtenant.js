import { ADD_MATCH_TENANT } from '../actions/addMatchTenant';

const initialState = [];

const addMatchTenant = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_MATCH_TENANT:
    return [
      action.payload
    ];
  default:
    return state;
  }
}

export default addMatchTenant;