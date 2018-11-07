import * as React from 'react'


const locations = ['Amsterdam', 'Roterdam', 'The Hague', 'Haarlem', 'Utrecht']; 
const prices = ['under 400 EUR', '400-500 EUR', '500-600 EUR', '600-700 EUR', '700-800 EUR', 'above 800 EUR' ];


export default class TenantPreferences extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  click = (event) => {
    event.preventDefault()
    console.log("test123")
    this.props.handlesubmit()
  }


  render() {
    return (
      <div>
        <h1>Fill your preferences</h1>
        <form onSubmit={this.click}>
          <ul>
            <li>Location:&nbsp;
              <select name='location' onChange={this.props.inputchange}>
                <option>pick your location</option>
                {locations.map((location, i) => <option key={i}>{location}</option>)}
              </select>
            </li>
            <li>Price:&nbsp;
              <select name='price' onChange={this.props.inputchange}>
                <option>pick your price</option>
                {prices.map((price, j) => <option key={j}>{price}</option>)}
              </select>
            </li>
            <li>Starting date:&nbsp;
              <input type='date' name='startingDate' onChange={this.props.inputchange} key='date'></input>
            </li>
            <li>Gender:</li>
            <li>
              <input type='radio' name='gender' value='Female' id='female' onChange={this.props.inputchange}/><label htmlFor='female'>Female</label>&nbsp;
              <input type='radio' name='gender' value='Male' id='male' onChange={this.props.inputchange}/><label htmlFor='male'>Male</label>&nbsp;
              <input type='radio' name='gender' value='Any' id='any' onChange={this.props.inputchange}/><label htmlFor='any'>Any</label>&nbsp;
            </li>
            <li>Smoking:</li>
            <li>
              <input type='radio' name='smoking' value='Yes' id='smokingYes' onChange={this.props.inputchange}/><label htmlFor='smokingYes'>Yes</label>&nbsp;
              <input type='radio' name='smoking' value='No' id='smokingNo' onChange={this.props.inputchange}/><label htmlFor='smokingNo'>No</label>&nbsp;
            </li>
            <li>Pets:</li>
            <li>
              <input type='radio' name='pets' value='Yes' id='petsYes' onChange={this.props.inputchange}/><label htmlFor='petsYes'>Yes</label>&nbsp;
              <input type='radio' name='pets' value='No' id='petsNo' onChange={this.props.inputchange}/><label htmlFor='petsNo'>No</label>&nbsp;
            </li>
          </ul> 
          <button type='submit' >Submit</button>
        </form>
    
      </div>)
  }
}



