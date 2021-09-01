import { Avatar } from "@material-ui/core";
import {
  ExpandMoreOutlined,
  LanguageOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Navbar.css";
import TopLogo from "./airbnb.png";
import Profilelogo from "./profileIcon.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarMainDiv">
      <div className="navbarLeft">
        <Link to="/">
          <img className="navbarLeftLogo" src={TopLogo} alt="TopLogo" />
        </Link>

        <h3 className="navbarLeftTitle">airbnb</h3>
      </div>
      <div className="navbarMiddle">
        <input type="search" placeholder="search" />
        <SearchOutlined className="navbarSearchIcon" />
      </div>
      <div className="navbarRight">
        <p>Become a Host</p>
        <LanguageOutlined className="navbarRightLanguage" />
        <ExpandMoreOutlined className="navbarRightExpand" />
        <Avatar
          className="navbarRightProfile"
          src={Profilelogo}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
