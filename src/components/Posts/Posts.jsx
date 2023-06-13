import React, { Component } from "react";
import AvatarImg from "../../assets/imgs/avatar.png";

export default class Posts extends Component {
  render() {
    return (
      <div class="latest-post p-20 bg-white rad-10 p-relative">
        <h2 class="mt-0 mb-25">Latest Post</h2>
        <div class="top d-flex align-center">
          <img class="avatar mr-15" src={AvatarImg} alt="" />
          <div class="info">
            <span class="d-block mb-5"> Mustafa Elhdad </span>
            <span class="c-grey">About 2 hours ago</span>
          </div>
        </div>
        <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni
          quisquam voluptatum praesentium vero aliquam deleniti illum cupiditate
          fugiat reiciendis, atque et sint, beatae nobis eius labore maxime
          nostrum? Nesciunt?
        </div>
        <div class="post-stats between-flex c-grey">
          <div>
            <i class="fa-regular fa-heart"></i>
            <span>22</span>
          </div>
          <div>
            <i class="fa-regular fa-comments"></i>
            <span>34</span>
          </div>
        </div>
      </div>
    );
  }
}
