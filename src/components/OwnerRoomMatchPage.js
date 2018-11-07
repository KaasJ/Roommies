import * as React from 'react'
import { connect } from 'react-redux';
import { lookingRoom } from './dummydata';
import OwnerRoomContainer from './OwnerRoomContainer';



class OwnerRoomMatchPage extends React.Component {
  state = {
    showFilter: false,
    showFilterButton: true,
    arrayDisplayed: [...lookingRoom],
    indexItemDisplayed: [...lookingRoom].length-1
  }


  handleChange = () => {

    this.setState({
      "arrayDisplayed": [...lookingRoom],
      "indexItemDisplayed":[...lookingRoom].length-1,
      "showFilter": !this.state.showFilter,
      "showFilterButton": !this.state.showFilterButton
    })
  }

  nextButton = () => {
    if (this.state.indexItemDisplayed !== this.state.arrayDisplayed.length-1) {
      this.setState({
        "indexItemDisplayed": this.state.indexItemDisplayed+1
      })} else {
      this.setState ({'indexItemDisplayed': 0 })
    }
  }

  previousButton = () => {
    if (this.state.indexItemDisplayed !== 0) {
      this.setState({
        "indexItemDisplayed": this.state.indexItemDisplayed-1
      })}else {
      this.setState({'indexItemDisplayed': this.state.arrayDisplayed.length-1})
    }
  }


  deleteButton = () => {
    if(this.state.arrayDisplayed.length > 0) {
      const newArray = this.state.arrayDisplayed.filter((a, index)=> index !== this.state.indexItemDisplayed)
      this.setState({
        'arrayDisplayed': newArray,
        'indexItemDisplayed': newArray.length-1
      })}

  }


  setFilteredArray = () => {
    const newArray = this.state.arrayDisplayed.filter(item => (item.location === this.props.owners.roomOwner[0]['location'] 
          && item.price === this.props.owners.roomOwner[0]['price'])
    )
    this.setState({
      "arrayDisplayed": newArray,
      "showFilter": !this.state.showFilter,
      "showFilterButton": !this.state.showFilterButton,
      "showFilterButton": !this.state.showFilterButton,
      "indexItemDisplayed": newArray.length-1
    })
  }

  likeButton = () => {
    
  }

  render() {

    
    return(
      <div>
    
        <h1>We found {this.state.arrayDisplayed.length} roommies for you!</h1>
        { this.state.showFilter && <OwnerRoomContainer setfilteredarray={this.setFilteredArray}/> }
        { this.state.showFilterButton && <button onClick={this.handleChange}>filter</button>}
        { this.state.arrayDisplayed.length ? <img src={this.state.arrayDisplayed[this.state.indexItemDisplayed]['image']}></img> : <p>Sorry, we didn't find any results!</p>  }
        { this.state.arrayDisplayed.length ? <p>{this.state.arrayDisplayed[this.state.indexItemDisplayed]['description']}</p> : null}
        
        <button onclick={this.likeButton}>Like</button>
        <button onClick={this.deleteButton}>Delete</button>
        <button onClick={this.previousButton}>Previous</button>
        <button onClick={this.nextButton}>next</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    owners: state
  }
}

export default connect(mapStateToProps)(OwnerRoomMatchPage)