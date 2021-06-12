import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
//Router
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Item from "./pages/Item";
import YourItems from "./pages/YourItems";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`App ${theme === true ? "darkMode" : ""}`}>
      <GlobalStyle />
      <Navbar theme={theme} setTheme={setTheme} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/your-items" exact>
          <YourItems />
        </Route>
        <Route path="/rent">
          <Rent />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route path="/items/:id">
          <Item />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
