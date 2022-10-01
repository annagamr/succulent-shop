import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyle";
    
  const Footer = () => {
    return (
      <Box>
     
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
 
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Succulents</FooterLink>
              <FooterLink href="#">Delivery</FooterLink>
              
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">125-432-1790</FooterLink>
              <FooterLink href="#">Budapest, Hungary</FooterLink>
             
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
            
            </Column>
            <Column>
            &copy;{new Date().getFullYear()} | All rights reserved |
            Terms Of Service | Privacy
            
            </Column>
            
          </Row>
          
        </Container>
      </Box>
    );
  };
  export default Footer;