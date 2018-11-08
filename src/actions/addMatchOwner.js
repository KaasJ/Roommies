export const ADD_MATCH_OWNER = 'ADD_MATCH_OWNER';

export function addMatchOwner(state){
  return {
    type: ADD_MATCH_OWNER,
    payload: state
  }; 
}