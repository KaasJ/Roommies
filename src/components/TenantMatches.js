import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../images/Logo - Roomies big2.png'
import connectbutton from '../images/Connect.png'
import '../styles/TenantMatches.css'




class TenantMatches extends React.Component {

  state = {
    showMenu: false,
    arrayLength: this.props.matchtenant["addMatchTenantList"].length
  }

  menuHandler = () => {
    this.setState({
      showMenu:!this.state.showMenu
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
            <li>Matches</li>
            <li>Messages</li>
            <li>Notifications</li>
          </ul></div>
        }
      </header>

      <div className="box">
        <div className='login'>
          <Link to={'/login'}><button className='loginbutton3'>Log in</button></Link>
          <button className='loginbutton4'>Sign up</button>
          <div className="middlesection">
            <h1>See all your {this.props.matchtenant["addMatchTenantList"].length} matches below!</h1>
            {this.state.arrayLength && this.props.matchtenant['addMatchTenantList'].map((x,index) => <div className="matchescontainer">
            <img className="matchedimage" src={this.props.matchtenant['addMatchTenantList'][index]['image']}></img>
            <ul className="matchedinfolist">
              <li>Description:{this.props.matchtenant['addMatchTenantList'][index]['description']}</li>
              <li>Pets:{this.props.matchtenant['addMatchTenantList'][index]['pets']}</li>
              <li>Smoking:{this.props.matchtenant['addMatchTenantList'][index]['location']}</li>
              <li>Location:{this.props.matchtenant['addMatchTenantList'][index]['location']}</li>
              <li>Location:{this.props.matchtenant['addMatchTenantList'][index]['gender']}</li>
            </ul></div>
            )}
            
            </div>
            <Link to="/lookingforaroommie"><button className="backbutton">Go Back</button></Link>
          </div>
          </div>
      
  

      <footer className="footer">
        <h2>Connect with us</h2>
        <div className="contact">
          {/* <img src="https://img.icons8.com/ios/1600/facebook.png" alt="icon1"/>
        <img src="https://img.icons8.com/ios/1600/twitter-circled.png" alt="icon2"/>
        <img src="https://img.icons8.com/ios/1600/instagram-new.png" alt="icon3"/> */}
          <img src={connectbutton} alt="icons" className="icons" />

        </div>
        <h3>2018</h3>
      </footer>
    </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    matchtenant: state
  }
}

export default connect(mapStateToProps)(TenantMatches)