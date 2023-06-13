import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar bg-white p-20 p-relative">
        <h3 className="p-relative txt-c mt-0">Elzero</h3>
        <ul>
          <li>
            <a
              className="active d-flex align-center fs-14 c-black rad-6 p-10"
              href="index.html"
            >
              <i className="fa-solid fa-chart-pie fa-fw"></i>
              <span>Dashboard</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="settings.html"
            >
              <i className="fa-solid fa-gear fa-fw"></i>
              <span>Settings</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="profile.html"
            >
              <i className="fa-solid fa-user fa-fw"></i>
              <span>Profile</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="projects.html"
            >
              <i className="fa-solid fa-diagram-project fa-fw"></i>
              <span>Projects</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="courses.html"
            >
              <i className="fa-solid fa-chalkboard-user fa-fw"></i>
              <span>Courses</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="friends.html"
            >
              <i className="fa-solid fa-user-group fa-fw"></i>
              <span>Friends</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="files.html"
            >
              <i className="fa-solid fa-file fa-fw"></i>
              <span>Files</span>
            </a>
            <a
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              href="plans.html"
            >
              <i className="fa-solid fa-business-time fa-fw"></i>
              <span>Plans</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
