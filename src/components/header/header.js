import React from "react";
import style from "./header.module.scss";
import Logo from "../../assets/logo.png";
import HeaderContent from "../headerContent/headerContent";

function Header({ content }) {
  return (
    <div className={style.headerBg}>
      <img src={Logo} alt="logo" className={style.logo} />
      <div className={`text-center`}>
        <div>{content ? content : <HeaderContent />}</div>
      </div>
    </div>
  );
}

export default Header;
