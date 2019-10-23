webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _jsxFileName = "D:\\Shirani\\_Projects\\BehzadShirani\\SSR\\components\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Contact = function Contact() {
  return __jsx("section", {
    className: "paralax-mf footer-paralax bg-image sect-mt4 route",
    style: {
      backgroundImage: "url(/static/images/overlay-bg.jpg)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "overlay-mf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "contact-mf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    id: "contact",
    className: "box-shadow-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "title-box-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h5", {
    className: "title-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Send Message Us")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.name) {
        errors.name = 'Please input your name';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
        setSubmitting(false);
      }, 4000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "contactForm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-12 mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "text",
      name: "name",
      className: "form-control",
      id: "name",
      placeholder: "Your Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "name",
      component: "div",
      className: "validation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }))), __jsx("div", {
      className: "col-md-12 mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "email",
      className: "form-control",
      name: "email",
      id: "email",
      placeholder: "Your Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "email",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), __jsx("div", {
      className: "col-md-12 mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      component: "textarea",
      className: "form-control",
      name: "message",
      rows: "5",
      placeholder: "Message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "message",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }))), __jsx("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("button", {
      disabled: isSubmitting,
      type: "submit",
      className: "button button-a button-big button-rouded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Send Message", isSubmitting && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "\xA0", __jsx("i", {
      className: "fa fa-spin fa-spinner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }))))));
  }))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "title-box-2 pt-4 pt-md-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h5", {
    className: "title-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Get in Touch")), __jsx("div", {
    className: "more-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Feel free to contact me about your projects. You can reach me in social networks or make a phone call. Also, this form and my email are available."), __jsx("ul", {
    className: "list-ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-map-marker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), " Esfahan, Iran ")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), " +98-913-266-6946 ")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), " me [at] behzadshirani.ir ")))), __jsx("div", {
    className: "socials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("a", {
    href: "https://facebook.com/behiunforgiven",
    rel: "noopener noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("span", {
    className: "ico-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("a", {
    href: "https://instagram.com/behiunforgiven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("span", {
    className: "ico-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("a", {
    href: "https://twitter.com/behiunforgiven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("span", {
    className: "ico-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("a", {
    href: "https://pinterest.com/behiunforgiven",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("span", {
    className: "ico-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-pinterest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))))))))))))), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: "copyright-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("p", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "\xA9 Copyright ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Behzad Shirani"), ". All Rights Reserved"), __jsx("div", {
    className: "credits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.8e589dc7404a22dd4cf6.hot-update.js.map