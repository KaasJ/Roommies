import * as React from 'react';
import '../styles/LoginForm.css';
import foto2 from '../images/Logo - small.png';
import foto1 from '../images/Connect.png';

export default function LoginForm (props) {
  return (
    <div className='formbody'>
      <header className='formheader'>
        <img src="https://img.icons8.com/ios/1600/menu.png" alt="buttommenu" className="bar" />
        <img src={foto2} alt="icons" className="logo" />
      </header>
      <div className="background">
        <form onSubmit={props.handlesubmit}>
          <div className='titleform'><h1>Welcome back!</h1></div>
          <div className="menuform">
            <ul>
              <input type='text' name='login' key='text' onChange={props.inputchange} className='input1' placeholder="Username"></input>
              <input type='password' name='password' key='number' onChange={props.inputchange} className='input2' placeholder="Password"></input>
              <button type='submit' className="buttonlogin">Log in</button>
            </ul>
          </div>
        </form>
      </div>
      <footer className="footer">
        <h2>Connect whit us</h2>
        <div className="contact">
          <img src={foto1} alt="icons" className="icons" />
        </div>
        <h3>2018</h3>
      </footer>
    </div>
    
  )
}