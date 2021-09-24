import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SideBar from './component/SideBar';

function App() {
  return (
    <div>
      <Router>
        <SideBar/>
        <Switch>
          <Route path = '/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
