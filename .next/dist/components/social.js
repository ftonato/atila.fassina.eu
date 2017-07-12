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

var _jsxFileName = "/Users/atilafassina/Documents/atilafassina.github.io/components/social.js";

exports.default = function (_ref) {
  var _ref$socialList = _ref.socialList,
      socialList = _ref$socialList === undefined ? [] : _ref$socialList;
  return _react2.default.createElement("div", { className: "socialWrapper", "data-jsx": 2769327924,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("ul", { className: "socialMedias", "data-jsx": 2769327924,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, socialList.map(function (_ref2) {
    var name = _ref2.name,
        url = _ref2.url;
    return _react2.default.createElement("li", { key: name, className: "socialIcon", "data-jsx": 2769327924,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, _react2.default.createElement(_link2.default, { href: url, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, _react2.default.createElement("a", { className: name, target: "_blank", "data-jsx": 2769327924,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, name !== 'email' && _react2.default.createElement("img", { className: name, src: "/static/" + name + ".svg", alt: name, "data-jsx": 2769327924,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), name === 'email' && _react2.default.createElement("span", { className: "emailIcon", "data-jsx": 2769327924,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, "@"))));
  })), _react2.default.createElement(_style2.default, {
    styleId: 2769327924,
    css: "[data-jsx=\"2769327924\"]{-webkit-text-decoration:none !important;text-decoration:none !important}.socialWrapper[data-jsx=\"2769327924\"]{background-color:#bbb}.socialMedias[data-jsx=\"2769327924\"]{width:80%;margin:0 auto;padding:.5em 0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.socialIcon[data-jsx=\"2769327924\"]{height:2rem}.medium[data-jsx=\"2769327924\"]{width:2.5rem}.email[data-jsx=\"2769327924\"]{font-size:2rem;color:#222}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc29jaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVjLEFBRzZCLEFBQ1osQUFFRSxBQUNPLEFBRUosQUFBOEQsV0FMOUMsRUFFZCxDQUNHLEVBRWEsT0FOTixHQUMwQixFQUtmLGNBTHNDLGlCQUFvQixlQUtoQiwrREFMb0QsK0hBQTBCLGlHQUFLIiwiZmlsZSI6ImNvbXBvbmVudHMvc29jaWFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hdGlsYWZhc3NpbmEvRG9jdW1lbnRzL2F0aWxhZmFzc2luYS5naXRodWIuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7c29jaWFsTGlzdCA9IFtdfSkgPT4gKDxkaXYgY2xhc3NOYW1lPVwic29jaWFsV3JhcHBlclwiPlxuICA8dWwgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFzXCI+XG4gICAge3NvY2lhbExpc3QubWFwKCAoe25hbWUsIHVybH0pID0+IChcbiAgICAgIDxsaSBrZXk9e25hbWV9IGNsYXNzTmFtZT1cInNvY2lhbEljb25cIj5cbiAgICAgICAgPExpbmsgaHJlZj17dXJsfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e25hbWV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAge25hbWUgIT09ICdlbWFpbCcgJiYgPGltZyBjbGFzc05hbWU9e25hbWV9IHNyYz17YC9zdGF0aWMvJHtuYW1lfS5zdmdgfSBhbHQ9e25hbWV9Lz59XG4gICAgICAgICAgICB7bmFtZSA9PT0gJ2VtYWlsJyAmJiA8c3BhbiBjbGFzc05hbWU9XCJlbWFpbEljb25cIj5APC9zcGFuPn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKSl9XG4gIDwvdWw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuc29jaWFsV3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICAgIH1cbiAgICAuc29jaWFsTWVkaWFzIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IC41ZW0gMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5zb2NpYWxJY29uIHtcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICAubWVkaXVtIHt3aWR0aDogMi41cmVtO31cblxuICAgIC5lbWFpbCB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBjb2xvcjogIzIyMjtcbiAgICB9XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYH08L3N0eWxlPlxuPC9kaXY+KVxuIl19 */\n/*@ sourceURL=components/social.js */"
  }));
};