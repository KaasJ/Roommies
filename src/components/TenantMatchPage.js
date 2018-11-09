import * as React from 'react'
import { connect } from 'react-redux';
import TenantContainer from './TenantContainer';
import { offerRoom } from './dummydata'
import { Link } from 'react-router-dom'
import { addMatchTenant } from '../actions/addMatchTenant'
import { withRouter } from 'react-router'
import like from '../images/like.png'
import deletebutton from '../images/delete.png'
import next from '../images/next.png'
import returnbutton from '../images/return.png'
import logo from '../images/Logo - Roomies big2.png'
import connectbutton from '../images/Connect.png'
import '../styles/TenantMatchPage.css'
import filterbutton from '../images/Filter.png'
import { addMatchesTenant } from '../actions/addMatchesTenant'

class TenantMatchPage extends React.Component {

  state = {
    showFilter: false,
    showFilterButton: true,
    showData: true,
    arrayDisplayed: [...offerRoom],
    indexItemDisplayed: [...offerRoom].length - 1,
    showDetailedInfo: false,
    showMenu:false,
  }

  menuHandler = () => {
    this.setState({
      showMenu:!this.state.showMenu
    })
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
      this.props.addMatchesTenant(this.state.arrayDisplayed[this.state.indexItemDisplayed])
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

    return (<div className="body">
      <header classname="header">
        <div className="logoandhamburger">
          <Link to={'/'}><img src={logo} alt="icons" className="logo" /></Link>
          <img src="https://img.icons8.com/ios/1600/menu.png" alt="bottommenu" className="hamburger" onClick={this.menuHandler} />
        </div>

        {this.state.showMenu && <div className="menu-dropdown">
          <ul className="menu-dropdown-buttons">
            <Link to={'/profile'}><li>Profile</li></Link>
            <Link to={'/matchestenant'}><li>Matches</li></Link>
            <li>Messages</li>
            <li>Notifications</li>
          </ul></div>
        }
      </header>

      <div className="box6">
        {/* <div className='login'> */}
          {/* <Link to={'/login'}><button className='loginbutton3'>Log in</button></Link> */}
          {/* <button className='loginbutton4'>Sign up</button> */}
          <div className="middlesection">
            <p>We found {this.state.arrayDisplayed.length} roommies for you!</p>
            {this.state.showFilterButton && <img className="filter" src={filterbutton} alt="filterbutton" onClick={this.filterButton}></img>}
            {this.state.showFilter && <TenantContainer setfilteredarray={this.setFilteredArray} />}
            {this.state.showData && <div>
              {this.state.arrayDisplayed.length ? <div><img className="mainPhoto" src={this.state.arrayDisplayed[this.state.indexItemDisplayed]['image']} alt="123" onClick={this.showDetailedInfo}></img>
                <p>Price range: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['price']}</p>
                {this.state.showDetailedInfo && <div className="extraInfo">
                  <p>Gender: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['gender']}<br></br>
                    Starting data: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['startingDate']}<br></br>
                    Pets: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['pets']}<br></br>
                    Smoking: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['smoking']}<br></br>
                    Location: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['location']}<br></br>
                    Description: {this.state.arrayDisplayed[this.state.indexItemDisplayed]['description']}</p>
                </div>}
                <img alt='return' src={returnbutton} onClick={this.previousButton}></img>
                <img alt='delete' src={deletebutton} onClick={this.deleteButton}></img>
                <img alt='like' src={like} onClick={this.likeButton}></img>
                <img alt='next' src={next} onClick={this.nextButton}></img></div> : <p>Sorry, we couldn't find any matching results!</p>}
            </div>}
          </div>
        {/* </div> */}
      </div>

      {/* <footer className="footer">
        <h2>Connect with us</h2>
        <div className="contact"> */}
          {/* <img src="https://img.icons8.com/ios/1600/facebook.png" alt="icon1"/>
        <img src="https://img.icons8.com/ios/1600/twitter-circled.png" alt="icon2"/>
        <img src="https://img.icons8.com/ios/1600/instagram-new.png" alt="icon3"/> */}
          {/* <img src={connectbutton} alt="icons" className="icons" />

        </div>
        <h3>2018</h3>
      </footer> */}
    </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    tenants: state
  }
}

export default connect(mapStateToProps, { addMatchTenant, addMatchesTenant })(withRouter(TenantMatchPage))