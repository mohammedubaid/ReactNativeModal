export default (state = { isShowing: false, message: '' }, action)  =>  {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        isShowing: true,
        message: action.message
      })
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state
  }
}