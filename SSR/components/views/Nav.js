/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Link, Events } from "react-scroll";
import { ClickAwayListener } from '@material-ui/core';

const Nav = () => {
  const [navClass, setNavClass] = useState("");
  const [navCollapsed, setNavCollapsed] = useState(true);
  const links = ["home", "about", "services", "work", "contact"];

  useEffect(() => {
    function handleScroll() {
      let scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setNavClass("navbar-reduce");
      } else {
        setNavClass("navbar-trans");
      }
    }

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", to, element);
    });

    window.addEventListener("scroll", handleScroll);

    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <ClickAwayListener onClickAway={() => setNavCollapsed(true)}>
      <nav
        className={`navbar navbar-b navbar-trans navbar-expand-md fixed-top ${navClass}`}
        id="mainNav"
      >
        <div className="container">
          <Link
            className="navbar-brand js-scroll"
            to="page-top"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            
          >
            Behzad Shirani
        </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavCollapsed(!navCollapsed)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`navbar-collapse ${navCollapsed ? "collapse" : ""} justify-content-end`}
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              {links.map(link => {
                return (
                  <li key={link} className="nav-item">
                    <Link
                      className="nav-link js-scroll"
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth="easeInOutQuint"
                      offset={-70}
                      duration={800}
                      onSetActive={(link) => console.log(link)}
                      
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav >
    </ClickAwayListener>
  );
};

export default Nav;
