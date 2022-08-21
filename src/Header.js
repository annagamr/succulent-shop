import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import logo from './logo.png';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#bddcba",
    height: "80px"
  },

  logoText: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    color: "white",
    lineHeight: "18px",
    textAlign: "left",
    position: "absolute",
    top: "18px",
    left: "75px"
  },
  AppLogo: {
    position: "absolute",
    top: "10px",
    left: "8px",
    width: '60px',
    height: '9vmin',

  },
  menuButton: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 700,
      fontSize: "19px",
      marginLeft: "40px",
      left:"930px",
      color:"inherit",
      top:"9px"
     
  },

 
}));


export default function Header() {
  const { header, logoText, AppLogo,menuButton,navButtons  } = useStyles();


  const displayDesktop = () => {
    return <Toolbar>{succulentLogo}{succulentLogoText}{getMenuButtons()}</Toolbar>;
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        
        <Button
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
        
      );
    });
  };

  const succulentLogo = (
    <img src={logo} className={AppLogo} alt="logo" />

  );

  const succulentLogoText = (

    <Typography variant="h6" component="h1" className={logoText}>

      FOR <br />YOUR<br /> HOME<br />
    </Typography>
  );






  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}

const headersData = [

  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Quiz",
    href: "/quiz",
  },
  {
    label: "Contact",
    href: "/contact",
  }, 
  {
    label: "Register",
    href: "/register",
  }, 
];

