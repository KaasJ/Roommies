import * as React from 'react'
import { setUser } from '../actions/setuser'
import LoginForm from './LoginForm'
import { connect } from 'react-redux';
import { lookingRoom, offerRoom } from './dummydata'
import { withRouter } from 'react-router-dom';


class LoginFormContainer extends React.Component {
  state = { };

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
    const user = this.checkForm(this.state.login, this.state.password);
    if (user === undefined) {
      alert("Invalid login or password");
      return;
    }
    this.props.setUser(user);
    this.props.history.push('/profile');
  }

  checkForm =(login, password) =>{ 
    const tenants = lookingRoom.filter(room => room.login === login && room.password === password)
    if (tenants.length > 0) {
      return {type: 'tenant', user: tenants[0]}
    }
    const owners = offerRoom.filter(room => room.login === login && room.password === password)
    if (owners.length > 0) {
      return {type: 'owner', user: owners[0]} 
    }  
  }

  render() {
    return (
      <LoginForm inputchange={this.handleInputChange} handlesubmit={this.handleSubmit}/>
    )
  }

}
export default connect(null, { setUser })(withRouter(LoginFormContainer));

