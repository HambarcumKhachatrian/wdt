import React from "react";
import { Link } from "react-router-dom"
import '../styles/components/headerListItem.scss'

export default function HeaderListItem({ title, path }) {
 return (
  <li className="listItem">
   <Link to={path}>
    <h4 className="listItem_title">
     {title}
    </h4>
    <div className="listItem_sign"></div>
   </Link>
  </li>
 )
}