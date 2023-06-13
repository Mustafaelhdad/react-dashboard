import React, { Component } from "react";
import NewsImg from "../../assets/imgs/news-01.png";

export default class News extends Component {
  render() {
    return (
      <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
        <h2 className="mt-0 mb-20">Latest News</h2>
        <div className="news-row d-flex align-center">
          <img src={NewsImg} alt="" />
          <div className="info">
            <h3>Created SASS Section</h3>
            <p className="m-0 fs-14 c-grey">New SASS examples & tutorials</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label btn-shape">
            3 Days ago
          </div>
        </div>
        <div className="news-row d-flex align-center">
          <img src={NewsImg} alt="" />
          <div className="info">
            <h3>Created SASS Section</h3>
            <p className="m-0 fs-14 c-grey">New SASS examples & tutorials</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label">3 Days ago</div>
        </div>
        <div className="news-row d-flex align-center">
          <img src={NewsImg} alt="" />
          <div className="info">
            <h3>Created SASS Section</h3>
            <p className="m-0 fs-14 c-grey">New SASS examples & tutorials</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label">3 Days ago</div>
        </div>
        <div className="news-row d-flex align-center">
          <img src={NewsImg} alt="" />
          <div className="info">
            <h3>Created SASS Section</h3>
            <p className="m-0 fs-14 c-grey">New SASS examples & tutorials</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label">3 Days ago</div>
        </div>
        <div className="news-row d-flex align-center">
          <img src={NewsImg} alt="" />
          <div className="info">
            <h3>Created SASS Section</h3>
            <p className="m-0 fs-14 c-grey">New SASS examples & tutorials</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label">3 Days ago</div>
        </div>
        <div className="news-row d-flex align-center">
          <img src={NewsImg} alt="" />
          <div className="info">
            <h3>Created SASS Section</h3>
            <p className="m-0 fs-14 c-grey">New SASS examples & tutorials</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label">3 Days ago</div>
        </div>
      </div>
    );
  }
}
