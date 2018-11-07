import { combineReducers } from 'redux'
import  tenantPreferences from './tenantpreferences'
import roomOwner from './roomowner'
import users from './users'


export default combineReducers({
  tenantPreferences,
  roomOwner,
  users
})