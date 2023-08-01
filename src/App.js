import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Myprofile from './components/MyProfile';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="wrapper">
        <Switch>
          <Route exact path="/profile" component={Myprofile} />
          <Route exact path="/mission" component={Missions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
