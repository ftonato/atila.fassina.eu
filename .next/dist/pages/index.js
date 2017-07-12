'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _page = require('../layouts/page');

var _page2 = _interopRequireDefault(_page);

var _contentSection = require('../components/contentSection');

var _contentSection2 = _interopRequireDefault(_contentSection);

var _social = require('../components/social');

var _social2 = _interopRequireDefault(_social);

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/atilafassina/Documents/atilafassina.github.io/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_page2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('header', { className: 'top', 'data-jsx': 4292953337,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 4292953337,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('img', { className: 'logo', src: '/static/logo.svg', alt: 'Atila Fassina', 'data-jsx': 4292953337,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }))), _react2.default.createElement(_contentSection2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_social2.default, { socialList: _config.social, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 4292953337,
    css: '.top[data-jsx="4292953337"]{min-height:40vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.logo[data-jsx="4292953337"]{height:15rem;margin:5rem 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCYyxBQUd1QixBQUVILGNBQXFCLEdBRkUsWUFFRyxrRUFGZSxrRUFBOEIsdUdBQTBCLGlHQUFLIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hdGlsYWZhc3NpbmEvRG9jdW1lbnRzL2F0aWxhZmFzc2luYS5naXRodWIuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL3BhZ2UnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRlbnRTZWN0aW9uJ1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9jb21wb25lbnRzL3NvY2lhbCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQge3NvY2lhbH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+ICg8UGFnZT5cbiAgPGhlYWRlciBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICA8aDE+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgYWx0PVwiQXRpbGEgRmFzc2luYVwiLz5cbiAgICA8L2gxPlxuICA8L2hlYWRlcj5cbiAgPENvbnRlbnQgLz5cbiAgPFNvY2lhbCBzb2NpYWxMaXN0PXtzb2NpYWx9Lz5cbiAgPEZvb3RlciAvPlxuICA8c3R5bGUganN4PntgXG4gICAgLnRvcCB7XG4gICAgICBtaW4taGVpZ2h0OiA0MHZoO1xuICAgICAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgIG1hcmdpbjogNXJlbSAwO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuPC9QYWdlPilcblxuXG4vLzxMaW5rIGhyZWY9XCIvc3RhdGljL29sZGJsb2cvaW5kZXguaHRtbFwiPlxuICAgICAgLy8gPGE+b2xkIHN0dWZmPC9hPlxuICAgIC8vIDwvTGluaz5cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

//<Link href="/static/oldblog/index.html">
// <a>old stuff</a>
// </Link>