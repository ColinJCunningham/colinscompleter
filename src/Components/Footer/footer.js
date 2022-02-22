import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";
import Paper from "@mui/material/Paper";

import "../Footer/footer.css";

function Footer() {
  const Portfolio = (
    <Link target="_blank" to="https://www.colinjamescunningham.com/">
      Portfolio
    </Link>
  );

  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: "3rem",
        backgroundColor: "#86B3EA",
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
          href="tel:+8603313329"
          id="code"
          label="Text or Call"
          icon={<PhoneIcon />}
        />
        <BottomNavigationAction
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.colinjamescunningham.com", "_blank");
          }}
          label="Portfolio"
          icon={<WebIcon />}
        />
        <BottomNavigationAction
          href="mailto:cunninghamwebdesign@gmail.com"
          label="Email"
          icon={<EmailIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

{
  /* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */
}

export default Footer;
