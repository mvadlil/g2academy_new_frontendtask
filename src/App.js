import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Diluc, Albedo, Fischl, Qiqi, Venti, Ganyu, Zhongli } from './Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/diluc">
          <Diluc />
        </Route>
        <Route path="/albedo">
          <Albedo />
        </Route>
        <Route path="/fischl">
          <Fischl />
        </Route>
        <Route path="/qiqi">
          <Qiqi />
        </Route>
        <Route path="/venti">
          <Venti />
        </Route>
        <Route path="/ganyu">
          <Ganyu />
        </Route>
        <Route path="/zhongli">
          <Zhongli />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
