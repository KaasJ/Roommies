export const ADD_MATCH_OWNER_LIST = 'ADD_MATCH_OWNER_LIST';

export function addMatchesOwner(state){
  return {
    type: ADD_MATCH_OWNER_LIST,
    payload: state
  }; 
}