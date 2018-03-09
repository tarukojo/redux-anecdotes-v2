import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const finalReducer = combineReducers({
  anecdotes: reducer,
  message: notificationReducer,
  filter: filterReducer
})

const store = createStore(finalReducer, applyMiddleware(thunk))

export default store