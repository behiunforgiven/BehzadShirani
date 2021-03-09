import React, { useState } from "react";
import { Room , PhoneAndroid , Email , Facebook , Instagram , Twitter , Pinterest} from '@material-ui/icons';
import emailjs from 'emailjs-com';

const FORMSPARK_ACTION_URL = "https://submit-form.com/MlAEWRAg";

const Contact = () => {

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    emailjs.sendForm('service_3zktasw', 'template_orckg09', e.target, 'user_kYn01onPjfHLtRZJW5wd9')
      .then((result) => {
        setSubmitting(false);
        alert("Form submitted");

          console.log(result.text);
      }, (error) => {

        setSubmitting(false);
          alert("Error Form submitted");
          console.log(error.text);
      });

    
  };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{
        backgroundImage: "url(/static/images/overlay-bg.jpg)"
      }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message</h5>
                    </div>
                    <div>
                      
                        
                          <form className="contactForm" onSubmit={onSubmit}>
                            <div className="row">

                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                  />
                                 
                                </div>
                              </div>

                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                  />
                                  
                                </div>
                              </div>

                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                  />
                                  
                                </div>
                              </div>

                              <div className="col-md-12">
                                <button
                                  disabled={submitting}
                                  type="submit"
                                  className="button button-a button-big button-rouded">
                                  Send Message
                                  {submitting && (<>&nbsp;<i className="fa fa-spin fa-spinner"></i></>)}
                              </button>
                              </div>

                            </div>
                          </form>
                        
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Feel free to contact me about your projects. You can reach me in social networks
                        or make a phone call. Also, this form and my email are available.
                        </p>
                      <ul className="list-ico">
                        <li>
                          <span><Room /> Esfahan, Iran </span>
                        </li>
                        <li>
                          <span><PhoneAndroid/> +98-913-266-6946 </span>
                        </li>
                        <li>
                          <span><Email/> me [at] behzadshirani.ir </span>
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://facebook.com/behiunforgiven" rel="noopener noreferrer" target="_blank">
                            <span className="ico-circle">
                              <Facebook />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com/behiunforgiven">
                            <span className="ico-circle">
                              <Instagram/>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/behiunforgiven">
                            <span className="ico-circle">
                              <Twitter/>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://pinterest.com/behiunforgiven">
                            <span className="ico-circle">
                              <Pinterest />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  &copy; Copyright <strong>Behzad Shirani</strong>. All Rights
                  Reserved
                  </p>
                <div className="credits" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;


