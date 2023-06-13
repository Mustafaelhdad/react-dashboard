import React, { Component } from "react";
import TeamImg_1 from "../../assets/imgs/team-01.png";
import TeamImg_2 from "../../assets/imgs/team-02.png";
import TeamImg_3 from "../../assets/imgs/team-03.png";
import TeamImg_4 from "../../assets/imgs/team-03.png";

export default class ProjectsTable extends Component {
  render() {
    return (
      <div class="projects p-20 bg-white rad-10 m-20">
        <h2 class="mt-0 mb-20">Projects</h2>
        <div class="responsive-table">
          <table class="fs-15 w-full">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wiki</td>
                <td>2 Mar 2023</td>
                <td>Ministry</td>
                <td>$444</td>
                <td>
                  <img src={TeamImg_1} alt="" />
                  <img src={TeamImg_2} alt="" />
                  <img src={TeamImg_3} alt="" />
                  <img src={TeamImg_4} alt="" />
                </td>
                <td>
                  <span class="label btn-shape bg-orange c-white">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Ministry Wiki</td>
                <td>2 Mar 2023</td>
                <td>Ministry</td>
                <td>$444</td>
                <td>
                  <img src={TeamImg_1} alt="" />
                  <img src={TeamImg_2} alt="" />
                  <img src={TeamImg_3} alt="" />
                  <img src={TeamImg_4} alt="" />
                </td>
                <td>
                  <span class="label btn-shape bg-orange c-white">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
