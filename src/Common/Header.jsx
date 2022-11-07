import SearchIcon from "../assets/icons/Search.svg";
import React from "react";

export const Header = ({title = ''}) => {
  return (
    <h2 className="d-flex justify-content-between align-items-center p-3 font-weight-bold bg-white">{title} <img
      src={SearchIcon} alt="Search Logo"/></h2>
  )
}
