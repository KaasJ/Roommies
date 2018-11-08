export const ADD_MATCH_TENANT = 'ADD_MATCH_TENANT';

export function addMatchTenant(state){
  return {
    type: ADD_MATCH_TENANT,
    payload: state
  }; 
}