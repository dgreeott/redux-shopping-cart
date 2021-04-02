import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home";
import CartPage from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
