import * as React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UserSelector.css'
import connect from '../images/Connect.png'
import logo from '../images/Logo - Roomies big.png'



export default class UserSelector extends React.Component {

  state = {
    showMenu:false
  }

  menuHandler = () => {
    this.setState({
      showMenu:!this.state.showMenu
    })
  }

  render() {
  return (<div className="body">
    <header>
      <div className="title">
        {/* <h1 className="name">ROOMMIES</h1> */}
        <Link to={'/'}><img src={logo} alt="icons" className="logo" /></Link>
        <img src="https://img.icons8.com/ios/1600/menu.png" alt="buttommenu" className="bar" onClick={this.menuHandler} />
        </div>
        {this.state.showMenu && <div><ul><Link to={'/profile'}>
        <li>Profile</li></Link>
        <li>Matches</li>
        <li>Messages</li>
        <li>Notifications</li>
        </ul></div>
      }
    </header>

    <div className="background">
      <div className='login'>
        <Link to={'/login'}><button className='button3'>Log in</button></Link>
        <button className='button4'>Sign up</button>
      </div>
      <div className="menu">
        <h5 className="greeting">Find your perfect match!</h5>
        <div className="buttons">
          <div><Link to={`/lookingforaroommie/`}> <button className="button1"> I need a room! </button></Link></div>
          <div><Link to={`/offeringaroommie/`}> <button className="button2">I need a roomie!</button></Link></div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <h2>Connect whit us</h2>
      <div className="contact">
        {/* <img src="https://img.icons8.com/ios/1600/facebook.png" alt="icon1"/>
        <img src="https://img.icons8.com/ios/1600/twitter-circled.png" alt="icon2"/>
        <img src="https://img.icons8.com/ios/1600/instagram-new.png" alt="icon3"/> */}
        <img src={connect} alt="icons" className="icons" />

      </div>
      <h3>2018</h3>
    </footer>
  </div>
  )
}
}