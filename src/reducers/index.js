import { combineReducers } from 'redux'
import  tenantPreferences from './tenantpreferences'
import roomOwner from './roomowner'


export default combineReducers({
  tenantPreferences,
  roomOwner
})