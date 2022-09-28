import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MenuDropdown from "./MenuDropdown";

function ListMenu(props) {
  const { className, children } = props;
  return <ul className={className}>{children}</ul>;
}

export default ListMenu;
