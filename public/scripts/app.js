"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handelDeleteOptions = _this.handelDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: ['List one', 'List two', 'List three']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handelDeleteOptions",
    value: function handelDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter Valid to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option is already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecision App';
      var subTitle = 'Put your life in the hand of a computer';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        subTitle: subTitle
      }), /*#__PURE__*/React.createElement(Action, {
        handlePick: this.handlePick
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handelDeleteOptions: this.handelDeleteOptions
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);

  var _super2 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super2.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("h2", null, this.props.subTitle));
    }
  }]);

  return Header;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component3) {
  _inherits(Action, _React$Component3);

  var _super3 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super3.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handlePick
      }, "What Should I do"));
    }
  }]);

  return Action;
}(React.Component);

var Options = /*#__PURE__*/function (_React$Component4) {
  _inherits(Options, _React$Component4);

  var _super4 = _createSuper(Options);

  function Options() {
    _classCallCheck(this, Options);

    return _super4.apply(this, arguments);
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handelDeleteOptions
      }, "Remove All"), this.props.options.map(function (option, index) {
        return /*#__PURE__*/React.createElement(Option, {
          key: index,
          option: option
        });
      }));
    }
  }]);

  return Options;
}(React.Component);

var Option = /*#__PURE__*/function (_React$Component5) {
  _inherits(Option, _React$Component5);

  var _super5 = _createSuper(Option);

  function Option() {
    _classCallCheck(this, Option);

    return _super5.apply(this, arguments);
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.option);
    }
  }]);

  return Option;
}(React.Component);

var AddOption = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  var _super6 = _createSuper(AddOption);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _super6.call(this, props);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
