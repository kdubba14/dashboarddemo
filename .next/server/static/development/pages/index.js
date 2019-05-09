module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BeatBarChart.js":
/*!************************************!*\
  !*** ./components/BeatBarChart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);



var BeatBarChart = function BeatBarChart(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "barChart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"], {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: 'white',
          boxWidth: 0
        }
      },
      elements: {
        rectangle: {
          backgroundColor: 'rgba(255,0,255,0.2)',
          borderColor: 'rgba(200,0,200,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,0,255,0.4)',
          hoverBorderColor: 'rgba(200,0,200,1)'
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            beginAtZero: true,
            suggestedMax: 7,
            fontColor: 'white'
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            fontColor: 'white'
          }
        }]
      }
    },
    data: props.barData
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BeatBarChart);

/***/ }),

/***/ "./components/DashboardCharts.js":
/*!***************************************!*\
  !*** ./components/DashboardCharts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LicenseDoughnut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LicenseDoughnut */ "./components/LicenseDoughnut.js");
/* harmony import */ var _BeatBarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BeatBarChart */ "./components/BeatBarChart.js");
/* harmony import */ var _TimeChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeChart */ "./components/TimeChart.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);






var DashboardCharts = function DashboardCharts(props) {
  var goalProp = {
    labels: ["Until Goal", "Done"],
    datasets: [{
      data: [100 - props.goalPercent, props.goalPercent]
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-charts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otherCharts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LicenseDoughnut__WEBPACK_IMPORTED_MODULE_1__["default"], {
    doughnutData: props.doughnutData
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BeatBarChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    barData: props.barData
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    timeData: props.timeData
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "otherStats"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sales-stat stats"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sales"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.totalSales)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goal-stat stats"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "vs. Goal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.goalPercent, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "goal-chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Pie"], {
    options: {
      animation: {
        animateScale: true
      },
      layout: {
        padding: {
          top: 10
        }
      },
      legend: {
        display: false
      },
      elements: {
        arc: {
          backgroundColor: ["rgba(255,255,255,0.45)", "rgba(224,199,77,0.5)"]
        }
      },
      responsive: true,
      maintainAspectRatio: false
    },
    data: goalProp
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardCharts);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Help
// Terms & Conditions
// Cookie Policy
// Privacy Policy
// Contact Us
// Copyright @ 2019 Divici. All rights reserved
var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    style: {
      backgroundColor: "rgba(255, 0, 255, 0.2)",
      height: "50vh",
      width: "100%",
      color: "#ffffef",
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      listStyle: "none",
      padding: "5vh 0 0 0",
      margin: "auto 30%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/001-facebook-logo-button.svg"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/002-instagram-logo.svg"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/003-twitter-logo-button.svg"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      listStyle: "none",
      padding: "0",
      margin: "auto 20%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Terms & Conditions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Cookie Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      display: "inline-block"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Contact Us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: "auto",
      fontSize: ".8rem"
    }
  }, "No Copyright @ 2019 Dashboard Creator (Kyle Williams). All rights not reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FullDashboard.js":
/*!*************************************!*\
  !*** ./components/FullDashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RangeSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeSelectors */ "./components/RangeSelectors.js");
/* harmony import */ var _DashboardCharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardCharts */ "./components/DashboardCharts.js");






var FullDashboard = function FullDashboard(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("year"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      range = _useState2[0],
      rangeChange = _useState2[1];

  var rangeStyle = function rangeStyle(selected) {
    if (selected == range) {
      return "rangeSelected";
    } else {
      return "rangeUnselected";
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "full-dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashboardCharts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    goalPercent: props.goalPercent,
    totalSales: props.totalSales,
    timeData: props.timeData,
    barData: props.barData,
    doughnutData: props.doughnutData
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RangeSelectors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rangeChange: rangeChange,
    rangeStyle: rangeStyle,
    _yearRange: props._yearRange,
    _monthRange: props._monthRange,
    _weekRange: props._weekRange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FullDashboard);

/***/ }),

/***/ "./components/LicenseDoughnut.js":
/*!***************************************!*\
  !*** ./components/LicenseDoughnut.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);



var LicenseDoughnut = function LicenseDoughnut(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doughnutChart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    options: {
      animation: {
        animateScale: true
      },
      legend: {
        labels: {
          fontColor: 'white',
          boxWidth: 10
        },
        position: 'bottom'
      },
      layout: {
        padding: {
          top: 30
        }
      },
      elements: {
        arc: {
          backgroundColor: ["rgba(255,255,255,0.5)", "rgba(255,0,255,0.3)", "rgba(224,199,77,0.5)"]
        }
      },
      responsive: true,
      maintainAspectRatio: false
    },
    data: props.doughnutData
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LicenseDoughnut);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








var navStyle = {
  height: "8vh",
  width: "100%",

  /* position: "fixed", 
  top: "0", 
  left: "0", 
  right: "0", */
  backgroundColor: "rgba(0,0,0,0.95)",
  color: "rgb(255,255,235)",
  // zIndex: "9", 
  display: "block"
};
var navStyle2 = {
  height: "6vh",
  width: "100%",
  position: "relative",
  bottom: "26vh",
  transition: ".6s",

  /*position: "fixed", 
  top: "8vh", 
  left: "0", 
  right: "0", 
  backgroundColor: "rgba(0,0,0,0.6)", */
  color: "rgb(255,255,235)",
  zIndex: "-1"
};
var navStyle3 = {
  height: "6vh",
  width: "100%",
  position: "relative",
  bottom: "26vh",
  transition: ".5s",

  /*position: "fixed", 
  top: "8vh", 
  left: "0", 
  right: "0", 
  backgroundColor: "rgba(0,0,0,0.6)", */
  color: "rgb(255,255,235)",
  zIndex: "-1"
};
var navStyle4 = {
  height: "6vh",
  width: "100%",
  position: "relative",
  bottom: "26vh",
  transition: ".4s",

  /*position: "fixed", 
  top: "8vh", 
  left: "0", 
  right: "0", 
  backgroundColor: "rgba(0,0,0,0.6)", */
  color: "rgb(255,255,235)",
  zIndex: "-1"
};

var active = function active(navName, activeState) {
  if (navName === activeState) {
    return "active";
  }
};

var Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nav, _React$Component);

  function Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "accScroll", function () {
      if (_this.state.accountScroll) {
        return "scroll";
      } else {
        return "gone";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_accHoverOn", function () {
      _this.setState({
        accountScroll: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_accHoverOff", function () {
      _this.setState({
        accountScroll: false
      });
    });

    _this.state = {
      accountScroll: false,
      settingsScroll: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "navWhole",
        style: {
          width: "100vw",
          height: "8vh",
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          zIndex: "10"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "nav",
        style: navStyle
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        style: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          padding: "0 15%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          float: "left",
          height: "100%",
          display: "flex",
          width: "30%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          margin: "auto auto auto 0",
          verticalAlign: "center"
        }
      }, "DASHBOARD")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "navLinks",
        style: {
          float: "right",
          clear: "right",
          width: "70%",
          height: "100%",
          textAlign: "right"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        name: "dashboard",
        style: {
          margin: "auto 0 auto 5%",
          height: "100%",
          width: "15%",
          display: "inline-flex",
          boxSizing: "border-box"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: active("dashboard", this.props.active),
        href: "#",
        style: {
          height: "min-content",
          margin: "auto 0 auto auto"
        }
      }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onMouseEnter: this._accHoverOn,
        onMouseLeave: this._accHoverOff,
        name: "account",
        style: {
          margin: "auto 0 auto 5%",
          height: "100%",
          width: "15%",
          display: "inline-flex",
          boxSizing: "border-box"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: active("account", this.props.active),
        style: {
          height: "min-content",
          margin: "auto 0 auto auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#"
      }, "Account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        "aria-label": "Account Services",
        src: "../static/arrowDown.svg",
        style: {
          width: ".75em",
          marginTop: "7.5%"
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "anotha",
        style: {
          margin: "auto 0 auto 5%",
          height: "100%",
          width: "10%",
          display: "inline-flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        name: "media",
        style: {
          display: "flex",
          margin: "auto 0 auto auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: active("media", this.props.active),
        href: "#",
        style: {
          height: "min-content",
          margin: "auto 0 auto auto"
        }
      }, "Media"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        name: "settings",
        style: {
          margin: "auto 0 auto 5%",
          height: "100%",
          width: "15%",
          display: "inline-flex",
          boxSizing: "border-box"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: active("settings", this.props.active),
        href: "#",
        style: {
          height: "min-content",
          margin: "auto 0 auto auto"
        }
      }, "Settings"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.accScroll(),
        onMouseEnter: this._accHoverOn,
        onMouseLeave: this._accHoverOff,
        id: "dropdowns",
        style: {
          width: "12.25%",
          marginRight: "29.65%",
          marginLeft: "58.1%",
          height: "auto",
          position: "relative",
          bottom: "26vh",
          zIndex: "-1",
          transition: ".6s",
          backgroundColor: "rgba(56, 29, 73, 0.9)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-drop-options ".concat(this.accScroll()),
        style: navStyle2
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-drop-links",
        style: {
          float: "right",
          clear: "right",
          width: "100%",
          height: "100%",
          textAlign: "right",
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          margin: "auto"
        }
      }, "Your Site"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-drop-options ".concat(this.accScroll()),
        style: navStyle3
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-drop-links",
        style: {
          float: "right",
          clear: "right",
          width: "100%",
          height: "100%",
          textAlign: "right",
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        style: {
          margin: "auto"
        }
      }, "Payments"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-drop-options ".concat(this.accScroll()),
        style: navStyle4
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-drop-links",
        style: {
          float: "right",
          clear: "right",
          width: "100%",
          height: "100%",
          textAlign: "right",
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        style: {
          margin: "auto"
        }
      }, "Stats")))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/RangeSelectors.js":
/*!**************************************!*\
  !*** ./components/RangeSelectors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var RangeSelectors = function RangeSelectors(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "range-selector-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      props.rangeChange("year"), props._yearRange();
    },
    className: "timeRangeSelector ".concat(props.rangeStyle("year"))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Past Year")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      props.rangeChange("month"), props._monthRange();
    },
    className: "timeRangeSelector ".concat(props.rangeStyle("month"))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Past Month")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      props.rangeChange("week"), props._weekRange();
    },
    className: "timeRangeSelector ".concat(props.rangeStyle("week"))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Past Week")));
};

/* harmony default export */ __webpack_exports__["default"] = (RangeSelectors);

/***/ }),

/***/ "./components/TimeChart.js":
/*!*********************************!*\
  !*** ./components/TimeChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);



var TimeChart = function TimeChart(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timeChart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    style: {
      position: "relative",
      zIndex: "1"
    },
    options: {
      // tooltips: {
      // ADD TOOLTIPS CALLBACK TO SHOW PURCHASE AMOUNT
      // }, 
      layout: {
        padding: {
          left: 10,
          right: 20
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            fontColor: 'white',
            source: 'labels'
          },
          type: 'time',
          time: {
            parser: 'YYYY MM DD',
            unit: 'month',
            displayFormats: {
              month: 'MMM DD'
            }
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(40,40,40,1)'
          },
          ticks: {
            fontColor: 'white',
            beginAtZero: true,
            suggestedMax: 1000
          }
        }]
      },
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      elements: {
        point: {
          radius: 3,
          backgroundColor: "#a79545",
          borderColor: "#a79545"
        },
        line: {
          fill: false,
          backgroundColor: "#a79545",
          borderColor: "#a79545",
          tension: 0.1
        }
      },
      animation: {
        duration: 1500
      },
      maintainAspectRatio: false
    },
    data: props.timeData
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TimeChart);

/***/ }),

/***/ "./components/demoData.js":
/*!********************************!*\
  !*** ./components/demoData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DemoData = [{
  "orderId": "5ccb73fd1034ee5819d35ed1",
  "orderDate": "2019-02-06T07:39:39",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song6",
  "price": 10000
}, {
  "orderId": "5ccb73fd6616e9f3ebcb047b",
  "orderDate": "2017-10-10T05:59:35",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song4",
  "price": 10000
}, {
  "orderId": "5ccb73fd2463b3e87f14c27f",
  "orderDate": "2018-08-24T05:24:18",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song5",
  "price": 20000
}, {
  "orderId": "5ccb73fddeda0e85b418cdcc",
  "orderDate": "2018-01-03T09:49:18",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song5",
  "price": 10000
}, {
  "orderId": "5ccb73fd796ec65e2470999c",
  "orderDate": "2017-09-06T11:35:21",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 10000
}, {
  "orderId": "5ccb73fda7c073c2280793c6",
  "orderDate": "2017-10-10T06:24:46",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song5",
  "price": 20000
}, {
  "orderId": "5ccb73fdfaa710defceda871",
  "orderDate": "2018-08-12T08:41:29",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song6",
  "price": 20000
}, {
  "orderId": "5ccb73fdf54e4c3ef09e6ba9",
  "orderDate": "2018-04-15T08:06:11",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 20000
}, {
  "orderId": "5ccb73fd4cca3b9afdb73c31",
  "orderDate": "2019-01-23T02:45:54",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song4",
  "price": 10000
}, {
  "orderId": "5ccb73fd4c9289f22f4aeac4",
  "orderDate": "2017-11-02T10:56:01",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song7",
  "price": 5000
}, {
  "orderId": "5ccb73fd48acfd3de8384605",
  "orderDate": "2018-01-02T06:14:03",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fd3101ab48bdc7e461",
  "orderDate": "2019-04-05T03:44:41",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fdda73f3b9f1aab10c",
  "orderDate": "2017-08-04T08:10:52",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 10000
}, {
  "orderId": "5ccb73fd8f779a07c6253fee",
  "orderDate": "2017-02-13T10:34:33",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 20000
}, {
  "orderId": "5ccb73fd034bd17552f10e69",
  "orderDate": "2017-02-05T05:51:47",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song1",
  "price": 10000
}, {
  "orderId": "5ccb73fd65d109e84473a240",
  "orderDate": "2018-05-09T01:57:12",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 20000
}, {
  "orderId": "5ccb73fd099c77ed6dfd2459",
  "orderDate": "2018-04-13T05:24:30",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fdabee27168fe79260",
  "orderDate": "2018-06-01T08:28:26",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song6",
  "price": 10000
}, {
  "orderId": "5ccb73fd6f72cefed9c075d6",
  "orderDate": "2017-07-04T09:23:59",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fdca30927c2a5348c3",
  "orderDate": "2018-11-12T05:06:27",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song7",
  "price": 5000
}, {
  "orderId": "5ccb73fd0364057782846191",
  "orderDate": "2019-03-18T05:18:43",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song6",
  "price": 10000
}, {
  "orderId": "5ccb73fd2eca193a40fe6f87",
  "orderDate": "2017-11-29T09:12:09",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song7",
  "price": 20000
}, {
  "orderId": "5ccb73fd747431d12cb96a2e",
  "orderDate": "2017-11-28T04:17:15",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song5",
  "price": 10000
}, {
  "orderId": "5ccb73fdc652c55b6c4f0642",
  "orderDate": "2018-03-01T12:26:17",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fdff8c7378372f4443",
  "orderDate": "2019-02-08T05:27:03",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 5000
}, {
  "orderId": "5ccb73fdffc52246fc6cfab6",
  "orderDate": "2017-12-21T01:29:09",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song2",
  "price": 20000
}, {
  "orderId": "5ccb73fd15714944c7a449be",
  "orderDate": "2017-04-15T12:24:04",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fd9d688e27b8b2235a",
  "orderDate": "2019-04-16T07:57:56",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fd80e090b0014637b2",
  "orderDate": "2018-08-31T12:36:54",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 10000
}, {
  "orderId": "5ccb73fd466e16c1aeeca41b",
  "orderDate": "2018-08-15T02:04:11",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song6",
  "price": 20000
}, {
  "orderId": "5ccb73fd5d81989991e81b02",
  "orderDate": "2017-04-07T06:50:57",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fd1ff0d0cc51b16cab",
  "orderDate": "2017-02-24T04:33:06",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fd19b3bbe108542206",
  "orderDate": "2017-05-11T01:04:22",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song4",
  "price": 5000
}, {
  "orderId": "5ccb73fdd249ea1ff47342f9",
  "orderDate": "2018-10-25T05:02:29",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song7",
  "price": 20000
}, {
  "orderId": "5ccb73fdc4395c2bf2280b58",
  "orderDate": "2018-08-18T07:06:03",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 20000
}, {
  "orderId": "5ccb73fd65a15a031fe05bbf",
  "orderDate": "2017-12-02T01:32:35",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 20000
}, {
  "orderId": "5ccb73fddea53950ed2bf8a0",
  "orderDate": "2018-05-18T08:48:10",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song4",
  "price": 10000
}, {
  "orderId": "5ccb73fddda93b54f5874d0b",
  "orderDate": "2017-12-07T08:45:41",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 10000
}, {
  "orderId": "5ccb73fd90e8efa3486950d9",
  "orderDate": "2018-12-05T12:08:38",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song6",
  "price": 10000
}, {
  "orderId": "5ccb73fd4f87876ece37f0fe",
  "orderDate": "2017-08-30T08:03:48",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fde1092690a0fe645b",
  "orderDate": "2018-04-03T08:12:57",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song6",
  "price": 5000
}, {
  "orderId": "5ccb73fd14e57d65591ddabc",
  "orderDate": "2018-11-16T11:26:22",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song6",
  "price": 5000
}, {
  "orderId": "5ccb73fd8e3bcbf686588c8a",
  "orderDate": "2017-06-20T01:20:13",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song7",
  "price": 5000
}, {
  "orderId": "5ccb73fd5c135d345071ac67",
  "orderDate": "2018-08-25T02:59:54",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song7",
  "price": 10000
}, {
  "orderId": "5ccb73fd0e3dfa56ceb5727a",
  "orderDate": "2018-01-31T08:47:17",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song1",
  "price": 5000
}, {
  "orderId": "5ccb73fd91f2091a7c0bbe97",
  "orderDate": "2019-01-06T10:53:17",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 20000
}, {
  "orderId": "5ccb73fdc484eeaa2244afe8",
  "orderDate": "2018-01-29T09:38:08",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fda2e9752d97081fd3",
  "orderDate": "2019-03-03T04:23:04",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song7",
  "price": 20000
}, {
  "orderId": "5ccb73fd20742d7704e04b06",
  "orderDate": "2018-11-29T07:23:26",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fd27b7cc726a4d53de",
  "orderDate": "2017-10-28T08:19:02",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song7",
  "price": 10000
}, {
  "orderId": "5ccb73fde699edaef65f648d",
  "orderDate": "2018-08-14T06:29:46",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song1",
  "price": 10000
}, {
  "orderId": "5ccb73fd9c57166d2fbed8f6",
  "orderDate": "2017-05-08T02:21:45",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song2",
  "price": 5000
}, {
  "orderId": "5ccb73fd923f25e3fde7ed43",
  "orderDate": "2018-09-22T08:03:37",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fd55db38cce0ef0e45",
  "orderDate": "2017-09-26T03:26:50",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song2",
  "price": 20000
}, {
  "orderId": "5ccb73fda0466e72979c1d36",
  "orderDate": "2019-01-09T12:11:49",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fd2ca8437ab7a702f6",
  "orderDate": "2017-02-10T02:26:04",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fd152ee89d2fde49c8",
  "orderDate": "2017-09-24T12:13:29",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 5000
}, {
  "orderId": "5ccb73fda750302d41d62d08",
  "orderDate": "2019-02-08T05:51:55",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 20000
}, {
  "orderId": "5ccb73fdb8694cd49a2a734f",
  "orderDate": "2017-11-12T08:19:13",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song6",
  "price": 5000
}, {
  "orderId": "5ccb73fde03f7c13a77f5714",
  "orderDate": "2018-08-29T11:24:07",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song1",
  "price": 10000
}, {
  "orderId": "5ccb73fd5b7a9aff5a0eae24",
  "orderDate": "2019-01-10T05:34:31",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fd3f1ba0bb37ddfafd",
  "orderDate": "2017-10-30T12:29:31",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 20000
}, {
  "orderId": "5ccb73fd28763adc9c0cda80",
  "orderDate": "2018-12-10T04:41:32",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song1",
  "price": 10000
}, {
  "orderId": "5ccb73fd6905dce82d85facd",
  "orderDate": "2017-06-20T11:32:04",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song7",
  "price": 20000
}, {
  "orderId": "5ccb73fddf3adc87975207c5",
  "orderDate": "2018-07-20T10:09:00",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 20000
}, {
  "orderId": "5ccb73fd89f37ee6967ed5ab",
  "orderDate": "2017-06-08T05:20:19",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song7",
  "price": 10000
}, {
  "orderId": "5ccb73fd2a691b1b2af97668",
  "orderDate": "2018-05-19T09:57:09",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}, {
  "orderId": "5ccb73fdc4a9b2446c6275f2",
  "orderDate": "2017-11-15T12:05:49",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 5000
}, {
  "orderId": "5ccb73fdd98b6cf8bf578b0b",
  "orderDate": "2018-06-09T01:41:03",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fd41845eb4d635871e",
  "orderDate": "2017-11-06T03:02:42",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song6",
  "price": 20000
}, {
  "orderId": "5ccb73fdf8471d9f6385d3af",
  "orderDate": "2017-11-26T12:30:33",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song7",
  "price": 10000
}, {
  "orderId": "5ccb73fdb1a2793541f9aed6",
  "orderDate": "2018-06-05T09:01:17",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song2",
  "price": 5000
}, {
  "orderId": "5ccb73fdfea69b22c09aee12",
  "orderDate": "2017-12-03T09:14:41",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song7",
  "price": 10000
}, {
  "orderId": "5ccb73fd561f1a803017debf",
  "orderDate": "2018-09-06T03:35:43",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song4",
  "price": 10000
}, {
  "orderId": "5ccb73fddfcba4f8976a88ac",
  "orderDate": "2019-01-02T10:49:58",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 5000
}, {
  "orderId": "5ccb73fd78b0bafec86dfc64",
  "orderDate": "2017-07-21T11:44:28",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song1",
  "price": 5000
}, {
  "orderId": "5ccb73fda18b7ac15262975e",
  "orderDate": "2018-08-25T10:21:30",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song1",
  "price": 20000
}, {
  "orderId": "5ccb73fdcfa894f8e7f9946a",
  "orderDate": "2017-08-04T12:14:34",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song7",
  "price": 5000
}, {
  "orderId": "5ccb73fd3c238f6a6e2f17ad",
  "orderDate": "2017-05-13T06:59:25",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song6",
  "price": 5000
}, {
  "orderId": "5ccb73fd279f9ab3641fbb54",
  "orderDate": "2019-02-10T09:09:55",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song6",
  "price": 5000
}, {
  "orderId": "5ccb73fd9bcf711d464dcbee",
  "orderDate": "2018-11-01T01:10:09",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 10000
}, {
  "orderId": "5ccb73fdbbab6d35e7ec5aed",
  "orderDate": "2018-05-25T02:23:34",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song1",
  "price": 10000
}, {
  "orderId": "5ccb73fd6085f6e5f1c1cf56",
  "orderDate": "2018-10-06T07:25:14",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song4",
  "price": 20000
}, {
  "orderId": "5ccb73fd1a029b62ecf3479a",
  "orderDate": "2017-08-07T11:17:00",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song7",
  "price": 5000
}, {
  "orderId": "5ccb73fd54269cf030a43438",
  "orderDate": "2018-03-07T07:30:37",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song7",
  "price": 10000
}, {
  "orderId": "5ccb73fd38c560ff896b1495",
  "orderDate": "2019-04-10T06:46:17",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song3",
  "price": 10000
}, {
  "orderId": "5ccb73fdcfe6f55e0c3023b6",
  "orderDate": "2019-04-18T04:20:18",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song6",
  "price": 20000
}, {
  "orderId": "5ccb73fd4622b003abf6654c",
  "orderDate": "2018-01-22T07:53:53",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fd767f422f9bee4608",
  "orderDate": "2017-09-14T01:04:32",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 5000
}, {
  "orderId": "5ccb73fde5767ff978d0d817",
  "orderDate": "2017-08-28T11:58:29",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song3",
  "price": 10000
}, {
  "orderId": "5ccb73fde981f2b61cc370b1",
  "orderDate": "2019-02-02T12:13:33",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song1",
  "price": 5000
}, {
  "orderId": "5ccb73fdc4f930977fc5582f",
  "orderDate": "2018-06-17T01:49:57",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song5",
  "price": 10000
}, {
  "orderId": "5ccb73fde344ade06bbceddd",
  "orderDate": "2017-07-22T03:12:31",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song7",
  "price": 20000
}, {
  "orderId": "5ccb73fd73346a34933a757d",
  "orderDate": "2017-11-18T08:53:03",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fd767f4328b8cb7634",
  "orderDate": "2019-02-21T06:52:19",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song2",
  "price": 10000
}, {
  "orderId": "5ccb73fdbc315d425bad776f",
  "orderDate": "2018-10-27T12:19:50",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song4",
  "price": 10000
}, {
  "orderId": "5ccb73fdc3a79d679740f655",
  "orderDate": "2017-05-27T08:13:16",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song5",
  "price": 10000
}, {
  "orderId": "5ccb73fd6c30e9222f17148f",
  "orderDate": "2018-04-18T01:30:29",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song1",
  "price": 10000
}, {
  "orderId": "5ccb73fde85f810237339025",
  "orderDate": "2018-06-17T01:33:30",
  "license": "exclusive",
  "artType": "audio",
  "artTitle": "song1",
  "price": 20000
}, {
  "orderId": "5ccb73fd1d1e95e322769de2",
  "orderDate": "2018-11-19T03:35:53",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song6",
  "price": 20000
}, {
  "orderId": "5ccb73fd1r7y95e322769de2",
  "orderDate": "2018-07-01T03:35:53",
  "license": "unlimited wav",
  "artType": "audio",
  "artTitle": "song6",
  "price": 10000
}, {
  "orderId": "5ccb73dj3d1e95e322769de2",
  "orderDate": "2018-07-01T03:40:53",
  "license": "unlimited trackout",
  "artType": "audio",
  "artTitle": "song5",
  "price": 5000
}];
/* harmony default export */ __webpack_exports__["default"] = (DemoData);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_DashboardCharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/DashboardCharts */ "./components/DashboardCharts.js");
/* harmony import */ var _components_FullDashboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/FullDashboard */ "./components/FullDashboard.js");
/* harmony import */ var _components_demoData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/demoData */ "./components/demoData.js");
















/**
 *  
 * 
 *        Fix same day sales to accumulate
 *        Example on: July 01 2018 on Past Year
 * 
 *        Fix 'vs. Goal' - if not set it should say so
 *        Plus should have button to set their Y/M/W goal
 *        Should create alert/warning on login to set goal
 * 
 *        Fix the callback on point tooltips (on line graph)
 *        to show purchase price & date rather than default
 * 
 * 
 */

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      active: "dashboard",
      goalPercent: 0,
      timeRange: "year",
      totalSales: "$0",
      today: {
        dd: null,
        mm: null,
        yyyy: null,
        date: null
      },
      timeData: {
        labels: [],
        datasets: [{
          label: "Song Sales - Past Year",
          data: []
        }]
      },
      doughnutData: {
        labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"],
        datasets: [{
          data: [0, 0, 0]
        }]
      },
      barData: {
        labels: ['Empty Slot', 'Empty Slot', 'Empty Slot', 'Empty Slot', 'Empty Slot'],
        datasets: [{
          label: 'Top Performing Songs',
          data: [0, 0, 0, 0, 0]
        }]
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_yearRange", function () {
      // temporary
      _this.setState({
        goalPercent: 17
      }); // xxxxxxxxxxxx


      var _this$state$today = _this.state.today,
          dd = _this$state$today.dd,
          mm = _this$state$today.mm,
          yyyy = _this$state$today.yyyy;
      var stateDate = _this.state.today.date;
      var sortedData = _components_demoData__WEBPACK_IMPORTED_MODULE_15__["default"].sort(function (a, b) {
        return a.orderDate.localeCompare(b.orderDate);
      });
      var addSale = 0;
      var year = yyyy;
      var wav = 0;
      var trackout = 0;
      var exclusive = 0;
      var pastYearSongs = [];
      var fauxLabels = [];
      var fauxData = [];
      fauxLabels.push("".concat(Number(year) - 1, "-").concat(mm, "-").concat(dd));

      for (var i = 0; i < 13; i++) {
        var month = (Number(mm) + i) % 12;

        if (month == 0) {
          fauxLabels.push("".concat(Number(year) - 1, "-12-").concat(dd));
          year = String(Number(year) + 1);
        }

        if (month == 11) {
          fauxLabels.push("".concat(Number(year) - 1, "-11-").concat(dd));
        }

        if (month == 10) {
          fauxLabels.push("".concat(Number(year) - 1, "-10-").concat(dd));
        } else if (month < 10 && month !== 0) {
          fauxLabels.push("".concat(Number(year) - 1, "-0").concat(month, "-").concat(dd));
        }
      }

      sortedData.map(function (purchase, i) {
        var date = purchase.orderDate.slice(0, 10);
        var MMDD = date.slice(4, date.length);
        var YYYY = date.slice(0, 4);
        YYYY = String(Number(YYYY) + 1);
        var pastYear = YYYY + MMDD;

        if (i == 0) {
          fauxData.push({
            x: "".concat(Number(yyyy) - 1, "-").concat(mm, "-").concat(dd),
            y: 0
          });
        }

        if (_this.state.today.date.localeCompare(pastYear) < 1) {
          pastYearSongs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pastYearSongs), [purchase]);
          fauxData.push({
            x: date,
            y: purchase.price / 100 + addSale
          });
          addSale += purchase.price / 100;

          if (purchase.license === "unlimited wav") {
            wav += 1;
          }

          if (purchase.license === "unlimited trackout") {
            trackout += 1;
          }

          if (purchase.license === "exclusive") {
            exclusive += 1;
          }
        }
      });
      addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ^^^ Adds thousands comma seperator ^^^

      addSale = "$".concat(addSale);
      var tally = pastYearSongs.reduce(function (a, c) {
        a[c.artTitle] = (a[c.artTitle] || 0) + 1;
        return a;
      }, {});
      var songs = pastYearSongs.reduce(function (list, item) {
        if (list.indexOf(item.artTitle) == -1) {
          list.push(item.artTitle);
        }

        return list;
      }, []);
      var top5Amounts = Array(5).fill(0);
      var top5Names = Array(5).fill('Empty Slot');

      for (var k = 0; k < songs.length; k++) {
        var lowest = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(top5Amounts));

        if (tally[songs[k]] > lowest) {
          var spot = top5Amounts.indexOf(lowest);
          top5Amounts.splice(spot, 1, tally[songs[k]]);
          top5Names.splice(spot, 1, songs[k]);
        }
      }

      _this.setState({
        totalSales: addSale
      });

      _this.setState({
        barData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.barData, {
          labels: top5Names,
          datasets: [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.barData.datasets, {
            label: "Top Performing Songs",
            data: top5Amounts
          })]
        })
      });

      _this.setState({
        timeData: {
          labels: fauxLabels,
          datasets: [{
            label: "Song Sales - Past Year",
            data: fauxData
          }]
        }
      });

      if (wav == 0 && trackout == 0 && exclusive == 0) {
        _this.setState({
          doughnutData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.doughnutData, {
            labels: ["No Licenses Sold"],
            datasets: [{
              data: [1]
            }]
          })
        });
      } else {
        _this.setState({
          doughnutData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.doughnutData, {
            labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"],
            datasets: [{
              data: [wav, trackout, exclusive]
            }]
          })
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_monthRange", function () {
      // temporary
      _this.setState({
        goalPercent: 32
      }); // xxxxxxxxxxxx


      var _this$state$today2 = _this.state.today,
          dd = _this$state$today2.dd,
          mm = _this$state$today2.mm,
          yyyy = _this$state$today2.yyyy,
          date = _this$state$today2.date;
      var sortedData = _components_demoData__WEBPACK_IMPORTED_MODULE_15__["default"].sort(function (a, b) {
        return a.orderDate.localeCompare(b.orderDate);
      });
      var addSale = 0;
      var year = yyyy;
      var month = mm;
      var fauxLabels = [];
      var lastMonth = new Date().getMonth();

      if (lastMonth < 10) {
        if (lastMonth == 0) {
          lastMonth === '12';
        } else {
          lastMonth === '0' + String(lastMonth);
        }
      } else {
        lastMonth === String(lastMonth);
      }

      lastMonth = new Date(yyyy + '-' + lastMonth + '-' + dd);
      var today = new Date(yyyy + '-' + (new Date().getMonth() + 1) + '-' + dd);
      var ONE_DAY_TIMESTAMP = 86400000;
      var daysCounted = 0;

      while (lastMonth.getTime() + daysCounted * ONE_DAY_TIMESTAMP < today.getTime() + 1) {
        var onDay = lastMonth.getTime() + daysCounted * ONE_DAY_TIMESTAMP;
        onDay = new Date(onDay);
        var yr = String(onDay.getFullYear());
        var mnth = String(onDay.getMonth() + 1);
        var dt = String(onDay.getDate());

        if (Number(mnth) < 10) {
          mnth = '0' + mnth;
        }

        if (Number(dt) < 10) {
          dt = '0' + dt;
        }

        fauxLabels.push(yr + '-' + mnth + '-' + dt);
        daysCounted += 1;
      }

      var pastMonthSongs = [];
      var fauxData = [];
      var wav = 0;
      var trackout = 0;
      var exclusive = 0;
      sortedData.map(function (purchase, i) {
        var date = purchase.orderDate.slice(0, 10);
        var MM = String(Number(date.slice(5, 7)) + 1);
        var DD = date.slice(7, date.length);
        var YYYY = date.slice(0, 5);

        if (Number(MM) < 10) {
          MM = '0' + MM;
        }

        var pastMonthCheck = YYYY + MM + DD;
        var prevMonth;

        if (Number(mm) < 10) {
          prevMonth = yyyy + '-0' + String(Number(mm) - 1) + dd;
        } else if (Number(mm) == 10) {
          prevMonth = yyyy + '-09-' + dd;
        } else {
          prevMonth = yyyy + '-' + String(Number(mm) - 1) + dd;
        }

        if (i == 0) {
          fauxData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fauxData), [{
            'x': prevMonth,
            'y': 0
          }]);
        }

        if (_this.state.today.date.localeCompare(pastMonthCheck) < 1) {
          pastMonthSongs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pastMonthSongs), [purchase]);
          var tempObj = {
            'x': date,
            'y': purchase.price / 100 + addSale
          };
          fauxData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fauxData), [tempObj]);
          addSale += purchase.price / 100;

          if (purchase.license === "unlimited wav") {
            wav += 1;
          }

          if (purchase.license === "unlimited trackout") {
            trackout += 1;
          }

          if (purchase.license === "exclusive") {
            exclusive += 1;
          }
        }
      });
      fauxData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fauxData), [{
        x: _this.state.today.date,
        y: addSale
      }]);

      _this.setState({
        timeData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.timeData, {
          labels: fauxLabels,
          datasets: [{
            label: "Song Sales - Past Month",
            data: fauxData
          }]
        })
      });

      if (wav == 0 && trackout == 0 && exclusive == 0) {
        _this.setState({
          doughnutData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.doughnutData, {
            labels: ["No Licenses Sold"],
            datasets: [{
              data: [1]
            }]
          })
        });
      } else {
        _this.setState({
          doughnutData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.doughnutData, {
            labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"],
            datasets: [{
              data: [wav, trackout, exclusive]
            }]
          })
        });
      }

      addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ^^^ Adds thousands comma seperator ^^^

      _this.setState({
        totalSales: "$".concat(addSale)
      });

      var tally = pastMonthSongs.reduce(function (a, c) {
        a[c.artTitle] = (a[c.artTitle] || 0) + 1;
        return a;
      }, {});
      var songs = pastMonthSongs.reduce(function (list, item) {
        if (list.indexOf(item.artTitle) == -1) {
          list.push(item.artTitle);
        }

        return list;
      }, []);
      var top5Amounts = Array(5).fill(0);
      var top5Names = Array(5).fill('Empty Slot');

      for (var k = 0; k < songs.length; k++) {
        var lowest = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(top5Amounts));

        if (tally[songs[k]] > lowest) {
          var spot = top5Amounts.indexOf(lowest);
          top5Amounts.splice(spot, 1, tally[songs[k]]);
          top5Names.splice(spot, 1, songs[k]);
        }
      }

      _this.setState({
        barData: {
          labels: top5Names,
          datasets: [{
            label: "Top Performing Songs",
            data: top5Amounts
          }]
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_weekRange", function () {
      // temporary
      _this.setState({
        goalPercent: 0
      }); // xxxxxxxxxxxx


      var _this$state$today3 = _this.state.today,
          dd = _this$state$today3.dd,
          mm = _this$state$today3.mm,
          yyyy = _this$state$today3.yyyy;
      var stateDate = _this.state.today.date;
      var sortedData = _components_demoData__WEBPACK_IMPORTED_MODULE_15__["default"].sort(function (a, b) {
        return a.orderDate.localeCompare(b.orderDate);
      });
      var addSale = 0;
      var year = yyyy;
      var month = mm;
      var fauxLabels = [];
      var today = new Date(yyyy + '-' + (new Date().getMonth() + 1) + '-' + dd);
      var ONE_DAY_TIMESTAMP = 86400000;

      for (var i = 6; i > -1; i--) {
        var onDay = today.getTime() - i * ONE_DAY_TIMESTAMP;
        onDay = new Date(onDay);
        var yr = String(onDay.getFullYear());
        var mnth = String(onDay.getMonth() + 1);
        var dt = String(onDay.getDate());

        if (Number(mnth) < 10) {
          mnth = '0' + mnth;
        }

        if (Number(dt) < 10) {
          dt = '0' + dt;
        }

        fauxLabels.push(yr + '-' + mnth + '-' + dt);
      }

      var pastWeekSongs = [];
      var fauxData = [];
      var wav = 0;
      var trackout = 0;
      var exclusive = 0;
      sortedData.map(function (purchase, i) {
        var date = purchase.orderDate.slice(0, 10);
        var MM = date.slice(5, 7);
        var DD = date.slice(8, date.length);
        var YYYY = date.slice(0, 4);
        var pastWeekCheck = new Date(stateDate).getTime();
        var prevWeek = new Date(date).getTime() + ONE_DAY_TIMESTAMP * 6;

        if (i == 0) {
          fauxData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fauxData), [{
            x: new Date(pastWeekCheck - 6 * ONE_DAY_TIMESTAMP),
            y: 0
          }]);
        }

        if (pastWeekCheck - 1 < prevWeek) {
          pastWeekSongs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pastWeekSongs), [purchase]);
          var tempObj = {
            'x': date,
            'y': purchase.price / 100 + addSale
          };
          fauxData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fauxData), [tempObj]);
          addSale += purchase.price / 100;

          if (purchase.license === "unlimited wav") {
            wav += 1;
          }

          if (purchase.license === "unlimited trackout") {
            trackout += 1;
          }

          if (purchase.license === "exclusive") {
            exclusive += 1;
          }
        }
      });
      fauxData = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fauxData), [{
        x: _this.state.today.date,
        y: addSale
      }]);

      _this.setState({
        timeData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.timeData, {
          labels: fauxLabels,
          datasets: [{
            label: "Song Sales - Past Week",
            data: fauxData
          }]
        })
      });

      if (wav == 0 && trackout == 0 && exclusive == 0) {
        _this.setState({
          doughnutData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.doughnutData, {
            labels: ["No Licenses Sold"],
            datasets: [{
              data: [1]
            }]
          })
        });
      } else {
        _this.setState({
          doughnutData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.doughnutData, {
            labels: ["Unlimited Wav", "Unlimited Trackout", "Exclusive"],
            datasets: [{
              data: [wav, trackout, exclusive]
            }]
          })
        });
      }

      addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ^^^ Adds thousands comma seperator ^^^

      _this.setState({
        totalSales: "$".concat(addSale)
      });

      var tally = pastWeekSongs.reduce(function (a, c) {
        a[c.artTitle] = (a[c.artTitle] || 0) + 1;
        return a;
      }, {});
      var songs = pastWeekSongs.reduce(function (list, item) {
        if (list.indexOf(item.artTitle) == -1) {
          list.push(item.artTitle);
        }

        return list;
      }, []);
      var top5Amounts = Array(5).fill(0);
      var top5Names = Array(5).fill('Empty Slot');

      for (var k = 0; k < songs.length; k++) {
        var lowest = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(top5Amounts));

        if (tally[songs[k]] > lowest) {
          var spot = top5Amounts.indexOf(lowest);
          top5Amounts.splice(spot, 1, tally[songs[k]]);
          top5Names.splice(spot, 1, songs[k]);
        }
      }

      _this.setState({
        barData: {
          labels: top5Names,
          datasets: [{
            label: "Top Performing Songs",
            data: top5Amounts
          }]
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // temporary
      this.state.goalPercent = 17; // xxxxxxxxxxxx

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!

      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      this.state.today.dd = dd;
      this.state.today.mm = mm;
      this.state.today.yyyy = yyyy;
      this.state.today.date = yyyy + '-' + mm + '-' + dd;
      var sortedData = _components_demoData__WEBPACK_IMPORTED_MODULE_15__["default"].sort(function (a, b) {
        return a.orderDate.localeCompare(b.orderDate);
      });
      var addSale = 0;
      var pastYearSongs = [];
      var year = yyyy;

      for (var i = 0; i < 13; i++) {
        var month = (Number(mm) + i) % 12;

        if (month == 0) {
          this.state.timeData.labels.push("".concat(Number(year) - 1, "-12-").concat(dd));
          year = String(Number(year) + 1);
        }

        if (month == 11) {
          this.state.timeData.labels.push("".concat(Number(year) - 1, "-11-").concat(dd));
        }

        if (month == 10) {
          this.state.timeData.labels.push("".concat(Number(year) - 1, "-10-").concat(dd));
        } else if (month < 10 && month !== 0) {
          this.state.timeData.labels.push("".concat(Number(year) - 1, "-0").concat(month, "-").concat(dd));
        }
      }

      sortedData.map(function (purchase, i) {
        var date = purchase.orderDate.slice(0, 10);
        var MMDD = date.slice(4, date.length);
        var YYYY = date.slice(0, 4);
        YYYY = String(Number(YYYY) + 1);
        var pastYear = YYYY + MMDD;

        var dataset = function dataset(year) {
          return _this2.state.timeData.datasets[year].data;
        };

        if (i == 0) {
          dataset(0).push({
            x: "".concat(Number(yyyy) - 1, "-").concat(mm, "-").concat(dd),
            y: 0
          });
        }

        if (_this2.state.today.date.localeCompare(pastYear) < 1) {
          pastYearSongs = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(pastYearSongs), [purchase]);
          dataset(0).push({
            x: date,
            y: purchase.price / 100 + addSale
          });
          addSale += purchase.price / 100;

          if (purchase.license === "unlimited wav") {
            _this2.state.doughnutData.datasets[0].data[0] += 1;
          }

          if (purchase.license === "unlimited trackout") {
            _this2.state.doughnutData.datasets[0].data[1] += 1;
          }

          if (purchase.license === "exclusive") {
            _this2.state.doughnutData.datasets[0].data[2] += 1;
          }
        }
      });
      addSale = String(addSale).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ^^^ Adds thousands comma seperator ^^^

      this.state.totalSales = "$".concat(addSale);
      var tally = pastYearSongs.reduce(function (a, c) {
        a[c.artTitle] = (a[c.artTitle] || 0) + 1;
        return a;
      }, {});
      var songs = pastYearSongs.reduce(function (list, item) {
        if (list.indexOf(item.artTitle) == -1) {
          list.push(item.artTitle);
        }

        return list;
      }, []);
      var top5Amounts = Array(5).fill(0);
      var top5Names = Array(5).fill('Empty Slot');

      for (var k = 0; k < songs.length; k++) {
        var lowest = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(top5Amounts));

        if (tally[songs[k]] > lowest) {
          var spot = top5Amounts.indexOf(lowest);
          top5Amounts.splice(spot, 1, tally[songs[k]]);
          top5Names.splice(spot, 1, songs[k]);
        }
      }

      this.state.barData.datasets[0].data = top5Amounts;
      this.state.barData.labels = top5Names;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", null, "Divici Services"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "stylesheet",
        href: "../static/dashboard.css"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "hero"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        active: this.state.active
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "under-nav",
        style: {
          height: "8vh",
          width: "100vh"
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FullDashboard__WEBPACK_IMPORTED_MODULE_14__["default"], {
        _yearRange: this._yearRange,
        _monthRange: this._monthRange,
        _weekRange: this._weekRange,
        totalSales: this.state.totalSales,
        goalPercent: this.state.goalPercent,
        timeData: this.state.timeData,
        barData: this.state.barData,
        doughnutData: this.state.doughnutData
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dubba/Code/dashboardDemo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map