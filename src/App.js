import Header from "./components/Layout/Header";
import Container from "./components/Layout/Container";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Switch>
          <Route path="/want">
            <Container purchased={false} />
          </Route>
          <Route path="/have">
            <Container purchased={true} />
          </Route>
          <Route path="/">
            <Container purchased={"all"} />
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
