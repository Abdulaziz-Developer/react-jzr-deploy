import React from "react";
import logo from "./Rtaj.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    open: false,
  };

  render() {
    const isOn = this.state.open;
    return (
      <header>
        <nav>
          <ul className="nav-links">
            <NavLink exact to="/">
            <div className="logo-container">
              <img src={logo} alt="OurLogo" className="main-logo" />
              <h1 className="logo-header">لغتنا لا تختلف</h1>
            </div>
            </NavLink>
            <li>
              <a href="#lessons" className="nav-link">
                دروسنا
              </a>
            </li>
            <li>
              <a href="#info" className="nav-link">
                معلومات
              </a>
            </li>
            <li>
              <a href="#challenge" className="nav-link">
                تحديات
              </a>
            </li>
            <li>
              <NavLink to="/profile/user" className="nav-link">
                صفحة المستخدم
              </NavLink>
            </li>
            <div className="burger">
              <div
                className={this.state.open ? "menu-btn open" : "menu-btn"}
                onClick={() => {
                  this.setState({ open: !isOn });
                }}
              >
                <div className="menu-btn__burger"></div>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
