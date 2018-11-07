export const ADD_TENANT = 'ADD_TENANT';

export function addTenant(state){
  return {
    type: ADD_TENANT,
    payload: state
  }; 
}