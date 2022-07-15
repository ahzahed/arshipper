import React from "react";
import {
  Banner,
  About,
  Calculator,
  Faq,
  Service,
  Testimonial,
  WorkProcess,
} from "../components/home";
function App() {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Service />
      <Calculator />
      <WorkProcess />
      <Testimonial />
      <Faq />
    </React.Fragment>
  );
}

export default App;
