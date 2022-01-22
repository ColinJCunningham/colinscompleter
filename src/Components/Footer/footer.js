import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QuizIcon from "@mui/icons-material/Quiz";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Paper from "@mui/material/Paper";

import "../Footer/footer.css";

function Footer() {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: "3rem",
        backgroundColor: "#2d3047",
        color: "whitesmoke",
      }}
      elevation={3}
    >
      <BottomNavigation
        className="footer"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Plan Sponsor Access"
          icon={<AdminPanelSettingsIcon />}
        />
       <Link to="test"><BottomNavigationAction label="FAQ" icon={<QuizIcon />} /></Link> 
        <BottomNavigationAction label="TPA Access" icon={<LockOpenIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

{
  /* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */
}

export default Footer;
