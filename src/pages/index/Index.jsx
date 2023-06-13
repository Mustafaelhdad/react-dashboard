import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Head from "../../components/Head/Head";
import Welcome from "../../components/Welcome/Welcome";
import Drafts from "../../components/Drafts/Drafts";
import Targets from "../../components/Targets/Targets";
import Tickets from "../../components/Tickets/Tickets";
import News from "../../components/News/News";
import Tasks from "../../components/Tasks/Tasks";
import SearchWords from "../../components/Search-words/Search-words";
import Uploads from "../../components/Uploads/Uploads";
import ProjectProgress from "../../components/Project-progress/Project-progress";
import Reminders from "../../components/Reminders/Reminders";
import Posts from "../../components/Posts/Posts";
import SociaMedia from "../../components/Social-media/Social-media";
import ProjectsTable from "../../components/Projects-table/Projects-table";

export default class Index extends Component {
  render() {
    return (
      <>
        <div className="page d-flex">
          <Sidebar />
          <div className="content w-full">
            <Head />
            <h1 className="p-relative">Dashboard</h1>
            <div className="wrapper d-grid gap-20">
              <Welcome />
              <Drafts />
              <Targets />
              <Tickets />
              <News />
              <Tasks />
              <SearchWords />
              <Uploads />
              <ProjectProgress />
              <Reminders />
              <Posts />
              <SociaMedia />
            </div>
            <ProjectsTable />
          </div>
        </div>
      </>
    );
  }
}
