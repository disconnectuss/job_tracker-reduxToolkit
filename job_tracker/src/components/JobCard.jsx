import React from "react";
import Location from "../assets/icons/Location";
import Time from "../assets/icons/Time";
import Date from "../assets/icons/Date";


const JobCard = () => {
  return (
    <div className="card">
      <div className="head">
        <div className="letter">
          <p>L</p>
        </div>
        <div className="info">
          <p>Web Developer</p>
          <p>Emaartechs</p>
        </div>
      </div>
      <div className="body">
        <div className="field">
          <Location />
          <p> İzmir/bayraklı </p>
        </div>
        <div className="field">
          <Time/>
          
          <p> Full Time </p>
        </div>
        <div className="field">
          <div className="field">
            <Date/>
            <p> 8/8/2024 </p>
          </div>
        </div>
        <div className="status">
          <span>Expired</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
