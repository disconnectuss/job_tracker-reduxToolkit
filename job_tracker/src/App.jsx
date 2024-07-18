import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJob from './pages/AddJob'
import JobList from './pages/JobList';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<JobList/>}/>
    <Route path="./add_job" element={<AddJob/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
