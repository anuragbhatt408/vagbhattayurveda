import "../../index.css";
import logo from "../../assets/images/photo-1512867957657-38dbae50a35b.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <a href="/">
              <img
                src={logo}
                style={{ height: "4.3rem", borderRadius: "30px" }}
              />
            </a>
          </span>
          <span className="navbar-caption-wrap">
            <a className="navbar-caption text-black roboto-bold" href="/">
              HerbHeal
            </a>
          </span>
        </div>
        <div className="navbar-content">
          <ul>
            <li className="roboto-regular font-med">
              <Link to={"about"} className="li-btn">
                About
              </Link>
            </li>
            <li className="roboto-regular font-med li-btn">
              <Link to={"Treatment"} className="li-btn">
                Treatment
              </Link>
            </li>
            <li className="roboto-regular font-med">
              <Link to={"Treatment"} className="li-btn">
                Testimonials
              </Link>
            </li>
          </ul>
          <div>
            <a href="/" className="btn roboto-black">
              Explore
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
