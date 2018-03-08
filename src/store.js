import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const finalReducer = combineReducers({
  anecdotes: reducer,
  message: notificationReducer
})

const store = createStore(finalReducer)

export default store