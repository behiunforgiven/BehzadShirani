import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Room , PhoneAndroid , Email , Facebook , Instagram , Twitter , Pinterest} from '@material-ui/icons';

const Contact = () => {

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
                      <Formik
                        initialValues={{ name: '', email: '',message : '' }}
                        validate={values => {
                          let errors = {};
                          if (!values.name) {
                            errors.name = 'Please input your name';
                          } else if (!values.message) {
                            errors.message = 'Please input your message';
                          } else
                           if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                          ) {
                            errors.email = 'Invalid email address';
                          }
                          return errors;
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form className="contactForm" action="https://submit-form.com/MlAEWRAg">
                            <div className="row">

                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                  />
                                  <ErrorMessage name="name" component="div" className="validation" />
                                </div>
                              </div>

                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <Field
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                  />
                                  <ErrorMessage name="email" component="div" className="validation"/>
                                </div>
                              </div>

                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <Field
                                    component="textarea"
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                  />
                                  <ErrorMessage name="message" component="div" className="validation"/>
                                </div>
                              </div>

                              <div className="col-md-12">
                                <button
                                  disabled={isSubmitting}
                                  type="submit"
                                  className="button button-a button-big button-rouded">
                                  Send Message
                                  {isSubmitting && (<>&nbsp;<i className="fa fa-spin fa-spinner"></i></>)}
                              </button>
                              </div>

                            </div>
                          </Form>
                        )}
                      </Formik>
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


