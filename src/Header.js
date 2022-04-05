import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BussinesCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotifactionsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

export default function Header() {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://icon-library.com/images/white-linkedin-icon-png/white-linkedin-icon-png-16.jpg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BussinesCenterIcon} title="Job" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotifactionsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
}
