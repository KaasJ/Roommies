import * as React from 'react'
import { Link } from 'react-router-dom'



export default function UserSelector() {
  return (<div>      
    <header>
      <h1 className="header">Hello! Welcome to <strong>ROOMMIES</strong></h1>
    </header>
    <div className="Buttons">
      <div className="Button1"><Link to={`/lookingforaroommie/`}> <button> Looking for a roommie! </button></Link></div>
      <div className="Button2"><Link to={`/offeringaroommie/`}> <button>Offering a roommie!</button></Link></div>
    </div>
    <footer className="footer">
       footer
    </footer>
  </div>
  )
}






