import { combineReducers } from 'redux'
import  tenantPreferences from './tenantpreferences'
import roomOwner from './roomowner'
import matchOwner from './matchowner'
import matchTenant from './matchtenant'
import users from './users'
import addMatchTenantList from './addMatchTenantList'
import addMatchOwnerList from './addMatchOwnerList'


export default combineReducers({
  tenantPreferences,
  roomOwner,
  matchOwner,
  matchTenant,
  addMatchTenantList,
  addMatchOwnerList,
  users,
})