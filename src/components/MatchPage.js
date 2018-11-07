import * as React from 'react'
import {connect} from 'react-redux';
import foto1 from '../images/foto1.jpg'
import foto2 from '../images/foto2.jpg'
import foto3 from '../images/foto3.jpg' 
import LookingForRoomContainer from './LookingForRoomContainer';

const lookingRoom = [{
  price: "under 400 EUR",
  location: "Rotterdam",
  startingDate: "2018-11-14",
  gender: "male",
  smoking: "yes",
  pets: "yes",
  source: foto1
},
{
  price: "under 400 EUR",
  location: "Amsterdam",
  startingDate: "2018-11-14",
  gender: "male",
  smoking: "yes",
  pets: "yes",
  source: foto2
},
{
  price: "under 400 EUR",
  location: "Amsterdam",
  startingDate: "2018-11-14",
  gender: "male",
  smoking: "yes",
  pets: "yes",
  source: foto3
}]

let arrayDisplayed = [...lookingRoom]

class MatchPage extends React.Component { 
  
  state = {
    showFilter: false,
    showFilterButton: true,
    photoNumber: 0
  }


  handleChange = () => {
    this.setState({
      "showFilter": !this.state.showFilter,
      "showFilterButton": !this.state.showFilterButton
    })
  }

  nextButton = () => {
    this.setState({
      "photoNumber": this.state.photoNumber+1
    })
  }

  previousButton = () => {
    if (this.state.photoNumber !== 0)
    this.setState({
      "photoNumber": this.state.photoNumber-1
    })
  }

  setFilteredArray = () => {
    console.log(this.props.tenants.tenantPreferences[0]["price"])
    let newArray = arrayDisplayed.filter(item => (item.location === this.props.tenants.tenantPreferences[0]['location'] 
          && item.price === this.props.tenants.tenantPreferences[0]['price'])
    )
    arrayDisplayed = newArray
    this.setState({
      "showFilter": !this.state.showFilter,
      "showFilterButton": !this.state.showFilterButton
    
    })
  }


  render() {

   
    return(
    <div>
    
    <h1>We found {arrayDisplayed.length} room(s) for you!</h1>
    { this.state.showFilter && <LookingForRoomContainer setfilteredarray={this.setFilteredArray}/> }
    { this.state.showFilterButton && <button onClick={this.handleChange}>filter</button>}

    <img src={arrayDisplayed[this.state.photoNumber]['source']}></img>
    <p>{arrayDisplayed[this.state.photoNumber]['location']}</p> 
    <button onClick={this.nextButton}>next</button>
    <button>Like</button>
    <button>Dislike</button>
    <button onClick={this.previousButton}>Previous</button>
    <button>Like</button>
    </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    tenants: state
  }
}

export default connect(mapStateToProps)(MatchPage)