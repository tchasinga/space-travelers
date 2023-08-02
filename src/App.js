import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Myprofile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="wrapper">
        <Switch>
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/mission" component={Missions} />
          <Route exact path="/profile" component={Myprofile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
