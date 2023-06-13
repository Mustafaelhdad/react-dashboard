import React, { Component } from "react";
import PDFImg from "../../assets/imgs/pdf.svg";

export default class Uploads extends Component {
  render() {
    return (
      <div class="latest-uploads p-20 bg-white rad-10">
        <h2 class="mt-0 mb-20">Latest Uploads</h2>
        <ul class="m-0">
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
          <li class="between-flex pb-10 mb-10">
            <div class="d-flex align-center">
              <img class="mr-10" src={PDFImg} alt="" />
              <div>
                <span class="d-block">file.pdf</span>
                <span class="fs-15 c-grey">Mustafa</span>
              </div>
            </div>
            <div class="bg-eee btn-shape fs-13">2.2mb</div>
          </li>
        </ul>
      </div>
    );
  }
}
