import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="bar">
          <div className="nav">
            <div>
              <Link to="/">Form</Link>
            </div>
            <div>
              <Link to="/table">Table</Link>
            </div>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
