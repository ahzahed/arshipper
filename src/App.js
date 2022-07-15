import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "./pages";
import { Footer, Navbar, Topbar } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
