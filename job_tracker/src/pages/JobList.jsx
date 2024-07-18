import React from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";

const JobList = () => {
  return (
    <div>
      <Header/>
      <div className="list_section">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobList;
