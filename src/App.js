import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./Pages/Home"
import { PageItem } from "./Pages/PageItem"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/questions/:id" children={<PageItem />} />
        <Route path="/" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
