export const ADD_MATCH_TENANT_LIST = 'ADD_MATCH_TENANT_LIST';

export function addMatchesTenant(state){
  return {
    type: ADD_MATCH_TENANT_LIST,
    payload: state
  }; 
}