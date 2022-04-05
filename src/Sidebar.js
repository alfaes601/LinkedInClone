import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/vector-gratis/fondo-acuarela_220290-34.jpg?size=626&ext=jpg"
          alt=""
        />
        <Avatar src={user?.photoUrl} className="sidebar__avatar">
          {user?.displayName[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Vistas</p>
          <p className="sidebar__statNumber">1000</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("nodejs")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
}

export default Sidebar;
