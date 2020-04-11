"use strict";

console.log('App.js is running'); //JSX - Javascript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hand of a computer ',
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    render();
  }
};

var removeAllOptions = function removeAllOptions() {
  if (app.options.length > 0) {
    app.options = [];
    render();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options && app.options.length > 0 ? 'Here is your options' : 'no options'), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length <= 0,
    onClick: onMakeDecision
  }, "What Should I do?"), /*#__PURE__*/React.createElement("button", {
    onClick: removeAllOptions
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

render();
