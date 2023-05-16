import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./index.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-content">
        <div className="logo">
          <p className="edyoda-name">EDYODA</p>
        </div>
        <div className="courses">
          <p classname="course-description">Courses</p>
          <div>
            <FaChevronDown className="vector" />
          </div>
        </div>
        <div className="programs">
          <p classname="program-description">Programs</p>
          <div>
            <FaChevronDown className="vector" />
          </div>
        </div>
      </div>
      <div className="right-content">
        <div>
          <FaSearch className="search" />
        </div>
        <div className="courses">
          <p className="login-description">Login</p>
        </div>
        <button className="btn bg-primary">JOIN NOW</button>
      </div>
    </div>
  );
}

export default Navbar;
