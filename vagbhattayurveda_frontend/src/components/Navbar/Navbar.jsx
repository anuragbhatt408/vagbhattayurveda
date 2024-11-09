import "../../index.css";
import logo from "../../assets/images/photo-1512867957657-38dbae50a35b.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import cookies from "js-cookie";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(cookies.get("token"));
  }, []);
  return (
    <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div className="nav-container">
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
              <Link
                to={"/about"}
                className="p-2 hover:bg-green-600 no-underline text-black rounded-2xl"
              >
                About
              </Link>
            </li>
            <li className="roboto-regular font-med li-btn">
              <Link
                to={"Treatment"}
                className="p-2 hover:bg-green-600 no-underline text-black rounded-2xl"
              >
                Treatment
              </Link>
            </li>
            <li className="roboto-regular font-med">
              <Link
                to={"Treatment"}
                className="p-2 hover:bg-green-600 no-underline text-black rounded-2xl"
              >
                Testimonials
              </Link>
            </li>
          </ul>
          {token ? (
            <div>
              <a
                href="/"
                className="btn roboto-black mr-2"
                onClick={() => cookies.remove("token")}
              >
                Logout
              </a>
            </div>
          ) : (
            <div>
              <a href="/signin" className="btn roboto-black mr-2">
                Signin
              </a>
              <a href="/signup" className="btn roboto-black">
                Signup
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
