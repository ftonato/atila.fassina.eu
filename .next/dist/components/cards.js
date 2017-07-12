"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/atilafassina/Documents/atilafassina.github.io/components/cards.js";

exports.default = function (_ref) {
  var _ref$cardList = _ref.cardList,
      cardList = _ref$cardList === undefined ? [] : _ref$cardList;
  return _react2.default.createElement("div", {
    "data-jsx": 3195300037,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("ul", { className: "cardList", "data-jsx": 3195300037,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, cardList.map(function (_ref2) {
    var name = _ref2.name,
        url = _ref2.url;
    return _react2.default.createElement("li", { className: "card", key: name, "data-jsx": 3195300037,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, _react2.default.createElement(_link2.default, { href: url, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, _react2.default.createElement("a", { target: "_blank", "data-jsx": 3195300037,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement("div", {
      "data-jsx": 3195300037,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement("img", { src: "/static/" + name + ".svg", className: "cardIcon", alt: "" + name, "data-jsx": 3195300037,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    })), _react2.default.createElement("h3", { className: "cardName", "data-jsx": 3195300037,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, name))));
  })), _react2.default.createElement(_style2.default, {
    styleId: 3195300037,
    css: ".cardList[data-jsx=\"3195300037\"]{width:80vw;height:100%;margin:5rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.card[data-jsx=\"3195300037\"]{margin:1rem 0;min-width:30%;width:80%;height:15rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:black;background-color:white;border-radius:2px}.card[data-jsx=\"3195300037\"] a[data-jsx=\"3195300037\"]{-webkit-text-decoration:none;text-decoration:none}.card[data-jsx=\"3195300037\"]:hover .cardName[data-jsx=\"3195300037\"],.card[data-jsx=\"3195300037\"] .cardName[data-jsx=\"3195300037\"]:focus{color:rgb(30, 200, 10)}.card[data-jsx=\"3195300037\"]:hover{box-shadow:inset 0 0 0 2px rgb(30, 200, 10)}.cardIcon[data-jsx=\"3195300037\"]{height:10rem}.cardName[data-jsx=\"3195300037\"]{-webkit-text-align:center;text-align:center;font-size:2rem;color:black;margin:.5rem 0 2rem}@media (min-width:860px){.cardList[data-jsx=\"3195300037\"]{-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row}.card[data-jsx=\"3195300037\"]{width:auto;margin:auto}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJjLEFBR2tCLEFBRUcsQUFDYyxBQUdMLEFBRXFCLEFBQ3RCLEFBRUosQUFHRixBQUVILFlBaEJXLEFBZ0JVLEVBUFgsQ0FQWSxTQUlQLENBTmlCLEFBZ0JKLEtBZFcsVUFGYSxDQUVDLElBTWpCLENBR1QsTUFSWCxHQUR5RCxFQVkvRCxLQUhvQyxhQUEyQixxQkFBSyxzQkFYRixlQUVlLG1EQUZxQixlQUVTLHVHQUEwQixTQUZULHdGQUU0QixTQUZ2QixJQUVxRCx3QkFBeUIsbUJBQUsiLCJmaWxlIjoiY29tcG9uZW50cy9jYXJkcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXRpbGFmYXNzaW5hL0RvY3VtZW50cy9hdGlsYWZhc3NpbmEuZ2l0aHViLmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoe2NhcmRMaXN0ID0gW119KSA9PiAoPGRpdj5cbiAgPHVsIGNsYXNzTmFtZT1cImNhcmRMaXN0XCI+XG4gICAge2NhcmRMaXN0Lm1hcCggKHtuYW1lLCB1cmx9KSA9PiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17bmFtZX0+XG4gICAgICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17YC9zdGF0aWMvJHtuYW1lfS5zdmdgfSBjbGFzc05hbWU9XCJjYXJkSWNvblwiIGFsdD17YCR7bmFtZX1gfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkTmFtZVwiPntuYW1lfTwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICkpfVxuICA8L3VsPlxuICA8c3R5bGUganN4PntgXG4gICAgLmNhcmRMaXN0IHtcbiAgICAgIHdpZHRoOiA4MHZ3OyBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDVyZW0gMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgd2lkdGg6IDgwJTsgaGVpZ2h0OiAxNXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgLmNhcmQgYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4gICAgLmNhcmQ6aG92ZXIgLmNhcmROYW1lLFxuICAgIC5jYXJkIC5jYXJkTmFtZTpmb2N1cyB7XG4gICAgICBjb2xvcjogcmdiKDMwLCAyMDAsIDEwKTtcbiAgICB9XG5cbiAgICAuY2FyZDpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiKDMwLCAyMDAsIDEwKTtcbiAgICB9XG5cbiAgICAuY2FyZEljb24geyBoZWlnaHQ6IDEwcmVtO31cblxuICAgIC5jYXJkTmFtZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBtYXJnaW46IC41cmVtIDAgMnJlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogODYwcHgpIHtcbiAgICAgIC5jYXJkTGlzdCB7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG48L2Rpdj4pXG4iXX0= */\n/*@ sourceURL=components/cards.js */"
  }));
};