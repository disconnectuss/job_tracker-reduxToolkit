import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState(null)
  useEffect (()=>{
    axios
    .get('http://localhost:3030/jobs')
    .then((res)=> setJobs(res.data))
  }, [])
  // console.log(jobs)
  return (
    <div>
      <Header/>
      <h3 className="count">You are viewing (5) out of (10) available jobs. </h3>
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
