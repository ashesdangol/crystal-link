import React from "react";
import "flowbite"
import {Footer} from 'flowbite-react';
import cssModule from '../assets/styles/components/FooterMenu.module.scss';

const currentYear = new Date().getFullYear();


function FooterMenu(){
    return(
       <section className={cssModule.section__footer}>
            <div className="footer__container">
              <div className="footer__links ">
                <div className="footer__links--left">
                  <Footer.LinkGroup>
                  <Footer.Link href="#">
                    Condition of Use
                  </Footer.Link>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div className="footer__links--right">
                  <Footer.LinkGroup>
                    <Footer.Link href="#">
                      Help
                    </Footer.Link>

                  </Footer.LinkGroup>
                </div>
                

              </div>
              <div className="hidden sm:visible">
              <Footer.Divider />
              </div>
              
              <div className="footer__copyrights">
                <Footer.Copyright
                  by=" Crystal Link"
                  year={currentYear}
                />
              </div>
             
            </div>
     
       </section>
      
    )
}

export default FooterMenu;