import React from "react";
import Location from "../assets/icons/Location";
import Time from "../assets/icons/Time";
import Date from "../assets/icons/Date";
import Delete from "../assets/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteJob } from "../redux/jobSlice";
import { toast } from "react-toastify";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log("delete action");
    dispatch(deleteJob(id));
    toast.success("Job deleted successfully!");
  };

  // console.log(job);
  const getClassname = () => {
    switch (job.status) {
      case "Active":
        return "active";
      case "Expired":
        return "expired";
      case "Promoted":
        return "promoted";

      default:
        return "default";
    }
  };
  return (
    <div className="card">
      <div className="head">
        <div className="letter">
          <p>{job.company[0]}</p>
        </div>
        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
        <div className="btn-container">
          <button className="delete-btn" onClick={() => handleDelete(job.id)}>
            <Delete className="btn" />
          </button>
        </div>
      </div>
      <div className="body">
        <div className="field">
          <Location />
          <p> {job.location}</p>
        </div>
        <div className="field">
          <Time />

          <p>{job.type}</p>
        </div>
        <div className="field">
          <div className="field">
            <Date />
            <p> {job.date}</p>
          </div>
        </div>
        <div className="status">
          <span className={getClassname()}>{job.status}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
