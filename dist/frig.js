(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Frig"] = factory(require("react"), require("react-dom"));
	else
		root["Frig"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _componentsFormJs = __webpack_require__(1);

	var _componentsFormJs2 = _interopRequireDefault(_componentsFormJs);

	var _componentsInputJs = __webpack_require__(7);

	var _componentsInputJs2 = _interopRequireDefault(_componentsInputJs);

	var _componentsUnbound_inputJs = __webpack_require__(8);

	var _componentsUnbound_inputJs2 = _interopRequireDefault(_componentsUnbound_inputJs);

	var _componentsSubmitJs = __webpack_require__(12);

	var _componentsSubmitJs2 = _interopRequireDefault(_componentsSubmitJs);

	var _componentsForm_error_listJs = __webpack_require__(13);

	var _componentsForm_error_listJs2 = _interopRequireDefault(_componentsForm_error_listJs);

	var _componentsFieldsetJs = __webpack_require__(14);

	var _componentsFieldsetJs2 = _interopRequireDefault(_componentsFieldsetJs);

	var _componentsFieldset_textJs = __webpack_require__(16);

	var _componentsFieldset_textJs2 = _interopRequireDefault(_componentsFieldset_textJs);

	var _componentsValue_linked_selectJs = __webpack_require__(17);

	var _componentsValue_linked_selectJs2 = _interopRequireDefault(_componentsValue_linked_selectJs);

	var _utilJs = __webpack_require__(10);

	var _utilJs2 = _interopRequireDefault(_utilJs);

	var _type_mappingJs = __webpack_require__(11);

	var _type_mappingJs2 = _interopRequireDefault(_type_mappingJs);

	var _factoriesJs = __webpack_require__(19);

	var factories = _interopRequireWildcard(_factoriesJs);

	var HigherOrderComponents = {
	  Boolean: __webpack_require__(20),
	  Focusable: __webpack_require__(21)
	};

	// Setter and getter for the Frig default theme
	function defaultTheme(theme) {
	  if (theme === null) return _componentsFormJs2["default"].defaultProps.theme;
	  if (typeof theme !== "object") throw "Invalid theme. Expected an object";
	  _componentsFormJs2["default"].originalClass.defaultProps.theme = theme;
	  _componentsUnbound_inputJs2["default"].originalClass.defaultProps.theme = theme;
	}

	exports["default"] = {
	  defaultTheme: defaultTheme,
	  Form: _componentsFormJs2["default"],
	  Input: _componentsInputJs2["default"],
	  UnboundInput: _componentsUnbound_inputJs2["default"],
	  Submit: _componentsSubmitJs2["default"],
	  FormErrorList: _componentsForm_error_listJs2["default"],
	  Fieldset: _componentsFieldsetJs2["default"],
	  FieldsetText: _componentsFieldset_textJs2["default"],
	  ValueLinkedSelect: _componentsValue_linked_selectJs2["default"],
	  HigherOrderComponents: HigherOrderComponents,
	  util: _utilJs2["default"],
	  typeMapping: _type_mappingJs2["default"],
	  factories: factories
	};
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _higher_order_componentsErrors_normalizerJs = __webpack_require__(3);

	var _higher_order_componentsErrors_normalizerJs2 = _interopRequireDefault(_higher_order_componentsErrors_normalizerJs);

	var _abstract_formJs = __webpack_require__(6);

	var _abstract_formJs2 = _interopRequireDefault(_abstract_formJs);

	/*
	 * A JSX-compatible React DOM Component.
	 * Form should be used as the top level component above any other frig
	 * components.
	 */

	var Form = (function (_AbstractForm) {
	  _inherits(Form, _AbstractForm);

	  function Form() {
	    _classCallCheck(this, _Form);

	    _get(Object.getPrototypeOf(_Form.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Form";
	  }

	  _createClass(Form, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      if (!this.props.data) {
	        throw new Error("Frig: Expression in <Form data={} /> must always be defined, got: " + this.props.data);
	      }
	      if (!this.props.onChange) {
	        throw new Error("Frig: Expression in <Form onChange={} /> must always be defined, got: " + this.props.onChange);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var ThemedForm = this.props.theme.Form;
	      return _react2["default"].createElement(
	        ThemedForm,
	        _extends({}, this._themedFormProps(), {
	          ref: "form"
	        }),
	        this.props.children
	      );
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      data: _react2["default"].PropTypes.object.isRequired,
	      onChange: _react2["default"].PropTypes.func.isRequired,
	      errors: _react2["default"].PropTypes.object.isRequired,
	      saved: _react2["default"].PropTypes.object.isRequired,
	      theme: _react2["default"].PropTypes.object.isRequired,
	      typeMapping: _react2["default"].PropTypes.objectOf(_react2["default"].PropTypes.string),
	      layout: _react2["default"].PropTypes.string.isRequired,
	      align: _react2["default"].PropTypes.string.isRequired,
	      // Callbacks
	      onSubmit: _react2["default"].PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      errors: [],
	      saved: {},
	      theme: undefined,
	      typeMapping: {},
	      layout: "vertical",
	      align: "left",
	      onSubmit: function onSubmit() {}
	    },
	    enumerable: true
	  }, {
	    key: "childContextTypes",
	    value: _abstract_formJs2["default"].childContextTypes,
	    enumerable: true
	  }]);

	  var _Form = Form;
	  Form = (0, _higher_order_componentsErrors_normalizerJs2["default"])({
	    as: Object,
	    publicFunctions: ["validate", "isValid", "isModified", "modifications", "resetModified", "reset", "formData"]
	  })(Form) || Form;
	  return Form;
	})(_abstract_formJs2["default"]);

	exports["default"] = Form;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _higher_order_componentJs = __webpack_require__(4);

	var _higher_order_componentJs2 = _interopRequireDefault(_higher_order_componentJs);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.HigherOrderComponents.ErrorNormalizer";
	  }

	  _createClass(_default, [{
	    key: "_toErrorObject",
	    value: function _toErrorObject(errors) {
	      var isArray = Array.isArray(errors);
	      if (errors == null || isArray && errors.length === 0) return {};
	      // If errors is an array then convert it into an object. "base" is
	      // used to store all top-level errors that are not specific to an
	      // input.
	      if (isArray) errors = { base: errors };
	      return errors;
	    }
	  }, {
	    key: "_errors",
	    value: function _errors() {
	      var errors = {};
	      var errorsSubset = this._toErrorObject(this.props.errors);
	      for (var k in errorsSubset) {
	        errors[k] = (errors[k] || []).concat(errorsSubset[k]);
	      }
	      return errors;
	    }
	  }, {
	    key: "_normalizedErrors",
	    value: function _normalizedErrors() {
	      var errors = this._errors();
	      // let normalizedErrorClass = opts.as
	      var normalizedErrorClass = this.opts().as;
	      // Convert the errors object into the normalized error class
	      if (normalizedErrorClass === Array) {
	        var errorsArray = [];
	        for (var k in errors) {
	          errorsArray = errorsArray.concat(errors[k]);
	        }return errorsArray;
	      } else if (normalizedErrorClass === Object) {
	        return errors;
	      } else {
	        throw "ErrorsNormalizer \"as\" attribute must be either Array or Object";
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var ComponentClass = this.ComponentClass();
	      var childProps = Object.assign({}, this.props, {
	        ref: "child",
	        errors: this._normalizedErrors()
	      });
	      return _react2["default"].createElement(ComponentClass, childProps);
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      errors: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.object, _react2["default"].PropTypes.array])
	    },
	    enumerable: true
	  }]);

	  var _default2 = _default;
	  _default = (0, _higher_order_componentJs2["default"])()(_default) || _default;
	  return _default;
	})(_react2["default"].Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _delegates_public_functionsJs = __webpack_require__(5);

	var _delegates_public_functionsJs2 = _interopRequireDefault(_delegates_public_functionsJs);

	/*
	 * Returns a higher order function version of the component.
	 *
	 * Adds a ComponentClass() function and an opts() function to the component
	 * for accessing the child component and the options argument to the higher
	 * order function.
	 */
	module.exports = function () {
	  return function (hocClass) {
	    return function (_opts) {
	      return function (_ComponentClass) {
	        //eslint-disable-line react/display-name
	        /*
	         * Creating a subclass of the higher order component with getters for
	         * the component class and opts.
	         */
	        return (function (_hocClass) {
	          _inherits(_class, _hocClass);

	          function _class() {
	            _classCallCheck(this, _class2);

	            _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).apply(this, arguments);
	          }

	          _createClass(_class, [{
	            key: "ComponentClass",
	            value: function ComponentClass() {
	              return _ComponentClass;
	            }
	          }, {
	            key: "opts",
	            value: function opts() {
	              return _opts;
	            }
	          }], [{
	            key: "originalClass",
	            value: _ComponentClass.originalClass || _ComponentClass,
	            enumerable: true
	          }]);

	          var _class2 = _class;
	          _class = (0, _delegates_public_functionsJs2["default"])(_opts)(_class) || _class;
	          return _class;
	        })(hocClass);
	      };
	    };
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (opts) {
	  return function (hoc) {
	    // delegate all the public functions of the child component to the child
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      var _loop = function () {
	        var k = _step.value;

	        hoc.prototype[k] = function () {
	          var _refs$child;

	          return (_refs$child = this.refs.child)[k].apply(_refs$child, arguments);
	        };
	      };

	      for (var _iterator = (opts.publicFunctions || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        _loop();
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator["return"]) {
	          _iterator["return"]();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var AbstractForm = (function (_React$Component) {
	  _inherits(AbstractForm, _React$Component);

	  function AbstractForm() {
	    var _this = this;

	    _classCallCheck(this, AbstractForm);

	    _get(Object.getPrototypeOf(AbstractForm.prototype), "constructor", this).apply(this, arguments);

	    this._childComponentsByName = [];

	    this.childComponentWillMount = function (name, component) {
	      _this._childComponentsByName[name] = component;
	    };

	    this.childComponentWillUnmount = function (name) {
	      delete _this._childComponentsByName[name];
	    };

	    this._onChildRequestChange = function (k, v) {
	      // Update the onChange listener with a copy of the existing data merged with
	      // this new input value
	      _this.props.onChange(Object.assign({}, _this._data(), _defineProperty({}, k, v)));
	    };

	    this._onSubmit = function (e) {
	      if (!_this.validate()) return e.preventDefault();
	      _this.props.onSubmit(e);
	    };
	  }

	  _createClass(AbstractForm, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      var _props = this.props;
	      var layout = _props.layout;
	      var theme = _props.theme;
	      var align = _props.align;
	      var errors = _props.errors;
	      var saved = _props.saved;

	      return {
	        frigForm: {
	          theme: theme,
	          layout: layout,
	          align: align,
	          errors: errors,
	          saved: saved,
	          data: this._data(),
	          requestChildComponentChange: this._onChildRequestChange,
	          childComponentWillMount: this.childComponentWillMount,
	          childComponentWillUnmount: this.childComponentWillUnmount,
	          submit: this._onSubmit
	        }
	      };
	    }
	  }, {
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      return this._childComponents().filter(function (c) {
	        return !c.validate();
	      }).length === 0;
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._childComponents().filter(function (c) {
	        return !c.isValid();
	      }).length === 0;
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this._childComponents().filter(function (c) {
	        return c.isModified();
	      }).length !== 0;
	    }
	  }, {
	    key: "modifications",
	    value: function modifications() {
	      var modifications = {};
	      for (var k in this._childComponentsByName) {
	        var c = this._childComponentsByName[k];
	        if (!c.isModified()) continue;
	        modifications[k] = c.modifications == null ? true : c.modifications();
	      }
	      return modifications;
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this._childComponents()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var c = _step.value;
	          c.resetModified();
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator["return"]) {
	            _iterator["return"]();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = this._childComponents()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var c = _step2.value;
	          c.reset();
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	            _iterator2["return"]();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: "formData",
	    value: function formData() {
	      return this.refs.form.formData();
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: "_themedFormProps",
	    value: function _themedFormProps() {
	      var formProps = Object.assign({}, this.props);
	      formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
	        onSubmit: this._onSubmit.bind(this)
	      });
	      return formProps;
	    }
	  }, {
	    key: "_data",
	    value: function _data() {
	      return this.props.data;
	    }
	  }, {
	    key: "_childComponents",
	    value: function _childComponents() {
	      var list = [];
	      var componentsByName = this._childComponentsByName;
	      for (var k in componentsByName) {
	        list.push(componentsByName[k]);
	      }return list;
	    }
	  }], [{
	    key: "childContextTypes",
	    value: {
	      frigForm: _react2["default"].PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return AbstractForm;
	})(_react2["default"].Component);

	exports["default"] = AbstractForm;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _unbound_inputJs = __webpack_require__(8);

	var _unbound_inputJs2 = _interopRequireDefault(_unbound_inputJs);

	var Input = (function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    var _this = this;

	    _classCallCheck(this, Input);

	    _get(Object.getPrototypeOf(Input.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.Input";

	    this._onChange = function (val, valid) {
	      // Update the value link (used by Frig form components)
	      _this.context.frigForm.requestChildComponentChange(_this.props.name, val);
	      // Run the external callbacks (external API, not used by Frig internally)
	      _this.props.onChange(val, valid);
	      if (valid) _this.props.onValidChange(val, valid);
	    };
	  }

	  _createClass(Input, [{
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      return this.refs.unboundInput.validate();
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this.refs.unboundInput.isValid();
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this.refs.unboundInput.isModified();
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      return this.refs.unboundInput.resetModified();
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      return this.refs.unboundInput.reset();
	    }

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.context.frigForm.childComponentWillMount(this.props.name, this);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.context.frigForm.childComponentWillUnmount(this.props.name, this);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(_unbound_inputJs2["default"], _extends({}, this.props, {
	        ref: "unboundInput",
	        errors: (this.props.errors || []).slice().concat(this.context.frigForm.errors[this.props.name] || []),
	        saved: this.context.frigForm.saved[this.props.name],
	        value: this.context.frigForm.data[this.props.name],
	        onChange: this._onChange
	      }));
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }], [{
	    key: "propTypes",
	    value: {
	      name: _react2["default"].PropTypes.string.isRequired,
	      errors: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string),
	      layout: _react2["default"].PropTypes.string,
	      align: _react2["default"].PropTypes.string,
	      className: _react2["default"].PropTypes.string,
	      className: _react2["default"].PropTypes.string,
	      disabled: _react2["default"].PropTypes.bool,
	      multiple: _react2["default"].PropTypes.bool,
	      type: _react2["default"].PropTypes.string,
	      options: _react2["default"].PropTypes.array,
	      validate: _react2["default"].PropTypes.bool,
	      // Callbacks (Public API)
	      onChange: _react2["default"].PropTypes.func.isRequired,
	      onValidChange: _react2["default"].PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: "contextTypes",
	    value: {
	      frigForm: _react2["default"].PropTypes.shape({
	        data: _react2["default"].PropTypes.object.isRequired,
	        theme: _react2["default"].PropTypes.object.isRequired,
	        errors: _react2["default"].PropTypes.object.isRequired,
	        layout: _react2["default"].PropTypes.string.isRequired,
	        align: _react2["default"].PropTypes.string.isRequired,
	        saved: _react2["default"].PropTypes.object.isRequired,
	        // Callbacks (Private API - reserved for frig form use only)
	        requestChildComponentChange: _react2["default"].PropTypes.func.isRequired,
	        childComponentWillMount: _react2["default"].PropTypes.func.isRequired,
	        childComponentWillUnmount: _react2["default"].PropTypes.func.isRequired
	      }).isRequired
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      validate: true,
	      disabled: false,
	      errors: [],
	      onChange: function onChange() {},
	      onValidChange: function onValidChange() {}
	    },
	    enumerable: true
	  }]);

	  return Input;
	})(_react2["default"].Component);

	exports["default"] = Input;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _higher_order_componentsErrors_normalizerJs = __webpack_require__(3);

	var _higher_order_componentsErrors_normalizerJs2 = _interopRequireDefault(_higher_order_componentsErrors_normalizerJs);

	var _validationsJs = __webpack_require__(9);

	var _validationsJs2 = _interopRequireDefault(_validationsJs);

	var _utilJs = __webpack_require__(10);

	var UnboundInput = (function (_React$Component) {
	  _inherits(UnboundInput, _React$Component);

	  function UnboundInput() {
	    _classCallCheck(this, _UnboundInput);

	    _get(Object.getPrototypeOf(_UnboundInput.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.UnboundInput";
	    this.state = {
	      modified: false,
	      validationRequested: false
	    };
	  }

	  _createClass(UnboundInput, [{
	    key: "validate",

	    /*
	     * =========================================================================
	     * Public Functions
	     * =========================================================================
	     */

	    value: function validate() {
	      this.setState({ validationRequested: true });
	      return this.isValid();
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._errors() == null;
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this.state.modified;
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      this.setState({ modified: false });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.setState({
	        modified: false,
	        validationRequested: false
	      });
	    }

	    /*
	     * =========================================================================
	     * React Lifecycle + Render
	     * =========================================================================
	     */

	  }, {
	    key: "render",
	    value: function render() {
	      var ThemedComponent = this._themedComponent();
	      return _react2["default"].createElement(ThemedComponent, this._themedInputProps());
	    }

	    /*
	     * =========================================================================
	     * Private functions
	     * =========================================================================
	     */

	  }, {
	    key: "_errors",
	    value: function _errors() {
	      var nextValue = arguments.length <= 0 || arguments[0] === undefined ? this._value() : arguments[0];

	      var errors = this.props.errors;
	      var validate = (this.isModified() || this.state.validationRequested) && this.props.validate;
	      if (validate) {
	        // Create themed props for the next nextValue passed to this function
	        var nextProps = Object.assign({}, this.props);
	        nextProps.valueLink = { value: nextValue };

	        // Running each validation
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _utilJs.entries)(this._validations())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2);

	            var k = _step$value[0];
	            var validationOpts = _step$value[1];

	            if (validationOpts === false || validationOpts == null) continue;
	            errors = errors.concat(_validationsJs2["default"][k](nextProps, validationOpts) || []);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator["return"]) {
	              _iterator["return"]();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      // If there are no errors then errors should be falsie
	      if (errors.length === 0) errors = undefined;
	      // Return the errors
	      return errors;
	    }
	  }, {
	    key: "_value",
	    value: function _value() {
	      return this.props.value;
	    }
	  }, {
	    key: "_themedInputProps",
	    value: function _themedInputProps() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var title = nextProps.title || (0, _utilJs.humanize)(nextProps.name);
	      // Defaults
	      var defaults = {
	        title: title,
	        label: title,
	        placeholder: title,
	        layout: this.context.frigForm.layout,
	        align: this.context.frigForm.align
	      };
	      // Mixing in the defaults
	      var themedProps = Object.assign(defaults, nextProps);
	      // Overrides
	      var overrides = {
	        options: (nextProps.options || []).map(this._normalizeOption),
	        modified: this.isModified(),
	        // DOM attributes for the label element
	        labelHtml: Object.assign({}, themedProps.labelHtml || {}, {
	          htmlFor: themedProps.name
	        }),
	        // DOM attributes + React ref + callbacks for the input element
	        inputHtml: Object.assign({}, themedProps.inputHtml || {}, {
	          onBlur: this._onBlur.bind(this),
	          autoFocus: themedProps.autoFocus,
	          className: themedProps.className,
	          disabled: themedProps.disabled,
	          multiple: themedProps.multiple,
	          name: themedProps.name,
	          placeholder: themedProps.placeholder,
	          type: this._typeMapping().htmlInputType,
	          ref: "input"
	        }),
	        valueLink: {
	          value: this._value(),
	          requestChange: this._onChange.bind(this)
	        },
	        errors: this._errors()
	      };
	      // TODO: Add type mapping
	      return Object.assign(themedProps, overrides);
	    }

	    /*
	     * Normalizes a set of arguments into an object with a value and a label
	     * to be used to generate an option DOM element for use in a select input.
	     * Accepts:
	     * - a string (taken as both the label and value)
	     * - an array of length 1 (first argument is both the label and value)
	     * - an array of length 2 (first argument is the value, second is the label)
	     * - an object with a value and label key (passthrough / no-change)
	     */
	  }, {
	    key: "_normalizeOption",
	    value: function _normalizeOption(option) {
	      if (option == null) return undefined;

	      // if option is an object with a label and a key return it unchanged
	      if (option.label != null) return option;

	      // converting option in the format of [key] to key
	      if (typeof option == "object" && option.length === 1) option = option[0];

	      // if option is in the format [key, value]
	      if (typeof option == "object" && option.length === 2) {
	        return {
	          value: option[0],
	          label: option[1]
	        };
	      }
	      // if option is in the format key
	      else {
	          return {
	            value: option,
	            label: option
	          };
	        }
	    }
	  }, {
	    key: "_validations",
	    value: function _validations() {
	      var nextProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      // Validations (these get mixed into the overrides)
	      var defaults = {
	        required: true
	      };
	      var validations = {};
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = (0, _utilJs.entries)(_validationsJs2["default"])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = _slicedToArray(_step2.value, 1);

	          var k = _step2$value[0];

	          validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k];
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	            _iterator2["return"]();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return validations;
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange(val, opts) {
	      if (this.props.type === "submit") return;
	      // Set the state and run validations
	      if ((opts || {}).setModified !== false) this.setState({ modified: true });
	      var valid = this._errors(val) == null;
	      this.props.onChange(val, valid);
	      if (valid) this.props.onValidChange(val, valid);
	    }
	  }, {
	    key: "_onBlur",
	    value: function _onBlur() {
	      this.validate();
	      var inputHtml = this.props.inputHtml;
	      if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur();
	    }
	  }, {
	    key: "_guessInputType",
	    value: function _guessInputType() {
	      var value = this._value();
	      var jsType = typeof value;
	      if (this.props.type != null) {
	        return this.props.type;
	      } else if (this.props.multiple || Array.isArray(value)) {
	        return "multiselect";
	      } else if (this.props.options != null) {
	        return "select";
	      } else if (jsType === "boolean") {
	        return "boolean";
	      } else if (jsType === "number") {
	        return "float";
	      } else if (this.props.name.match(/password$/i)) {
	        return "password";
	      } else {
	        return "string";
	      }
	    }

	    // Generate the type mapping for an input component
	  }, {
	    key: "_typeMapping",
	    value: function _typeMapping() {
	      var typeMapping = Object.assign({}, __webpack_require__(11), this.context.frigForm.theme.type_mapping);
	      return typeMapping[this._guessInputType()];
	    }
	  }, {
	    key: "_themedComponent",
	    value: function _themedComponent() {
	      var name = this.props.name;

	      var type = this._typeMapping().component;
	      if (type == null) throw name + ": No type mapping found";
	      var component = this.context.frigForm.theme[type];
	      if (component == null) throw name + ": No " + type + " component found in theme";
	      return component;
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      name: _react2["default"].PropTypes.string.isRequired,
	      errors: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string),
	      layout: _react2["default"].PropTypes.string,
	      align: _react2["default"].PropTypes.string,
	      className: _react2["default"].PropTypes.string,
	      className: _react2["default"].PropTypes.string,
	      disabled: _react2["default"].PropTypes.bool,
	      multiple: _react2["default"].PropTypes.bool,
	      type: _react2["default"].PropTypes.string,
	      options: _react2["default"].PropTypes.array,
	      validate: _react2["default"].PropTypes.bool,
	      value: _react2["default"].PropTypes.any,
	      saved: _react2["default"].PropTypes.bool,
	      // Callbacks (Public API)
	      onChange: _react2["default"].PropTypes.func.isRequired,
	      onValidChange: _react2["default"].PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: "contextTypes",
	    value: {
	      frigForm: _react2["default"].PropTypes.shape({
	        theme: _react2["default"].PropTypes.object.isRequired,
	        errors: _react2["default"].PropTypes.object.isRequired,
	        layout: _react2["default"].PropTypes.string.isRequired,
	        align: _react2["default"].PropTypes.string.isRequired
	      }).isRequired
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      validate: true,
	      disabled: false,
	      errors: [],
	      onChange: function onChange() {},
	      onValidChange: function onValidChange() {}
	    },
	    enumerable: true
	  }]);

	  var _UnboundInput = UnboundInput;
	  UnboundInput = (0, _higher_order_componentsErrors_normalizerJs2["default"])({
	    as: Array,
	    publicFunctions: ["validate", "isValid", "isModified", "resetModified", "reset"]
	  })(UnboundInput) || UnboundInput;
	  return UnboundInput;
	})(_react2["default"].Component);

	exports["default"] = UnboundInput;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  required: function required(props) {
	    var value = props.valueLink.value;

	    // if there is a null option then null is a valid value and there are not
	    // any values for which required should return an error
	    if ((props.options || []).filter(function (o) {
	      return o.value == null;
	    }).length > 0) {
	      return undefined;
	    }
	    if (value != null && value !== '') return undefined;
	    return 'This field is required.';
	  },

	  min: function min(props, opts) {
	    var value = props.valueLink.value;

	    if (value >= opts || value == null || value === '') return undefined;
	    return 'Value cannot be less than ' + opts;
	  },

	  max: function max(props, opts) {
	    var value = props.valueLink.value;

	    if (value <= opts || value == null || value === '') return undefined;
	    return 'Value cannot be greater than ' + opts;
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var isConfigObj = undefined,
	    entries = undefined;
	var util = module.exports = {
	  /*
	   * Similar to the ECMA Script 7 proposed Object values function.
	   * Returns an array of [key, value] arrays.
	   * See http://stackoverflow.com/a/16643074/386193
	   */
	  entries: entries = function (object) {
	    var values = [];
	    for (var k in object) {
	      values.push([k, object[k]]);
	    }return values;
	  },

	  isConfigObj: isConfigObj = function (obj) {
	    var type = typeof obj;
	    return type !== "string" && type !== "number" && type !== "boolean" && type !== "function" && type !== "undefined" && obj != null && obj.length == null;
	  },

	  humanize: function humanize(key) {
	    if (key == null) return undefined;
	    var startOfWord = /([A-Z]|[0-9]+|_[a-z])/g;
	    var humanString = key.replace(startOfWord, " $1").replace(/_/g, "");
	    return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase();
	  },

	  clone: function clone(obj) {
	    var objClone = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2);

	        var k = _step$value[0];
	        var v = _step$value[1];
	        objClone[k] = v;
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator["return"]) {
	          _iterator["return"]();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return objClone;
	  },

	  merge: function merge(target) {
	    target = target || {};
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        others[_key - 1] = arguments[_key];
	      }

	      for (var _iterator2 = others[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var other = _step2.value;
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = entries(other || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _step3$value = _slicedToArray(_step3.value, 2);

	            var k = _step3$value[0];
	            var v = _step3$value[1];
	            target[k] = v;
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	              _iterator3["return"]();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	          _iterator2["return"]();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    return target;
	  },

	  promisedTimeout: function promisedTimeout(duration) {
	    return new Promise(function (resolve) {
	      return setTimeout(resolve, duration);
	    });
	  },

	  map: function map(array, fn) {
	    var out = [];
	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	      for (var _iterator4 = array[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var k = _step4.value;
	        out.push(fn(k));
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	          _iterator4["return"]();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }

	    return out;
	  },

	  mapObj: function mapObj(obj, fn) {
	    var out = {};
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = entries(obj)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var _step5$value = _slicedToArray(_step5.value, 2);

	        var k = _step5$value[0];
	        var v = _step5$value[1];
	        out[k] = fn(k, v);
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	          _iterator5["return"]();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }

	    return out;
	  },

	  // Takes a list of defaults to inherit from, the object itself and an optional
	  // callback parameter which can be used to adjust the value of each parameter.
	  // This function operates deeply on nested objects.
	  // The returned value has the following properties:
	  // * The keys are the superset of all keys from all the layer.
	  // * The keys are in the same order as the defaults with keys from other layers
	  //   being appended after the defaults.
	  setDefaults: function setDefaults() {
	    for (var _len2 = arguments.length, layers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      layers[_key2] = arguments[_key2];
	    }

	    var cb = layers.pop();
	    // No callback: Defaulting the callback to a passthrough function
	    if (typeof cb != "function") {
	      layers.push(cb);
	      cb = function (k, v) {
	        return v;
	      };
	    }
	    // setting the target to the first layer
	    var target = layers[layers.length - 1] || {};
	    // cloning and reversing the layers for use in the iterator
	    var reversedLayers = layers.slice(0).reverse();
	    // The iterator is used to set a final value for each key in the returned
	    // object
	    var iterator = function iterator(k) {
	      // Setting the value for non-objects by "failing through" the defaults
	      // until a non-null value is found
	      var val = undefined;
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;

	      try {
	        for (var _iterator6 = reversedLayers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var layer = _step6.value;

	          if (val == null) val = layer[k];
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	            _iterator6["return"]();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }

	      return cb(k, val, layers);
	    };
	    // Recursively mapping the iterator over nested objects
	    var _iteratorNormalCompletion7 = true;
	    var _didIteratorError7 = false;
	    var _iteratorError7 = undefined;

	    try {
	      var _loop = function () {
	        var _step7$value = _slicedToArray(_step7.value, 2);

	        var k = _step7$value[0];
	        var v = _step7$value[1];

	        if (isConfigObj(layers[0][k])) {
	          var namespacedLayers = util.map(layers, function (layer) {
	            return layer[k] || {};
	          });
	          v = util.setDefaults.apply(util, _toConsumableArray(namespacedLayers).concat([cb]));
	        } else {
	          v = iterator(k);
	        }
	        target[k] = v;
	      };

	      for (var _iterator7 = entries(util.merge.apply(util, [{}].concat(layers)))[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	        _loop();
	      }
	    } catch (err) {
	      _didIteratorError7 = true;
	      _iteratorError7 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	          _iterator7["return"]();
	        }
	      } finally {
	        if (_didIteratorError7) {
	          throw _iteratorError7;
	        }
	      }
	    }

	    return target;
	  },

	  capitalize: function capitalize(string) {
	    if (string == null) return undefined;
	    return "" + string[0].toUpperCase() + string.slice(1);
	  }

	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  string: { component: "Input", htmlInputType: "string" },
	  password: { component: "Input", htmlInputType: "password" },
	  email: { component: "Input", htmlInputType: "email" },
	  url: { component: "Input", htmlInputType: "url" },
	  tel: { component: "Input", htmlInputType: "tel" },
	  // search: {component: "Input", htmlInputType: "search"},
	  // uuid: {component: "Input", htmlInputType: "text"},
	  boolean: { component: "Checkbox", htmlInputType: "checkbox" },
	  text: { component: "Text" },
	  file: { component: "File", htmlInputType: "file" },
	  // hidden: {component: "Input", htmlInputType: "hidden"},
	  // integer: {component: "Input", htmlInputType: "number"},
	  float: { component: "Number" },
	  // decimal: {component: "Input", htmlInputType: "number"},
	  // range: {component: "Input", htmlInputType: "range"},
	  "switch": { component: "Switch" },
	  // datetime: {component: "Datetime"},
	  // date: {component: "Datetime"},
	  time: { component: "Timepicker" },
	  select: { component: "Select" },
	  color: { component: "Color" }
	};
	// radioButtons: {component: "RadioButtons"},
	// checkBoxes: {component: "CheckBoxes"},
	// country: {component: "Country"},
	// timeZone: {component: "TimeZone"},

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Submit = (function (_React$Component) {
	  _inherits(Submit, _React$Component);

	  function Submit() {
	    _classCallCheck(this, Submit);

	    _get(Object.getPrototypeOf(Submit.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.Submit";
	  }

	  _createClass(Submit, [{
	    key: "render",
	    value: function render() {
	      var ThemedSubmit = this.context.frigForm.theme.Submit;
	      return _react2["default"].createElement(ThemedSubmit, this.props);
	    }
	  }], [{
	    key: "contextTypes",
	    value: {
	      frigForm: _react2["default"].PropTypes.shape({
	        theme: _react2["default"].PropTypes.object.isRequired
	      }).isRequired
	    },
	    enumerable: true
	  }]);

	  return Submit;
	})(_react2["default"].Component);

	exports["default"] = Submit;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var FormErrorList = (function (_React$Component) {
	  _inherits(FormErrorList, _React$Component);

	  function FormErrorList() {
	    _classCallCheck(this, FormErrorList);

	    _get(Object.getPrototypeOf(FormErrorList.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.FormErrorList";
	  }

	  _createClass(FormErrorList, [{
	    key: "_errorsArray",
	    value: function _errorsArray() {
	      var errors = this.context.frigForm.errors;
	      var name = this.props.name;

	      return errors[name] || [];
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var ThemedErrorList = this.context.frigForm.theme.FormErrorList;
	      return _react2["default"].createElement(ThemedErrorList, { errors: this._errorsArray() });
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      // This is the property of `errors` where Frig will look for form-level errors.
	      // Set to "base" by default, for compatibility with Active Record.
	      name: "base"
	    },
	    enumerable: true
	  }, {
	    key: "contextTypes",
	    value: {
	      frigForm: _react2["default"].PropTypes.shape({
	        errors: _react2["default"].PropTypes.object.isRequired
	      }).isRequired
	    },
	    enumerable: true
	  }]);

	  return FormErrorList;
	})(_react2["default"].Component);

	exports["default"] = FormErrorList;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _fieldset_nested_formJs = __webpack_require__(15);

	var _fieldset_nested_formJs2 = _interopRequireDefault(_fieldset_nested_formJs);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Fieldset = (function (_React$Component) {
	  _inherits(Fieldset, _React$Component);

	  function Fieldset() {
	    _classCallCheck(this, Fieldset);

	    _get(Object.getPrototypeOf(Fieldset.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Fieldset";
	  }

	  _createClass(Fieldset, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.context.frigForm.childComponentWillMount(this.props.name, this);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.context.frigForm.childComponentWillUnmount(this.props.name, this);
	    }
	  }, {
	    key: "validate",
	    value: function validate() {
	      this._forms().forEach(function (form) {
	        return form.validate();
	      });
	      return this.isValid();
	    }
	  }, {
	    key: "isValid",
	    value: function isValid() {
	      return this._forms().every(function (form) {
	        return form.isValid();
	      });
	    }
	  }, {
	    key: "isModified",
	    value: function isModified() {
	      return this._forms().some(function (form) {
	        return form.isModified();
	      });
	    }
	  }, {
	    key: "modifications",
	    value: function modifications() {
	      var values = this._forms().filter(function (form) {
	        return form.isModified();
	      }).map(function (form) {
	        return form.modifications();
	      });
	      var isArray = Array.isArray(this.context.frigForm.data[this.props.name] || []);
	      return isArray ? values : values[0];
	    }
	  }, {
	    key: "resetModified",
	    value: function resetModified() {
	      this._forms().forEach(function (form) {
	        return form.resetModified();
	      });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this._forms().forEach(function (form) {
	        return form.reset();
	      });
	    }
	  }, {
	    key: "_forms",
	    value: function _forms() {
	      var _this = this;

	      return Object.keys(this.refs || {}).map(function (k) {
	        return _this.refs[k];
	      });
	    }
	  }, {
	    key: "_contextAtIndex",
	    value: function _contextAtIndex(index, keys) {
	      var _this2 = this;

	      return keys.reduce(function (contextAtIndex, key) {
	        var values = _this2.context.frigForm[key][_this2.props.name];
	        var value = Array.isArray(values) ? values[index] : values;
	        contextAtIndex[key] = value || {};
	        return contextAtIndex;
	      }, {});
	    }
	  }, {
	    key: "_formProps",
	    value: function _formProps(_ref) {
	      var data = _ref.data;
	      var index = _ref.index;

	      var _contextAtIndex2 = this._contextAtIndex(index, ["errors", "saved"]);

	      var errors = _contextAtIndex2.errors;
	      var saved = _contextAtIndex2.saved;

	      var onChange = this._onChange.bind(this, index);
	      return _extends({}, this.context.frigForm, {
	        index: index,
	        key: index,
	        ref: index,
	        errors: errors,
	        saved: saved,
	        data: data,
	        onChange: onChange
	      });
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange(index, nextFormData) {
	      var data = this.context.frigForm.data[this.props.name];
	      var nextData = undefined;
	      if (Array.isArray(data)) {
	        nextData = [].concat(_toConsumableArray(data));
	        nextData[index] = nextFormData;
	      } else {
	        nextData = nextFormData;
	      }
	      // Relaying the request change to the upstream data
	      this.context.frigForm.requestChildComponentChange(this.props.name, nextData);
	    }
	  }, {
	    key: "_nestedFormDatas",
	    value: function _nestedFormDatas() {
	      var nextContext = arguments.length <= 0 || arguments[0] === undefined ? this.context : arguments[0];

	      var dataValues = nextContext.frigForm.data[this.props.name] || [];
	      return Array.isArray(dataValues) ? dataValues : [dataValues];
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;

	      var i = 0;
	      var nestedFormDatas = this._nestedFormDatas();
	      return _react2["default"].createElement(
	        "div",
	        null,
	        nestedFormDatas.map(function (data) {
	          return _react2["default"].createElement(
	            _fieldset_nested_formJs2["default"],
	            _this3._formProps({ data: data, index: i++ }),
	            _this3.props.children
	          );
	        })
	      );
	    }
	  }], [{
	    key: "contextTypes",
	    value: {
	      frigForm: _react2["default"].PropTypes.shape({
	        data: _react2["default"].PropTypes.object.isRequired,
	        theme: _react2["default"].PropTypes.object.isRequired,
	        errors: _react2["default"].PropTypes.object.isRequired,
	        layout: _react2["default"].PropTypes.string.isRequired,
	        saved: _react2["default"].PropTypes.object.isRequired,
	        // Callbacks (Private API - reserved for frig form use only)
	        requestChildComponentChange: _react2["default"].PropTypes.func.isRequired,
	        childComponentWillMount: _react2["default"].PropTypes.func.isRequired,
	        childComponentWillUnmount: _react2["default"].PropTypes.func.isRequired
	      }).isRequired
	    },
	    enumerable: true
	  }]);

	  return Fieldset;
	})(_react2["default"].Component);

	exports["default"] = Fieldset;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _abstract_formJs = __webpack_require__(6);

	var _abstract_formJs2 = _interopRequireDefault(_abstract_formJs);

	// Nested forms (forms inside nested fieldsets)

	var FieldsetNestedForm = (function (_AbstractForm) {
	  _inherits(FieldsetNestedForm, _AbstractForm);

	  function FieldsetNestedForm() {
	    _classCallCheck(this, FieldsetNestedForm);

	    _get(Object.getPrototypeOf(FieldsetNestedForm.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.FieldsetNestedForm";
	  }

	  _createClass(FieldsetNestedForm, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return _extends({}, _get(Object.getPrototypeOf(FieldsetNestedForm.prototype), "getChildContext", this).call(this), {
	        frigFieldset: {
	          index: this.props.index
	        }
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        null,
	        this.props.children
	      );
	    }
	  }], [{
	    key: "propTypes",
	    value: _abstract_formJs2["default"].propTypes,
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: _abstract_formJs2["default"].defaultProps,
	    enumerable: true
	  }, {
	    key: "childContextTypes",
	    value: _extends({}, _abstract_formJs2["default"].childContextTypes, {
	      frigFieldset: _react2["default"].PropTypes.object
	    }),
	    enumerable: true
	  }]);

	  return FieldsetNestedForm;
	})(_abstract_formJs2["default"]);

	exports["default"] = FieldsetNestedForm;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var FieldsetText = (function (_React$Component) {
	  _inherits(FieldsetText, _React$Component);

	  function FieldsetText() {
	    _classCallCheck(this, FieldsetText);

	    _get(Object.getPrototypeOf(FieldsetText.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.FieldsetText";
	  }

	  _createClass(FieldsetText, [{
	    key: "render",
	    value: function render() {
	      var spanProps = Object.assign({}, this.props);
	      delete spanProps.text;
	      return _react2["default"].createElement(
	        "span",
	        spanProps,
	        this.props.text(this.context.frigFieldset.index)
	      );
	    }
	  }], [{
	    key: "contextTypes",
	    value: {
	      frigFieldset: _react2["default"].PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return FieldsetText;
	})(_react2["default"].Component);

	exports["default"] = FieldsetText;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	/*
	 * A minimal wrapper for the select component to provide the correct value
	 * for valueLinks.
	 *
	 * Basically it's a solution to this: http://stackoverflow.com/q/24470852/386193
	 *
	 * Note: This class, unlike React.DOM.select, does not expect options to be
	 * passed as child components. Instead you should pass your options as an array
	 * of objects containing a label and a value.
	 *
	 * Example:
	 *
	 * ValueLinkedSelect({
	 *   options: [
	 *     {label: "Canada", value: "CA"}
	 *     {label: "United States", value: "US"}
	 *   ]
	 * })
	 *
	 * Asside from the options change and the fact that valueLink works else should
	 * be the same as React.DOM.select.
	 *
	 */

	var ValueLinkedSelect = (function (_React$Component) {
	  _inherits(ValueLinkedSelect, _React$Component);

	  function ValueLinkedSelect() {
	    _classCallCheck(this, ValueLinkedSelect);

	    _get(Object.getPrototypeOf(ValueLinkedSelect.prototype), "constructor", this).apply(this, arguments);

	    this.displayName = "Frig.ValueLinkedSelect";
	  }

	  _createClass(ValueLinkedSelect, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      var hasOptions = (this.props.options || []).length !== 0;
	      if (hasOptions && this.props.valueLink.value == null) {
	        this._setInitialValue(this.props);
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var hasOptions = (nextProps.options || []).length !== 0;
	      // Setting the intial value of the select when the options load
	      if (hasOptions && nextProps.valueLink.value == null) {
	        this._setInitialValue(nextProps);
	      }
	      // Nulling the select's value when the options are removed
	      if (!hasOptions && nextProps.valueLink.value != null) {
	        nextProps.valueLink.requestChange(undefined, { setModified: false });
	      }
	    }

	    // If there are no null options then default a null value
	    // to the first option
	  }, {
	    key: "_setInitialValue",
	    value: function _setInitialValue(nextProps) {
	      if (nextProps.options.filter(function (_ref2) {
	        var value = _ref2.value;
	        return value == null;
	      }).length > 0) {
	        return;
	      }
	      var value = nextProps.valueLink.value || nextProps.options[0].value;
	      nextProps.valueLink.requestChange(value, { setModified: false });
	    }

	    // Reads the value from the DOM for the select input fields
	  }, {
	    key: "_getValue",
	    value: function _getValue() {
	      var el = _reactDom2["default"].findDOMNode(this.refs.input);
	      // The value is cast to a string when we get it from DOM.value. This is a
	      // mapping of those strings to their original values in the options list.
	      var originalValues = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var option = _step.value;

	          var valueHash = option.value;
	          if (valueHash != null) valueHash = option.value.toString();
	          originalValues[valueHash] = option.value;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator["return"]) {
	            _iterator["return"]();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      if (el.type === "select-multiple") {
	        return (function () {
	          var _ref = [];
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = el.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var o = _step2.value;

	              if (o.selected) {
	                _ref.push(originalValues[o.value]);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                _iterator2["return"]();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          return _ref;
	        })();
	      } else {
	        if (el.value === "") return null;
	        return originalValues[el.value] || el.value;
	      }
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      this.props.valueLink.requestChange(this._getValue());
	    }
	  }, {
	    key: "_inputHtml",
	    value: function _inputHtml() {
	      var value = this.props.valueLink.value;
	      if (this.props.multiple) value = value.map(function (o) {
	        return o.value.toString();
	      });
	      var inputHtml = Object.assign({}, this.props, {
	        ref: "input",
	        valueLink: {
	          value: value,
	          requestChange: this._onChange.bind(this)
	        }
	      });
	      for (var k in ["valueLink", "options"]) {
	        delete inputHtml[k];
	      }return inputHtml;
	    }
	  }, {
	    key: "_selectOption",
	    value: function _selectOption(o) {
	      var attrs = {
	        key: "option-" + o.label,
	        value: o.value || ""
	      };
	      return _react2["default"].createElement(
	        "option",
	        attrs,
	        o.label
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "select",
	        this._inputHtml(),
	        this.props.options.map(this._selectOption)
	      );
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      options: _react2["default"].PropTypes.array.isRequired,
	      valueLink: _react2["default"].PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return ValueLinkedSelect;
	})(_react2["default"].Component);

	exports["default"] = ValueLinkedSelect;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _componentsFormJs = __webpack_require__(1);

	var _componentsFormJs2 = _interopRequireDefault(_componentsFormJs);

	var _componentsInputJs = __webpack_require__(7);

	var _componentsInputJs2 = _interopRequireDefault(_componentsInputJs);

	var _componentsUnbound_inputJs = __webpack_require__(8);

	var _componentsUnbound_inputJs2 = _interopRequireDefault(_componentsUnbound_inputJs);

	var _componentsSubmitJs = __webpack_require__(12);

	var _componentsSubmitJs2 = _interopRequireDefault(_componentsSubmitJs);

	var _componentsForm_error_listJs = __webpack_require__(13);

	var _componentsForm_error_listJs2 = _interopRequireDefault(_componentsForm_error_listJs);

	var form = _react2["default"].createFactory(_componentsFormJs2["default"]);
	exports.form = form;
	var input = _react2["default"].createFactory(_componentsInputJs2["default"]);
	exports.input = input;
	var unboundInput = _react2["default"].createFactory(_componentsUnbound_inputJs2["default"]);
	exports.unboundInput = unboundInput;
	var submit = _react2["default"].createFactory(_componentsSubmitJs2["default"]);
	exports.submit = submit;
	var formErrorList = _react2["default"].createFactory(_componentsForm_error_listJs2["default"]);
	exports.formErrorList = formErrorList;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	/*
	 * A higher order function wrapper for components that only allow 2 possible
	 * values in their valueLinks (an onValue and an offValue - true and false by
	 * default).
	 *
	 * This component will request a change to the valueLink for any invalid
	 * valueLink value to convert it into the onValue or offValue.
	 */
	module.exports = function (ComponentClass) {
	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).apply(this, arguments);

	      this.displayName = "Frig.HigherOrderComponents.Boolean";
	    }

	    _createClass(_class, [{
	      key: "componentWillMount",
	      value: function componentWillMount() {
	        this._normalizeValue(this.props);
	      }
	    }, {
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps(nextProps) {
	        this._normalizeValue(nextProps);
	      }
	    }, {
	      key: "_normalizeValue",
	      value: function _normalizeValue(nextProps) {
	        var value = nextProps.valueLink.value;
	        if (value !== this.props.offValue && value !== this.props.onValue) {
	          this._change(value != null, { setModified: false });
	        }
	      }

	      /*
	       * Intercept the nested component's true/false value change and convert it
	       * into an onValue or offValue before relaying it to the valueLink.
	       */
	    }, {
	      key: "_change",
	      value: function _change(val) {
	        var _props$valueLink;

	        var upstreamVal = val ? this.props.onValue : this.props.offValue;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        (_props$valueLink = this.props.valueLink).requestChange.apply(_props$valueLink, [upstreamVal].concat(args));
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          ref: "child",
	          valueLink: {
	            value: this.props.valueLink.value === this.props.onValue,
	            requestChange: this._change.bind(this)
	          }
	        });
	        return _react2["default"].createElement(ComponentClass, childProps);
	      }
	    }], [{
	      key: "propTypes",
	      value: {
	        valueLink: _react2["default"].PropTypes.object.isRequired,
	        onValue: _react2["default"].PropTypes.any.isRequired,
	        offValue: _react2["default"].PropTypes.any.isRequired
	      },
	      enumerable: true
	    }, {
	      key: "defaultProps",
	      value: {
	        onValue: true,
	        offValue: false
	      },
	      enumerable: true
	    }]);

	    return _class;
	  })(_react2["default"].Component);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	/*
	 * A higher order component that passes a focused attribute to it's child
	 * component. The focused is true when the component should be focused
	 * (ie. when it is clicked on or tabbed into) and false when it is not (ie.
	 * initially, when it is clicked off of and when another input is selected).
	 *
	 * This is useful for implementing popups in Frig Themes.
	 */
	module.exports = function (ComponentClass) {
	  var childName = ComponentClass.prototype.displayName;

	  return (function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this);
	      this.state = {
	        focused: false
	      };
	      this.displayName = "Frig.HigherOrderComponents.Focusable(" + childName + ")";
	      this._onDocumentClick = this._onDocumentClick.bind(this);
	      this._onFocus = this._onFocus.bind(this);
	    }

	    _createClass(_class, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        window.addEventListener("click", this._onDocumentClick);
	        window.addEventListener("focus", this._onFocus, true);
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        window.removeEventListener("click", this._onDocumentClick);
	        window.removeEventListener("focus", this._onFocus, true);
	      }
	    }, {
	      key: "_onDocumentClick",
	      value: function _onDocumentClick(e) {
	        this.setState({ focused: this._containsDOMElement(e.target) });
	      }
	    }, {
	      key: "_onFocus",
	      value: function _onFocus() {
	        this.setState({ focused: this._containsDOMElement(document.activeElement) });
	      }
	    }, {
	      key: "_containsDOMElement",
	      value: function _containsDOMElement(otherElement) {
	        var el = _reactDom2["default"].findDOMNode(this);
	        return el === otherElement || el.contains(otherElement);
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var childProps = Object.assign({}, this.props, {
	          focused: this.state.focused
	        });
	        return _react2["default"].createElement(ComponentClass, childProps);
	      }
	    }]);

	    return _class;
	  })(_react2["default"].Component);
	};

/***/ }
/******/ ])
});
;