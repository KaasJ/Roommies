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
import LoginFormContainer from './components/LoginFormContainer'
import Profile from './components/Profile'
import TenantMatches from './components/TenantMatches'
import OwnerMatches from './components/OwnerMatches'

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
      <Route exact path="/login" component={LoginFormContainer}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/matchestenant" component={TenantMatches}/>
      <Route exact path="/matchesowner" component={OwnerMatches}/>
      </div>
      </Provider>
    
    );
  }
}

export default App;


//<Route exact path="/:id" component={"test"} /> 