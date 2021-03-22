import React from 'react';
import { Navbar, NavbarBrand, } from 'reactstrap';
import {  NavLink } from 'react-router-dom';


function Header() {
  return (
    <Navbar dark color="dark">
      <div className="container ">
        <div className="row " >
          <div className="col-8 ">
            <NavbarBrand href="/">openOven</NavbarBrand>
          </div>
          <div className="col-4">
            <NavLink exact to="/user">
              User
              <i></i>
            </NavLink>
          </div>
        </div>
      </div>
    </Navbar>
  );
}


export default Header;
