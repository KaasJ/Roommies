import * as React from 'react'
import { connect } from 'react-redux';
import { addOwner } from '../actions/addowner'
import RoomOwner from './RoomOwner'
import {withRouter} from 'react-router-dom';

class RoomOwnerContainer extends React.Component {

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
    this.props.history.push('/matchpageforowner');
  }

  render() {


    return (
      <RoomOwner inputchange={this.handleInputChange} handlesubmit={this.handleSubmit} />
    )
  }

}




export default connect(null, { addOwner })(withRouter(RoomOwnerContainer));