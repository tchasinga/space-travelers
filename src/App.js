import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/mission" component={Missions} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
