const notificationAtStart = 'Welcome notification'

const initialState = {
  message: notificationAtStart
}

export const handleVoteMessage = (message) => {
  return {
    type: 'VOTE MESSAGE',
    message
  }
}

export const handleSubmitMessage = (message) => {
  return { 
    type: 'CREATE MESSAGE',
    message
  }
}

const notificationReducer = (store = initialState, action) => {
  if (action.type==='VOTE MESSAGE' || action.type === 'CREATE MESSAGE') {
    return  { message: action.message }
  }
  
  return store
}

export default notificationReducer