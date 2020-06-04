import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { 
    background-color: #3C3C3B;  
    z-index: 1;   
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #009FE3;
    &:hover { color: white; }
    font-weight: bold;       
  }
  .navbar-brand {
    font-size: 2.2em;
    color: #009FE3;
    &:hover { color: white; }    
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;    
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      {/*<Navbar.Brand><img src="/public/logo.png" alt="" width="40"
        height="40" className="d-inline-block align-top"/></Navbar.Brand>*/}
      <Navbar.Brand href="/">LDXPS</Navbar.Brand>
    </Navbar>
  </Styles>
)