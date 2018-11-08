import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import wutru from '../images/Wutru.png'
import irene from '../images/irene.png'
import lisa from '../images/Lisa.png'
import mimi from '../images/mimi.png'
import milan from '../images/milan.png'

const personImage = [milan, irene,lisa,mimi,wutru]

class OwnerYouMatched extends React.Component {

  mailTo = () => {
    window.location.href = 'mailto:sample@email.com';
  }
  
  render() {
    return(
      <div>
      <h1>You've got a match!</h1>
      <img src={personImage[Math.floor(Math.random()* 5)]} alt="imageMatcher"></img>
      <img src={this.props.matched.matchOwner[0]['image']} alt="personyoumatchedwith"></img>
      
      <button onClick={this.mailTo}>Send a Message</button>
      <Link to='/offeringaroommie'><button>Keep on Searching</button></Link>
      </div>
    )
  }
  }
  

const mapStateToProps = (state) => {

  return {
    matched: state
  }
}

export default connect(mapStateToProps)(OwnerYouMatched)