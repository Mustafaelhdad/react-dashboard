import React, { Component } from "react";
import Avatar from "../../assets/imgs/avatar.png";
import WelcomeImg from "../../assets/imgs/welcome.png";

export default class Welcome extends Component {
  render() {
    return (
      <div class="welcome bg-white rad-10 txt-c-mobile block-mobile">
        <div class="intro p-20 d-flex space-between bg-eee">
          <div>
            <h2 class="m-0">Welcome</h2>
            <p class="c-grey mt-5">Mustafa</p>
          </div>
          <img class="hide-mobile" src={WelcomeImg} alt="" />
        </div>
        <img src={Avatar} class="avatar" alt="" />
        <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
          <div>
            Mustafa Elhdad
            <span class="d-block c-grey fs-14 mt-10">Developer</span>
          </div>
          <div>
            10 <span class="d-block c-grey fs-14 mt-10">Projects</span>
          </div>
          <div>
            $333 <span class="d-block c-grey fs-14 mt-10">Earned</span>
          </div>
        </div>
        <a
          href="profile.html"
          class="visit d-block fs-14 rad-6 bg-blue c-white w-fit btn-shape"
        >
          Profile
        </a>
      </div>
    );
  }
}
