import * as React from 'react'
import { connect } from 'react-redux';
import { addOwner } from '../actions/addowner'


const locations = ['Amsterdam', 'Roterdam', 'The Hague', 'Haarlem', 'Utrecht'];
const prices = ['under 400 EUR', '400-500 EUR', '500-600 EUR', '600-700 EUR', '700-800 EUR', 'above 800 EUR'];


class RoomOwner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    console.log('hi')
    event.preventDefault();
    this.props.addOwner(this.state);
  }

  render() {
    return (<div>
      <h1>Fill your preferences</h1>
      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>Location:&nbsp;
            <select name='location' onChange={this.handleInputChange}>
              <option>pick your location</option>
              {locations.map((location, i) => <option key={i}>{location}</option>)}
            </select>
          </li>
          <li>Price:&nbsp;
            <select name='price' onChange={this.handleInputChange}>
              <option>pick your price</option>
              {prices.map((price, j) => <option key={j}>{price}</option>)}
            </select>
          </li>
          <li>Starting date:&nbsp;
            <input type='date' name='startingDate' onChange={this.handleInputChange} key='date'></input>
          </li>
          <li>Gender:</li>
          <li>
            <input type='radio' name='gender' value='Female' id='female' onChange={this.handleInputChange} /><label htmlFor='female'>Female</label>&nbsp;
            <input type='radio' name='gender' value='Male' id='male' onChange={this.handleInputChange} /><label htmlFor='male'>Male</label>&nbsp;
          </li>
          <li>Smoking:</li>
          <li>
            <input type='radio' name='smoking' value='Yes' id='smokingYes' onChange={this.handleInputChange} /><label htmlFor='smokingYes'>Yes</label>&nbsp;
            <input type='radio' name='smoking' value='No' id='smokingNo' onChange={this.handleInputChange} /><label htmlFor='smokingNo'>No</label>&nbsp;
          </li>
          <li>Pets:</li>
          <li>
            <input type='radio' name='pets' value='Yes' id='petsYes' onChange={this.handleInputChange} /><label htmlFor='petsYes'>Yes</label>&nbsp;
            <input type='radio' name='pets' value='No' id='petsNo' onChange={this.handleInputChange} /><label htmlFor='petsNo'>No</label>&nbsp;
          </li>
        </ul>
        <button type='submit'>Submit</button>
      </form>

    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    owners: state.owners
  }
}

export default connect(mapStateToProps, { addOwner })(RoomOwner)