import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainJobs: [], // initial state
  jobs: [], // filtered state
  initialized: false,
  isError: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload; // set mainJobs for filtering
      state.mainJobs = action.payload; // set jobs initially to all jobs
      state.initialized = true;
      state.isError = false;
    },

    setError: (state) => {
      state.initialized = true;
      state.isError = true;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    filterBySearch: (state, action) => {
      const query = action.payload.toLowerCase();
      state.jobs = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );

      state.jobs = filter;
    },
    filterByStatus: (state, action) => {
      state.jobs = state.mainJobs.filter(
        (job) => job.status === action.payload
      );
    },
    filterByType: (state, action) => {
      state.jobs = state.mainJobs.filter((job) => job.type === action.payload);
    },
    sortJobs: (state, action) => {
      switch (action.payload) {
        case 'a-z':
          state.jobs.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'z-a':
          state.jobs.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'Earliest':
          state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'Latest':
          state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        default:
          return state;
      }
    },
    resetFilters: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});
export const {
  setJobs,
  setError,
  addJob,
  deleteJob,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
  resetFilters,
} = jobSlice.actions;
export default jobSlice.reducer;
