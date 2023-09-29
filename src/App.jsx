import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


