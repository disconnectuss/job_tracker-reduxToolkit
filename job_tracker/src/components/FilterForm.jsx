import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
  resetFilters,
} from "../redux/jobSlice";
import { sortOpt, statusOpt, typeOpt } from "../utils/constant";

const FilterForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();

  const handleReset = () => {
    dispatch(resetFilters());
    inputRef.current.value = "";
    typeRef.current.value = "Select";
    statusRef.current.value = "Select";
    sortRef.current.value = "Select";
  };

  return (
    <div className="filter-sec">
      <h2>Filter Form</h2>
      <form>
        <div>
          <label>Search For</label>
          <input
            ref={inputRef}
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            placeholder="title, skill or company"
            type="text"
          />
        </div>
        <div>
          <label>Status</label>
          <select
            ref={statusRef}
            name="status"
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
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
          <select
            ref={typeRef}
            name="type"
            onChange={(e) => dispatch(filterByType(e.target.value))}
          >
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
        <div>
          <label>Filter</label>
          <select
            ref={sortRef}
            onChange={(e) => dispatch(sortJobs(e.target.value))}
          >
            <option value="Select" hidden>
              Select
            </option>
            {sortOpt.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="filter_btn">
          <button onClick={handleReset} type="button">
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
