import './style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Pages/Main';
import CuadradosMedios from './Pages/CuadradosMedios'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Main />
        </Route>
        <Route exact path="/CuadradosMedios">
          <CuadradosMedios />  
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
