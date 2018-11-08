import { combineReducers } from 'redux'
import  tenantPreferences from './tenantpreferences'
import roomOwner from './roomowner'
import matchOwner from './matchowner'
import matchTenant from './matchtenant'


export default combineReducers({
  tenantPreferences,
  roomOwner,
  matchOwner,
  matchTenant
})