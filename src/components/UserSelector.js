import * as React from 'react'
import { Link } from 'react-router-dom'



export default function UserSelector() {
    return (<div>      

      <h1>Hello! Welcome to <strong>ROOMMIES</strong></h1>
      
    <div className="Buttons">
     <div className="Button1"><Link to={`/lookingforaroommie/`}> <button> Looking for a roommie! </button></Link></div>
    <div classname="Button2"><Link to={`/offeringaroommie/`}> <button>Offering a roommie!</button></Link></div>
    </div>
    </div>
    )
  }






