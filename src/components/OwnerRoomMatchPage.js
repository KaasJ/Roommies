import * as React from 'react'
import { connect } from 'react-redux';
import { lookingRoom } from './dummydata';
import OwnerRoomContainer from './OwnerRoomContainer';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { addMatchOwner} from '../actions/addMatchOwner'
import like from '../images/like.png'
import deletebutton from '../images/delete.png'
import next from '../images/next.png'
import returnbutton from '../images/return.png'

class OwnerRoomMatchPage extends React.Component {
  state = {
    showFilter: false,
    showFilterButton: true,
    showData: true,
    arrayDisplayed: [...lookingRoom],
    indexItemDisplayed: [...lookingRoom].length - 1,
    showDetailedInfo: true
  }


  filterButton = () => {
    this.setState({
      "arrayDisplayed": [...lookingRoom],
      "indexItemDisplayed": [...lookingRoom].length - 1,
      "showFilter": !this.state.showFilter,
      "showFilterButton": !this.state.showFilterButton,
      "showData": !this.state.showData
    })
  }

  nextButton = () => {
    if (this.state.indexItemDisplayed !== this.state.arrayDisplayed.length - 1) {
      this.setState({
        "indexItemDisplayed": this.state.indexItemDisplayed + 1
      })
    } else {
      this.setState({ 'indexItemDisplayed': 0 })
    }
  }

  previousButton = () => {
    if (this.state.indexItemDisplayed !== 0) {
      this.setState({
        "indexItemDisplayed": this.state.indexItemDisplayed - 1
      })
    } else {
      this.setState({ 'indexItemDisplayed': this.state.arrayDisplayed.length - 1 })
    }
  }


  deleteButton = () => {
    if (this.state.arrayDisplayed.length > 0) {
      const newArray = this.state.arrayDisplayed.filter((a, index) => index !== this.state.indexItemDisplayed)
      this.setState({
        'arrayDisplayed': newArray,
        'indexItemDisplayed': newArray.length - 1
      })
    }

  }


  setFilteredArray = () => {
    const newArray = this.state.arrayDisplayed.filter(item => (item.location === this.props.owners.roomOwner[0]['location']
      && item.price === this.props.owners.roomOwner[0]['price'])
    )
    this.setState({
      "arrayDisplayed": newArray,
      "showFilter": !this.state.showFilter,
      "showFilterButton": !this.state.showFilterButton,
      "indexItemDisplayed": newArray.length - 1,
      "showData": !this.state.showData
    })
  }

  likeButton = () => {
    if (this.state.arrayDisplayed[this.state.indexItemDisplayed]['wantToMatch']) {
      this.props.addMatchOwner(this.state.arrayDisplayed[this.state.indexItemDisplayed])
      setTimeout(() => this.props.history.push('/matchowner'),1500)
    } else {
      if (this.state.indexItemDisplayed !== this.state.arrayDisplayed.length - 1) {
        const newArray = this.state.arrayDisplayed.filter((a, index) => index !== this.state.indexItemDisplayed)
        this.setState({
          "arrayDisplayed": newArray,
          "indexItemDisplayed": this.state.indexItemDisplayed 
        })
      } else if (this.state.indexItemDisplayed === this.state.arrayDisplayed.length - 1 && this.state.arrayDisplayed.length !== 1) {
        const newArray = this.state.arrayDisplayed.filter((a, index) => index !== this.state.indexItemDisplayed)
        this.setState({ 
          "arrayDisplayed": newArray,
          'indexItemDisplayed': 0
         })
      }
     else if (this.state.indexItemDisplayed === this.state.arrayDisplayed.length - 1 && this.state.arrayDisplayed.length === 1) {
      this.setState({
        "arrayDisplayed": []
      })
    }
  }
  }

  showDetailedInfo = () => {
    this.setState({
      "showDetailedInfo": !this.state.showDetailedInfo
    })
  }

  render() {
    return (
      <div>
        <h1>We found {this.state.arrayDisplayed.length} roommies for you!</h1>
        {this.state.showFilter && <OwnerRoomContainer setfilteredarray={this.setFilteredArray} />}
        {this.state.showFilterButton && <button onClick={this.filterButton}>filter</button>}
        {this.state.showData && <div>  
          {this.state.arrayDisplayed.length ? <div><img src={this.state.arrayDisplayed[this.state.indexItemDisplayed]['image']} onClick={this.showDetailedInfo} alt="123" ></img>
          <p>Price range: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['price']}</p>
          {this.state.showDetailedInfo && <div>
            <p>Gender: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['gender']}</p>
            <p>Starting data: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['startingDate']}</p>
            <p>Pets: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['pets']}</p>
            <p>Smoking: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['smoking']}</p>
            <p>Location: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['location']}</p>
            <p>Description: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['description']}</p> 
            </div>
          }
          <img alt='return' src={returnbutton} onClick={this.previousButton}></img>
          <img alt='delete' src={deletebutton} onClick={this.deleteButton}></img>
          <img alt='like' src={like} onClick={this.likeButton}></img>
          <img alt='next' src={next} onClick={this.nextButton}></img></div> : <p>Sorry, we couldn't find any matching results!</p>}
          <Link to='/'><button>Back</button></Link>
        </div>}
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    owners: state
  }
}

export default connect(mapStateToProps, { addMatchOwner })(withRouter(OwnerRoomMatchPage))