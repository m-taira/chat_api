import { combineReducers } from 'redux'
import Chat, { chatInitialState } from './Chat'

export const initialState = {
  Chat: chatInitialState,
}

const rootReducer = combineReducers({ Chat })


export default rootReducer
