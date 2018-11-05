export default (state = [], action = {}) => {
  switch (action.type) {
    case 'X':
      return action.payload.map(photo => ({...photo}))
    default:
      return state
  }
}