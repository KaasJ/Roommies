export const ADD_OWNER = 'ADD_OWNER';

export function addOwner(state) {
  return {
    type: ADD_OWNER,
    payload: state
  };
}