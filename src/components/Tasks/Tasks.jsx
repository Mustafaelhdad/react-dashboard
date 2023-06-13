import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    return (
      <div className="tasks p-20 bg-white rad-10">
        <h2 className="mt-0 mb-20"></h2>

        <div className="task-row between-flex">
          <div className="info">
            <h3 className="mt-0 mb-5 fs-15">Complete the express.js project</h3>
            <p className="m-0 c-grey">Commit the project on github</p>
          </div>
          <i className="fa-regular fa-trash-can delete"></i>
        </div>

        <div className="task-row between-flex">
          <div className="info">
            <h3 className="mt-0 mb-5 fs-15">Complete the express.js project</h3>
            <p className="m-0 c-grey">Commit the project on github</p>
          </div>
          <i className="fa-regular fa-trash-can delete"></i>
        </div>

        <div className="task-row between-flex">
          <div className="info">
            <h3 className="mt-0 mb-5 fs-15">Complete the express.js project</h3>
            <p className="m-0 c-grey">Commit the project on github</p>
          </div>
          <i className="fa-regular fa-trash-can delete"></i>
        </div>

        <div className="task-row between-flex done">
          <div className="info">
            <h3 className="mt-0 mb-5 fs-15">Complete the express.js project</h3>
            <p className="m-0 c-grey">Commit the project on github</p>
          </div>
          <i className="fa-regular fa-trash-can delete"></i>
        </div>

        <div className="task-row between-flex">
          <div className="info">
            <h3 className="mt-0 mb-5 fs-15">Complete the express.js project</h3>
            <p className="m-0 c-grey">Commit the project on github</p>
          </div>
          <i className="fa-regular fa-trash-can delete"></i>
        </div>
      </div>
    );
  }
}
