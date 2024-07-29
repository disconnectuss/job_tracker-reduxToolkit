import React from "react";
import { statusOpt, typeOpt } from "../utils/constant";

const AddJob = () => {
  return (
    <div className="add-sec">
      <h2>Add New Job</h2>
      <form>
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
          <input name="location" />
        </div>
        <div>
          <label>Status</label>
          <select name="status">
            <option value="Select" selected disabled>
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
          <select name="type">
            <option value="Select" selected disabled>
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
