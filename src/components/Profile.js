import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../styles/Profile.css'
import connectbutton from '../images/Connect.png'
import logo from '../images/Logo - Roomies big2.png'


class Profile extends React.Component {

  state = {
    showMenu:false
  }

  menuHandler = () => {
    this.setState({
      showMenu:!this.state.showMenu
    })
  }


  render() {
    if (this.props.state.users.length === 0) {
      return (<div><p>Oeps..sorry! You are not allowed to go here!</p><p> Please go back to the login page: <Link to={'/login'}><button>Login page</button> </Link></p></div>)
    }

    const user = this.props.state.users[0]
    
    return(
      <div className="body">
        <header classname="header">
          <div className="logoandhamburger">
            <Link to={'/'}><img src={logo} alt="icons" className="logo" /></Link>
            <img src="https://img.icons8.com/ios/1600/menu.png" alt="bottommenu" className="hamburger" onClick={this.menuHandler} />
          </div>
          {this.state.showMenu && <div className="menu-dropdown">
            <ul className="menu-dropdown-buttons">
              <Link to={'/profile'}><li>Profile</li></Link>
              <li>Matches</li>
              <li>Messages</li>
              <li>Notifications</li>
            </ul></div>
          }
        </header>

        <div className="box3">
          <div className='login'>
            <Link to={'/login'}><button className='loginbutton3'>Log in</button></Link>
            <button className='loginbutton4'>Sign up</button>
          </div>


          <div className="profilebox">
            <h1>Profile:</h1>
            <ul className="profilelist">
              <li><img className="profilepicture" src={user.user.image} alt='foto' /></li>
              <li>Name: {user.user.login}</li>
              <li>About me:</li>
              <li>{user.user.description}</li>
              <li>Contacts:</li>
              <li>{user.user.mobile}</li>
              <li>{user.user.email}</li>
          
            </ul>
            
          </div>
        </div>
        <Link to='/'><button className="gobackbutton">Keep on searching!</button></Link>
        {/* <footer className="footer">
          <h2>Connect with us</h2>
          <div className="contact"> */}
            {/* <img src="https://img.icons8.com/ios/1600/facebook.png" alt="icon1"/>
  <img src="https://img.icons8.com/ios/1600/twitter-circled.png" alt="icon2"/>
  <img src="https://img.icons8.com/ios/1600/instagram-new.png" alt="icon3"/> */}
            {/* <img src={connectbutton} alt="icons" className="icons" />

          </div>
          <h3>2018</h3>
        </footer> */}
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