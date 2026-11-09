import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./common/Layout";
import HomePage from "./pages/HomePage";
import JobListingPage from "./pages/JobListingPage";
import JobDetailPage from "./pages/JobDetailPage";
import CompanyDashboard from "./pages/CompanyDashboard";
import ApplicationPage from "./pages/ApplicationPage";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import ApplicationDetailPage from "./pages/ApplicationDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>} />
              <Route path="/jobs" element={<JobListingPage/>} />
              <Route path="/jobs/:id" element={<JobDetailPage/>}/>
              <Route path="/company/dashboard" element={<CompanyDashboard/>}/>
              <Route path="/applications" element={<ApplicationPage/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/applications/:id" element={<ApplicationDetailPage/>}/>

           </Route>
        </Routes>
      </BrowserRouter>
        <ToastContainer />
    </>
  );
}

export default App;
