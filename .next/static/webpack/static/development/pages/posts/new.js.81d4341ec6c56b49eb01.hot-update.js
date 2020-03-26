webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout */ "./pages/components/MyLayout.tsx");



var _this = undefined,
    _jsxFileName = "C:\\testTask\\devToday\\test-devtoday\\pages\\posts\\new.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex; \n  align-items: center;\n  flex-direction: column;\n  & .form__label_input input {\n    width: 500px;\n    height: 40px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid grey;\n    outline: none;\n    margin 10px;\n  }\n  & .form__label_textarea textarea {\n    width: 500px;\n    height: 100px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid grey;\n    outline: none;\n    resize: none;\n  }\n  & .form__button {\n    width: 200px;\n    color: #fff;\n    background: #090a0b;\n    padding: 10px;\n    border-radius: 10px;\n    &:hover {\n      cursor: pointer;\n      opacity: 1,\n    }\n  }\n  & .\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2(_templateObject());
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form(_templateObject2());

var New = function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      body = _useState2[0],
      setBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var handleInputChange = function handleInputChange(event) {
    var value = event.target.value;
    setTitle(value);
  };

  var handleTextareaChange = function handleTextareaChange(event) {
    var value = event.target.value;
    setBody(value);
  };

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();

            if (!(title.trim() && body.trim())) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://simple-blog-api.crew.red/posts', {
              title: title,
              body: body
            }));

          case 4:
            setTitle('');
            setBody('');
            setError(false);
            _context.next = 10;
            break;

          case 9:
            setError(true);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(StyledH2, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "New post"), __jsx(StyledForm, {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "title-input",
    className: "form__label_input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("input", {
    autoComplete: "off",
    id: "title-input",
    className: "new-post",
    placeholder: "Enter title",
    onChange: handleInputChange,
    value: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  })), __jsx("label", {
    htmlFor: "body-texarea",
    className: "form__label_textarea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("textarea", {
    className: "new-post",
    placeholder: "Write your post",
    onChange: handleTextareaChange,
    value: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "form__error-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, error ? __jsx("p", {
    className: "error-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, "please fill in all fields") : __jsx("p", {
    className: "error-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 81
    }
  }, " ")), __jsx("button", {
    type: "submit",
    className: "form__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, "add")));
};

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ })

})
//# sourceMappingURL=new.js.81d4341ec6c56b49eb01.hot-update.js.map