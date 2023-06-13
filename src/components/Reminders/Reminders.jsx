import React, { Component } from "react";

export default class Reminders extends Component {
  render() {
    return (
      <div class="reminders p-20 bg-white rad-10 p-relative">
        <h2 class="mt-0 mb-25">Reminders</h2>
        <ul class="m-0">
          <li class="d-flex align-center mt-15">
            <span class="key bg-blue mr-15 d-block rad-half"></span>
            <div class="pl-15 blue">
              <p class="fs-14 fw-bold mt-0 mb-5">Check my task list</p>
              <span class="fs-13 c-grey">11/02/2023 - 09:00px</span>
            </div>
          </li>
          <li class="d-flex align-center mt-15">
            <span class="key bg-green mr-15 d-block rad-half"></span>
            <div class="pl-15 green">
              <p class="fs-14 fw-bold mt-0 mb-5">Check my task list</p>
              <span class="fs-13 c-grey">11/02/2023 - 09:00px</span>
            </div>
          </li>
          <li class="d-flex align-center mt-15">
            <span class="key bg-orange mr-15 d-block rad-half"></span>
            <div class="pl-15 orange">
              <p class="fs-14 fw-bold mt-0 mb-5">Check my task list</p>
              <span class="fs-13 c-grey">11/02/2023 - 09:00px</span>
            </div>
          </li>
          <li class="d-flex align-center mt-15">
            <span class="key bg-red mr-15 d-block rad-half"></span>
            <div class="pl-15 red">
              <p class="fs-14 fw-bold mt-0 mb-5">Check my task list</p>
              <span class="fs-13 c-grey">11/02/2023 - 09:00px</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
