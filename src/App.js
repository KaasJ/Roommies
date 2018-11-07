import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import UserSelectorContainer from './components/UserSelectorContainer'
import roomOwner from './components/RoomOwner'

import MatchPage from './components/MatchPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="Roommie-app">
      <Route exact path="/lookingforaroommie" component={MatchPage} /> 
      <Route exact path="/" component={UserSelectorContainer} />
      <Route exact path="/offeringaroommie" component={roomOwner} />
      <Route exact path="/matchpage" component={MatchPage} />
      </div>
      </Provider>
    
    );
  }
}

export default App;


//<Route exact path="/:id" component={"test"} /> 