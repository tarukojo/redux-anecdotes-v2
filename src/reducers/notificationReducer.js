const notificationAtStart = 'Welcome notification'

const initialState = {
  message: notificationAtStart
}

const notificationReducer = (store = initialState, action) => {
  /*if (action.type==='VOTE') {
    return 'voted'
  }
  if (action.type === 'CREATE') {
    return 'created'
  }*/
  return store
}

export default notificationReducer