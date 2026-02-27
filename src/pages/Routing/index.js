import React from "react";
import { HashRouter, Routes, Route, Navigate,BrowserRouter } from "react-router-dom";

import Header from "../../components/Header";

import Home from "../Home";
import AboutUS from "../AboutUs";
import Services from "../Services";
import Blog from "../Blog";
import ISOStandard from "../IsoStandards";
import Careers from "../Careers";
import ContactUs from "../ContactUs";
import ServiceDetails from "../ServiceDetails";
import IsoCertification from "../Iso-Certification/index.js"

function App() {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<AboutUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/iso" element={<ISOStandard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/service-details" element={<ServiceDetails />} />
 <Route path="/IsoCertification" element={<IsoCertification />} />

                <Route path="*" element={<Navigate to="/" replace />} />


      </Routes>
</BrowserRouter>

    // {/* </HashRouter> */}
  );
}

export default App;
