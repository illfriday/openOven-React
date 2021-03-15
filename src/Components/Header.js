import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


function Header() {
  return (
    <Navbar dark color="dark">
      <div className="container">
        <NavbarBrand href="/">openOven</NavbarBrand>
      </div>
    </Navbar>
  );
}


export default Header;
