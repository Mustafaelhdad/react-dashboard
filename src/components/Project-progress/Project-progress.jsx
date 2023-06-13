import React, { Component } from "react";

export default class ProjectProgress extends Component {
  render() {
    return (
      <div class="last-project p-20 bg-white rad-10 p-relative">
        <h2 class="mt-0 mb-20">Last Project Progress</h2>
        <ul class="m-0 p-relative">
          <li class="mt-25 d-flex align-center done">got the project</li>
          <li class="mt-25 d-flex align-center done">got the project</li>
          <li class="mt-25 d-flex align-center current">got the project</li>
          <li class="mt-25 d-flex align-center">got the project</li>
        </ul>
        <img class="launch-icon hide-mobile" src="imgs/project.png" alt="" />
      </div>
    );
  }
}
