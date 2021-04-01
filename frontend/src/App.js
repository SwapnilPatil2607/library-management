import React from "react";
import "./App.css";
import Styles from "./components/css/dashboard.module.css";
import logo from "./components/images/logo.png";
import { Link } from "react-router-dom";
import Routes from "./Link_Routes/routes";
function App() {
  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <div className={Styles.head}>
          {" "}
          <h1>New HeartRead Books</h1>
          <img src={logo} alt="book logo" />
        </div>
      </Link>
      <Routes />
    </div>
  );
}

export default App;
