import * as React from 'react'
import { connect } from 'react-redux';
import { addOwner } from '../actions/addOwner'
import OwnerRoomPres from './OwnerRoomPres'
import {withRouter} from 'react-router-dom';

class OwnerRoomContainer extends React.Component {

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
    this.props.addOwner(this.state);
    setTimeout(() => this.props.setfilteredarray(), 1500)
  }

  render() {


    return (
      <OwnerRoomPres inputchange={this.handleInputChange} handlesubmit={this.handleSubmit} />
    )
  }

}




export default connect(null, { addOwner })(withRouter(OwnerRoomContainer));
