import React from "react";
import ReactDOM from "react-dom";

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

import { Link, Outlet, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import App from "./App.js";
import Dashboard from "./components/dashboard.js";
import Home from "./components/home.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";

const leftContents = (
    <React.Fragment>
        <span className="brand">WreckApp</span>

        <Link to="/home"><Button label="Home" className="p-button-text" /></Link>
        <Link to="/dashboard"><Button label="Dashboard" className="p-button-text" /></Link>
        <Link to="/about"><Button label="About" className="p-button-text" /></Link>
        <Link to="/contact"><Button label="Contact" className="p-button-text" /></Link>
{/*         
        <Button label="Page 1" className="p-button-text" />
        <Button label="Page 2" className="p-button-text" />
        <Button label="Page 3" className="p-button-text" /> */}

        {/* <Button label="New" icon="pi pi-plus" className="p-mr-2" />
      <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
      <i className="pi pi-bars p-toolbar-separator p-mr-2" /> */}

    </React.Fragment>
);

const rightContents = (
    <React.Fragment>
        <Button label="Page 7" className="p-button-text" />
        <Button label="Page 8" className="p-button-text" />
        <Button label="Page 9" className="p-button-text" />

        {/* <Button icon="pi pi-search" className="p-mr-2" />
      <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
      <Button icon="pi pi-times" className="p-button-danger" /> */}
    </React.Fragment>
);


ReactDOM.render(
    <Router>
        <Toolbar left={leftContents} right={rightContents} />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Outlet />
        {/* <Link to="/dashboard"><Button label="Some toolbar" className="p-button-text" /></Link> */}
    </Router>,
    document.getElementById("root")
);