import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BussinesCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/ChatOutlined";
import NotifactionsIcon from "@material-ui/icons/SupervisorAccount";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://icon-library.com/images/white-linkedin-icon-png/white-linkedin-icon-png-16.jpg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" value="" placeholder="Search"/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BussinesCenterIcon} title="Job"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotifactionsIcon} title="Notifications"/>
      </div>
    </div>
  );
}
