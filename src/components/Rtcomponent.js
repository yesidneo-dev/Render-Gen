import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import { Fa500Px, FaConnectdevelop } from "react-icons/fa";

const Rtcomponent = () => {
  return (
    <div className="rt">
      <Router>
        <nav className="navbar">
          <Link to="/">
            <div className="rt-font">
              <div className="rt-icon">
                <Fa500Px />{" "}
              </div>
              <div className="rt-font"> Main </div>
            </div>
          </Link>
          <Link to="/Contact">
            <div className="rt-font">
              <div className="rt-icon">
                <FaConnectdevelop />{" "}
              </div>
              <div className="rt-font"> Contact </div>
            </div>
          </Link>
          <Link to="/About">
            <div className="rt-font">
              <div className="rt-icon">
                <FaConnectdevelop />{" "}
              </div>
              <div className="rt-font"> About </div>
            </div>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Rtcomponent;
