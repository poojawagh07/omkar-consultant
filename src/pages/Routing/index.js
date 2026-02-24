import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../../components/Header";

import Home from "../Home";
import AboutUS from "../AboutUs";
import Services from "../Services";
import Blog from "../Blog";
import ISOStandard from "../IsoStandards";
import Careers from "../Careers";
import ContactUs from "../ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/iso" element={<ISOStandard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
  <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
