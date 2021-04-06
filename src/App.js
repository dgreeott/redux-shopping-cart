import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home";
import CartPage from "./components/Cart";
import CheckoutPage from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
      <Helmet
          bodyAttributes={{
            style:
              "background-color: #FFFFFF",
          }}
        />
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
