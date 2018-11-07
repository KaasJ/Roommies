import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import UserSelectorContainer from './components/UserSelectorContainer'
import OwnerRoomMatchPage from './components/OwnerRoomMatchPage';
import TenantMatchPage from './components/TenantMatchPage';
import OwnerYouMatched from './components/OwnerYouMatched';
import TenantYouMatched from './components/TenantYouMatched';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="Roommie-app">
      <Route exact path="/lookingforaroommie" component={TenantMatchPage} /> 
      <Route exact path="/" component={UserSelectorContainer} />
      <Route exact path="/offeringaroommie" component={OwnerRoomMatchPage} />
      <Route exact path="/matchowner" component={OwnerYouMatched} />
      <Route exact path="/matchtenant" component={TenantYouMatched} /> 
      </div>
      </Provider>
    
    );
  }
}

export default App;


//<Route exact path="/:id" component={"test"} /> 