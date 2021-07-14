import React from "react";
import style from "./header.module.scss";
import Logo from "../../assets/logo.png";
import HeaderContent from "../headerContent/headerContent";
import { Link } from "react-router-dom";

function Header({ content, onChange, value, onClick }) {
  return (
    <div className={style.headerBg}>
      <Link to="/">
        <img src={Logo} alt="logo" className={style.logo} />
      </Link>

      <div className={`text-center`}>
        <div>{content ? content : <HeaderContent onChange={onChange} value={value} onClick={onClick}/>}</div>
      </div>
    </div>
  );
}

export default Header;
