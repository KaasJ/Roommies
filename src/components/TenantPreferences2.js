import * as React from 'react'
import { Link } from 'react-router-dom'


const locations = ['Amsterdam', 'Roterdam', 'The Hague', 'Haarlem', 'Utrecht']; 
const prices = ['under 400 EUR', '400-500 EUR', '500-600 EUR', '600-700 EUR', '700-800 EUR', 'above 800 EUR' ];

export default function TenantPreferences2 (props) {
  
  return (
    <div>
      <h1>Fill your preferences</h1>
      <form onSubmit={props.handlesubmit}>
        <ul>
          <li>Location:&nbsp;
            <select name='location' onChange={props.inputchange}>
              <option>pick your location</option>
              {locations.map((location, i) => <option key={i}>{location}</option>)}
            </select>
          </li>
          <li>Price:&nbsp;
            <select name='price' onChange={props.inputchange}>
              <option>pick your price</option>
              {prices.map((price, j) => <option key={j}>{price}</option>)}
            </select>
          </li>
          <li>Starting date:&nbsp;
            <input type='date' name='startingDate' onChange={props.inputchange} key='date'></input>
          </li>
          <li>Gender:</li>
          <li>
            <input type='radio' name='gender' value='Female' id='female' onChange={props.inputchange}/><label htmlFor='female'>Female</label>&nbsp;
            <input type='radio' name='gender' value='Male' id='male' onChange={props.inputchange}/><label htmlFor='male'>Male</label>&nbsp;
            <input type='radio' name='gender' value='Any' id='any' onChange={props.inputchange}/><label htmlFor='any'>Any</label>&nbsp;
          </li>
          <li>Smoking:</li>
          <li>
            <input type='radio' name='smoking' value='Yes' id='smokingYes' onChange={props.inputchange}/><label htmlFor='smokingYes'>Yes</label>&nbsp;
            <input type='radio' name='smoking' value='No' id='smokingNo' onChange={props.inputchange}/><label htmlFor='smokingNo'>No</label>&nbsp;
          </li>
          <li>Pets:</li>
          <li>
            <input type='radio' name='pets' value='Yes' id='petsYes' onChange={props.inputchange}/><label htmlFor='petsYes'>Yes</label>&nbsp;
            <input type='radio' name='pets' value='No' id='petsNo' onChange={props.inputchange}/><label htmlFor='petsNo'>No</label>&nbsp;
          </li>
        </ul> 
        <button type='submit'>Submit</button> 
   
      </form>
   
    </div>
  )
  
}
