// import logo from './logo.svg';
// import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
// import React from "react";
import "./App.css";
import Navber from "./Mycomponent/Navbar";
import About from "./Mycomponent/About";
import Textfrom from "./Mycomponent/Textfrom";
import React, { useState } from "react";
import Alert from "./Mycomponent/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #5ba395";
      showAlert("Dark mode enabled ", "success ");
      document.title = "TextUtiles DArk Mode";

      // setInterval(() => {
      //   document.title = "DArk Mode is Amazing Mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "intall TextUtiles Now" ;
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = " white";
      showAlert("light mode enabled ", "success");
      document.title = "TextUtiles Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navber
          title="Text"
          About="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert Alert={alert} />
        {/* <Navber title= "Text"/> */}
        <div className="container my-4">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Textfrom
                showAlert={showAlert}
                Heading="Enter the Text Here"
                mode={mode}
              />
              z
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
