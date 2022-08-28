import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link,MenuItem} from "@material-ui/core";
import logo from '../logo.png';
import { Link as RouterLink } from "react-router-dom";
// for responsiveness
import React, { useState, useEffect } from "react";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#bddcba",
    height: "80px",
    paddingRight: "30px",
    paddingTop: "10px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  logoText: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    color: "white",
    lineHeight: "18px",
    textAlign: "left",
    position: "absolute",
    top: "8px",
    left: "75px",
    "@media (max-width: 900px)": {
      left: "120px",
    },
  },
  AppLogo: {
    position: "absolute",

    left: "8px",
    width: '60px',
    height: '9vmin',
    "@media (max-width: 900px)": {
      left: "55px",
      top:"4px",
      width: '60px',
      height: '65px',
    },

  },
  menuButton: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 700,
    fontSize: "18px",
    marginLeft: "37px",
    color: "inherit",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",

  },
  drawerContainer: {
    padding: "20px 40px",
    height: "100%",
  },
  menuButtonResp: {
    fontSize: "20px",
    fontFamily: "Work Sans, sans-serif",
    lineHeight: "55px"

  }
  


}));


export default function Header() {
  
// responsiveness
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer 
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            
          }}
          PaperProps={{ style: { height: "53vh", top:"81px",width:"200px", WebkitBorderBottomRightRadius:"20px", backgroundColor:"white" } }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
<div>{succulentLogo}{succulentLogoText}</div>
</Toolbar>
    );
  };
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        // <Link 
        //   {...{
        //     component: RouterLink,
        //     to: href,
        //     color: "inherit",
        //     style: { textDecoration: "none" },
        //     key: label,
        //     className: menuButtonResp

        //   }}
        // >
        //   <MenuItem>{label}</MenuItem>
        // </Link>
        <Button
        {...{
          key: label,
          to: href,
          component: RouterLink,
          className: menuButtonResp
        }}
      >
        {label}
      </Button>
      );
    });
  };

  
// -x-responsiveness-x-


  const { header, logoText, AppLogo, menuButton, toolbar,drawerContainer,menuButtonResp} = useStyles();
 

  const displayDesktop = () => {
    return <Toolbar className={toolbar}>{succulentLogo}{succulentLogoText}<div >{getMenuButtons()}</div></Toolbar>;
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
      <AppBar className={header}> {mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  );


}

const headersData = [
  {
    label: "Home",
    href: "/",
  },
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

