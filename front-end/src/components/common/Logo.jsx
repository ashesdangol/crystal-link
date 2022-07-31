import React from "react";
import CircularImage from "./CircularImage";
import logo from '../../assets/images/crystal-2.svg';
// import logoWrapper from "../../assets/styles/components/Logo.module.scss";

function Logo(){
    return (
        <div className="inline-flex">
           <CircularImage imgSrc={logo} className="mr-3 " alt="crystalLink Logo"/>
            <span className="logo-title self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Crystal Link
            </span> 
        </div>
    )
}

export default Logo;