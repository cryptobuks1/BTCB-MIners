import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from './sidebars';
import Packageone from './container/package1'
import Packagetwo from './container/package2'
import Packagethree from './container/package3'
import Packagefour from './container/package4'
import Packagefive from './container/package5'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/Packagetwo">
            <Packagetwo />
          </Route>
          <Route path="/Packagethree">
            <Packagethree />
          </Route>
          <Route path="/Packagefour">
            <Packagefour />
          </Route>
          <Route path="/Packagefive">
            <Packagefive />
          </Route>
          <Route path="/">
            <Packageone />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;