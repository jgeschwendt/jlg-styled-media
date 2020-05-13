'use strict';

var styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      @media print {\n        ", "\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        @media (min-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        @media (max-width: ", "px) {\n          ", "\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var media = {
  breakpoint: {
    down: function down(breakpoint, breakpointCss) {
      return styledComponents.css(_templateObject(), breakpoint - 0.02, breakpointCss);
    },
    up: function up(breakpoint, breakpointCss) {
      console.log('-', breakpoint, breakpointCss);
      return styledComponents.css(_templateObject2(), function (props) {
        return props.theme.breakpoints[breakpoint];
      }, breakpointCss);
    }
  },
  print: function print(printCss) {
    return styledComponents.css(_templateObject3(), printCss);
  }
};

module.exports = media;
