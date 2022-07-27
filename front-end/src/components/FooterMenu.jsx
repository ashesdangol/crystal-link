import React from "react";
import CircularImage from "./common/CircularImage";
import "flowbite"
import {Footer} from 'flowbite-react';

function FooterMenu(){
    return(
       
        <Footer container={true}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="https://ashesdangol.github.io/crystal-link/">
              <CircularImage imgSrc="https://picsum.photos/200/300" className="mr-3 " alt="crystalLink Logo"/>
            </Footer.Brand>
            <Footer.LinkGroup className="sm:flex sm:items-center sm:justify-between">
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="#"
            by="Crystal Link"
            year={2022}
          />
        </div>
      </Footer>

    )
}

export default FooterMenu;