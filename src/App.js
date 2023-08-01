import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Myprofile from './components/MyProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="wrapper">
        <Switch>
          <Route path="/myprofile" component={<Myprofile />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
