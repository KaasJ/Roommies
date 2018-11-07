import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import UserSelectorContainer from './components/UserSelectorContainer'
//import RoomOwnerContainer from './components/RoomOwnerContainer'
//import LookingForRoomContainer from './components/LookingForRoomContainer'
//import MatchPageForOwner from './components/MatchPageForOwner'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Roommie-app">
          <Route exact path="/" component={UserSelectorContainer} />
          {/* <LookingForRoomContainer/> */}
          {/* <MatchPageForOwner/> */}
          {/* <Switch>
            <Route exact path="/" component={RoomOwnerContainer} />
            <Route path="/matchpageforowner" component={MatchPageForOwner} />
          </Switch> */}
          
        </div>
      </Provider>
    
    );
  }
}

export default App;


//<Route exact path="/:id" component={"test"} /> 