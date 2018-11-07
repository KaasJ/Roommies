import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import UserSelectorContainer from './components/UserSelectorContainer'
import OwnerRoomMatchPage from './components/OwnerRoomMatchPage';
import TenantMatchPage from './components/TenantMatchPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="Roommie-app">
      <Route exact path="/lookingforaroommie" component={TenantMatchPage} /> 
      <Route exact path="/" component={UserSelectorContainer} />
      <Route exact path="/offeringaroommie" component={OwnerRoomMatchPage} />
      </div>
      </Provider>
    
    );
  }
}

export default App;


//<Route exact path="/:id" component={"test"} /> 