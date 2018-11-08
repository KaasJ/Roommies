export const SET_USER = 'SET_USER';

export function setUser (state) {
  return {
    type: SET_USER,
    payload: state
  };
}