import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import View from "./components/users/View";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route exact path="/" component={Home} />
          <Route path="/users/View/:id" component={View} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/add" component={AddUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
