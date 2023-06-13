import React, { Component } from "react";

export default class Drafts extends Component {
  render() {
    return (
      <div class="quick-draft p-20 bg-white rad-10">
        <h2 class="mt-0 mb-10">Quick Draft</h2>
        <p class="mt-0 mb-20 c-grey fs-15">Write a draft for your ideas</p>
        <form action="" class="">
          <input
            class="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
            type="text"
            placeholder="Title"
          />
          <textarea
            class="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
            placeholder="Your thoughts"
          ></textarea>
          <input
            class="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    );
  }
}
