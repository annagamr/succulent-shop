import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import logo from './logo.png';

export default function Header() {
  const { header, logoText, AppLogo } = useStyles();


  const displayDesktop = () => {
    return <Toolbar>{succulentLogo},{succulentLogoText}</Toolbar>;
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
    top: "13px",
    left: "55px"
  },
  AppLogo: {
    position: "absolute",
    top: "13px",
    left: "5px",
    width: '45px',
    height: '7vmin',

  },
}));