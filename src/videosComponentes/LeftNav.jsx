import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/LeftNav.css";
function LeftNav(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const colseMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          كيف تتعامل مع الصم والبكم
        </Link>
        <div className="menu-icon">
          <i
            className={click ? "fa fa-times" : "fa fa-bars"}
            aria-hidden="true"
            onClick={handleClick}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {props.data.map((data) => (
            <li className="nav-item active" key={data.id}>
              <Link
                to={data.id}
                className="nav-links "
                onClick={colseMobileMenu}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default LeftNav;
