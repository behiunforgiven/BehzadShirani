import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default () => {
  const [navClass, setNavClass] = useState("");
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

    window.addEventListener("scroll", handleScroll);

    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`navbar navbar-b navbar-trans navbar-expand-md fixed-top ${navClass}`}
      id="mainNav"
    >
      <div className="container">
        <Link
          className="navbar-brand js-scroll"
          to="page-top"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
        >
          Behzad Shirani
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
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
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
