import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { navClass: '' };
    this.links = ['home','about','services','work','contact'];
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = window.pageYOffset;
    if(scrollTop > 50){
      this.setState({navClass: 'navbar-reduce'});
    }else{
      this.setState({navClass: 'navbar-trans'});
    }
  };

  render() {
    return (
      <nav
        className={`navbar navbar-b navbar-trans navbar-expand-md fixed-top ${this.state.navClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            DevFolio
          </a>
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
            {
              this.links.map((link) => {
                return <li className="nav-item">
                <Link
                className="nav-link js-scroll"
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {link}
              </Link>
              </li>
              })
            }
              
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
