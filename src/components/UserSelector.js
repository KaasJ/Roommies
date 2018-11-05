import * as React from 'react'
import { Link } from 'react-router-dom'



export default function UserSelector() {
    return (<div>      

      <h1>Hello! Welcome to <strong>ROOMMIES</strong></h1>
      
    <div className="Buttons">
     <div className="Button1"> <button> <Link to={`/lookingforaroommie/`}>Looking for a roommie!</Link> </button></div>
    <div classname="Button2"><button><Link to={`/offeringaroommie/`}>Offering a roommie!</Link></button></div>
    </div>
    </div>
    )
  }






