import { combineReducers } from 'redux'
import postReducer from './post-reducer'

const rootReducer = combineReducers(
  {
    postsById: postReducer,
  }
)

export default rootReducer
