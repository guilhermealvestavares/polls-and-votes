import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home"
import { PageItem } from "./pages/PageItem"

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
