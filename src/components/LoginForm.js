import * as React from 'react';
import '../styles/LoginForm.css';
import foto2 from '../images/Logo - Roomies big2.png';
import connectbutton from '../images/Connect.png'
import { Link } from 'react-router-dom'
import logo from '../images/Logo - Roomies big2.png'


export default class LoginForm extends React.Component {


  state = {
    showMenu:false,
  }

  menuHandler = () => {
    this.setState({
      showMenu:!this.state.showMenu
    })
  }

  render() {
    return (<div className="body">
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

      <div className="box">
        <div className='login'>
          <Link to={'/login'}><button className='loginbutton3'>Log in</button></Link>
          <button className='loginbutton4'>Sign up</button>
        </div>

        <div className='formbody'>
    
          <div>
            <form onSubmit={this.props.handlesubmit}>
              <div><h1>Welcome back!</h1></div>
              <div >
                <ul>
                <div className='menuform'>
                  <input className='username' type='text' name='login' key='text' onChange={this.props.inputchange} className='input1' placeholder="Username"></input>
                  <input className='password' type='password' name='password' key='number' onChange={this.props.inputchange} className='input2' placeholder="Password"></input>
                  <button type='submit' className="buttonlogin">Log in</button>
                  </div>
                </ul>
              </div>
            </form>
          </div>
        </div>
      
      </div>
      <footer className="footer">
          <h2>Connect with us</h2>
          <div className="contact">
            {/* <img src="https://img.icons8.com/ios/1600/facebook.png" alt="icon1"/>
        <img src="https://img.icons8.com/ios/1600/twitter-circled.png" alt="icon2"/>
        <img src="https://img.icons8.com/ios/1600/instagram-new.png" alt="icon3"/> */}
            <img src={connectbutton} alt="icons" className="icons" />

          </div>
          <h3>2018</h3>
        </footer>
    </div>
    )
  }
}