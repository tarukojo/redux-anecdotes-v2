import { createStore, combineReducers } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const finalReducer = combineReducers({
  anecdotes: reducer,
  message: notificationReducer,
  filter: filterReducer
})

const store = createStore(finalReducer)

export default store