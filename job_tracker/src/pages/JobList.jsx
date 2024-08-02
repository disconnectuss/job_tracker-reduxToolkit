import React, { useEffect } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJobs } from "../redux/jobSlice";
import FilterForm from "../components/FilterForm";

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const mainJobs = useSelector((state) => state.mainJobs);
  const initialized = useSelector((state) => state.initialized);
  const isError = useSelector((state) => state.isError);

  useEffect(() => {
    axios
      .get("http://localhost:3030/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <FilterForm />
      <h3 className="count">
        You are viewing ({jobs.length}) out of ({mainJobs.length}) available
        jobs.
      </h3>
      <div className="list_section">
        {!initialized && <p>Loading..</p>}
        {initialized && !isError ? (
          <>
            {jobs.map((job) => (
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
