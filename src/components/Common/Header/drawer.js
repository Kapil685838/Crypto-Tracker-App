import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";

export default function MobileDrawer() {
  const [flag, setFlag] = useState(false);
  const selectedTheme = localStorage.getItem("selectedTheme") || "dark";

  return (
    <div className="drawer-wrapper">
      <MenuRoundedIcon className="link" onClick={() => setFlag(true)} />
      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
        <div className="mobile-drawer">
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
            <p className="link">Dashboard</p>
          </Link>
          <DarkMode selectedTheme={selectedTheme} />
        </div>
      </Drawer>
    </div>
  );
}