import * as React from 'react'
import {connect} from 'react-redux';
import {addTenant} from '../actions/addTenant'
import TenantPreferences2 from './TenantPreferences2'
import { withRouter} from 'react-router-dom'

class LookingForRoomContainer extends React.Component {

  state = {};

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.addTenant(this.state);
      setTimeout(() => this.props.setfilteredarray(), 2000)
      
      
      
      
}

  render() {
    
    
    return(
      <TenantPreferences2 inputchange={this.handleInputChange} handlesubmit={this.handleSubmit} />
    )
  }

}


export default connect(null, {addTenant})(withRouter(LookingForRoomContainer)) 