import React from "react";
import Button from "../Button";
import MobileDrawer from "./drawer";
import "./styles.css";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";

function Header() {
  

  return (
    <div className="header">
      <Link to="/">
        <h1>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links-flex">
        <DarkMode />
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/Dashboard">
          <Button outlined={true}
            text="Dashboard"
            onClick={() => {
              console.log("btn-clicked!!!");
            }}
          />
        </Link>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;