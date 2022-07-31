import React from "react";
import {Navbar} from 'flowbite-react';
import Logo from '../components/common/Logo'

function NavbarMenu(){
    return(

<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://ashesdangol.github.io/crystal-link/">
    <Logo />
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