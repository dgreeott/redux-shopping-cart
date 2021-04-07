import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import CartPage from "./components/Cart/Cart";
import CheckoutPage from "./components/Checkout/Checkout";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <style>
            {App.css}
          </style>
        </Helmet>
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
