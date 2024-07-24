import React, { useEffect } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJobs } from "../redux/jobSlice";
import store from "../redux/store";

const JobList = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  useEffect(() => {
    axios
      .get("http://localhost:3030/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, []);
  // console.log(jobs)
  return (
    <div>
      <Header />
      <h3 className="count">
        You are viewing (5) out of (10) available jobs.{" "}
      </h3>
      <div className="list_section">
        {!state.initialized && <p>Loading..</p>}
        {state.initialized && !state.isError ? (
          <>
            {state.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </>
        ) : (
          <p> Ups.. Something went wrong! </p>
        )}
      </div>
    </div>
  );
};

export default JobList;
