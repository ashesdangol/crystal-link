import React from "react";
import CircularImage from "./common/CircularImage";
import {Navbar} from 'flowbite-react';

function NavbarMenu(){
    return(

<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://ashesdangol.github.io/crystal-link/">
  <CircularImage imgSrc="https://picsum.photos/200/300" className="mr-3 " alt="crystalLink Logo"/>
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Crystal Link
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

    )
}

export default NavbarMenu;