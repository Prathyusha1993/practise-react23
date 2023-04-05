import React, { Component } from "react";

const NavbarCom = (props) => {
    console.log('navbar-rendered');
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge bage-pill badge-secondary">
              {props.totalCounters}
            </span>
          </a>
        </nav>
    );
};

export default NavbarCom;
