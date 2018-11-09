import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'
import room4 from '../images/room4.jpg'
import room5 from '../images/room5.jpg'
import logo from '../images/Logo - Roomies big2.png'
import connectbutton from '../images/Connect.png'
import '../styles/OwnerYouMatched.css'

const personImage = [room1,room2,room3,room4,room5]

class OwnerYouMatched extends React.Component {

  state = {
    showMenu:false,
  }

  menuHandler = () => {
    this.setState({
      showMenu:!this.state.showMenu
    })
  }

  mailTo = () => {
    window.location.href = 'mailto:sample@email.com';
  }
  
  render() {
    return( <div className="body">

  
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
<div className="box10">
      <div className='login'>
        {/* <Link to={'/login'}><button className='loginbutton3'>Log in</button></Link>
        <button className='loginbutton4'>Sign up</button> */}
        <p>You've got a match!</p>
      </div>

      <div className="matchsection">
      
      
      <img className="leftPhoto" src={personImage[Math.floor(Math.random()* 5)]} alt="imageMatcher"></img>
      <img className="rightPhoto" src={this.props.matched.matchOwner[0]['image']} alt="personyoumatchedwith"></img>
      </div>
      <div className="buttonsbottom">
      <button className="sendmessage"onClick={this.mailTo}>Send a Message</button>
      <Link to='/offeringaroommie'><button className="keepsearching">Keep on Searching</button></Link></div>
      
      </div>

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
    matched: state
  }
}

export default connect(mapStateToProps)(OwnerYouMatched)