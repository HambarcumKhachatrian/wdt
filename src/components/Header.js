import React from "react";
import HeaderListItem from "./HeaderListItem";
import '../styles/components/header.scss';

export default function Header() {
 return (
  <header>
   <div className="header">
    <div className="logo header_logo">
     <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
       <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
        <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
       </linearGradient>
      </defs>
      <path fill="#be1879" d="M11.1,-19.4C14.2,-17.4,16.4,-14.1,20.6,-10.6C24.7,-7.2,30.8,-3.6,29.9,-0.5C29,2.6,21.3,5.2,17.4,9.1C13.5,13,13.5,18.2,11.2,22.4C9,26.7,4.5,30.1,-0.1,30.3C-4.8,30.6,-9.6,27.7,-16.2,26C-22.7,24.2,-31.1,23.5,-33.9,19.4C-36.6,15.2,-33.7,7.6,-34.1,-0.2C-34.5,-8,-38.1,-16.1,-36.1,-21.5C-34.1,-26.9,-26.4,-29.6,-19.4,-29.5C-12.5,-29.3,-6.2,-26.3,-1.1,-24.4C4,-22.4,7.9,-21.5,11.1,-19.4Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
     </svg>
    </div>
    <ul className="header_list">
     <HeaderListItem title='about us' path='about'></HeaderListItem>
     <HeaderListItem title='portfolio' path='portfolio'></HeaderListItem>
     <HeaderListItem title='workflow' path='workflow'></HeaderListItem>
    </ul>
   </div>
  </header>
 )
}