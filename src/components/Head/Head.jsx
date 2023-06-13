import React, { Component } from "react";
import Avatar from "../../assets/imgs/avatar.png";

export default class Head extends Component {
  render() {
    return (
      <div className="head bg-white p-15 between-flex">
        <div className="search p-relative">
          <input className="p-10" type="search" placeholder="search" />
        </div>
        <div className="icons d-flex align-center">
          <span className="notification p-relative">
            <i className="fa-regular fa-bell fa-lg"></i>
          </span>
          <img src={Avatar} alt="" />
        </div>
      </div>
    );
  }
}
