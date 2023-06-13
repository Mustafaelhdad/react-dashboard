import React, { Component } from "react";

export default class Targets extends Component {
  render() {
    const w40 = {
      width: "40%",
    };
    const w66 = {
      width: "66%",
    };
    const w10 = {
      width: "20%",
    };

    return (
      <div className="targets p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Yearly targets</h2>
        <p className="mt-0 mb-20 c-grey fs-15">targets</p>

        <div className="target-row mb-20 blue center-flex">
          <div className="icon center-flex">
            <i className="fa-solid fa-dollar-sign fa-lg c-blue"></i>
          </div>
          <div className="details">
            <span className="fs-14 c-grey">Money</span>
            <span className="d-block mt-5 mb-10 fw-bold">$1.000</span>
            <div className="progress p-relative">
              <span className="bg-blue blue" style={w40}>
                <span className="bg-blue">40%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="target-row mb-20 orange center-flex">
          <div className="icon center-flex">
            <i className="fa-solid fa-code fa-lg c-orange"></i>
          </div>
          <div className="details">
            <span className="fs-14 c-grey">Projects</span>
            <span className="d-block mt-5 mb-10 fw-bold">10</span>
            <div className="progress p-relative">
              <span className="bg-orange orange" style={w66}>
                <span className="bg-orange">66%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="target-row mb-20 green center-flex">
          <div className="icon center-flex">
            <i className="fa-solid fa-user fa-lg c-green"></i>
          </div>
          <div className="details">
            <span className="fs-14 c-grey">Team</span>
            <span className="d-block mt-5 mb-10 fw-bold">5</span>
            <div className="progress p-relative">
              <span className="bg-green green" style={w10}>
                <span className="bg-green">10%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
