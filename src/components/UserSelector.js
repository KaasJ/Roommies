import * as React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UserSelector.css'
import foto1 from '../images/Connect.png'



export default function UserSelector() {
  return (<div className="body">
    <header>
      <div className="title">
        <h1 className="name">ROOMMIES</h1>
        <Link to={'/login/'}><img src="https://img.icons8.com/ios/1600/menu.png" alt="buttommenu" className="bar" /></Link>
      </div>
    </header>
    
    <div className="background">
      <div className="menu">
        <h1 className="greeting">Find your perfect match!</h1>
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
        <img src={foto1} alt="icons" className="icons" />

      </div>
      <h3>2018</h3>
    </footer>
  </div>
  )
}
