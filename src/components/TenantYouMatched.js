import * as React from 'react'
import { connect } from 'react-redux';

class TenantYouMatched extends React.Component {

render() {
  return(
    <div>
    <h1>WieehoE! You matched with:</h1>
    <p>{this.props.matched.matchTenant[0]['gender']}</p>
    <p>{this.props.matched.matchTenant[0]['description']}</p>
    <p>Please contact via: abcd@gmail.com</p>
    </div>
  )
}
}



const mapStateToProps = (state) => {

  return {
    matched: state
  }
}

export default connect(mapStateToProps)(TenantYouMatched)