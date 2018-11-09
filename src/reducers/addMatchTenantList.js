import { ADD_MATCH_TENANT_LIST } from '../actions/addMatchesTenant';

const initialState = [];

const addMatchTenantList = (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_MATCH_TENANT_LIST:
    return [...state,
      action.payload
    ];
  default:
    return state;
  }
}

export default addMatchTenantList;