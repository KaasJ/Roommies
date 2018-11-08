import * as React from 'react'
import { connect } from 'react-redux';
import TenantContainer from './TenantContainer';
import { offerRoom } from './dummydata'
import { Link } from 'react-router-dom'
import { addMatchTenant } from '../actions/addMatchTenant'
import { withRouter } from 'react-router'


class TenantMatchPage extends React.Component {

  state = {
    showFilter: false,
    showFilterButton: true,
    showData: true,
    arrayDisplayed: [...offerRoom],
    indexItemDisplayed: [...offerRoom].length - 1,
    showDetailedInfo: false,
  }


  filterButton = () => {
    this.setState({
      "arrayDisplayed": [...offerRoom],
      "indexItemDisplayed": [...offerRoom].length - 1,
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
    const newArray = this.state.arrayDisplayed.filter(item => (item.location === this.props.tenants.tenantPreferences[0]['location']
      && item.price === this.props.tenants.tenantPreferences[0]['price'])
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
      this.props.addMatchTenant(this.state.arrayDisplayed[this.state.indexItemDisplayed])
      setTimeout(() => this.props.history.push('/matchtenant'), 1500)
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
        {this.state.showFilter && <TenantContainer setfilteredarray={this.setFilteredArray} />}
        {this.state.showFilterButton && <button onClick={this.filterButton}>filter</button>}
        {this.state.showData && <div>
          {this.state.arrayDisplayed.length ? <div><img src={this.state.arrayDisplayed[this.state.indexItemDisplayed]['image']} alt="123" onClick={this.showDetailedInfo}></img>
            <p>Price range: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['price']}</p>
            {this.state.showDetailedInfo && <div>
              <p>Gender: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['gender']}</p>
              <p>Starting data: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['startingDate']}</p>
              <p>Pets: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['pets']}</p>
              <p>Smoking: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['smoking']}</p>
              <p>Location: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['location']}</p>
              <p>Description: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['description']}</p>
            </div>}
            <button onClick={this.previousButton}>Previous</button>
            <button onClick={this.deleteButton}>Delete</button>
            <button onClick={this.likeButton}>Like</button>
            <button onClick={this.nextButton}>Next</button></div> : <p>Sorry, we couldn't find any matching results!</p>}
          <Link to='/'><button>Back</button></Link>
        </div>}
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    tenants: state
  }
}

export default connect(mapStateToProps, { addMatchTenant })(withRouter(TenantMatchPage))