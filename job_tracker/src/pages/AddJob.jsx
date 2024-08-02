import React from "react";
import axios from "axios"; // Make sure to import axios
import { statusOpt, typeOpt } from "../utils/constant";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    // Converting form data array into form data object
    const newJob = Object.fromEntries(form.entries());

    newJob.id = v4();
    newJob.date = new Date().toLocaleDateString();

    if (!newJob.status || !newJob.type) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      await axios.post("http://localhost:3030/jobs", newJob);
      dispatch(addJob(newJob));
      navigate("/");
      toast.success("Job added successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="add-sec">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Position</label>
          <input required name="position" type="text" />
        </div>
        <div>
          <label>Company</label>
          <input required name="company" type="text" />
        </div>

        <div>
          <label>Location</label>
          <input name="location" type="text" />
        </div>
        <div>
          <label>Status</label>
          <select name="status" required>
            <option value="Select" hidden>
              Select
            </option>
            {statusOpt.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Type</label>
          <select name="type" required>
            <option value="Select" hidden>
              Select
            </option>
            {typeOpt.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="add_btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
