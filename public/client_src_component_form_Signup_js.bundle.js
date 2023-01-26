"use strict";
(self["webpackChunkfull_stack_app"] = self["webpackChunkfull_stack_app"] || []).push([["client_src_component_form_Signup_js"],{

/***/ "./client/src/component/form/Signup.js":
/*!*********************************************!*\
  !*** ./client/src/component/form/Signup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _signup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.css */ "./client/src/component/form/signup.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utils_emailValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emailValidator */ "./client/src/component/utils/emailValidator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PasswordErrorMessage = function PasswordErrorMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "FieldError"
  }, "Password should have at least 8 characters");
};
function Signup() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    firstName = _useState2[0],
    setFirstName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    lastName = _useState4[0],
    setLastName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      value: "",
      isTouched: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("role"),
    _useState10 = _slicedToArray(_useState9, 2),
    role = _useState10[0],
    setRole = _useState10[1];
  var getIsFormValid = function getIsFormValid() {
    return firstName && (0,_utils_emailValidator__WEBPACK_IMPORTED_MODULE_2__.validateEmail)(email) && password.value.length >= 8 && role !== "role";
  };
  var clearForm = function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false
    });
    setRole("role");
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn btn-warning",
    type: "button",
    onClick: function onClick() {
      return navigate("/");
    }
  }, "back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("legend", null, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "Field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, "First name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("sup", null, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: firstName,
    onChange: function onChange(e) {
      setFirstName(e.target.value);
    },
    placeholder: "First name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "Field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: lastName,
    onChange: function onChange(e) {
      setLastName(e.target.value);
    },
    placeholder: "Last name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "Field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, "Email address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("sup", null, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: email,
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    placeholder: "Email address"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "Field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, "Password ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("sup", null, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    value: password.value,
    type: "password",
    onChange: function onChange(e) {
      setPassword(_objectSpread(_objectSpread({}, password), {}, {
        value: e.target.value
      }));
    },
    onBlur: function onBlur() {
      setPassword(_objectSpread(_objectSpread({}, password), {}, {
        isTouched: true
      }));
    },
    placeholder: "Password"
  }), password.isTouched && password.value.length < 8 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PasswordErrorMessage, null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "Field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, "Role ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("sup", null, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
    value: role,
    onChange: function onChange(e) {
      return setRole(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "role"
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "individual"
  }, "Individual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    value: "business"
  }, "Business"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    disabled: !getIsFormValid()
  }, "Create account"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "./client/src/component/utils/emailValidator.js":
/*!******************************************************!*\
  !*** ./client/src/component/utils/emailValidator.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateEmail": () => (/* binding */ validateEmail)
/* harmony export */ });
var validateEmail = function validateEmail(email) {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./client/src/component/form/signup.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./client/src/component/form/signup.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\n    display: flex;\n    flex: 1;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n}\n\nfieldset {\n    display: flex;\n    width: 480px;\n    padding: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    flex-direction: column;\n}\n\nlabel {\n    margin-bottom: 8px;\n    font-size: 14px;\n}\n\nsup {\n    color: red;\n    top: -2px;\n    font-size: 95%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\ninput,\nselect {\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    height: 32px;\n    padding: 0 8px;\n}\n\n.Field {\n    position: relative;\n    padding-bottom: 24px;\n    display: flex;\n    flex-direction: column;\n}\n\n.FieldError {\n    position: absolute;\n    bottom: -6px;\n    color: red;\n    font-size: 12px;\n}\n\n.Row {\n    display: flex;\n    flex-direction: row;\n}\n\nbutton {\n    padding: 12px;\n    width: 240px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    background-color: darkblue;\n    color: white;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\nbutton:disabled,\nbutton[disabled] {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n    cursor: not-allowed;\n}\n", "",{"version":3,"sources":["webpack://./client/src/component/form/signup.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;;IAEI,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,0BAA0B;IAC1B,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;AACvB","sourcesContent":[".App {\n    display: flex;\n    flex: 1;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n}\n\nfieldset {\n    display: flex;\n    width: 480px;\n    padding: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    flex-direction: column;\n}\n\nlabel {\n    margin-bottom: 8px;\n    font-size: 14px;\n}\n\nsup {\n    color: red;\n    top: -2px;\n    font-size: 95%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\ninput,\nselect {\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    height: 32px;\n    padding: 0 8px;\n}\n\n.Field {\n    position: relative;\n    padding-bottom: 24px;\n    display: flex;\n    flex-direction: column;\n}\n\n.FieldError {\n    position: absolute;\n    bottom: -6px;\n    color: red;\n    font-size: 12px;\n}\n\n.Row {\n    display: flex;\n    flex-direction: row;\n}\n\nbutton {\n    padding: 12px;\n    width: 240px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    background-color: darkblue;\n    color: white;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\nbutton:disabled,\nbutton[disabled] {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n    cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/src/component/form/signup.css":
/*!**********************************************!*\
  !*** ./client/src/component/form/signup.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./signup.css */ "./node_modules/css-loader/dist/cjs.js!./client/src/component/form/signup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=client_src_component_form_Signup_js.bundle.js.map