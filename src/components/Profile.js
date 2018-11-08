import * as React from 'react';
import { connect } from 'react-redux';
import '../styles/Profile.css'

class Profile extends React.Component {
  render() {
    if (this.props.state.users.length === 0) {
      return (<h1>Forbidden!</h1>)
    }

    const user = this.props.state.users[0]
    
    return(
      <div className='profbody'>
        <header className='profheader'></header>
        <div className='profmain'>
          <h1>Profile:</h1>
          <ul>
            <li><img src={user.user.image} alt='foto' className='profimg'/></li>
            <li>Name: {user.user.login}</li>
            <li>About me:</li>
            <li>{user.user.description}</li>
            <li>Contacts:</li>
            <li>{user.user.mobile}</li>
            <li>{user.user.email}</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Profile)