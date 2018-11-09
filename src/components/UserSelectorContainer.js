import * as React from 'react'
import UserSelector from './UserSelector'


export default class UserSelectorContainer extends React.Component {

  componentDidMount(){
    document.title = "Roommies App"
  }


  render() {
  return( 
  <div>
  <UserSelector />     
  </div>
  )
  }
}

