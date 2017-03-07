 export const showModal = (message) => {
  return {
    type: 'SHOW_MODAL',
    message
  }
}
 
export const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  }
}