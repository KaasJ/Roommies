import * as React from 'react'
import {connect} from 'react-redux';
import {addTenant} from '../actions/addTenant'
import TenantPres from './TenantPres'
import { withRouter} from 'react-router-dom'

class TenantContainer extends React.Component {

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
      <TenantPres inputchange={this.handleInputChange} handlesubmit={this.handleSubmit} />
    )
  }

}

export default connect(null, {addTenant})(withRouter(TenantContainer))