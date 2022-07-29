import React from "react";
import CircularImage from "./common/CircularImage";
import {Navbar} from 'flowbite-react';
import logo from '../assets/images/crystal-2.svg';

function NavbarMenu(){
    return(

<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://ashesdangol.github.io/crystal-link/">
  <CircularImage imgSrc={logo} className="mr-3 " alt="crystalLink Logo"/>
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Crystal Link
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/login"
      active={true}
    >
      Login
    </Navbar.Link>
    <Navbar.Link href="/register">
      Register
    </Navbar.Link>
    {/* <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link> */}
  </Navbar.Collapse>
</Navbar>

    )
}

export default NavbarMenu;