webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var types = {};

var syncTypes = exports.syncTypes = ['USER_SET_SUBMIT_INFO', 'SET_PRISTINE'];
var asyncTypes = exports.asyncTypes = ['USER_SIGNIN', 'USER_SIGNUP', 'USER_SIGNOUT', 'USER_OAUTH_SIGNOUT', 'USER_OAUTH_UNLINK', 'USER_UPDATE_PASSWORD'];

syncTypes.forEach(function (tp) {
  types[tp] = tp;
});

asyncTypes.forEach(function (tp) {
  types[tp + '_START'] = tp + '_START';
  types[tp + '_END'] = tp + '_END';
  types[tp + '_ERROR'] = tp + '_START';
});

Object.keys(types).forEach(function (key) {
  types[key] = key;
});

exports.default = types;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordField = function (_Component) {
  _inherits(PasswordField, _Component);

  function PasswordField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PasswordField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
      event.preventDefault();
      var payload = {};
      payload[_this.props.name] = event.target.value;
      _this.props.setSubmitInfo(payload);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PasswordField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          placeholder = _props.placeholder;

      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'ui left icon input' },
          _react2.default.createElement('i', { className: 'lock icon' }),
          _react2.default.createElement('input', _extends({ onChange: this.onChange, value: this.props.submitInfo[this.props.name] || '', type: 'password' }, { name: name, placeholder: placeholder }))
        )
      );
    }
  }]);

  return PasswordField;
}(_react.Component);

PasswordField.propTypes = {
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired,
  user: _propTypes2.default.object.isRequired,
  submitInfo: _propTypes2.default.object.isRequired,
  setSubmitInfo: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user,
    submitInfo: state.user.toJSON().submitInfo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSubmitInfo: function setSubmitInfo(payload) {
      _userActions2.default.setSubmitInfo(dispatch, payload);
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PasswordField);

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paramsValidator = __webpack_require__(531);

var _paramsValidator2 = _interopRequireDefault(_paramsValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  $(document).ready(function () {
    // form validation
    $('.ui.form').form({
      fields: {
        email: {
          identifier: 'email',
          rules: [{
            type: 'empty',
            prompt: '请输入E-mail'
          }, {
            type: 'regExp',
            value: _paramsValidator2.default.validationRules.username.regex,
            prompt: '请输入有效的 E-mail'
          }]
        },
        password: {
          identifier: 'password',
          rules: [{
            type: 'empty',
            prompt: '请输入6-20位密码'
          }, {
            type: 'regExp',
            value: _paramsValidator2.default.validationRules.password.regex,
            prompt: '密码长度在6~20之间，只能包含大小写字母和数字'
          }]
        },
        old_password: {
          identifier: 'old_password',
          rules: [{
            type: 'empty',
            prompt: '请输入6-18位密码'
          }, {
            type: 'regExp',
            value: _paramsValidator2.default.validationRules.password.regex,
            prompt: '密码长度在6~20之间，只能包含大小写字母和数字'
          }]
        },
        new_password: {
          identifier: 'new_password',
          rules: [{
            type: 'empty',
            prompt: '请输入6-18位密码'
          }, {
            type: 'regExp',
            value: _paramsValidator2.default.validationRules.password.regex,
            prompt: '密码长度在6~20之间，只能包含大小写字母和数字'
          }]
        },
        confirm_password: {
          identifier: 'confirm_password',
          rules: [{
            type: 'empty',
            prompt: '请再次输入密码确认'
          }, {
            type: 'match[password]',
            prompt: '两次输入密码应该保持一致'
          }]
        },
        confirm_new_password: {
          identifier: 'confirm_new_password',
          rules: [{
            type: 'empty',
            prompt: '请再次输入新密码确认'
          }, {
            type: 'match[new_password]',
            prompt: '两次输入的新密码应该保持一致'
          }]
        }
      }
    });
  });
};

exports.default = init;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailField = function (_Component) {
  _inherits(EmailField, _Component);

  function EmailField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmailField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmailField.__proto__ || Object.getPrototypeOf(EmailField)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
      event.preventDefault();
      _this.props.setSubmitInfo(event.target.value.toLowerCase());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmailField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'ui left icon email input' },
          _react2.default.createElement('i', { className: 'user icon' }),
          _react2.default.createElement('input', {
            onChange: this.onChange, type: 'text', name: 'email', placeholder: '\u90AE\u7BB1',
            value: this.props.submitInfo.username || ''
          })
        )
      );
    }
  }]);

  return EmailField;
}(_react.Component);

EmailField.propTypes = {
  user: _propTypes2.default.object.isRequired,
  submitInfo: _propTypes2.default.object.isRequired,
  setSubmitInfo: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user,
    submitInfo: state.user.toJSON().submitInfo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSubmitInfo: function setSubmitInfo(username) {
      _userActions2.default.setSubmitInfo(dispatch, {
        username: username
      });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EmailField);

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OAuthProviders = function OAuthProviders() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "a",
      { href: "/oauth/luanch/qq" },
      _react2.default.createElement("i", { className: "qq yellow icon" }),
      "QQ"
    ),
    ' | ',
    _react2.default.createElement(
      "a",
      { href: "" },
      _react2.default.createElement("i", { className: "wechat grey icon" }),
      "\u5FAE\u4FE1"
    ),
    ' | ',
    _react2.default.createElement(
      "a",
      { href: "" },
      _react2.default.createElement("i", { className: "weibo grey icon" }),
      "\u5FAE\u535A"
    ),
    ' | ',
    _react2.default.createElement(
      "a",
      { href: "" },
      _react2.default.createElement("i", { className: "paypal grey icon" }),
      "\u652F\u4ED8\u5B9D"
    )
  );
};

exports.default = OAuthProviders;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QQInfo = function (_Component) {
  _inherits(QQInfo, _Component);

  function QQInfo() {
    _classCallCheck(this, QQInfo);

    return _possibleConstructorReturn(this, (QQInfo.__proto__ || Object.getPrototypeOf(QQInfo)).apply(this, arguments));
  }

  _createClass(QQInfo, [{
    key: 'render',
    value: function render() {
      var oauthUser = this.props.oauthUser;

      return _react2.default.createElement(
        'div',
        { className: 'ui segment ' + (this.props.busy ? 'loading' : '') },
        _react2.default.createElement(
          'button',
          { className: 'right floated ui tiny button', onClick: this.props.oauth_signout },
          '\u6CE8\u9500'
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement('img', { className: 'left floated ui image', alt: '',
            style: { marginTop: '0px' },
            src: oauthUser.profile.figureurl_qq_1
          }),
          _react2.default.createElement(
            'div',
            { className: 'header' },
            oauthUser.profile.nickname
          ),
          '\u6765\u81EA\uFF1A\u817E\u8BAFQQ'
        )
      );
    }
  }]);

  return QQInfo;
}(_react.Component);

QQInfo.propTypes = {
  oauthUser: _propTypes2.default.object.isRequired,
  oauth_signout: _propTypes2.default.func.isRequired,
  busy: _propTypes2.default.bool.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    oauthUser: state.user.toJSON().oauthUser,
    busy: state.asyncStatus.toJSON().USER_OAUTH_SIGNOUT_BUSY
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    oauth_signout: function oauth_signout() {
      dispatch(_userActions2.default.oauth_signout());
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(QQInfo);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(408);


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(112);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(24);

__webpack_require__(449);

__webpack_require__(451);

var _Routes = __webpack_require__(458);

var _Routes2 = _interopRequireDefault(_Routes);

var _store = __webpack_require__(536);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootNode = document.getElementById('react');

_reactRedux.Provider.propTypes.children = _propTypes2.default.object;

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(_Routes2.default, null)
), rootNode);

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(452);

__webpack_require__(131);

var _reactTapEventPlugin = __webpack_require__(453);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _reactRouterTransition = __webpack_require__(192);

var _Message = __webpack_require__(510);

var _Message2 = _interopRequireDefault(_Message);

var _Home = __webpack_require__(511);

var _Home2 = _interopRequireDefault(_Home);

var _User = __webpack_require__(524);

var _User2 = _interopRequireDefault(_User);

var _NotFound = __webpack_require__(535);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterTransition.AnimatedSwitch,
        {
          atEnter: { opacity: 0 },
          atLeave: { opacity: 0 },
          atActive: { opacity: 1 }
        },
        _react2.default.createElement(_reactRouterDom.Route, { component: _Home2.default, path: '/', exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _User2.default, path: '/user' }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default, path: '/*' })
      ),
      _react2.default.createElement(_Message2.default, null)
    )
  );
};

exports.default = Routes;

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidUpdate = function (prevProps) {
      var message = _this.props.message;

      if (message.id !== prevProps.message.id) {
        if (message.header) {
          $(_this.messenger).transition({ animation: 'fade in', duration: '500ms' }).transition({ interval: 2000, animation: 'fade out', duration: '500ms' });
        }
      }
    }, _this.getStyle = function () {
      return {
        position: 'fixed',
        top: '40px',
        width: '360px',
        left: '50%',
        marginLeft: '-180px'
      };
    }, _this.getDetail = function () {
      var message = _this.props.message;

      if (message.details) {
        if (typeof message.details === 'string') {
          return _react2.default.createElement(
            'div',
            { className: 'content' },
            message.details
          );
        }
        if (_typeof(message.details) === 'object') {
          return _react2.default.createElement(
            'div',
            { className: 'ui list' },
            message.details.map(function (msg) {
              return _react2.default.createElement(
                'div',
                { key: Math.random(), className: 'ui item' },
                msg
              );
            })
          );
        }
      }
      return '';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var message = this.props.message;

      return _react2.default.createElement(
        'div',
        { ref: function ref(e) {
            return _this2.messenger = e;
          }, className: 'ui column', style: this.getStyle() },
        _react2.default.createElement(
          'div',
          { className: 'ui center aligned message ' + (message.header ? '' : 'hidden') + ' ' + message.status },
          _react2.default.createElement(
            'div',
            { className: 'header' },
            message.header
          ),
          this.getDetail()
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  message: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    message: state.asyncStatus.get('HEADER_MESSAGE').toJSON()
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Message);

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(64);

var _Footer = __webpack_require__(512);

var _Footer2 = _interopRequireDefault(_Footer);

var _FrontPanel = __webpack_require__(513);

var _FrontPanel2 = _interopRequireDefault(_FrontPanel);

var _HomeMenu = __webpack_require__(518);

var _HomeMenu2 = _interopRequireDefault(_HomeMenu);

var _WebApps = __webpack_require__(519);

var _WebApps2 = _interopRequireDefault(_WebApps);

var _Slogan = __webpack_require__(520);

var _Slogan2 = _interopRequireDefault(_Slogan);

var _Slogan3 = __webpack_require__(521);

var _Slogan4 = _interopRequireDefault(_Slogan3);

var _DesktopApps = __webpack_require__(522);

var _DesktopApps2 = _interopRequireDefault(_DesktopApps);

var _Others = __webpack_require__(523);

var _Others2 = _interopRequireDefault(_Others);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      $('#main').visibility({
        once: false,
        onTopVisible: function onTopVisible() {
          $('.home.menu').css({ background: 'transparent', height: '150px', borderBottom: '0px' });
        },
        onTopPassed: function onTopPassed() {
          $('.home.menu').css({ background: '', height: '64px', borderBottom: '1px solid white' }).addClass('teal');
        }
      });

      $('.masthead').visibility({
        once: false,
        onUpdate: function onUpdate(calculations) {
          $('.front_panel_overlay').css({ opacity: 0.6 + calculations.percentagePassed * 0.4 });
        }
      });
    }, _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'home-route main-route-content' },
        _react2.default.createElement(
          'div',
          { className: 'home-content' },
          _react2.default.createElement(_FrontPanel2.default, null),
          _react2.default.createElement('div', { ref: function ref(e) {
              return _this.main = e;
            }, id: 'main', style: { margin: '-300px 0 0 0', width: '100%', position: 'absolute' } }),
          _react2.default.createElement(_WebApps2.default, null),
          _react2.default.createElement(_Slogan2.default, null),
          _react2.default.createElement(_DesktopApps2.default, null),
          _react2.default.createElement(_Slogan4.default, null),
          _react2.default.createElement(_Others2.default, null),
          _react2.default.createElement(_Footer2.default, null)
        ),
        _react2.default.createElement(_HomeMenu2.default, null)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_react.Component);

Home.propTypes = {
  location: _propTypes2.default.object.isRequired
};
exports.default = (0, _reactRouter.withRouter)(Home);

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui inverted vertical footer teal segment" },
        _react2.default.createElement(
          "div",
          { className: "ui container" },
          _react2.default.createElement(
            "div",
            { className: "ui stackable inverted divided equal height stackable grid" },
            _react2.default.createElement(
              "div",
              { className: "three wide column" },
              _react2.default.createElement(
                "h4",
                { className: "ui inverted header" },
                "Source"
              ),
              _react2.default.createElement(
                "div",
                { className: "ui inverted link list" },
                _react2.default.createElement(
                  "a",
                  { className: "item", href: "http://www.github.com/ccnuyan/starcedu_auth/tree/develop" },
                  "Github"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "three wide column" },
              _react2.default.createElement(
                "h4",
                { className: "ui inverted header" },
                "Tech & Tools"
              ),
              _react2.default.createElement(
                "div",
                { className: "ui inverted link list" },
                _react2.default.createElement(
                  "a",
                  { className: "item", href: "https://reactjs.org/" },
                  "React.js"
                ),
                _react2.default.createElement(
                  "a",
                  { className: "item", href: "https://semantic-ui.com/modules/transition.html" },
                  "Semantic UI"
                ),
                _react2.default.createElement(
                  "a",
                  { className: "item", href: "https://reacttraining.com/react-router/" },
                  "React Router"
                ),
                _react2.default.createElement(
                  "a",
                  { className: "item", href: "https://redux.js.org/docs/introduction/" },
                  "Redux"
                ),
                _react2.default.createElement(
                  "a",
                  { className: "item", href: "https://regexr.com/" },
                  "Regexr"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "seven wide column" },
              _react2.default.createElement(
                "h4",
                { className: "ui inverted header" },
                "Tools"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Extra space for a call to action inside the footer that could help re-engage users."
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  // prop: PropTypes,
};
exports.default = Footer;

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouter = __webpack_require__(64);

var _config = __webpack_require__(514);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrontPanel = function (_Component) {
  _inherits(FrontPanel, _Component);

  function FrontPanel() {
    _classCallCheck(this, FrontPanel);

    return _possibleConstructorReturn(this, (FrontPanel.__proto__ || Object.getPrototypeOf(FrontPanel)).apply(this, arguments));
  }

  _createClass(FrontPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui inverted vertical masthead center aligned transparent segment' },
        _react2.default.createElement(
          'div',
          { className: 'front_panel_back' },
          _react2.default.createElement('div', { className: 'front_panel_overlay' }),
          _react2.default.createElement(
            'div',
            { className: 'ui text container' },
            _react2.default.createElement(
              'h1',
              { className: 'ui inverted header' },
              _config2.default.title
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Do whatever you want when you want to.'
            )
          )
        )
      );
    }
  }]);

  return FrontPanel;
}(_react.Component);

FrontPanel.propTypes = {
  history: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user
  };
};

var mapDispatchToProps = {};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FrontPanel));

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(515);

var _config2 = _interopRequireDefault(_config);

var _config3 = __webpack_require__(516);

var _config4 = _interopRequireDefault(_config3);

var _config5 = __webpack_require__(517);

var _config6 = _interopRequireDefault(_config5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configVar = {}; // import chalk from 'chalk';

if (false) {
  configVar = _config4.default;
  configVar.env = 'production';
} else if (false) {
  configVar = _config6.default;
  configVar.env = 'test';
} else {
  configVar = _config2.default;
  configVar.env = 'development';
}
var config = configVar;
global.config = config;
exports.default = config;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mode: 'development',
  title: 'starC教育-dev',
  port: 8000,
  domain: 'www.syncollege.com',
  auth: {
    session: {
      secret: '12345678'
    },
    jwt: {
      secret: '12345678',
      expiresIn: '14d'
    },
    cookie: {
      name: 'authorization',
      maxage: 7 * 24 * 3600 * 1000
    }
  },
  oauth: {
    qq: {
      app_id: '101271080',
      app_key: 'c89c950759846307af5a8425bb9a3a64',
      pcCodeHost: 'https://graph.qq.com/oauth2.0/authorize',
      pcTokenHost: 'https://graph.qq.com/oauth2.0/token',
      infoHost: 'https://graph.qq.com/user/get_user_info',
      pcOpenidHost: 'https://graph.qq.com/oauth2.0/me',
      redirect_uri: 'http://www.syncollege.com/oauth/callback/qq'
    }
  },
  dbname: 'starcedu_auth',
  pg: {
    user: Object({"NODE_ENV":"development"}).DBUSER ? Object({"NODE_ENV":"development"}).DBUSER : 'postgres',
    database: Object({"NODE_ENV":"development"}).DBDATABASE ? Object({"NODE_ENV":"development"}).DBDATABASE : 'postgres',
    password: Object({"NODE_ENV":"development"}).DBPASSWORD ? Object({"NODE_ENV":"development"}).DBPASSWORD : '',
    host: Object({"NODE_ENV":"development"}).DBHOST ? Object({"NODE_ENV":"development"}).DBHOST : 'localhost',
    port: Object({"NODE_ENV":"development"}).DBPORT ? Object({"NODE_ENV":"development"}).DBPORT : 5432,
    max: 10,
    idleTimeoutMillis: 30000
  },
  resources: {
    stylesheets: {
      normalize: '//cdn.bootcss.com/normalize/6.0.0/normalize.min.css',
      semantic: '/static/semantic/semantic.min.css'
    },
    scripts: {
      jquery: '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
      html5shiv: '//cdn.bootcss.com/html5shiv/r29/html5.min.js',
      classlist: '//cdn.bootcss.com/classlist/2014.01.31/classList.min.js',
      semantic: '/static/semantic/semantic.min.js'
    }
  }
};

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mode: 'production',
  title: 'starC教育',
  port: 8000,
  domain: 'www.syncollege.com',
  auth: {
    session: {
      secret: '12345678'
    },
    jwt: {
      secret: '12345678',
      expiresIn: '14d'
    },
    cookie: {
      name: 'authorization',
      maxage: 7 * 24 * 3600 * 1000
    }
  },
  oauth: {
    qq: {
      app_id: '101271080',
      app_key: 'c89c950759846307af5a8425bb9a3a64',
      pcCodeHost: 'https://graph.qq.com/oauth2.0/authorize',
      pcTokenHost: 'https://graph.qq.com/oauth2.0/token',
      infoHost: 'https://graph.qq.com/user/get_user_info',
      pcOpenidHost: 'https://graph.qq.com/oauth2.0/me',
      redirect_uri: 'http://www.syncollege.com/oauth/callback/qq'
    }
  },
  dbname: 'starcedu_auth',
  pg: {
    user: Object({"NODE_ENV":"development"}).DBUSER ? Object({"NODE_ENV":"development"}).DBUSER : 'postgres',
    database: Object({"NODE_ENV":"development"}).DBDATABASE ? Object({"NODE_ENV":"development"}).DBDATABASE : 'postgres',
    password: Object({"NODE_ENV":"development"}).DBPASSWORD ? Object({"NODE_ENV":"development"}).DBPASSWORD : '',
    host: Object({"NODE_ENV":"development"}).DBHOST ? Object({"NODE_ENV":"development"}).DBHOST : 'database',
    port: Object({"NODE_ENV":"development"}).DBPORT ? Object({"NODE_ENV":"development"}).DBPORT : 5432,
    max: 10,
    idleTimeoutMillis: 30000
  },
  resources: {
    stylesheets: {
      normalize: '//cdn.bootcss.com/normalize/6.0.0/normalize.min.css',
      semantic: '/static/semantic/semantic.min.css'
    },
    scripts: {
      jquery: '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
      html5shiv: '//cdn.bootcss.com/html5shiv/r29/html5.min.js',
      classlist: '//cdn.bootcss.com/classlist/2014.01.31/classList.min.js',
      semantic: '/static/semantic/semantic.min.js'
    }
  }
};

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// config for database test in remote server;
exports.default = {
  mode: 'test',
  title: 'starC教育-test',
  port: 8001,
  domain: 'www.syncollege.com',
  auth: {
    session: {
      secret: '12345678'
    },
    jwt: {
      secret: '12345678',
      expiresIn: '14d'
    },
    cookie: {
      name: 'authorization',
      maxage: 7 * 24 * 3600 * 1000
    }
  },
  oauth: {
    qq: {
      app_id: '101271080',
      app_key: 'c89c950759846307af5a8425bb9a3a64',
      pcCodeHost: 'https://graph.qq.com/oauth2.0/authorize',
      pcTokenHost: 'https://graph.qq.com/oauth2.0/token',
      infoHost: 'https://graph.qq.com/user/get_user_info',
      pcOpenidHost: 'https://graph.qq.com/oauth2.0/me',
      redirect_uri: 'http://www.syncollege.com/oauth/callback/qq'
    }
  },
  dbname: 'starcedu_auth',
  pg: {
    user: Object({"NODE_ENV":"development"}).DBUSER ? Object({"NODE_ENV":"development"}).DBUSER : 'postgres',
    database: Object({"NODE_ENV":"development"}).DBDATABASE ? Object({"NODE_ENV":"development"}).DBDATABASE : 'postgres',
    password: Object({"NODE_ENV":"development"}).DBPASSWORD ? Object({"NODE_ENV":"development"}).DBPASSWORD : '',
    host: Object({"NODE_ENV":"development"}).DBHOST ? Object({"NODE_ENV":"development"}).DBHOST : 'database-test',
    port: Object({"NODE_ENV":"development"}).DBPORT ? Object({"NODE_ENV":"development"}).DBPORT : 5432,
    max: 2,
    idleTimeoutMillis: 30000
  },
  resources: {
    stylesheets: {
      normalize: '//cdn.bootcss.com/normalize/6.0.0/normalize.min.css',
      semantic: '/static/semantic/semantic.min.css'
    },
    scripts: {
      jquery: '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
      html5shiv: '//cdn.bootcss.com/html5shiv/r29/html5.min.js',
      classlist: '//cdn.bootcss.com/classlist/2014.01.31/classList.min.js',
      semantic: '/static/semantic/semantic.min.js'
    }
  }
};

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouter = __webpack_require__(64);

var _reactRouterDom = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedMenu = function (_Component) {
  _inherits(FixedMenu, _Component);

  function FixedMenu() {
    _classCallCheck(this, FixedMenu);

    return _possibleConstructorReturn(this, (FixedMenu.__proto__ || Object.getPrototypeOf(FixedMenu)).apply(this, arguments));
  }

  _createClass(FixedMenu, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement(
        'div',
        { className: 'ui huge inverted secondary home  menu', style: { margin: 0, borderBottom: '1px solid white' } },
        _react2.default.createElement(
          'div',
          { className: 'ui container' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'active icon item', to: '/' },
            _react2.default.createElement(
              'div',
              { className: 'ui content' },
              _react2.default.createElement('i', { className: 'icon home' }),
              '\u4E3B\u9875'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'icon item', href: '/apps/notebook' },
            _react2.default.createElement(
              'div',
              { className: 'ui content' },
              _react2.default.createElement('i', { className: 'icon book' }),
              '\u7B14\u8BB0'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'icon item', href: '/apps/disk' },
            _react2.default.createElement(
              'div',
              { className: 'ui content' },
              _react2.default.createElement('i', { className: 'icon cloud outline' }),
              '\u7F51\u76D8'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right menu' },
            user.success ? _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'icon item', to: '/user/password' },
              _react2.default.createElement(
                'div',
                { className: 'ui content' },
                _react2.default.createElement('i', { className: 'icon user outline' }),
                user.username
              )
            ) : '',
            user.success ? _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'icon item', to: '/user/signout' },
              _react2.default.createElement(
                'div',
                { className: 'ui content' },
                _react2.default.createElement('i', { className: 'icon sign out' }),
                '\u767B\u51FA'
              )
            ) : '',
            user.success ? '' : _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'icon item', to: '/user/signin' },
              _react2.default.createElement(
                'div',
                { className: 'ui content' },
                _react2.default.createElement('i', { className: 'icon sign in' }),
                '\u767B\u5165'
              )
            ),
            user.success ? '' : _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'icon item', to: '/user/signup' },
              _react2.default.createElement(
                'div',
                { className: 'ui content' },
                _react2.default.createElement('i', { className: 'icon smile' }),
                '\u6CE8\u518C'
              )
            )
          )
        )
      );
    }
  }]);

  return FixedMenu;
}(_react.Component);

FixedMenu.propTypes = {
  match: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user
  };
};

var mapDispatchToProps = {};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixedMenu));

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebApps = function (_Component) {
  _inherits(WebApps, _Component);

  function WebApps() {
    _classCallCheck(this, WebApps);

    return _possibleConstructorReturn(this, (WebApps.__proto__ || Object.getPrototypeOf(WebApps)).apply(this, arguments));
  }

  _createClass(WebApps, [{
    key: "render",


    // componentDidMount = () => {
    //   $('.webapp')
    //     .visibility({
    //       once: true,
    //       // update size when new content loads
    //       observeChanges: true,
    //       // load content on bottom edge visible
    //       onTopVisible() {
    //         // loads a max of 5 times
    //         $('.webapp .card')
    //         .transition({
    //           animation: 'pulse',
    //           interval: 300,
    //         });
    //       },
    //     });
    // }

    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui stripe vertical webapp segment" },
        _react2.default.createElement(
          "div",
          { className: "ui container" },
          _react2.default.createElement(
            "h1",
            { className: "ui header" },
            "Web Apps"
          ),
          _react2.default.createElement(
            "div",
            { className: "ui three cards" },
            _react2.default.createElement(
              "div",
              { className: "ui green card" },
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "div",
                  { className: "header" },
                  "\u5907\u8BFE\u7B14\u8BB0"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "h4",
                  { className: "ui sub header" },
                  "Activity"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "ui small feed" },
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Elliot Fu"
                        ),
                        " added ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Jenny Hess"
                        ),
                        " to the project"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Stevie Feliciano"
                        ),
                        " was added as an ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Administrator"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Helen Troy"
                        ),
                        " added two pictures"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "extra content" },
                _react2.default.createElement(
                  "a",
                  { className: "ui button", href: "/apps/notebook" },
                  "Go"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "ui red card" },
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "div",
                  { className: "header" },
                  "\u8111\u56FE"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "h4",
                  { className: "ui sub header" },
                  "Activity"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "ui small feed" },
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Elliot Fu"
                        ),
                        " added ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Jenny Hess"
                        ),
                        " to the project"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Stevie Feliciano"
                        ),
                        " was added as an ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Administrator"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Helen Troy"
                        ),
                        " added two pictures"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "extra content" },
                _react2.default.createElement(
                  "a",
                  { className: "ui button" },
                  "Go"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "ui blue card" },
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "div",
                  { className: "header" },
                  "\u7F51\u76D8\u7A7A\u95F4"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "h4",
                  { className: "ui sub header" },
                  "Activity"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "ui small feed" },
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Elliot Fu"
                        ),
                        " added ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Jenny Hess"
                        ),
                        " to the project"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Stevie Feliciano"
                        ),
                        " was added as an ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Administrator"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Helen Troy"
                        ),
                        " added two pictures"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "extra content" },
                _react2.default.createElement(
                  "button",
                  { className: "ui button", href: "/apps/disk" },
                  "Go"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return WebApps;
}(_react.Component);

exports.default = WebApps;

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slogan1 = function (_Component) {
  _inherits(Slogan1, _Component);

  function Slogan1() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slogan1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slogan1.__proto__ || Object.getPrototypeOf(Slogan1)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      $('.ui.progress').progress();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slogan1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui vertical stripe segment' },
        _react2.default.createElement(
          'div',
          { className: 'ui text container' },
          _react2.default.createElement(
            'h1',
            { className: 'ui header' },
            _react2.default.createElement('i', { className: 'huge icon bell' }),
            'Total Progress'
          ),
          _react2.default.createElement(
            'div',
            { 'data-percent': '40', className: 'ui white progress' },
            _react2.default.createElement(
              'div',
              { className: 'bar' },
              _react2.default.createElement(
                'div',
                { className: 'progress' },
                '40%'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'data-percent': '60', className: 'ui yellow progress' },
            _react2.default.createElement(
              'div',
              { className: 'bar' },
              _react2.default.createElement('div', { className: 'progress' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'label' },
              '\u8BA4\u8BC1\u7CFB\u7EDF&\u670D\u52A1'
            )
          ),
          _react2.default.createElement(
            'div',
            { 'data-percent': '30', className: 'ui green progress' },
            _react2.default.createElement(
              'div',
              { className: 'bar' },
              _react2.default.createElement('div', { className: 'progress' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'label' },
              '\u7F51\u76D8\u7CFB\u7EDF&\u4E91\u5B58\u50A8\u670D\u52A1'
            )
          )
        )
      );
    }
  }]);

  return Slogan1;
}(_react.Component);

Slogan1.propTypes = {
  // prop: PropTypes,
};
exports.default = Slogan1;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slogan1 = function (_Component) {
  _inherits(Slogan1, _Component);

  function Slogan1() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slogan1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slogan1.__proto__ || Object.getPrototypeOf(Slogan1)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      $('.ui.accordion').accordion();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slogan1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui inverted vertical stripe teal segment' },
        _react2.default.createElement(
          'div',
          { className: 'ui text container' },
          _react2.default.createElement(
            'h1',
            { className: 'ui inverted header' },
            'FAQ'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui inverted accordion' },
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'dropdown icon' }),
              'What is a dog?'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'p',
                { className: 'transition hidden' },
                'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'dropdown icon' }),
              'What kinds of dogs are there?'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'p',
                { className: 'transition hidden' },
                'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'dropdown icon' }),
              'How do you acquire a dog?'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              _react2.default.createElement(
                'p',
                { className: 'transition visible' },
                'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
              ),
              _react2.default.createElement(
                'p',
                { className: 'transition visible' },
                'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.'
              )
            )
          )
        )
      );
    }
  }]);

  return Slogan1;
}(_react.Component);

exports.default = Slogan1;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopApps = function (_Component) {
  _inherits(DesktopApps, _Component);

  function DesktopApps() {
    _classCallCheck(this, DesktopApps);

    return _possibleConstructorReturn(this, (DesktopApps.__proto__ || Object.getPrototypeOf(DesktopApps)).apply(this, arguments));
  }

  _createClass(DesktopApps, [{
    key: "render",


    // componentDidMount = () => {
    //   $('.desktopapp')
    //   .visibility({
    //     once: true,
    //     // update size when new content loads
    //     observeChanges: true,
    //     // load content on bottom edge visible
    //     onTopVisible() {
    //       // loads a max of 5 times
    //       $('.desktopapp .card')
    //       .transition({
    //         animation: 'pulse',
    //         interval: 300,
    //       });
    //     },
    //   });
    // }


    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui stripe vertical desktopapp segment" },
        _react2.default.createElement(
          "div",
          { className: "ui container" },
          _react2.default.createElement(
            "h1",
            { className: "header" },
            "\u684C\u9762 Apps"
          ),
          _react2.default.createElement(
            "div",
            { className: "ui two cards" },
            _react2.default.createElement(
              "div",
              { className: "ui pink card" },
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "div",
                  { className: "header" },
                  "\u6559\u5E08\u7AEF"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "h4",
                  { className: "ui sub header" },
                  "Activity"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "ui small feed" },
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Elliot Fu"
                        ),
                        " added ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Jenny Hess"
                        ),
                        " to the project"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Stevie Feliciano"
                        ),
                        " was added as an ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Administrator"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Helen Troy"
                        ),
                        " added two pictures"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "extra content" },
                _react2.default.createElement(
                  "button",
                  { className: "ui button" },
                  "Download"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "ui teal card" },
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "div",
                  { className: "header" },
                  "\u5B66\u751F\u7AEF"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "h4",
                  { className: "ui sub header" },
                  "Activity"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "ui small feed" },
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Elliot Fu"
                        ),
                        " added ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Jenny Hess"
                        ),
                        " to the project"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Stevie Feliciano"
                        ),
                        " was added as an ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Administrator"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Helen Troy"
                        ),
                        " added two pictures"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "extra content" },
                _react2.default.createElement(
                  "button",
                  { className: "ui button" },
                  "Download"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DesktopApps;
}(_react.Component);

exports.default = DesktopApps;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Others = function (_Component) {
  _inherits(Others, _Component);

  function Others() {
    _classCallCheck(this, Others);

    return _possibleConstructorReturn(this, (Others.__proto__ || Object.getPrototypeOf(Others)).apply(this, arguments));
  }

  _createClass(Others, [{
    key: "render",


    // componentDidMount = () => {
    //   $('.otherapp')
    //     .visibility({
    //       once: true,
    //       // update size when new content loads
    //       observeChanges: true,
    //       // load content on bottom edge visible
    //       onTopVisible() {
    //         // loads a max of 5 times
    //         $('.otherapp .card')
    //         .transition({
    //           animation: 'pulse',
    //           interval: 300,
    //         });
    //       },
    //     });
    // }

    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ui stripe vertical otherapp segment" },
        _react2.default.createElement(
          "div",
          { className: "ui container" },
          _react2.default.createElement(
            "h1",
            { className: "header" },
            "\u5176\u4ED6 Apps"
          ),
          _react2.default.createElement(
            "div",
            { className: "ui three cards" },
            _react2.default.createElement(
              "div",
              { className: "ui red card" },
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "div",
                  { className: "header" },
                  "\u5B66\u4E60\u7ECF\u5386\u5206\u6790\u7CFB\u7EDF"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "h4",
                  { className: "ui sub header" },
                  "Activity"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "ui small feed" },
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Elliot Fu"
                        ),
                        " added ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Jenny Hess"
                        ),
                        " to the project"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Stevie Feliciano"
                        ),
                        " was added as an ",
                        _react2.default.createElement(
                          "a",
                          null,
                          "Administrator"
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "event" },
                    _react2.default.createElement(
                      "div",
                      { className: "content" },
                      _react2.default.createElement(
                        "div",
                        { className: "summary" },
                        _react2.default.createElement(
                          "a",
                          null,
                          "Helen Troy"
                        ),
                        " added two pictures"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "extra content" },
                _react2.default.createElement(
                  "button",
                  { className: "ui button" },
                  "Go"
                )
              )
            )
          )
        ),
        _react2.default.createElement("div", { className: "placeholder", style: { margin: '250px' } })
      );
    }
  }]);

  return Others;
}(_react.Component);

exports.default = Others;

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(39);

var _reactRouterTransition = __webpack_require__(192);

var _Signin = __webpack_require__(525);

var _Signin2 = _interopRequireDefault(_Signin);

var _Signup = __webpack_require__(532);

var _Signup2 = _interopRequireDefault(_Signup);

var _Signout = __webpack_require__(533);

var _Signout2 = _interopRequireDefault(_Signout);

var _Password = __webpack_require__(534);

var _Password2 = _interopRequireDefault(_Password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var location = _this.props.location;

      return _react2.default.createElement(
        _reactRouterTransition.AnimatedSwitch,
        {
          atEnter: { opacity: 0 },
          atLeave: { opacity: 0 },
          atActive: { opacity: 1 },
          className: 'user-form main-route-content'
        },
        _react2.default.createElement(_reactRouterDom.Route, { location: location, component: _Signin2.default, path: '/user/signin', exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { location: location, component: _Signup2.default, path: '/user/signup', exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { location: location, component: _Signout2.default, path: '/user/signout', exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { location: location, component: _Password2.default, path: '/user/password', exact: true })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_react.Component);

Home.propTypes = {
  location: _propTypes2.default.object.isRequired
};
exports.default = (0, _reactRouterDom.withRouter)(Home);

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(39);

var _EmailField = __webpack_require__(201);

var _EmailField2 = _interopRequireDefault(_EmailField);

var _PasswordField = __webpack_require__(128);

var _PasswordField2 = _interopRequireDefault(_PasswordField);

var _OAuthProviders = __webpack_require__(202);

var _OAuthProviders2 = _interopRequireDefault(_OAuthProviders);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

var _QQInfo = __webpack_require__(203);

var _QQInfo2 = _interopRequireDefault(_QQInfo);

var _initFormValidation = __webpack_require__(129);

var _initFormValidation2 = _interopRequireDefault(_initFormValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Signin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.onFormSubmit = function (event) {
      event.preventDefault();
      if ($(_this.form).form('is valid')) {
        _this.props.signin(_this.props.submitInfo);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Signin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _initFormValidation2.default)();
      this.props.setSubmitMode();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var user = this.props.user;

      if (user.success) {
        if (!user.callback || user.callback === '/') {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/' } });
        }
        return window.location.replace(user.callback);
      }
      return _react2.default.createElement(
        'div',
        { className: 'user-form-content' },
        _react2.default.createElement(
          'h2',
          { className: 'ui teal image header' },
          _react2.default.createElement('img', { src: '/static/images/logo.png', className: 'image', alt: '', style: { borderRadius: '4px' } }),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            '登入'
          )
        ),
        this.props.oauthUser.id ? _react2.default.createElement(_QQInfo2.default, null) : '',
        _react2.default.createElement('div', { className: 'ui divider' }),
        _react2.default.createElement(
          'form',
          { ref: function ref(e) {
              return _this2.form = e;
            }, className: 'ui form ' + (this.props.busy ? 'loading' : ''), onSubmit: this.onFormSubmit },
          _react2.default.createElement(
            'div',
            { className: 'ui segment' },
            _react2.default.createElement(_EmailField2.default, null),
            _react2.default.createElement(_PasswordField2.default, { name: 'password', placeholder: '\u5BC6\u7801' }),
            _react2.default.createElement(
              'button',
              { className: 'ui fluid teal submit button', type: 'submit' },
              '\u767B\u5165'
            )
          ),
          _react2.default.createElement('div', { className: 'ui error message' })
        ),
        _react2.default.createElement(_OAuthProviders2.default, null),
        _react2.default.createElement('div', { className: 'ui divider' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          '\u5C1A\u672A\u6CE8\u518C\uFF1F',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/user/signup' },
            '\u53BB\u6CE8\u518C!'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          '\u5FD8\u8BB0\u5BC6\u7801\uFF1F',
          _react2.default.createElement(
            'span',
            { to: '/user/signup' },
            '\u53BB\u627E\u56DE!(\u672A\u5B9E\u73B0)'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'ui right floated', to: '/' },
            '\u8FD4\u56DE\u4E3B\u9875'
          )
        )
      );
    }
  }]);

  return Signin;
}(_react.Component);

Signin.propTypes = {
  user: _propTypes2.default.object.isRequired,
  oauthUser: _propTypes2.default.object.isRequired,
  submitInfo: _propTypes2.default.object.isRequired,
  busy: _propTypes2.default.bool.isRequired,
  setSubmitMode: _propTypes2.default.func.isRequired,
  signin: _propTypes2.default.func.isRequired,
  location: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user,
    oauthUser: state.user.toJSON().oauthUser,
    submitInfo: state.user.toJSON().submitInfo,
    busy: state.asyncStatus.toJSON().USER_SIGNIN_BUSY
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signin: function signin(info) {
      dispatch(_userActions2.default.signin(info));
    },
    setSubmitMode: function setSubmitMode() {
      _userActions2.default.setSubmitMode(dispatch, 'signin');
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signin);

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHeaders = function getHeaders() {
  var headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('accept', 'application/json');
  return headers;
};

exports.default = {
  getHeaders: getHeaders
};

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(528);

var _config2 = _interopRequireDefault(_config);

var _config3 = __webpack_require__(529);

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import chalk from 'chalk';

var configVar = {};
if (false) {
  configVar = _config4.default;
  configVar.env = 'production';
} else {
  configVar = _config2.default;
  configVar.env = 'development';
}
var config = configVar;
exports.default = config;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  serviceBase: 'http://www.syncollege.com/'
};

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  serviceBase: 'http://www.syncollege.com/'
};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(127);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _utils = __webpack_require__(526);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(527);

var _config2 = _interopRequireDefault(_config);

var _messageMiddleware = __webpack_require__(530);

var _messageMiddleware2 = _interopRequireDefault(_messageMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _config2.default.serviceBase;

/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-return */

var signin = function signin(info) {
  return function (dispatch) {
    var payload = {
      method: 'POST',
      credentials: 'include',
      headers: _utils2.default.getHeaders(),
      body: JSON.stringify(info)
    };

    dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNIN_START }));

    fetch(base + 'api/user/signin', payload).then(function (res) {
      return res.json();
    }).then(function (ret) {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNIN_END, payload: ret }));
      return;
    }).catch(function () {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNIN_ERROR }));
      return;
    });
  };
};

var signup = function signup(info) {
  return function (dispatch) {
    var payload = {
      method: 'POST',
      credentials: 'include',
      headers: _utils2.default.getHeaders(),
      body: JSON.stringify(info)
    };

    dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNUP_START }));

    fetch(base + 'api/user/signup', payload).then(function (res) {
      return res.json();
    }).then(function (ret) {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNUP_END, payload: ret }));
      return;
    }).catch(function () {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNUP_ERROR }));
      return;
    });
  };
};

var signout = function signout() {
  return function (dispatch) {
    var payload = {
      method: 'GET',
      credentials: 'include',
      headers: _utils2.default.getHeaders()
    };

    dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNOUT_START }));

    fetch(base + 'api/user/signout', payload).then(function (res) {
      return res.json();
    }).then(function (ret) {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNOUT_END, payload: ret }));
      return;
    }).catch(function () {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_SIGNOUT_ERROR }));
      return;
    });
  };
};

var update_password = function update_password(info) {
  return function (dispatch) {
    var payload = {
      method: 'PUT',
      credentials: 'include',
      headers: _utils2.default.getHeaders(),
      body: JSON.stringify(info)
    };

    dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_UPDATE_PASSWORD_START }));

    fetch(base + 'api/user/update_password', payload).then(function (res) {
      return res.json();
    }).then(function (ret) {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_UPDATE_PASSWORD_END, payload: ret }));
      return;
    }).catch(function () {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_UPDATE_PASSWORD_ERROR }));
      return;
    });
  };
};

var oauth_signout = function oauth_signout() {
  return function (dispatch) {
    var payload = {
      method: 'GET',
      credentials: 'include',
      headers: _utils2.default.getHeaders()
    };

    dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_SIGNOUT_START }));

    fetch(base + 'api/oauth/signout', payload).then(function (res) {
      return res.json();
    }).then(function (ret) {
      if (ret.success) {
        dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_SIGNOUT_END, payload: ret }));
      } else {
        dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_SIGNOUT_ERROR }));
      }
      return;
    }).catch(function () {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_SIGNOUT_ERROR }));
      return;
    });
  };
};

var oauth_unlink = function oauth_unlink() {
  return function (dispatch) {
    var payload = {
      method: 'POST',
      credentials: 'include',
      headers: _utils2.default.getHeaders()
    };

    dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_UNLINK_START }));

    fetch(base + 'api/oauth/unlink', payload).then(function (res) {
      return res.json();
    }).then(function (ret) {
      if (ret.success) {
        dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_UNLINK_END, payload: ret }));
      } else {
        dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_UNLINK_ERROR }));
      }
      return;
    }).catch(function () {
      dispatch((0, _messageMiddleware2.default)({ type: _actionTypes2.default.USER_OAUTH_UNLINK_ERROR }));
      return;
    });
  };
};

var setSubmitMode = function setSubmitMode(dispatch, mode) {
  dispatch({
    type: _actionTypes2.default.USER_SET_SUBMIT_INFO,
    payload: {
      mode: mode
    }
  });
};

var setSubmitInfo = function setSubmitInfo(dispatch, info) {
  dispatch({
    type: _actionTypes2.default.USER_SET_SUBMIT_INFO,
    payload: info
  });
};

exports.default = {
  signin: signin,
  signup: signup,
  signout: signout,
  update_password: update_password,
  oauth_unlink: oauth_unlink,
  oauth_signout: oauth_signout,
  setSubmitMode: setSubmitMode,
  setSubmitInfo: setSubmitInfo
};

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-param-reassign */
var messageDict = {
  USER_SIGNUP_ERROR: function USER_SIGNUP_ERROR() {
    return {
      status: 'error',
      header: '注册失败',
      details: '这可能是由于网络问题造成的'
    };
  },
  USER_SIGNUP_END: function USER_SIGNUP_END(payload) {
    if (payload.code === 0) {
      return {
        status: 'success',
        header: '注册成功',
        details: '还等什么，可以开始尽情玩耍了'
      };
    }
    if (payload.code === 400) {
      return {
        status: 'error',
        header: '注册失败',
        details: '可能是由于该用户名已经被注册过了'
      };
    }
    return {
      status: 'error',
      header: '注册失败',
      details: '用户名/密码不符合要求'
    };
  },
  USER_SIGNIN_ERROR: function USER_SIGNIN_ERROR() {
    return {
      status: 'error',
      header: '登入失败',
      details: '这可能是由于网络问题造成的'
    };
  },
  USER_SIGNIN_END: function USER_SIGNIN_END(payload) {
    if (payload.code === 0) {
      return {
        status: 'success',
        header: '登入成功',
        details: '还等什么，可以开始尽情玩耍了'
      };
    }
    if (payload.code === 400) {
      return {
        status: 'error',
        header: '登入失败',
        details: '用户不存在或用户名/密码错误'
      };
    }
    return {
      status: 'error',
      header: '登入失败',
      details: '用户名/密码不符合要求'
    };
  },
  USER_SIGNOUT_ERROR: function USER_SIGNOUT_ERROR() {
    return {
      status: 'error',
      header: '登出失败',
      details: '这可能是由于网络问题造成的'
    };
  },
  USER_SIGNOUT_END: function USER_SIGNOUT_END(payload) {
    if (payload.code !== 0) {
      return {
        status: 'error',
        header: '登出失败',
        details: '这可能是由于服务器的错误造成的'
      };
    }
  },
  USER_UPDATE_PASSWORD_ERROR: function USER_UPDATE_PASSWORD_ERROR() {
    return {
      status: 'error',
      header: '更新密码失败',
      details: '这可能是由于网络问题造成的'
    };
  },
  USER_UPDATE_PASSWORD_END: function USER_UPDATE_PASSWORD_END(payload) {
    if (payload.code === 0) {
      return {
        status: 'success',
        header: '更新密码成功',
        details: '请使用新密码重新登入'
      };
    }
    if (payload.code === 400) {
      return {
        status: 'error',
        header: '更新密码失败',
        details: '请确保你的原始密码正确'
      };
    }
    return {
      status: 'error',
      header: '更新密码失败',
      details: '新密码不符合要求'
    };
  },
  USER_BIND_AUTHENTICATE_ERROR: function USER_BIND_AUTHENTICATE_ERROR() {
    return {
      status: 'error',
      header: '绑定失败',
      details: '这可能是由于网络问题造成的'
    };
  },
  USER_BIND_AUTHENTICATE_END: function USER_BIND_AUTHENTICATE_END(payload) {
    if (payload.success) {
      return {
        status: 'success',
        header: '绑定成功',
        details: '还等什么，可以开始尽情玩耍了'
      };
    }
    return {
      status: 'error',
      header: '绑定失败',
      details: ['请确保你已注册，并重新核对你的用户名和密码', '请确保没有重复绑定']
    };
  },
  USER_SIGNOUT: function USER_SIGNOUT() {
    return {
      status: 'success',
      header: '成功登出'
    };
  },
  USER_USERNAME_CHECK_ERROR: function USER_USERNAME_CHECK_ERROR() {
    return {
      status: 'error',
      inline: '用户名检查失败',
      details: '这可能是网络原因造成的，你可以尝试继续注册'
    };
  },
  USER_USERNAME_CHECK_END: function USER_USERNAME_CHECK_END(payload) {
    if (payload.valid) {
      return {
        status: 'success',
        inline: '你不能使用该用户名'
      };
    }
    return {
      status: 'error',
      inline: '你不能使用该用户名',
      details: '这可能是由于已经有人使用该用户名注册了'
    };
  },
  USER_GET_OAUTH_INFO_END: function USER_GET_OAUTH_INFO_END() {
    return {
      status: 'success',
      inline: '获取第三方登录信息完成'
    };
  },
  USER_GET_OAUTH_INFO_ERROR: function USER_GET_OAUTH_INFO_ERROR() {
    return {
      status: 'error',
      inline: '获取第三方登录信息失败',
      details: '这可能是网络原因造成的'
    };
  }
};

// this is a function to generate the action parameter

exports.default = function (_ref) {
  var type = _ref.type,
      payload = _ref.payload;

  var handler = messageDict[type];
  if (handler) {
    return {
      type: type,
      payload: _extends({}, payload, {
        ui_message: handler(payload) || {}
      })
    };
  }
  console.log('no message handler found for type: ' + type); // eslint-disable-line no-console
  return { type: type, payload: payload };
};

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validationRules = {
  username: {
    beforeVal: function beforeVal(val) {
      return val.toLowerCase();
    },
    regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, //eslint-disable-line
    emptyCode: 101,
    code: 102
  },
  password: {
    regex: /^[A-Za-z0-9]{6,20}$/,
    emptyCode: 111,
    code: 112
  },
  old_password: {
    regex: /^[A-Za-z0-9]{6,20}$/,
    emptyCode: 121,
    code: 122
  },
  new_password: {
    regex: /^[A-Za-z0-9]{6,20}$/,
    emptyCode: 131,
    code: 132
  },
  bind_user_id: {
    emptyCode: 141
  },
  oauth_user_id: {
    emptyCode: 151
  },
  unique_provider_id: {
    emptyCode: 161
  },
  provider: {
    emptyCode: 171
  },
  profile: {
    emptyCode: 181
  }
};

var validate = function validate(payload, nonNullParamsArray) {
  var ret = {
    code: 0,
    message: ''
  };

  Object.keys(payload).forEach(function (k) {
    if (payload[k] && typeof payload[k] === 'string') {
      payload[k] = payload[k].trim(); // eslint-disable-line no-param-reassign
    }
    if (payload[k] && validationRules[k] && validationRules[k].beforeVal) {
      payload[k] = validationRules[k].beforeVal(payload[k]); // eslint-disable-line no-param-reassign
    }
  });

  nonNullParamsArray.every(function (k) {
    if (!validationRules[k]) {
      console.log('no validation rule for non-null parameter ' + k + ' in \n)' + JSON.stringify(payload, null, 2));
    } else if (!payload[k]) {
      ret.code = validationRules[k].emptyCode;
      ret.message = k + ' empty';
      return false;
    }
    return true;
  });

  if (ret.code !== 0) {
    return ret;
  }

  Object.keys(payload).every(function (k) {
    if (!validationRules[k]) {
      // console.log(`no validation rule for parameter ${k} in \n)${JSON.stringify(payload, null, 2)}`);
    } else if (!validationRules[k].regex) {
      // console.log(`no regex rule for parameter ${k}`);
    } else if (!validationRules[k].regex.test(payload[k])) {
      ret.code = validationRules[k].code;
      ret.message = 'provided ' + k + ' illigal';
      return false;
    }
    return true;
  });

  return ret;
};

exports.default = {
  validate: validate,
  validationRules: validationRules
};

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(39);

var _EmailField = __webpack_require__(201);

var _EmailField2 = _interopRequireDefault(_EmailField);

var _PasswordField = __webpack_require__(128);

var _PasswordField2 = _interopRequireDefault(_PasswordField);

var _OAuthProviders = __webpack_require__(202);

var _OAuthProviders2 = _interopRequireDefault(_OAuthProviders);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

var _QQInfo = __webpack_require__(203);

var _QQInfo2 = _interopRequireDefault(_QQInfo);

var _initFormValidation = __webpack_require__(129);

var _initFormValidation2 = _interopRequireDefault(_initFormValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.onFormSubmit = function (event) {
      event.preventDefault();
      if ($(_this.form).form('is valid')) {
        _this.props.signup(_this.props.submitInfo);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Signup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _initFormValidation2.default)();
      this.props.setSubmitMode();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          user = _props.user,
          oauthUser = _props.oauthUser;

      if (user.success) {
        if (!user.callback || user.callback === '/') {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/' } });
        }
        return window.location.replace(user.callback);
      }
      return _react2.default.createElement(
        'div',
        { className: 'user-form-content' },
        _react2.default.createElement(
          'h2',
          { className: 'ui teal image header' },
          _react2.default.createElement('img', { src: '/static/images/logo.png', className: 'image', alt: '', style: { borderRadius: '4px' } }),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            oauthUser.id ? '注册' : '注册'
          )
        ),
        this.props.oauthUser.id ? _react2.default.createElement(_QQInfo2.default, null) : '',
        _react2.default.createElement('div', { className: 'ui divider' }),
        _react2.default.createElement(
          'form',
          { ref: function ref(e) {
              return _this2.form = e;
            }, className: 'ui form ' + (this.props.busy ? 'loading' : ''), onSubmit: this.onFormSubmit },
          _react2.default.createElement(
            'div',
            { className: 'ui segment' },
            _react2.default.createElement(_EmailField2.default, null),
            _react2.default.createElement(_PasswordField2.default, { name: 'password', placeholder: '\u5BC6\u7801' }),
            _react2.default.createElement(_PasswordField2.default, { name: 'confirm_password', placeholder: '\u786E\u8BA4\u5BC6\u7801' }),
            _react2.default.createElement(
              'button',
              { className: 'ui fluid teal submit button', type: 'submit' },
              '\u6CE8\u518C'
            )
          ),
          _react2.default.createElement('div', { className: 'ui error message' })
        ),
        _react2.default.createElement(_OAuthProviders2.default, null),
        _react2.default.createElement('div', { className: 'ui divider' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          '\u5DF2\u6CE8\u518C\u8FC7\uFF1F',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/user/signin', href: '' },
            this.props.oauthUser.id ? '绑定已有账户' : '去登入'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'ui right floated', to: '/' },
            '\u8FD4\u56DE\u4E3B\u9875'
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

Signup.propTypes = {
  history: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object.isRequired,
  oauthUser: _propTypes2.default.object.isRequired,
  submitInfo: _propTypes2.default.object.isRequired,
  signup: _propTypes2.default.func.isRequired,
  setSubmitMode: _propTypes2.default.func.isRequired,
  busy: _propTypes2.default.bool.isRequired,
  location: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user,
    oauthUser: state.user.toJSON().oauthUser,
    submitInfo: state.user.toJSON().submitInfo,
    busy: state.asyncStatus.toJSON().USER_SIGNUP_BUSY
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(info) {
      dispatch(_userActions2.default.signup(info));
    },
    setSubmitMode: function setSubmitMode() {
      _userActions2.default.setSubmitMode(dispatch, 'signup');
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signup);

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouter = __webpack_require__(64);

var _reactRouterDom = __webpack_require__(39);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signout = function (_Component) {
  _inherits(Signout, _Component);

  function Signout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Signout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signout.__proto__ || Object.getPrototypeOf(Signout)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.props.signout();
    }, _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'user-form-content' },
        _react2.default.createElement(
          'h2',
          { className: 'ui teal image header' },
          _react2.default.createElement('img', { src: '/static/images/logo.png', className: 'image', alt: '' }),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            '\u767B\u51FA'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui left aligned icon message' },
          _this.props.busy ? _react2.default.createElement('i', { className: 'notched circle loading icon' }) : _react2.default.createElement('i', { className: 'green check icon' }),
          _this.props.busy ? _react2.default.createElement(
            'div',
            { className: 'content', style: { textAlign: 'left' } },
            _react2.default.createElement(
              'div',
              { className: 'header' },
              '\u6B63\u5728\u767B\u51FA...'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u767B\u51FA\u540E\u4F1A\u8DF3\u8F6C\u81F3\u4E3B\u9875'
            )
          ) : _react2.default.createElement(
            'div',
            { className: 'content', style: { textAlign: 'left' } },
            _react2.default.createElement(
              'div',
              { className: 'header' },
              '\u5DF2\u767B\u51FA'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u6B63\u5728\u8DF3\u8F6C\u81F3\u4E3B\u9875'
            )
          )
        ),
        _react2.default.createElement('div', { className: 'ui divider' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'ui right floated', to: '/' },
            '\u7ACB\u523B\u8FD4\u56DE\u4E3B\u9875'
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Signout, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (!this.props.busy && prevProps.busy) {
        setTimeout(function () {
          _this2.props.history.push('/');
        }, 2000);
      }
    }
  }]);

  return Signout;
}(_react.Component);

Signout.propTypes = {
  history: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object.isRequired,
  busy: _propTypes2.default.bool.isRequired,
  signout: _propTypes2.default.func.isRequired,
  location: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user,
    busy: state.asyncStatus.toJSON().USER_SIGNOUT_BUSY
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signout: function signout() {
      dispatch(_userActions2.default.signout());
    }
  };
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signout));

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(39);

var _PasswordField = __webpack_require__(128);

var _PasswordField2 = _interopRequireDefault(_PasswordField);

var _userActions = __webpack_require__(53);

var _userActions2 = _interopRequireDefault(_userActions);

var _initFormValidation = __webpack_require__(129);

var _initFormValidation2 = _interopRequireDefault(_initFormValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.onFormSubmit = function (event) {
      event.preventDefault();
      if ($(_this.form).form('is valid')) {
        _this.props.update_password(_this.props.submitInfo);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Signup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _initFormValidation2.default)();
      this.props.setSubmitMode();
      if (!this.props.user.success) {
        setTimeout(function () {
          return _this2.props.history.push('/');
        }, 2000);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this3 = this;

      if (!this.props.user.success) {
        setTimeout(function () {
          return _this3.props.history.push('/user/signin');
        }, 2000);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var user = this.props.user;

      if (!user.success) {
        return _react2.default.createElement(
          'div',
          { className: 'user-form-content' },
          _react2.default.createElement(
            'h2',
            { className: 'ui teal image header' },
            _react2.default.createElement('img', { src: '/static/images/logo.png', className: 'image', alt: '' }),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              '\u66F4\u65B0\u5BC6\u7801'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui left aligned icon message' },
            _react2.default.createElement('i', { className: 'notched circle loading icon' }),
            _react2.default.createElement(
              'div',
              { className: 'content', style: { textAlign: 'left' } },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                '\u5F53\u524D\u72B6\u6001\u672A\u767B\u5165/\u5DF2\u767B\u51FA'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\u6B63\u5728\u8DF3\u8F6C\u81F3\u767B\u5165\u9875\u9762...'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'ui divider' }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'pointing right grey icon' }),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'ui right floated', to: '/user/signin' },
              '\u7ACB\u523B\u8DF3\u8F6C\u81F3\u767B\u5165\u9875\u9762'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'pointing right grey icon' }),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'ui right floated', to: '/' },
              '\u7ACB\u523B\u8FD4\u56DE\u4E3B\u9875'
            )
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'user-form-content' },
        _react2.default.createElement(
          'h2',
          { className: 'ui teal image header' },
          _react2.default.createElement('img', { src: '/static/images/logo.png', className: 'image', alt: '', style: { borderRadius: '4px' } }),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            '\u66F4\u65B0\u5BC6\u7801'
          )
        ),
        _react2.default.createElement(
          'form',
          { ref: function ref(e) {
              return _this4.form = e;
            }, className: 'ui form ' + (this.props.busy ? 'loading' : ''), onSubmit: this.onFormSubmit },
          _react2.default.createElement(
            'div',
            { className: 'ui segment' },
            _react2.default.createElement(_PasswordField2.default, { name: 'old_password', placeholder: '\u65E7\u5BC6\u7801' }),
            _react2.default.createElement('div', { className: 'ui divider' }),
            _react2.default.createElement(_PasswordField2.default, { name: 'new_password', placeholder: '\u65B0\u5BC6\u7801' }),
            _react2.default.createElement(_PasswordField2.default, { name: 'confirm_new_password', placeholder: '\u786E\u8BA4\u65B0\u5BC6\u7801' }),
            _react2.default.createElement(
              'button',
              { className: 'ui fluid teal submit button', type: 'submit' },
              '\u66F4\u65B0\u5BC6\u7801'
            )
          ),
          _react2.default.createElement('div', { className: 'ui error message' })
        ),
        _react2.default.createElement('div', { className: 'ui divider' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('i', { className: 'pointing right grey icon' }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'ui right floated', to: '/' },
            '\u8FD4\u56DE\u4E3B\u9875'
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

Signup.propTypes = {
  user: _propTypes2.default.object.isRequired,
  submitInfo: _propTypes2.default.object.isRequired,
  update_password: _propTypes2.default.func.isRequired,
  setSubmitMode: _propTypes2.default.func.isRequired,
  busy: _propTypes2.default.bool.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.toJSON().user,
    submitInfo: state.user.toJSON().submitInfo,
    busy: state.asyncStatus.toJSON().USER_UPDATE_PASSWORD_BUSY
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    update_password: function update_password(info) {
      dispatch(_userActions2.default.update_password(info));
    },
    setSubmitMode: function setSubmitMode() {
      _userActions2.default.setSubmitMode(dispatch, 'update_password');
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Signup);

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(24);

var _reactRouter = __webpack_require__(64);

var _reactRouterDom = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotFound);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'main-route-content' },
        _react2.default.createElement(
          'div',
          { className: 'not-found-content' },
          _react2.default.createElement(
            'h2',
            { className: 'ui teal image header' },
            _react2.default.createElement('img', { src: '/static/images/logo.png', className: 'image', alt: '' }),
            _react2.default.createElement(
              'div',
              { className: 'content' },
              '404 , \u5373\u5C06\u8FD4\u56DE\u4E3B\u9875'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui left aligned icon message' },
            _react2.default.createElement('i', { className: 'red bug icon' }),
            _react2.default.createElement(
              'div',
              { className: 'content', style: { textAlign: 'left' } },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                '\u56DB\u767E\u96F6\u56DB\u662F\u4EC0\u4E48\u610F\u601D\uFF1F'
              ),
              _react2.default.createElement(
                'p',
                null,
                '404 = \u6211\u4EEC\u4EC0\u4E48\u4E5F\u6CA1\u6709\u627E\u5230\uFF01'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'ui divider' }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'pointing right grey icon' }),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'ui right floated', to: '/' },
              '\u7ACB\u523B\u8FD4\u56DE\u4E3B\u9875'
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotFound, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.history.push('/');
      }, 3000);
    }
  }]);

  return NotFound;
}(_react.Component);

NotFound.propTypes = {
  history: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NotFound));

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(171);

var _reduxThunk = __webpack_require__(537);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(538);

var _immutable = __webpack_require__(130);

var _reducers = __webpack_require__(539);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combined_reducers = (0, _redux.combineReducers)(_reducers2.default);
// middlewares
var loggerMiddleware = (0, _reduxLogger.createLogger)();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
// Grab the state from a global variable injected into the server-generated HTML
var preloadedState = window.__PRELOADED_STATE__;
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

var store = (0, _redux.createStore)(combined_reducers, {
  user: (0, _immutable.fromJS)(_extends({}, preloadedState.user, {
    submitInfo: (0, _immutable.fromJS)({})
  }))
}, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, // lets us dispatch() functions
loggerMiddleware // neat middleware that logs actions
)));

exports.default = store;

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userReducer = __webpack_require__(540);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _asyncStatusReducer = __webpack_require__(541);

var _asyncStatusReducer2 = _interopRequireDefault(_asyncStatusReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { asyncStatus: _asyncStatusReducer2.default, user: _userReducer2.default };

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(130);

var _actionTypes = __webpack_require__(127);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userinit = (0, _immutable.fromJS)({
  user: {},
  submitInfo: {}
});

/* eslint-disable no-param-reassign */

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userinit;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes2.default.USER_SIGNIN_START:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_SIGNIN_END:
      {
        if (action.payload.code === 0) {
          state = state.set('user', (0, _immutable.fromJS)(action.payload.data));
        }
        return state;
      }
    case _actionTypes2.default.USER_SIGNIN_ERROR:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_SIGNUP_START:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_SIGNUP_END:
      {
        state = state.set('user', (0, _immutable.fromJS)(action.payload.data));
        return state;
      }
    case _actionTypes2.default.USER_SIGNUP_ERROR:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_SIGNOUT_START:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        state = state.set('oauthUser', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_SIGNOUT_END:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        state = state.set('oauthUser', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_SIGNOUT_ERROR:
      {
        state = state.set('user', (0, _immutable.fromJS)({}));
        state = state.set('oauthUser', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_OAUTH_SIGNOUT_START:
      {
        return state;
      }
    case _actionTypes2.default.USER_OAUTH_SIGNOUT_END:
      {
        state = state.set('oauthUser', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_OAUTH_SIGNOUT_ERROR:
      {
        state = state.set('oauthUser', (0, _immutable.fromJS)({}));
        return state;
      }
    case _actionTypes2.default.USER_UPDATE_PASSWORD_START:
      {
        return state;
      }
    case _actionTypes2.default.USER_UPDATE_PASSWORD_END:
      {
        if (action.payload.code === 0) {
          state = state.set('user', (0, _immutable.fromJS)({}));
        }
        return state;
      }
    case _actionTypes2.default.USER_UPDATE_PASSWORD_ERROR:
      {
        return state;
      }
    case _actionTypes2.default.USER_SET_SUBMIT_INFO:
      {
        if (action.payload.mode) {
          state = state.set('submitInfo', (0, _immutable.fromJS)({ mode: action.payload.mode }));
        } else {
          Object.keys(action.payload).forEach(function (k) {
            state = state.setIn(['submitInfo', k], action.payload[k]);
          });
        }
        return state;
      }
    default:
      {
        return state;
      }
  }
};

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //eslint-disable-line


var _immutable = __webpack_require__(130);

var _uuid = __webpack_require__(542);

var _uuid2 = _interopRequireDefault(_uuid);

var _lodash = __webpack_require__(545);

var _lodash2 = _interopRequireDefault(_lodash);

var _actionTypes = __webpack_require__(127);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//eslint-disable-line

var initObject = {};

_actionTypes.syncTypes.forEach(function (tp) {
  // for each sync action, there is no busy
  initObject[tp + '_MESSAGE'] = (0, _immutable.Map)({});
});
_actionTypes.asyncTypes.forEach(function (tp) {
  // for each async action, there is a busy flag
  initObject[tp + '_BUSY'] = false;
  initObject[tp + '_MESSAGE'] = (0, _immutable.Map)({});
});

var statusInit = (0, _immutable.fromJS)(_extends({}, initObject, {
  HEADER_MESSAGE: (0, _immutable.Map)({ id: 0 })
}));

/* eslint-disable no-param-reassign */

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : statusInit;
  var action = arguments[1];

  var breaks = action.type.split('_');

  var actionName = _lodash2.default.join(_lodash2.default.slice(breaks, 0, breaks.length - 1), '_');

  /*
    ui_message:{
      status:
      header:
      inline:
    }
  */

  if (action.type === _actionTypes2.default.SET_PRISTINE) {
    if (action.payload && action.payload.action) {
      // set specific action message pristine
      state = state.set(action.payload.action + '_MESSAGE', (0, _immutable.Map)({ id: 0 }));
      state = state.set(action.payload.action + '_BUSY', false);
    } else {
      // set all actions states pristine
      state = statusInit;
      return state;
    }
  } else if (action.payload && _typeof(action.payload.ui_message) === 'object') {
    // it's an regular async action
    var message = _extends({}, action.payload.ui_message, {
      id: _uuid2.default.v4()
    });
    // set the inline message
    state = state.set(actionName + '_MESSAGE', (0, _immutable.Map)(message));
    // set the header message
    state = state.set('HEADER_MESSAGE', (0, _immutable.Map)(message));
  } else {
    // clear the inline message
    state = state.set(actionName + '_MESSAGE', (0, _immutable.Map)({}));
    // clear the header message
    state = state.set('HEADER_MESSAGE', (0, _immutable.Map)({ id: 0 }));
  }

  switch (_lodash2.default.last(breaks)) {
    case 'START':
      {
        state = state.set(actionName + '_BUSY', true);
        return state;
      }
    case 'END':
      {
        state = state.set(actionName + '_BUSY', false);
        return state;
      }
    case 'ERROR':
      {
        state = state.set(actionName + '_BUSY', false);
        return state;
      }
    default:
      {
        return state;
      }
  }
};

/***/ })

},[206]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvUGFzc3dvcmRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvaW5pdEZvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi91c2VyL0VtYWlsRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvT0F1dGhQcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvb2F1dGgvUVFJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL3N0eWxlLmNzcz9hOWM5Iiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Sb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi9Gcm9udFBhbmVsLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcucHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL0hvbWVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2luY2x1ZGVzL1dlYkFwcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5jbHVkZXMvU2xvZ2FuMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9TbG9nYW4yLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2luY2x1ZGVzL0Rlc2t0b3BBcHBzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2luY2x1ZGVzL090aGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29uZmlnL2NvbmZpZy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29uZmlnL2NvbmZpZy5wcm9kdWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL21lc3NhZ2VNaWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvcGFyYW1zVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9TaWdub3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL05vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9hc3luY1N0YXR1c1JlZHVjZXIuanMiXSwibmFtZXMiOlsidHlwZXMiLCJzeW5jVHlwZXMiLCJhc3luY1R5cGVzIiwiZm9yRWFjaCIsInRwIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsIlBhc3N3b3JkRmllbGQiLCJvbkNoYW5nZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXlsb2FkIiwicHJvcHMiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdWJtaXRJbmZvIiwicGxhY2Vob2xkZXIiLCJzdWJtaXRJbmZvIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInVzZXIiLCJvYmplY3QiLCJmdW5jIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0b0pTT04iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImluaXQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZvcm0iLCJmaWVsZHMiLCJlbWFpbCIsImlkZW50aWZpZXIiLCJydWxlcyIsInR5cGUiLCJwcm9tcHQiLCJ2YWxpZGF0aW9uUnVsZXMiLCJ1c2VybmFtZSIsInJlZ2V4IiwicGFzc3dvcmQiLCJvbGRfcGFzc3dvcmQiLCJuZXdfcGFzc3dvcmQiLCJjb25maXJtX3Bhc3N3b3JkIiwiY29uZmlybV9uZXdfcGFzc3dvcmQiLCJFbWFpbEZpZWxkIiwidG9Mb3dlckNhc2UiLCJPQXV0aFByb3ZpZGVycyIsIlFRSW5mbyIsIm9hdXRoVXNlciIsImJ1c3kiLCJvYXV0aF9zaWdub3V0IiwibWFyZ2luVG9wIiwicHJvZmlsZSIsImZpZ3VyZXVybF9xcV8xIiwibmlja25hbWUiLCJib29sIiwiYXN5bmNTdGF0dXMiLCJVU0VSX09BVVRIX1NJR05PVVRfQlVTWSIsInJvb3ROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZHJlbiIsInJlbmRlciIsIlJvdXRlcyIsIm9wYWNpdHkiLCJNZXNzYWdlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwibWVzc2FnZSIsImlkIiwiaGVhZGVyIiwibWVzc2VuZ2VyIiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwiaW50ZXJ2YWwiLCJnZXRTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJsZWZ0IiwibWFyZ2luTGVmdCIsImdldERldGFpbCIsImRldGFpbHMiLCJtYXAiLCJNYXRoIiwicmFuZG9tIiwibXNnIiwiZSIsInN0YXR1cyIsImdldCIsIkhvbWUiLCJjb21wb25lbnREaWRNb3VudCIsInZpc2liaWxpdHkiLCJvbmNlIiwib25Ub3BWaXNpYmxlIiwiY3NzIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsIm9uVG9wUGFzc2VkIiwiYWRkQ2xhc3MiLCJvblVwZGF0ZSIsImNhbGN1bGF0aW9ucyIsInBlcmNlbnRhZ2VQYXNzZWQiLCJtYWluIiwibWFyZ2luIiwibG9jYXRpb24iLCJGb290ZXIiLCJGcm9udFBhbmVsIiwidGl0bGUiLCJoaXN0b3J5IiwiY29uZmlnVmFyIiwiZW52IiwiY29uZmlnIiwiZ2xvYmFsIiwibW9kZSIsInBvcnQiLCJkb21haW4iLCJhdXRoIiwic2Vzc2lvbiIsInNlY3JldCIsImp3dCIsImV4cGlyZXNJbiIsImNvb2tpZSIsIm1heGFnZSIsIm9hdXRoIiwicXEiLCJhcHBfaWQiLCJhcHBfa2V5IiwicGNDb2RlSG9zdCIsInBjVG9rZW5Ib3N0IiwiaW5mb0hvc3QiLCJwY09wZW5pZEhvc3QiLCJyZWRpcmVjdF91cmkiLCJkYm5hbWUiLCJwZyIsIkRCVVNFUiIsImRhdGFiYXNlIiwiREJEQVRBQkFTRSIsIkRCUEFTU1dPUkQiLCJob3N0IiwiREJIT1NUIiwiREJQT1JUIiwibWF4IiwiaWRsZVRpbWVvdXRNaWxsaXMiLCJyZXNvdXJjZXMiLCJzdHlsZXNoZWV0cyIsIm5vcm1hbGl6ZSIsInNlbWFudGljIiwic2NyaXB0cyIsImpxdWVyeSIsImh0bWw1c2hpdiIsImNsYXNzbGlzdCIsIkZpeGVkTWVudSIsInN1Y2Nlc3MiLCJtYXRjaCIsIldlYkFwcHMiLCJTbG9nYW4xIiwicHJvZ3Jlc3MiLCJhY2NvcmRpb24iLCJEZXNrdG9wQXBwcyIsIk90aGVycyIsIlNpZ25pbiIsIm9uRm9ybVN1Ym1pdCIsInNpZ25pbiIsInNldFN1Ym1pdE1vZGUiLCJjYWxsYmFjayIsInBhdGhuYW1lIiwid2luZG93IiwicmVwbGFjZSIsImJvcmRlclJhZGl1cyIsIlVTRVJfU0lHTklOX0JVU1kiLCJpbmZvIiwiZ2V0SGVhZGVycyIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwic2VydmljZUJhc2UiLCJiYXNlIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlVTRVJfU0lHTklOX1NUQVJUIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJldCIsIlVTRVJfU0lHTklOX0VORCIsImNhdGNoIiwiVVNFUl9TSUdOSU5fRVJST1IiLCJzaWdudXAiLCJVU0VSX1NJR05VUF9TVEFSVCIsIlVTRVJfU0lHTlVQX0VORCIsIlVTRVJfU0lHTlVQX0VSUk9SIiwic2lnbm91dCIsIlVTRVJfU0lHTk9VVF9TVEFSVCIsIlVTRVJfU0lHTk9VVF9FTkQiLCJVU0VSX1NJR05PVVRfRVJST1IiLCJ1cGRhdGVfcGFzc3dvcmQiLCJVU0VSX1VQREFURV9QQVNTV09SRF9TVEFSVCIsIlVTRVJfVVBEQVRFX1BBU1NXT1JEX0VORCIsIlVTRVJfVVBEQVRFX1BBU1NXT1JEX0VSUk9SIiwiVVNFUl9PQVVUSF9TSUdOT1VUX1NUQVJUIiwiVVNFUl9PQVVUSF9TSUdOT1VUX0VORCIsIlVTRVJfT0FVVEhfU0lHTk9VVF9FUlJPUiIsIm9hdXRoX3VubGluayIsIlVTRVJfT0FVVEhfVU5MSU5LX1NUQVJUIiwiVVNFUl9PQVVUSF9VTkxJTktfRU5EIiwiVVNFUl9PQVVUSF9VTkxJTktfRVJST1IiLCJVU0VSX1NFVF9TVUJNSVRfSU5GTyIsIm1lc3NhZ2VEaWN0IiwiY29kZSIsIlVTRVJfQklORF9BVVRIRU5USUNBVEVfRVJST1IiLCJVU0VSX0JJTkRfQVVUSEVOVElDQVRFX0VORCIsIlVTRVJfU0lHTk9VVCIsIlVTRVJfVVNFUk5BTUVfQ0hFQ0tfRVJST1IiLCJpbmxpbmUiLCJVU0VSX1VTRVJOQU1FX0NIRUNLX0VORCIsInZhbGlkIiwiVVNFUl9HRVRfT0FVVEhfSU5GT19FTkQiLCJVU0VSX0dFVF9PQVVUSF9JTkZPX0VSUk9SIiwiaGFuZGxlciIsInVpX21lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYmVmb3JlVmFsIiwidmFsIiwiZW1wdHlDb2RlIiwiYmluZF91c2VyX2lkIiwib2F1dGhfdXNlcl9pZCIsInVuaXF1ZV9wcm92aWRlcl9pZCIsInByb3ZpZGVyIiwidmFsaWRhdGUiLCJub25OdWxsUGFyYW1zQXJyYXkiLCJrIiwidHJpbSIsImV2ZXJ5IiwidGVzdCIsIlNpZ251cCIsIlVTRVJfU0lHTlVQX0JVU1kiLCJTaWdub3V0IiwidGV4dEFsaWduIiwic2V0VGltZW91dCIsInB1c2giLCJVU0VSX1NJR05PVVRfQlVTWSIsIlVTRVJfVVBEQVRFX1BBU1NXT1JEX0JVU1kiLCJOb3RGb3VuZCIsImNvbWJpbmVkX3JlZHVjZXJzIiwibG9nZ2VyTWlkZGxld2FyZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJwcmVsb2FkZWRTdGF0ZSIsIl9fUFJFTE9BREVEX1NUQVRFX18iLCJzdG9yZSIsInVzZXJpbml0IiwiYWN0aW9uIiwic2V0IiwiZGF0YSIsInNldEluIiwiaW5pdE9iamVjdCIsInN0YXR1c0luaXQiLCJIRUFERVJfTUVTU0FHRSIsImJyZWFrcyIsInNwbGl0IiwiYWN0aW9uTmFtZSIsImpvaW4iLCJzbGljZSIsImxlbmd0aCIsIlNFVF9QUklTVElORSIsInY0IiwibGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEVBQWQ7O0FBR08sSUFBTUMsZ0NBQVksQ0FDdkIsc0JBRHVCLEVBRXZCLGNBRnVCLENBQWxCO0FBSUEsSUFBTUMsa0NBQWEsQ0FDeEIsYUFEd0IsRUFFeEIsYUFGd0IsRUFHeEIsY0FId0IsRUFJeEIsb0JBSndCLEVBS3hCLG1CQUx3QixFQU14QixzQkFOd0IsQ0FBbkI7O0FBU1BELFVBQVVFLE9BQVYsQ0FBa0IsVUFBQ0MsRUFBRCxFQUFRO0FBQ3hCSixRQUFNSSxFQUFOLElBQVlBLEVBQVo7QUFDRCxDQUZEOztBQUlBRixXQUFXQyxPQUFYLENBQW1CLFVBQUNDLEVBQUQsRUFBUTtBQUN6QkosUUFBU0ksRUFBVCxlQUEwQkEsRUFBMUI7QUFDQUosUUFBU0ksRUFBVCxhQUF3QkEsRUFBeEI7QUFDQUosUUFBU0ksRUFBVCxlQUEwQkEsRUFBMUI7QUFDRCxDQUpEOztBQU1BQyxPQUFPQyxJQUFQLENBQVlOLEtBQVosRUFBbUJHLE9BQW5CLENBQTJCLFVBQUNJLEdBQUQsRUFBUztBQUNsQ1AsUUFBTU8sR0FBTixJQUFhQSxHQUFiO0FBQ0QsQ0FGRDs7a0JBSWVQLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNUSxhOzs7Ozs7Ozs7Ozs7OztvTUFTSkMsUSxHQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQkEsWUFBTUMsY0FBTjtBQUNBLFVBQU1DLFVBQVUsRUFBaEI7QUFDQUEsY0FBUSxNQUFLQyxLQUFMLENBQVdDLElBQW5CLElBQTJCSixNQUFNSyxNQUFOLENBQWFDLEtBQXhDO0FBQ0EsWUFBS0gsS0FBTCxDQUFXSSxhQUFY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UjtBQUNEOztBQUVELFVBQVEsaUJBQUU2TSxJQUFGLENBQU9SLE1BQVAsQ0FBUjtBQUNFLFNBQUssT0FBTDtBQUFjO0FBQ1pwUCxnQkFBUUEsTUFBTThPLEdBQU4sQ0FBYVEsVUFBYixZQUFnQyxJQUFoQyxDQUFSO0FBQ0EsZUFBT3RQLEtBQVA7QUFDRDtBQUNELFNBQUssS0FBTDtBQUFZO0FBQ1ZBLGdCQUFRQSxNQUFNOE8sR0FBTixDQUFhUSxVQUFiLFlBQWdDLEtBQWhDLENBQVI7QUFDQSxlQUFPdFAsS0FBUDtBQUNEO0FBQ0QsU0FBSyxPQUFMO0FBQWM7QUFDWkEsZ0JBQVFBLE1BQU04TyxHQUFOLENBQWFRLFVBQWIsWUFBZ0MsS0FBaEMsQ0FBUjtBQUNBLGVBQU90UCxLQUFQO0FBQ0Q7QUFDRDtBQUFTO0FBQ1AsZUFBT0EsS0FBUDtBQUNEO0FBZkg7QUFpQkQsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0eXBlcyA9IHtcbn07XG5cbmV4cG9ydCBjb25zdCBzeW5jVHlwZXMgPSBbXG4gICdVU0VSX1NFVF9TVUJNSVRfSU5GTycsXG4gICdTRVRfUFJJU1RJTkUnLFxuXTtcbmV4cG9ydCBjb25zdCBhc3luY1R5cGVzID0gW1xuICAnVVNFUl9TSUdOSU4nLFxuICAnVVNFUl9TSUdOVVAnLFxuICAnVVNFUl9TSUdOT1VUJyxcbiAgJ1VTRVJfT0FVVEhfU0lHTk9VVCcsXG4gICdVU0VSX09BVVRIX1VOTElOSycsXG4gICdVU0VSX1VQREFURV9QQVNTV09SRCcsXG5dO1xuXG5zeW5jVHlwZXMuZm9yRWFjaCgodHApID0+IHtcbiAgdHlwZXNbdHBdID0gdHA7XG59KTtcblxuYXN5bmNUeXBlcy5mb3JFYWNoKCh0cCkgPT4ge1xuICB0eXBlc1tgJHt0cH1fU1RBUlRgXSA9IGAke3RwfV9TVEFSVGA7XG4gIHR5cGVzW2Ake3RwfV9FTkRgXSA9IGAke3RwfV9FTkRgO1xuICB0eXBlc1tgJHt0cH1fRVJST1JgXSA9IGAke3RwfV9TVEFSVGA7XG59KTtcblxuT2JqZWN0LmtleXModHlwZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICB0eXBlc1trZXldID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2FjdGlvblR5cGVzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5jbGFzcyBQYXNzd29yZEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc3VibWl0SW5mbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHNldFN1Ym1pdEluZm86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHt9O1xuICAgIHBheWxvYWRbdGhpcy5wcm9wcy5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnNldFN1Ym1pdEluZm8ocGF5bG9hZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxlZnQgaWNvbiBpbnB1dFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxvY2sgaWNvblwiPjwvaT5cbiAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0gdmFsdWU9eyB0aGlzLnByb3BzLnN1Ym1pdEluZm9bdGhpcy5wcm9wcy5uYW1lXSB8fCAnJyB9IHR5cGU9XCJwYXNzd29yZFwiIHsgLi4uIHsgbmFtZSwgcGxhY2Vob2xkZXIgfSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLnVzZXIsXG4gIHN1Ym1pdEluZm86IHN0YXRlLnVzZXIudG9KU09OKCkuc3VibWl0SW5mbyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRTdWJtaXRJbmZvOiAocGF5bG9hZCkgPT4ge1xuICAgICAgdXNlckFjdGlvbnMuc2V0U3VibWl0SW5mbyhkaXNwYXRjaCwgcGF5bG9hZCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhc3N3b3JkRmllbGQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvUGFzc3dvcmRGaWVsZC5qcyIsImltcG9ydCBwYXJhbXNWYWxpZGF0b3IgZnJvbSAnLi4vYXBpL3BhcmFtc1ZhbGlkYXRvcic7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICQoZG9jdW1lbnQpXG4gIC5yZWFkeSgoKSA9PiB7XG4gICAgLy8gZm9ybSB2YWxpZGF0aW9uXG4gICAgJCgnLnVpLmZvcm0nKVxuICAgICAgLmZvcm0oe1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogJ2VtYWlsJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+ivt+i+k+WFpUUtbWFpbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmVnRXhwJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zVmFsaWRhdG9yLnZhbGlkYXRpb25SdWxlcy51c2VybmFtZS5yZWdleCxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfor7fovpPlhaXmnInmlYjnmoQgRS1tYWlsJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+ivt+i+k+WFpTYtMjDkvY3lr4bnoIEnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JlZ0V4cCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtc1ZhbGlkYXRvci52YWxpZGF0aW9uUnVsZXMucGFzc3dvcmQucmVnZXgsXG4gICAgICAgICAgICAgICAgcHJvbXB0OiAn5a+G56CB6ZW/5bqm5ZyoNn4yMOS5i+mXtO+8jOWPquiDveWMheWQq+Wkp+Wwj+WGmeWtl+avjeWSjOaVsOWtlycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb2xkX3Bhc3N3b3JkOiB7XG4gICAgICAgICAgICBpZGVudGlmaWVyOiAnb2xkX3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+ivt+i+k+WFpTYtMTjkvY3lr4bnoIEnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JlZ0V4cCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtc1ZhbGlkYXRvci52YWxpZGF0aW9uUnVsZXMucGFzc3dvcmQucmVnZXgsXG4gICAgICAgICAgICAgICAgcHJvbXB0OiAn5a+G56CB6ZW/5bqm5ZyoNn4yMOS5i+mXtO+8jOWPquiDveWMheWQq+Wkp+Wwj+WGmeWtl+avjeWSjOaVsOWtlycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV3X3Bhc3N3b3JkOiB7XG4gICAgICAgICAgICBpZGVudGlmaWVyOiAnbmV3X3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+ivt+i+k+WFpTYtMTjkvY3lr4bnoIEnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JlZ0V4cCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtc1ZhbGlkYXRvci52YWxpZGF0aW9uUnVsZXMucGFzc3dvcmQucmVnZXgsXG4gICAgICAgICAgICAgICAgcHJvbXB0OiAn5a+G56CB6ZW/5bqm5ZyoNn4yMOS5i+mXtO+8jOWPquiDveWMheWQq+Wkp+Wwj+WGmeWtl+avjeWSjOaVsOWtlycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlybV9wYXNzd29yZDoge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogJ2NvbmZpcm1fcGFzc3dvcmQnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eScsXG4gICAgICAgICAgICAgICAgcHJvbXB0OiAn6K+35YaN5qyh6L6T5YWl5a+G56CB56Gu6K6kJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtYXRjaFtwYXNzd29yZF0nLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+S4pOasoei+k+WFpeWvhueggeW6lOivpeS/neaMgeS4gOiHtCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlybV9uZXdfcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGlkZW50aWZpZXI6ICdjb25maXJtX25ld19wYXNzd29yZCcsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5JyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfor7flho3mrKHovpPlhaXmlrDlr4bnoIHnoa7orqQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ21hdGNoW25ld19wYXNzd29yZF0nLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+S4pOasoei+k+WFpeeahOaWsOWvhueggeW6lOivpeS/neaMgeS4gOiHtCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvaW5pdEZvcm1WYWxpZGF0aW9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5jbGFzcyBFbWFpbEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc3VibWl0SW5mbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHNldFN1Ym1pdEluZm86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zZXRTdWJtaXRJbmZvKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxlZnQgaWNvbiBlbWFpbCBpbnB1dFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVzZXIgaWNvblwiPjwvaT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCLpgq7nrrFcIlxuICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnByb3BzLnN1Ym1pdEluZm8udXNlcm5hbWUgfHwgJycgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkudXNlcixcbiAgc3VibWl0SW5mbzogc3RhdGUudXNlci50b0pTT04oKS5zdWJtaXRJbmZvLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNldFN1Ym1pdEluZm86ICh1c2VybmFtZSkgPT4ge1xuICAgICAgdXNlckFjdGlvbnMuc2V0U3VibWl0SW5mbyhkaXNwYXRjaCwge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFbWFpbEZpZWxkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi91c2VyL0VtYWlsRmllbGQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPQXV0aFByb3ZpZGVycyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGEgaHJlZj1cIi9vYXV0aC9sdWFuY2gvcXFcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicXEgeWVsbG93IGljb25cIj48L2k+XG4gICAgICAgICAgUVFcbiAgICAgIDwvYT5cbiAgICAgIHsnIHwgJ31cbiAgICAgIDxhIGhyZWY9XCJcIj48aSBjbGFzc05hbWU9XCJ3ZWNoYXQgZ3JleSBpY29uXCI+PC9pPuW+ruS/oTwvYT5cbiAgICAgIHsnIHwgJ31cbiAgICAgIDxhIGhyZWY9XCJcIj48aSBjbGFzc05hbWU9XCJ3ZWlibyBncmV5IGljb25cIj48L2k+5b6u5Y2aPC9hPlxuICAgICAgeycgfCAnfVxuICAgICAgPGEgaHJlZj1cIlwiPjxpIGNsYXNzTmFtZT1cInBheXBhbCBncmV5IGljb25cIj48L2k+5pSv5LuY5a6dPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT0F1dGhQcm92aWRlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vdXNlci9PQXV0aFByb3ZpZGVycy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB1c2VyQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY2xhc3MgUVFJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvYXV0aFVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBvYXV0aF9zaWdub3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGJ1c3k6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvYXV0aFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYHVpIHNlZ21lbnQgJHt0aGlzLnByb3BzLmJ1c3kgPyAnbG9hZGluZycgOiAnJ31gIH0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmlnaHQgZmxvYXRlZCB1aSB0aW55IGJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLnByb3BzLm9hdXRoX3NpZ25vdXQgfT7ms6jplIA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsZWZ0IGZsb2F0ZWQgdWkgaW1hZ2VcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgICBzdHlsZT17IHsgbWFyZ2luVG9wOiAnMHB4JyB9IH1cbiAgICAgICAgICAgICAgc3JjPXsgb2F1dGhVc2VyLnByb2ZpbGUuZmlndXJldXJsX3FxXzEgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtvYXV0aFVzZXIucHJvZmlsZS5uaWNrbmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIOadpeiHqu+8muiFvuiur1FRXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBvYXV0aFVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkub2F1dGhVc2VyLFxuICBidXN5OiBzdGF0ZS5hc3luY1N0YXR1cy50b0pTT04oKS5VU0VSX09BVVRIX1NJR05PVVRfQlVTWSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvYXV0aF9zaWdub3V0OiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5vYXV0aF9zaWdub3V0KCkpO1xuICAgIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUVFJbmZvKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi91c2VyL29hdXRoL1FRSW5mby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vaW5jbHVkZXMnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL2NvbXBvbmVudHMvUm91dGVzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5cbmNvbnN0IHJvb3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0Jyk7XG5cblByb3ZpZGVyLnByb3BUeXBlcy5jaGlsZHJlbiA9IFByb3BUeXBlcy5vYmplY3Q7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cbiAgICA8Um91dGVzLz5cbiAgPC9Qcm92aWRlcj4sIHJvb3ROb2RlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJvbnRlbmQvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9pbmNsdWRlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgUm91dGUsXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZWRTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItdHJhbnNpdGlvbic7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL2NvbW1vbi9NZXNzYWdlJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9Ob3RGb3VuZCc7XG5cblxuY29uc3QgUm91dGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QW5pbWF0ZWRTd2l0Y2hcbiAgICAgICAgYXRFbnRlcj17IHsgb3BhY2l0eTogMCB9IH1cbiAgICAgICAgYXRMZWF2ZT17IHsgb3BhY2l0eTogMCB9IH1cbiAgICAgICAgYXRBY3RpdmU9eyB7IG9wYWNpdHk6IDEgfSB9XG4gICAgICAgID5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXsgSG9tZSB9IHBhdGg9Jy8nIGV4YWN0PXsgdHJ1ZSB9PjwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17IFVzZXIgfSBwYXRoPScvdXNlcic+PC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXsgTm90Rm91bmQgfSBwYXRoPScvKic+PC9Sb3V0ZT5cbiAgICAgICAgPC9BbmltYXRlZFN3aXRjaD5cbiAgICAgICAgPE1lc3NhZ2UgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Sb3V0ZXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG1lc3NhZ2UuaWQgIT09IHByZXZQcm9wcy5tZXNzYWdlLmlkKSB7XG4gICAgICBpZiAobWVzc2FnZS5oZWFkZXIpIHtcbiAgICAgICAgJCh0aGlzLm1lc3NlbmdlcilcbiAgICAgICAgICAudHJhbnNpdGlvbih7IGFuaW1hdGlvbjogJ2ZhZGUgaW4nLCBkdXJhdGlvbjogJzUwMG1zJyB9KVxuICAgICAgICAgIC50cmFuc2l0aW9uKHsgaW50ZXJ2YWw6IDIwMDAsIGFuaW1hdGlvbjogJ2ZhZGUgb3V0JywgZHVyYXRpb246ICc1MDBtcycgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAnNDBweCcsXG4gICAgICB3aWR0aDogJzM2MHB4JyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgbWFyZ2luTGVmdDogJy0xODBweCcsXG4gICAgfTtcbiAgfVxuXG4gIGdldERldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG1lc3NhZ2UuZGV0YWlscykge1xuICAgICAgaWYgKHR5cGVvZiAobWVzc2FnZS5kZXRhaWxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57bWVzc2FnZS5kZXRhaWxzfTwvZGl2Pik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIChtZXNzYWdlLmRldGFpbHMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidWkgbGlzdFwiPlxuICAgICAgICAgIHttZXNzYWdlLmRldGFpbHMubWFwKG1zZyA9PiA8ZGl2IGtleT17IE1hdGgucmFuZG9tKCkgfSBjbGFzc05hbWU9XCJ1aSBpdGVtXCI+e21zZ308L2Rpdj4pfVxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgZSA9PiB0aGlzLm1lc3NlbmdlciA9IGUgfSBjbGFzc05hbWU9XCJ1aSBjb2x1bW5cIiBzdHlsZT17IHRoaXMuZ2V0U3R5bGUoKSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGB1aSBjZW50ZXIgYWxpZ25lZCBtZXNzYWdlICR7bWVzc2FnZS5oZWFkZXIgPyAnJyA6ICdoaWRkZW4nfSAke21lc3NhZ2Uuc3RhdHVzfWAgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAge21lc3NhZ2UuaGVhZGVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLmdldERldGFpbCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvIGRpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIG1lc3NhZ2U6IHN0YXRlLmFzeW5jU3RhdHVzLmdldCgnSEVBREVSX01FU1NBR0UnKS50b0pTT04oKSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL01lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tbW9uL0Zvb3Rlcic7XG5pbXBvcnQgRnJvbnRQYW5lbCBmcm9tICcuL2NvbW1vbi9Gcm9udFBhbmVsJztcbmltcG9ydCBIb21lTWVudSBmcm9tICcuL2NvbW1vbi9Ib21lTWVudSc7XG5cbmltcG9ydCBXZWJBcHBzIGZyb20gJy4vaW5jbHVkZXMvV2ViQXBwcyc7XG5pbXBvcnQgU2xvZ2FuMSBmcm9tICcuL2luY2x1ZGVzL1Nsb2dhbjEnO1xuaW1wb3J0IFNsb2dhbjIgZnJvbSAnLi9pbmNsdWRlcy9TbG9nYW4yJztcbmltcG9ydCBEZXNrdG9wQXBwcyBmcm9tICcuL2luY2x1ZGVzL0Rlc2t0b3BBcHBzJztcbmltcG9ydCBPdGhlcnMgZnJvbSAnLi9pbmNsdWRlcy9PdGhlcnMnO1xuXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAkKCcjbWFpbicpXG4gICAgLnZpc2liaWxpdHkoe1xuICAgICAgb25jZTogZmFsc2UsXG4gICAgICBvblRvcFZpc2libGUoKSB7XG4gICAgICAgICQoJy5ob21lLm1lbnUnKS5jc3MoeyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBoZWlnaHQ6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzBweCcgfSk7XG4gICAgICB9LFxuICAgICAgb25Ub3BQYXNzZWQoKSB7XG4gICAgICAgICQoJy5ob21lLm1lbnUnKS5jc3MoeyBiYWNrZ3JvdW5kOiAnJywgaGVpZ2h0OiAnNjRweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCB3aGl0ZScgfSkuYWRkQ2xhc3MoJ3RlYWwnKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAkKCcubWFzdGhlYWQnKVxuICAgIC52aXNpYmlsaXR5KHtcbiAgICAgIG9uY2U6IGZhbHNlLFxuICAgICAgb25VcGRhdGUoY2FsY3VsYXRpb25zKSB7XG4gICAgICAgICQoJy5mcm9udF9wYW5lbF9vdmVybGF5JykuY3NzKHsgb3BhY2l0eTogMC42ICsgKGNhbGN1bGF0aW9ucy5wZXJjZW50YWdlUGFzc2VkICogMC40KSB9KTtcbiAgICAgIH0sXG4gICAgfSlcbiAgO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcm91dGUgbWFpbi1yb3V0ZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250ZW50XCI+XG4gICAgICAgICAgPEZyb250UGFuZWwgLz5cbiAgICAgICAgICA8ZGl2IHJlZj17IGUgPT4gdGhpcy5tYWluID0gZSB9IGlkPVwibWFpblwiIHN0eWxlPXsgeyBtYXJnaW46ICctMzAwcHggMCAwIDAnLCB3aWR0aDogJzEwMCUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9IH0+PC9kaXY+XG4gICAgICAgICAgPFdlYkFwcHMvPlxuICAgICAgICAgIDxTbG9nYW4xLz5cbiAgICAgICAgICA8RGVza3RvcEFwcHMgLz5cbiAgICAgICAgICA8U2xvZ2FuMi8+XG4gICAgICAgICAgPE90aGVycyAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIb21lTWVudSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhvbWUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gcHJvcDogUHJvcFR5cGVzLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHZlcnRpY2FsIGZvb3RlciB0ZWFsIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHN0YWNrYWJsZSBpbnZlcnRlZCBkaXZpZGVkIGVxdWFsIGhlaWdodCBzdGFja2FibGUgZ3JpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHJlZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+U291cmNlPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBsaW5rIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCIgaHJlZj1cImh0dHA6Ly93d3cuZ2l0aHViLmNvbS9jY251eWFuL3N0YXJjZWR1X2F1dGgvdHJlZS9kZXZlbG9wXCI+R2l0aHViPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHJlZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+VGVjaCAmIFRvb2xzPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBsaW5rIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCIgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvXCI+UmVhY3QuanM8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIGhyZWY9XCJodHRwczovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3RyYW5zaXRpb24uaHRtbFwiPlNlbWFudGljIFVJPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiaHR0cHM6Ly9yZWFjdHRyYWluaW5nLmNvbS9yZWFjdC1yb3V0ZXIvXCI+UmVhY3QgUm91dGVyPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZG9jcy9pbnRyb2R1Y3Rpb24vXCI+UmVkdXg8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIGhyZWY9XCJodHRwczovL3JlZ2V4ci5jb20vXCI+UmVnZXhyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXZlbiB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+VG9vbHM8L2g0PlxuICAgICAgICAgICAgICA8cD5FeHRyYSBzcGFjZSBmb3IgYSBjYWxsIHRvIGFjdGlvbiBpbnNpZGUgdGhlIGZvb3RlciB0aGF0IGNvdWxkIGhlbHAgcmUtZW5nYWdlIHVzZXJzLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vRm9vdGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEZyb250UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgdmVydGljYWwgbWFzdGhlYWQgY2VudGVyIGFsaWduZWQgdHJhbnNwYXJlbnQgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250X3BhbmVsX2JhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250X3BhbmVsX292ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRleHQgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+XG4gICAgICAgICAgICAgIHtjb25maWcudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgyPkRvIHdoYXRldmVyIHlvdSB3YW50IHdoZW4geW91IHdhbnQgdG8uPC9oMj5cbiAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJ1aSBodWdlIHByaW1hcnkgYnV0dG9uXCIgaHJlZj1cIi9hcHBzL25vdGVib29rXCI+R2V0IFN0YXJ0ZWQgPGkgY2xhc3NOYW1lPVwicmlnaHQgYXJyb3cgaWNvblwiPjwvaT48L2E+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci50b0pTT04oKS51c2VyLFxufSk7XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZyb250UGFuZWwpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi9Gcm9udFBhbmVsLmpzIiwiLy8gaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuaW1wb3J0IGRldmVsb3BtZW50IGZyb20gJy4vY29uZmlnLmRldmVsb3BtZW50JztcbmltcG9ydCBwcm9kdWN0aW9uIGZyb20gJy4vY29uZmlnLnByb2R1Y3Rpb24nO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi9jb25maWcudGVzdCc7XG5cbmxldCBjb25maWdWYXIgPSB7fTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNvbmZpZ1ZhciA9IHByb2R1Y3Rpb247XG4gIGNvbmZpZ1Zhci5lbnYgPSAncHJvZHVjdGlvbic7XG59IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgY29uZmlnVmFyID0gdGVzdDtcbiAgY29uZmlnVmFyLmVudiA9ICd0ZXN0Jztcbn0gZWxzZSB7XG4gIGNvbmZpZ1ZhciA9IGRldmVsb3BtZW50O1xuICBjb25maWdWYXIuZW52ID0gJ2RldmVsb3BtZW50Jztcbn1cbmNvbnN0IGNvbmZpZyA9IGNvbmZpZ1Zhcjtcbmdsb2JhbC5jb25maWcgPSBjb25maWc7XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gIHRpdGxlOiAnc3RhckPmlZnogrItZGV2JyxcbiAgcG9ydDogODAwMCxcbiAgZG9tYWluOiAnd3d3LnN5bmNvbGxlZ2UuY29tJyxcbiAgYXV0aDoge1xuICAgIHNlc3Npb246IHtcbiAgICAgIHNlY3JldDogJzEyMzQ1Njc4JyxcbiAgICB9LFxuICAgIGp3dDoge1xuICAgICAgc2VjcmV0OiAnMTIzNDU2NzgnLFxuICAgICAgZXhwaXJlc0luOiAnMTRkJyxcbiAgICB9LFxuICAgIGNvb2tpZToge1xuICAgICAgbmFtZTogJ2F1dGhvcml6YXRpb24nLFxuICAgICAgbWF4YWdlOiA3ICogMjQgKiAzNjAwICogMTAwMCxcbiAgICB9LFxuICB9LFxuICBvYXV0aDoge1xuICAgIHFxOiB7XG4gICAgICBhcHBfaWQ6ICcxMDEyNzEwODAnLFxuICAgICAgYXBwX2tleTogJ2M4OWM5NTA3NTk4NDYzMDdhZjVhODQyNWJiOWEzYTY0JyxcbiAgICAgIHBjQ29kZUhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9hdXRob3JpemUnLFxuICAgICAgcGNUb2tlbkhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC90b2tlbicsXG4gICAgICBpbmZvSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL3VzZXIvZ2V0X3VzZXJfaW5mbycsXG4gICAgICBwY09wZW5pZEhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9tZScsXG4gICAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vd3d3LnN5bmNvbGxlZ2UuY29tL29hdXRoL2NhbGxiYWNrL3FxJyxcbiAgICB9LFxuICB9LFxuICBkYm5hbWU6ICdzdGFyY2VkdV9hdXRoJyxcbiAgcGc6IHtcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5EQlVTRVIgPyBwcm9jZXNzLmVudi5EQlVTRVIgOiAncG9zdGdyZXMnLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQkRBVEFCQVNFID8gcHJvY2Vzcy5lbnYuREJEQVRBQkFTRSA6ICdwb3N0Z3JlcycsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCUEFTU1dPUkQgPyBwcm9jZXNzLmVudi5EQlBBU1NXT1JEIDogJycsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJIT1NUID8gcHJvY2Vzcy5lbnYuREJIT1NUIDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuREJQT1JUID8gcHJvY2Vzcy5lbnYuREJQT1JUIDogNTQzMixcbiAgICBtYXg6IDEwLFxuICAgIGlkbGVUaW1lb3V0TWlsbGlzOiAzMDAwMCxcbiAgfSxcbiAgcmVzb3VyY2VzOiB7XG4gICAgc3R5bGVzaGVldHM6IHtcbiAgICAgIG5vcm1hbGl6ZTogJy8vY2RuLmJvb3Rjc3MuY29tL25vcm1hbGl6ZS82LjAuMC9ub3JtYWxpemUubWluLmNzcycsXG4gICAgICBzZW1hbnRpYzogJy9zdGF0aWMvc2VtYW50aWMvc2VtYW50aWMubWluLmNzcycsXG4gICAgfSxcbiAgICBzY3JpcHRzOiB7XG4gICAgICBqcXVlcnk6ICcvL2Nkbi5ib290Y3NzLmNvbS9qcXVlcnkvMy4yLjEvanF1ZXJ5Lm1pbi5qcycsXG4gICAgICBodG1sNXNoaXY6ICcvL2Nkbi5ib290Y3NzLmNvbS9odG1sNXNoaXYvcjI5L2h0bWw1Lm1pbi5qcycsXG4gICAgICBjbGFzc2xpc3Q6ICcvL2Nkbi5ib290Y3NzLmNvbS9jbGFzc2xpc3QvMjAxNC4wMS4zMS9jbGFzc0xpc3QubWluLmpzJyxcbiAgICAgIHNlbWFudGljOiAnL3N0YXRpYy9zZW1hbnRpYy9zZW1hbnRpYy5taW4uanMnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2NvbmZpZy5kZXZlbG9wbWVudC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICB0aXRsZTogJ3N0YXJD5pWZ6IKyJyxcbiAgcG9ydDogODAwMCxcbiAgZG9tYWluOiAnd3d3LnN5bmNvbGxlZ2UuY29tJyxcbiAgYXV0aDoge1xuICAgIHNlc3Npb246IHtcbiAgICAgIHNlY3JldDogJzEyMzQ1Njc4JyxcbiAgICB9LFxuICAgIGp3dDoge1xuICAgICAgc2VjcmV0OiAnMTIzNDU2NzgnLFxuICAgICAgZXhwaXJlc0luOiAnMTRkJyxcbiAgICB9LFxuICAgIGNvb2tpZToge1xuICAgICAgbmFtZTogJ2F1dGhvcml6YXRpb24nLFxuICAgICAgbWF4YWdlOiA3ICogMjQgKiAzNjAwICogMTAwMCxcbiAgICB9LFxuICB9LFxuICBvYXV0aDoge1xuICAgIHFxOiB7XG4gICAgICBhcHBfaWQ6ICcxMDEyNzEwODAnLFxuICAgICAgYXBwX2tleTogJ2M4OWM5NTA3NTk4NDYzMDdhZjVhODQyNWJiOWEzYTY0JyxcbiAgICAgIHBjQ29kZUhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9hdXRob3JpemUnLFxuICAgICAgcGNUb2tlbkhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC90b2tlbicsXG4gICAgICBpbmZvSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL3VzZXIvZ2V0X3VzZXJfaW5mbycsXG4gICAgICBwY09wZW5pZEhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9tZScsXG4gICAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vd3d3LnN5bmNvbGxlZ2UuY29tL29hdXRoL2NhbGxiYWNrL3FxJyxcbiAgICB9LFxuICB9LFxuICBkYm5hbWU6ICdzdGFyY2VkdV9hdXRoJyxcbiAgcGc6IHtcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5EQlVTRVIgPyBwcm9jZXNzLmVudi5EQlVTRVIgOiAncG9zdGdyZXMnLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQkRBVEFCQVNFID8gcHJvY2Vzcy5lbnYuREJEQVRBQkFTRSA6ICdwb3N0Z3JlcycsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCUEFTU1dPUkQgPyBwcm9jZXNzLmVudi5EQlBBU1NXT1JEIDogJycsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJIT1NUID8gcHJvY2Vzcy5lbnYuREJIT1NUIDogJ2RhdGFiYXNlJyxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5EQlBPUlQgPyBwcm9jZXNzLmVudi5EQlBPUlQgOiA1NDMyLFxuICAgIG1heDogMTAsXG4gICAgaWRsZVRpbWVvdXRNaWxsaXM6IDMwMDAwLFxuICB9LFxuICByZXNvdXJjZXM6IHtcbiAgICBzdHlsZXNoZWV0czoge1xuICAgICAgbm9ybWFsaXplOiAnLy9jZG4uYm9vdGNzcy5jb20vbm9ybWFsaXplLzYuMC4wL25vcm1hbGl6ZS5taW4uY3NzJyxcbiAgICAgIHNlbWFudGljOiAnL3N0YXRpYy9zZW1hbnRpYy9zZW1hbnRpYy5taW4uY3NzJyxcbiAgICB9LFxuICAgIHNjcmlwdHM6IHtcbiAgICAgIGpxdWVyeTogJy8vY2RuLmJvb3Rjc3MuY29tL2pxdWVyeS8zLjIuMS9qcXVlcnkubWluLmpzJyxcbiAgICAgIGh0bWw1c2hpdjogJy8vY2RuLmJvb3Rjc3MuY29tL2h0bWw1c2hpdi9yMjkvaHRtbDUubWluLmpzJyxcbiAgICAgIGNsYXNzbGlzdDogJy8vY2RuLmJvb3Rjc3MuY29tL2NsYXNzbGlzdC8yMDE0LjAxLjMxL2NsYXNzTGlzdC5taW4uanMnLFxuICAgICAgc2VtYW50aWM6ICcvc3RhdGljL3NlbWFudGljL3NlbWFudGljLm1pbi5qcycsXG4gICAgfSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvY29uZmlnLnByb2R1Y3Rpb24uanMiLCIvLyBjb25maWcgZm9yIGRhdGFiYXNlIHRlc3QgaW4gcmVtb3RlIHNlcnZlcjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbW9kZTogJ3Rlc3QnLFxuICB0aXRsZTogJ3N0YXJD5pWZ6IKyLXRlc3QnLFxuICBwb3J0OiA4MDAxLFxuICBkb21haW46ICd3d3cuc3luY29sbGVnZS5jb20nLFxuICBhdXRoOiB7XG4gICAgc2Vzc2lvbjoge1xuICAgICAgc2VjcmV0OiAnMTIzNDU2NzgnLFxuICAgIH0sXG4gICAgand0OiB7XG4gICAgICBzZWNyZXQ6ICcxMjM0NTY3OCcsXG4gICAgICBleHBpcmVzSW46ICcxNGQnLFxuICAgIH0sXG4gICAgY29va2llOiB7XG4gICAgICBuYW1lOiAnYXV0aG9yaXphdGlvbicsXG4gICAgICBtYXhhZ2U6IDcgKiAyNCAqIDM2MDAgKiAxMDAwLFxuICAgIH0sXG4gIH0sXG4gIG9hdXRoOiB7XG4gICAgcXE6IHtcbiAgICAgIGFwcF9pZDogJzEwMTI3MTA4MCcsXG4gICAgICBhcHBfa2V5OiAnYzg5Yzk1MDc1OTg0NjMwN2FmNWE4NDI1YmI5YTNhNjQnLFxuICAgICAgcGNDb2RlSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL29hdXRoMi4wL2F1dGhvcml6ZScsXG4gICAgICBwY1Rva2VuSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL29hdXRoMi4wL3Rva2VuJyxcbiAgICAgIGluZm9Ib3N0OiAnaHR0cHM6Ly9ncmFwaC5xcS5jb20vdXNlci9nZXRfdXNlcl9pbmZvJyxcbiAgICAgIHBjT3BlbmlkSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL29hdXRoMi4wL21lJyxcbiAgICAgIHJlZGlyZWN0X3VyaTogJ2h0dHA6Ly93d3cuc3luY29sbGVnZS5jb20vb2F1dGgvY2FsbGJhY2svcXEnLFxuICAgIH0sXG4gIH0sXG4gIGRibmFtZTogJ3N0YXJjZWR1X2F1dGgnLFxuICBwZzoge1xuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCVVNFUiA/IHByb2Nlc3MuZW52LkRCVVNFUiA6ICdwb3N0Z3JlcycsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCREFUQUJBU0UgPyBwcm9jZXNzLmVudi5EQkRBVEFCQVNFIDogJ3Bvc3RncmVzJyxcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJQQVNTV09SRCA/IHByb2Nlc3MuZW52LkRCUEFTU1dPUkQgOiAnJyxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQkhPU1QgPyBwcm9jZXNzLmVudi5EQkhPU1QgOiAnZGF0YWJhc2UtdGVzdCcsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuREJQT1JUID8gcHJvY2Vzcy5lbnYuREJQT1JUIDogNTQzMixcbiAgICBtYXg6IDIsXG4gICAgaWRsZVRpbWVvdXRNaWxsaXM6IDMwMDAwLFxuICB9LFxuICByZXNvdXJjZXM6IHtcbiAgICBzdHlsZXNoZWV0czoge1xuICAgICAgbm9ybWFsaXplOiAnLy9jZG4uYm9vdGNzcy5jb20vbm9ybWFsaXplLzYuMC4wL25vcm1hbGl6ZS5taW4uY3NzJyxcbiAgICAgIHNlbWFudGljOiAnL3N0YXRpYy9zZW1hbnRpYy9zZW1hbnRpYy5taW4uY3NzJyxcbiAgICB9LFxuICAgIHNjcmlwdHM6IHtcbiAgICAgIGpxdWVyeTogJy8vY2RuLmJvb3Rjc3MuY29tL2pxdWVyeS8zLjIuMS9qcXVlcnkubWluLmpzJyxcbiAgICAgIGh0bWw1c2hpdjogJy8vY2RuLmJvb3Rjc3MuY29tL2h0bWw1c2hpdi9yMjkvaHRtbDUubWluLmpzJyxcbiAgICAgIGNsYXNzbGlzdDogJy8vY2RuLmJvb3Rjc3MuY29tL2NsYXNzbGlzdC8yMDE0LjAxLjMxL2NsYXNzTGlzdC5taW4uanMnLFxuICAgICAgc2VtYW50aWM6ICcvc3RhdGljL3NlbWFudGljL3NlbWFudGljLm1pbi5qcycsXG4gICAgfSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvY29uZmlnLnRlc3QuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY2xhc3MgRml4ZWRNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtYXRjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ICd1aSBodWdlIGludmVydGVkIHNlY29uZGFyeSBob21lICBtZW51JyB9IHN0eWxlPXsgeyBtYXJnaW46IDAsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCB3aGl0ZScgfSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImFjdGl2ZSBpY29uIGl0ZW1cIiB0bz0nLyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBob21lXCI+PC9pPlxuICAgICAgICAgICAgICDkuLvpobVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uIGl0ZW1cIiBocmVmPScvYXBwcy9ub3RlYm9vayc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBib29rXCI+PC9pPlxuICAgICAgICAgICAgICDnrJTorrBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uIGl0ZW1cIiBocmVmPScvYXBwcy9kaXNrJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGVudFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGNsb3VkIG91dGxpbmVcIj48L2k+XG4gICAgICAgICAgICAgIOe9keebmFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWVudVwiPlxuICAgICAgICAgICAge3VzZXIuc3VjY2VzcyA/XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImljb24gaXRlbVwiIHRvPScvdXNlci9wYXNzd29yZCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHVzZXIgb3V0bGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICB7dXNlci5zdWNjZXNzID9cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaWNvbiBpdGVtXCIgdG89Jy91c2VyL3NpZ25vdXQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBzaWduIG91dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIOeZu+WHulxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+IDogJyd9XG4gICAgICAgICAgICB7dXNlci5zdWNjZXNzID8gJycgOlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaWNvbiBpdGVtXCIgdG89Jy91c2VyL3NpZ25pbic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gc2lnbiBpblwiPjwvaT5cbiAgICAgICAgICAgICAgICDnmbvlhaVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+fVxuICAgICAgICAgICAge3VzZXIuc3VjY2VzcyA/ICcnIDpcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImljb24gaXRlbVwiIHRvPScvdXNlci9zaWdudXAnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHNtaWxlXCI+PC9pPlxuICAgICAgICAgICAgICAgIOazqOWGjFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZpeGVkTWVudSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL0hvbWVNZW51LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgV2ViQXBwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gIC8vICAgJCgnLndlYmFwcCcpXG4gIC8vICAgICAudmlzaWJpbGl0eSh7XG4gIC8vICAgICAgIG9uY2U6IHRydWUsXG4gIC8vICAgICAgIC8vIHVwZGF0ZSBzaXplIHdoZW4gbmV3IGNvbnRlbnQgbG9hZHNcbiAgLy8gICAgICAgb2JzZXJ2ZUNoYW5nZXM6IHRydWUsXG4gIC8vICAgICAgIC8vIGxvYWQgY29udGVudCBvbiBib3R0b20gZWRnZSB2aXNpYmxlXG4gIC8vICAgICAgIG9uVG9wVmlzaWJsZSgpIHtcbiAgLy8gICAgICAgICAvLyBsb2FkcyBhIG1heCBvZiA1IHRpbWVzXG4gIC8vICAgICAgICAgJCgnLndlYmFwcCAuY2FyZCcpXG4gIC8vICAgICAgICAgLnRyYW5zaXRpb24oe1xuICAvLyAgICAgICAgICAgYW5pbWF0aW9uOiAncHVsc2UnLFxuICAvLyAgICAgICAgICAgaW50ZXJ2YWw6IDMwMCxcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH0pO1xuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHN0cmlwZSB2ZXJ0aWNhbCB3ZWJhcHAgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1aSBoZWFkZXJcIj5cbiAgICAgICAgICAgIFdlYiBBcHBzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRocmVlIGNhcmRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGdyZWVuIGNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj7lpIfor77nrJTorrA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1aSBzdWIgaGVhZGVyXCI+QWN0aXZpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc21hbGwgZmVlZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVsbGlvdCBGdTwvYT4gYWRkZWQgPGE+SmVubnkgSGVzczwvYT4gdG8gdGhlIHByb2plY3RcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0ZXZpZSBGZWxpY2lhbm88L2E+IHdhcyBhZGRlZCBhcyBhbiA8YT5BZG1pbmlzdHJhdG9yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhlbGVuIFRyb3k8L2E+IGFkZGVkIHR3byBwaWN0dXJlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiBocmVmPVwiL2FwcHMvbm90ZWJvb2tcIj5HbzwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgcmVkIGNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj7ohJHlm748L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1aSBzdWIgaGVhZGVyXCI+QWN0aXZpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc21hbGwgZmVlZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVsbGlvdCBGdTwvYT4gYWRkZWQgPGE+SmVubnkgSGVzczwvYT4gdG8gdGhlIHByb2plY3RcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0ZXZpZSBGZWxpY2lhbm88L2E+IHdhcyBhZGRlZCBhcyBhbiA8YT5BZG1pbmlzdHJhdG9yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhlbGVuIFRyb3k8L2E+IGFkZGVkIHR3byBwaWN0dXJlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5HbzwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYmx1ZSBjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+572R55uY56m66Ze0PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiPkFjdGl2aXR5PC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNtYWxsIGZlZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5FbGxpb3QgRnU8L2E+IGFkZGVkIDxhPkplbm55IEhlc3M8L2E+IHRvIHRoZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TdGV2aWUgRmVsaWNpYW5vPC9hPiB3YXMgYWRkZWQgYXMgYW4gPGE+QWRtaW5pc3RyYXRvcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5IZWxlbiBUcm95PC9hPiBhZGRlZCB0d28gcGljdHVyZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiBocmVmPVwiL2FwcHMvZGlza1wiPkdvPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJBcHBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5jbHVkZXMvV2ViQXBwcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNsb2dhbjEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIHByb3A6IFByb3BUeXBlcyxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICQoJy51aS5wcm9ncmVzcycpLnByb2dyZXNzKCk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBzdHJpcGUgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRleHQgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaHVnZSBpY29uIGJlbGxcIj48L2k+XG4gICAgICAgICAgICBUb3RhbCBQcm9ncmVzc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBkYXRhLXBlcmNlbnQ9JzQwJyBjbGFzc05hbWU9XCJ1aSB3aGl0ZSBwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPjQwJTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGRhdGEtcGVyY2VudD0nNjAnIGNsYXNzTmFtZT1cInVpIHllbGxvdyBwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+6K6k6K+B57O757ufJuacjeWKoTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1wZXJjZW50PSczMCcgY2xhc3NOYW1lPVwidWkgZ3JlZW4gcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPue9keebmOezu+e7nybkupHlrZjlgqjmnI3liqE8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsb2dhbjE7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2luY2x1ZGVzL1Nsb2dhbjEuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTbG9nYW4xIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgJCgnLnVpLmFjY29yZGlvbicpLmFjY29yZGlvbigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHZlcnRpY2FsIHN0cmlwZSB0ZWFsIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0ZXh0IGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBoZWFkZXJcIj5cbiAgICAgICAgICAgIEZBUVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBhY2NvcmRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICBXaGF0IGlzIGEgZG9nP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGhpZGRlblwiPkEgZG9nIGlzIGEgdHlwZSBvZiBkb21lc3RpY2F0ZWQgYW5pbWFsLlxuICAgICAgICAgICAgICBLbm93biBmb3IgaXRzIGxveWFsdHkgYW5kIGZhaXRoZnVsbmVzcywgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICBXaGF0IGtpbmRzIG9mIGRvZ3MgYXJlIHRoZXJlP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGhpZGRlblwiPlRoZXJlIGFyZSBtYW55IGJyZWVkcyBvZiBkb2dzLlxuICAgICAgICAgICAgICBFYWNoIGJyZWVkIHZhcmllcyBpbiBzaXplIGFuZCB0ZW1wZXJhbWVudC5cbiAgICAgICAgICAgICAgT3duZXJzIG9mdGVuIHNlbGVjdCBhIGJyZWVkIG9mIGRvZyB0aGF0IHRoZXkgZmluZCB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlaXIgb3duIGxpZmVzdHlsZSBhbmQgZGVzaXJlcyBmcm9tIGEgY29tcGFuaW9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICBIb3cgZG8geW91IGFjcXVpcmUgYSBkb2c/XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIHZpc2libGVcIj5UaHJlZSBjb21tb24gd2F5cyBmb3IgYSBwcm9zcGVjdGl2ZSBvd25lciB0byBhY3F1aXJlIGEgZG9nIGlzIGZyb20gcGV0IHNob3BzLCBwcml2YXRlIG93bmVycywgb3Igc2hlbHRlcnMuPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIHZpc2libGVcIj5BIHBldCBzaG9wIG1heSBiZSB0aGUgbW9zdCBjb252ZW5pZW50IHdheSB0byBidXkgYSBkb2cuXG4gICAgICAgICAgICAgIEJ1eWluZyBhIGRvZyBmcm9tIGEgcHJpdmF0ZSBvd25lciBhbGxvd3MgeW91IHRvIGFzc2VzcyB0aGUgcGVkaWdyZWUgYW5kIHVwYnJpbmdpbmcgb2YgeW91ciBkb2cgYmVmb3JlIGNob29zaW5nIHRvIHRha2UgaXQgaG9tZS5cbiAgICAgICAgICAgICAgTGFzdGx5LCBmaW5kaW5nIHlvdXIgZG9nIGZyb20gYSBzaGVsdGVyLCBoZWxwcyBnaXZlIGEgZ29vZCBob21lIHRvIGEgZG9nIHdobyBtYXkgbm90IGZpbmQgb25lIHNvIHJlYWRpbHkuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbG9nYW4xO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9TbG9nYW4yLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRGVza3RvcEFwcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAvLyAgICQoJy5kZXNrdG9wYXBwJylcbiAgLy8gICAudmlzaWJpbGl0eSh7XG4gIC8vICAgICBvbmNlOiB0cnVlLFxuICAvLyAgICAgLy8gdXBkYXRlIHNpemUgd2hlbiBuZXcgY29udGVudCBsb2Fkc1xuICAvLyAgICAgb2JzZXJ2ZUNoYW5nZXM6IHRydWUsXG4gIC8vICAgICAvLyBsb2FkIGNvbnRlbnQgb24gYm90dG9tIGVkZ2UgdmlzaWJsZVxuICAvLyAgICAgb25Ub3BWaXNpYmxlKCkge1xuICAvLyAgICAgICAvLyBsb2FkcyBhIG1heCBvZiA1IHRpbWVzXG4gIC8vICAgICAgICQoJy5kZXNrdG9wYXBwIC5jYXJkJylcbiAgLy8gICAgICAgLnRyYW5zaXRpb24oe1xuICAvLyAgICAgICAgIGFuaW1hdGlvbjogJ3B1bHNlJyxcbiAgLy8gICAgICAgICBpbnRlcnZhbDogMzAwLFxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzdHJpcGUgdmVydGljYWwgZGVza3RvcGFwcCBzZWdtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAg5qGM6Z2iIEFwcHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdHdvIGNhcmRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHBpbmsgY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPuaVmeW4iOerrzwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIj5BY3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzbWFsbCBmZWVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+RWxsaW90IEZ1PC9hPiBhZGRlZCA8YT5KZW5ueSBIZXNzPC9hPiB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0ZXZpZSBGZWxpY2lhbm88L2E+IHdhcyBhZGRlZCBhcyBhbiA8YT5BZG1pbmlzdHJhdG9yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhlbGVuIFRyb3k8L2E+IGFkZGVkIHR3byBwaWN0dXJlc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5Eb3dubG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj7lrabnlJ/nq688L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1aSBzdWIgaGVhZGVyXCI+QWN0aXZpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc21hbGwgZmVlZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVsbGlvdCBGdTwvYT4gYWRkZWQgPGE+SmVubnkgSGVzczwvYT4gdG8gdGhlIHByb2plY3RcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TdGV2aWUgRmVsaWNpYW5vPC9hPiB3YXMgYWRkZWQgYXMgYW4gPGE+QWRtaW5pc3RyYXRvcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5IZWxlbiBUcm95PC9hPiBhZGRlZCB0d28gcGljdHVyZXNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCI+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BBcHBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5jbHVkZXMvRGVza3RvcEFwcHMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBPdGhlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAvLyAgICQoJy5vdGhlcmFwcCcpXG4gIC8vICAgICAudmlzaWJpbGl0eSh7XG4gIC8vICAgICAgIG9uY2U6IHRydWUsXG4gIC8vICAgICAgIC8vIHVwZGF0ZSBzaXplIHdoZW4gbmV3IGNvbnRlbnQgbG9hZHNcbiAgLy8gICAgICAgb2JzZXJ2ZUNoYW5nZXM6IHRydWUsXG4gIC8vICAgICAgIC8vIGxvYWQgY29udGVudCBvbiBib3R0b20gZWRnZSB2aXNpYmxlXG4gIC8vICAgICAgIG9uVG9wVmlzaWJsZSgpIHtcbiAgLy8gICAgICAgICAvLyBsb2FkcyBhIG1heCBvZiA1IHRpbWVzXG4gIC8vICAgICAgICAgJCgnLm90aGVyYXBwIC5jYXJkJylcbiAgLy8gICAgICAgICAudHJhbnNpdGlvbih7XG4gIC8vICAgICAgICAgICBhbmltYXRpb246ICdwdWxzZScsXG4gIC8vICAgICAgICAgICBpbnRlcnZhbDogMzAwLFxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSk7XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3RyaXBlIHZlcnRpY2FsIG90aGVyYXBwIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICDlhbbku5YgQXBwc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0aHJlZSBjYXJkc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSByZWQgY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPuWtpuS5oOe7j+WOhuWIhuaekOezu+e7nzwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIj5BY3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzbWFsbCBmZWVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+RWxsaW90IEZ1PC9hPiBhZGRlZCA8YT5KZW5ueSBIZXNzPC9hPiB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3RldmllIEZlbGljaWFubzwvYT4gd2FzIGFkZGVkIGFzIGFuIDxhPkFkbWluaXN0cmF0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SGVsZW4gVHJveTwvYT4gYWRkZWQgdHdvIHBpY3R1cmVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXJcIiBzdHlsZT17IHsgbWFyZ2luOiAnMjUwcHgnIH0gfT48L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5jbHVkZXMvT3RoZXJzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBSb3V0ZSxcbiAgd2l0aFJvdXRlcixcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBbmltYXRlZFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci10cmFuc2l0aW9uJztcbmltcG9ydCBTaWduaW4gZnJvbSAnLi9TaWduaW4nO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL1NpZ251cCc7XG5pbXBvcnQgU2lnbm91dCBmcm9tICcuL1NpZ25vdXQnO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4vUGFzc3dvcmQnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8QW5pbWF0ZWRTd2l0Y2hcbiAgICAgICAgICBhdEVudGVyPXsgeyBvcGFjaXR5OiAwIH0gfVxuICAgICAgICAgIGF0TGVhdmU9eyB7IG9wYWNpdHk6IDAgfSB9XG4gICAgICAgICAgYXRBY3RpdmU9eyB7IG9wYWNpdHk6IDEgfSB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1mb3JtIG1haW4tcm91dGUtY29udGVudFwiXG4gICAgICA+XG4gICAgICAgIDxSb3V0ZSBsb2NhdGlvbj17IGxvY2F0aW9uIH0gY29tcG9uZW50PXsgU2lnbmluIH0gcGF0aD0nL3VzZXIvc2lnbmluJyBleGFjdD17IHRydWUgfT48L1JvdXRlPlxuICAgICAgICA8Um91dGUgbG9jYXRpb249eyBsb2NhdGlvbiB9IGNvbXBvbmVudD17IFNpZ251cCB9IHBhdGg9Jy91c2VyL3NpZ251cCcgZXhhY3Q9eyB0cnVlIH0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIGxvY2F0aW9uPXsgbG9jYXRpb24gfSBjb21wb25lbnQ9eyBTaWdub3V0IH0gcGF0aD0nL3VzZXIvc2lnbm91dCcgZXhhY3Q9eyB0cnVlIH0+PC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIGxvY2F0aW9uPXsgbG9jYXRpb24gfSBjb21wb25lbnQ9eyBQYXNzd29yZCB9IHBhdGg9Jy91c2VyL3Bhc3N3b3JkJyBleGFjdD17IHRydWUgfT48L1JvdXRlPlxuICAgICAgPC9BbmltYXRlZFN3aXRjaD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSG9tZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Vc2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgUmVkaXJlY3QsXG4gIExpbmssXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbmltcG9ydCBFbWFpbEZpZWxkIGZyb20gJy4vY29tbW9uL3VzZXIvRW1haWxGaWVsZCc7XG5pbXBvcnQgUGFzc3dvcmRGaWVsZCBmcm9tICcuL2NvbW1vbi91c2VyL1Bhc3N3b3JkRmllbGQnO1xuaW1wb3J0IE9BdXRoUHJvdmlkZXJzIGZyb20gJy4vY29tbW9uL3VzZXIvT0F1dGhQcm92aWRlcnMnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuaW1wb3J0IFFRSW5mbyBmcm9tICcuL2NvbW1vbi91c2VyL29hdXRoL1FRSW5mbyc7XG5cbmltcG9ydCBpbml0IGZyb20gJy4uL2luaXRGb3JtVmFsaWRhdGlvbic7XG5cbmNsYXNzIFNpZ25pbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9hdXRoVXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN1Ym1pdEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBidXN5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHNldFN1Ym1pdE1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2lnbmluOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgdGhpcy5wcm9wcy5zZXRTdWJtaXRNb2RlKCk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgkKHRoaXMuZm9ybSkuZm9ybSgnaXMgdmFsaWQnKSkge1xuICAgICAgdGhpcy5wcm9wcy5zaWduaW4odGhpcy5wcm9wcy5zdWJtaXRJbmZvKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh1c2VyLnN1Y2Nlc3MpIHtcbiAgICAgIGlmICghdXNlci5jYWxsYmFjayB8fCB1c2VyLmNhbGxiYWNrID09PSAnLycpIHtcbiAgICAgICAgcmV0dXJuICg8UmVkaXJlY3QgdG89eyB7IHBhdGhuYW1lOiAnLycgfSB9Lz4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVzZXIuY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tY29udGVudFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidWkgdGVhbCBpbWFnZSBoZWFkZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiBhbHQ9XCJcIiBzdHlsZT17IHsgYm9yZGVyUmFkaXVzOiAnNHB4JyB9IH0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgeyfnmbvlhaUnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gyPlxuICAgICAgICB7dGhpcy5wcm9wcy5vYXV0aFVzZXIuaWQgPyA8UVFJbmZvLz4gOiAnJ31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgIDxmb3JtIHJlZj17IGUgPT4gdGhpcy5mb3JtID0gZSB9IGNsYXNzTmFtZT17IGB1aSBmb3JtICR7dGhpcy5wcm9wcy5idXN5ID8gJ2xvYWRpbmcnIDogJyd9YCB9IG9uU3VibWl0PXsgdGhpcy5vbkZvcm1TdWJtaXQgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNlZ21lbnRcIj5cbiAgICAgICAgICAgIDxFbWFpbEZpZWxkLz5cbiAgICAgICAgICAgIDxQYXNzd29yZEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIuWvhueggVwiLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgZmx1aWQgdGVhbCBzdWJtaXQgYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPueZu+WFpTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZXJyb3IgbWVzc2FnZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxPQXV0aFByb3ZpZGVycy8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICDlsJrmnKrms6jlhozvvJ9cbiAgICAgICAgICA8TGluayB0bz0nL3VzZXIvc2lnbnVwJyA+5Y675rOo5YaMITwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgIOW/mOiusOWvhuegge+8n1xuICAgICAgICAgIDxzcGFuIHRvPScvdXNlci9zaWdudXAnID7ljrvmib7lm54hKOacquWunueOsCk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VpIHJpZ2h0IGZsb2F0ZWQnIHRvPScvJz7ov5Tlm57kuLvpobU8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLnVzZXIsXG4gIG9hdXRoVXNlcjogc3RhdGUudXNlci50b0pTT04oKS5vYXV0aFVzZXIsXG4gIHN1Ym1pdEluZm86IHN0YXRlLnVzZXIudG9KU09OKCkuc3VibWl0SW5mbyxcbiAgYnVzeTogc3RhdGUuYXN5bmNTdGF0dXMudG9KU09OKCkuVVNFUl9TSUdOSU5fQlVTWSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWduaW46IChpbmZvKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zaWduaW4oaW5mbykpO1xuICAgIH0sXG4gICAgc2V0U3VibWl0TW9kZTogKCkgPT4ge1xuICAgICAgdXNlckFjdGlvbnMuc2V0U3VibWl0TW9kZShkaXNwYXRjaCwgJ3NpZ25pbicpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWduaW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvU2lnbmluLmpzIiwiY29uc3QgZ2V0SGVhZGVycyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBoZWFkZXJzLmFwcGVuZCgnYWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgcmV0dXJuIGhlYWRlcnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEhlYWRlcnMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLy8gaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuaW1wb3J0IGRldmVsb3BtZW50IGZyb20gJy4vY29uZmlnLmRldmVsb3BtZW50JztcbmltcG9ydCBwcm9kdWN0aW9uIGZyb20gJy4vY29uZmlnLnByb2R1Y3Rpb24nO1xuXG5sZXQgY29uZmlnVmFyID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjb25maWdWYXIgPSBwcm9kdWN0aW9uO1xuICBjb25maWdWYXIuZW52ID0gJ3Byb2R1Y3Rpb24nO1xufSBlbHNlIHtcbiAgY29uZmlnVmFyID0gZGV2ZWxvcG1lbnQ7XG4gIGNvbmZpZ1Zhci5lbnYgPSAnZGV2ZWxvcG1lbnQnO1xufVxuY29uc3QgY29uZmlnID0gY29uZmlnVmFyO1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbmZpZy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2VydmljZUJhc2U6ICdodHRwOi8vd3d3LnN5bmNvbGxlZ2UuY29tLycsXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29uZmlnL2NvbmZpZy5kZXZlbG9wbWVudC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2VydmljZUJhc2U6ICdodHRwOi8vd3d3LnN5bmNvbGxlZ2UuY29tLycsXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29uZmlnL2NvbmZpZy5wcm9kdWN0aW9uLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvblR5cGVzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2Zyb250ZW5kL2NvbmZpZyc7XG5pbXBvcnQgZmlsbCBmcm9tICcuL21lc3NhZ2VNaWRkbGV3YXJlJztcblxuY29uc3QgYmFzZSA9IGNvbmZpZy5zZXJ2aWNlQmFzZTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG5cbmNvbnN0IHNpZ25pbiA9IChpbmZvKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczogdXRpbHMuZ2V0SGVhZGVycygpLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5mbyksXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05JTl9TVEFSVCB9KSk7XG5cbiAgICBmZXRjaChgJHtiYXNlfWFwaS91c2VyL3NpZ25pbmAsIHBheWxvYWQpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0lHTklOX0VORCwgcGF5bG9hZDogcmV0IH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TSUdOSU5fRVJST1IgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IHNpZ251cCA9IChpbmZvKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczogdXRpbHMuZ2V0SGVhZGVycygpLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5mbyksXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05VUF9TVEFSVCB9KSk7XG5cbiAgICBmZXRjaChgJHtiYXNlfWFwaS91c2VyL3NpZ251cGAsIHBheWxvYWQpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0lHTlVQX0VORCwgcGF5bG9hZDogcmV0IH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TSUdOVVBfRVJST1IgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB1dGlscy5nZXRIZWFkZXJzKCksXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05PVVRfU1RBUlQgfSkpO1xuXG4gICAgZmV0Y2goYCR7YmFzZX1hcGkvdXNlci9zaWdub3V0YCwgcGF5bG9hZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TSUdOT1VUX0VORCwgcGF5bG9hZDogcmV0IH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TSUdOT1VUX0VSUk9SIH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCB1cGRhdGVfcGFzc3dvcmQgPSAoaW5mbykgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczogdXRpbHMuZ2V0SGVhZGVycygpLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5mbyksXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1VQREFURV9QQVNTV09SRF9TVEFSVCB9KSk7XG5cbiAgICBmZXRjaChgJHtiYXNlfWFwaS91c2VyL3VwZGF0ZV9wYXNzd29yZGAsIHBheWxvYWQpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfVVBEQVRFX1BBU1NXT1JEX0VORCwgcGF5bG9hZDogcmV0IH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9VUERBVEVfUEFTU1dPUkRfRVJST1IgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IG9hdXRoX3NpZ25vdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB1dGlscy5nZXRIZWFkZXJzKCksXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1NJR05PVVRfU1RBUlQgfSkpO1xuXG4gICAgZmV0Y2goYCR7YmFzZX1hcGkvb2F1dGgvc2lnbm91dGAsIHBheWxvYWQpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXQpID0+IHtcbiAgICAgICAgaWYgKHJldC5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfT0FVVEhfU0lHTk9VVF9FTkQsIHBheWxvYWQ6IHJldCB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfT0FVVEhfU0lHTk9VVF9FUlJPUiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9TSUdOT1VUX0VSUk9SIH0pKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCBvYXV0aF91bmxpbmsgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczogdXRpbHMuZ2V0SGVhZGVycygpLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9VTkxJTktfU1RBUlQgfSkpO1xuXG4gICAgZmV0Y2goYCR7YmFzZX1hcGkvb2F1dGgvdW5saW5rYCwgcGF5bG9hZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBpZiAocmV0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9VTkxJTktfRU5ELCBwYXlsb2FkOiByZXQgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1VOTElOS19FUlJPUiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9VTkxJTktfRVJST1IgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IHNldFN1Ym1pdE1vZGUgPSAoZGlzcGF0Y2gsIG1vZGUpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0VUX1NVQk1JVF9JTkZPLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG1vZGUsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRTdWJtaXRJbmZvID0gKGRpc3BhdGNoLCBpbmZvKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NFVF9TVUJNSVRfSU5GTyxcbiAgICBwYXlsb2FkOiBpbmZvLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2lnbmluLFxuICBzaWdudXAsXG4gIHNpZ25vdXQsXG4gIHVwZGF0ZV9wYXNzd29yZCxcbiAgb2F1dGhfdW5saW5rLFxuICBvYXV0aF9zaWdub3V0LFxuICBzZXRTdWJtaXRNb2RlLFxuICBzZXRTdWJtaXRJbmZvLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IG1lc3NhZ2VEaWN0ID0ge1xuICBVU0VSX1NJR05VUF9FUlJPUjogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBoZWFkZXI6ICfms6jlhozlpLHotKUnLFxuICAgICAgZGV0YWlsczogJ+i/meWPr+iDveaYr+eUseS6jue9kee7nOmXrumimOmAoOaIkOeahCcsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9TSUdOVVBfRU5EOiAocGF5bG9hZCkgPT4ge1xuICAgIGlmIChwYXlsb2FkLmNvZGUgPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICBoZWFkZXI6ICfms6jlhozmiJDlip8nLFxuICAgICAgICBkZXRhaWxzOiAn6L+Y562J5LuA5LmI77yM5Y+v5Lul5byA5aeL5bC95oOF546p6ICN5LqGJyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChwYXlsb2FkLmNvZGUgPT09IDQwMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBoZWFkZXI6ICfms6jlhozlpLHotKUnLFxuICAgICAgICBkZXRhaWxzOiAn5Y+v6IO95piv55Sx5LqO6K+l55So5oi35ZCN5bey57uP6KKr5rOo5YaM6L+H5LqGJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBoZWFkZXI6ICfms6jlhozlpLHotKUnLFxuICAgICAgZGV0YWlsczogJ+eUqOaIt+WQjS/lr4bnoIHkuI3nrKblkIjopoHmsYInLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfU0lHTklOX0VSUk9SOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+eZu+WFpeWksei0pScsXG4gICAgICBkZXRhaWxzOiAn6L+Z5Y+v6IO95piv55Sx5LqO572R57uc6Zeu6aKY6YCg5oiQ55qEJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX1NJR05JTl9FTkQ6IChwYXlsb2FkKSA9PiB7XG4gICAgaWYgKHBheWxvYWQuY29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgIGhlYWRlcjogJ+eZu+WFpeaIkOWKnycsXG4gICAgICAgIGRldGFpbHM6ICfov5jnrYnku4DkuYjvvIzlj6/ku6XlvIDlp4vlsL3mg4XnjqnogI3kuoYnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHBheWxvYWQuY29kZSA9PT0gNDAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGhlYWRlcjogJ+eZu+WFpeWksei0pScsXG4gICAgICAgIGRldGFpbHM6ICfnlKjmiLfkuI3lrZjlnKjmiJbnlKjmiLflkI0v5a+G56CB6ZSZ6K+vJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBoZWFkZXI6ICfnmbvlhaXlpLHotKUnLFxuICAgICAgZGV0YWlsczogJ+eUqOaIt+WQjS/lr4bnoIHkuI3nrKblkIjopoHmsYInLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfU0lHTk9VVF9FUlJPUjogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBoZWFkZXI6ICfnmbvlh7rlpLHotKUnLFxuICAgICAgZGV0YWlsczogJ+i/meWPr+iDveaYr+eUseS6jue9kee7nOmXrumimOmAoOaIkOeahCcsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9TSUdOT1VUX0VORDogKHBheWxvYWQpID0+IHtcbiAgICBpZiAocGF5bG9hZC5jb2RlICE9PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGhlYWRlcjogJ+eZu+WHuuWksei0pScsXG4gICAgICAgIGRldGFpbHM6ICfov5nlj6/og73mmK/nlLHkuo7mnI3liqHlmajnmoTplJnor6/pgKDmiJDnmoQnLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIFVTRVJfVVBEQVRFX1BBU1NXT1JEX0VSUk9SOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+abtOaWsOWvhueggeWksei0pScsXG4gICAgICBkZXRhaWxzOiAn6L+Z5Y+v6IO95piv55Sx5LqO572R57uc6Zeu6aKY6YCg5oiQ55qEJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX1VQREFURV9QQVNTV09SRF9FTkQ6IChwYXlsb2FkKSA9PiB7XG4gICAgaWYgKHBheWxvYWQuY29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgIGhlYWRlcjogJ+abtOaWsOWvhueggeaIkOWKnycsXG4gICAgICAgIGRldGFpbHM6ICfor7fkvb/nlKjmlrDlr4bnoIHph43mlrDnmbvlhaUnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHBheWxvYWQuY29kZSA9PT0gNDAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGhlYWRlcjogJ+abtOaWsOWvhueggeWksei0pScsXG4gICAgICAgIGRldGFpbHM6ICfor7fnoa7kv53kvaDnmoTljp/lp4vlr4bnoIHmraPnoa4nLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+abtOaWsOWvhueggeWksei0pScsXG4gICAgICBkZXRhaWxzOiAn5paw5a+G56CB5LiN56ym5ZCI6KaB5rGCJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX0JJTkRfQVVUSEVOVElDQVRFX0VSUk9SOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+e7keWumuWksei0pScsXG4gICAgICBkZXRhaWxzOiAn6L+Z5Y+v6IO95piv55Sx5LqO572R57uc6Zeu6aKY6YCg5oiQ55qEJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX0JJTkRfQVVUSEVOVElDQVRFX0VORDogKHBheWxvYWQpID0+IHtcbiAgICBpZiAocGF5bG9hZC5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgaGVhZGVyOiAn57uR5a6a5oiQ5YqfJyxcbiAgICAgICAgZGV0YWlsczogJ+i/mOetieS7gOS5iO+8jOWPr+S7peW8gOWni+WwveaDheeOqeiAjeS6hicsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaGVhZGVyOiAn57uR5a6a5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6IFtcbiAgICAgICAgJ+ivt+ehruS/neS9oOW3suazqOWGjO+8jOW5tumHjeaWsOaguOWvueS9oOeahOeUqOaIt+WQjeWSjOWvhueggScsXG4gICAgICAgICfor7fnoa7kv53msqHmnInph43lpI3nu5HlrponLFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBVU0VSX1NJR05PVVQ6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBoZWFkZXI6ICfmiJDlip/nmbvlh7onLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfVVNFUk5BTUVfQ0hFQ0tfRVJST1I6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaW5saW5lOiAn55So5oi35ZCN5qOA5p+l5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6ICfov5nlj6/og73mmK/nvZHnu5zljp/lm6DpgKDmiJDnmoTvvIzkvaDlj6/ku6XlsJ3or5Xnu6fnu63ms6jlhownLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfVVNFUk5BTUVfQ0hFQ0tfRU5EOiAocGF5bG9hZCkgPT4ge1xuICAgIGlmIChwYXlsb2FkLnZhbGlkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgaW5saW5lOiAn5L2g5LiN6IO95L2/55So6K+l55So5oi35ZCNJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBpbmxpbmU6ICfkvaDkuI3og73kvb/nlKjor6XnlKjmiLflkI0nLFxuICAgICAgZGV0YWlsczogJ+i/meWPr+iDveaYr+eUseS6juW3sue7j+acieS6uuS9v+eUqOivpeeUqOaIt+WQjeazqOWGjOS6hicsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9HRVRfT0FVVEhfSU5GT19FTkQ6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBpbmxpbmU6ICfojrflj5bnrKzkuInmlrnnmbvlvZXkv6Hmga/lrozmiJAnLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfR0VUX09BVVRIX0lORk9fRVJST1I6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaW5saW5lOiAn6I635Y+W56ys5LiJ5pa555m75b2V5L+h5oGv5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6ICfov5nlj6/og73mmK/nvZHnu5zljp/lm6DpgKDmiJDnmoQnLFxuICAgIH07XG4gIH0sXG59O1xuXG4vLyB0aGlzIGlzIGEgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGFjdGlvbiBwYXJhbWV0ZXJcbmV4cG9ydCBkZWZhdWx0ICh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVyID0gbWVzc2FnZURpY3RbdHlwZV07XG4gIGlmIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIHVpX21lc3NhZ2U6IGhhbmRsZXIocGF5bG9hZCkgfHwge30sXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc29sZS5sb2coYG5vIG1lc3NhZ2UgaGFuZGxlciBmb3VuZCBmb3IgdHlwZTogJHt0eXBlfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuIHsgdHlwZSwgcGF5bG9hZCB9O1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2FjdGlvbnMvbWVzc2FnZU1pZGRsZXdhcmUuanMiLCJjb25zdCB2YWxpZGF0aW9uUnVsZXMgPSB7XG4gIHVzZXJuYW1lOiB7XG4gICAgYmVmb3JlVmFsOiAodmFsKSA9PiB7XG4gICAgICByZXR1cm4gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICByZWdleDovKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkvLCAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgICBlbXB0eUNvZGU6IDEwMSxcbiAgICBjb2RlOiAxMDIsXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgcmVnZXg6IC9eW0EtWmEtejAtOV17NiwyMH0kLyxcbiAgICBlbXB0eUNvZGU6IDExMSxcbiAgICBjb2RlOiAxMTIsXG4gIH0sXG4gIG9sZF9wYXNzd29yZDoge1xuICAgIHJlZ2V4OiAvXltBLVphLXowLTldezYsMjB9JC8sXG4gICAgZW1wdHlDb2RlOiAxMjEsXG4gICAgY29kZTogMTIyLFxuICB9LFxuICBuZXdfcGFzc3dvcmQ6IHtcbiAgICByZWdleDogL15bQS1aYS16MC05XXs2LDIwfSQvLFxuICAgIGVtcHR5Q29kZTogMTMxLFxuICAgIGNvZGU6IDEzMixcbiAgfSxcbiAgYmluZF91c2VyX2lkOiB7XG4gICAgZW1wdHlDb2RlOiAxNDEsXG4gIH0sXG4gIG9hdXRoX3VzZXJfaWQ6IHtcbiAgICBlbXB0eUNvZGU6IDE1MSxcbiAgfSxcbiAgdW5pcXVlX3Byb3ZpZGVyX2lkOiB7XG4gICAgZW1wdHlDb2RlOiAxNjEsXG4gIH0sXG4gIHByb3ZpZGVyOiB7XG4gICAgZW1wdHlDb2RlOiAxNzEsXG4gIH0sXG4gIHByb2ZpbGU6IHtcbiAgICBlbXB0eUNvZGU6IDE4MSxcbiAgfSxcbn07XG5cbmNvbnN0IHZhbGlkYXRlID0gKHBheWxvYWQsIG5vbk51bGxQYXJhbXNBcnJheSkgPT4ge1xuICBjb25zdCByZXQgPSB7XG4gICAgY29kZTogMCxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfTtcblxuICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgaWYgKHBheWxvYWRba10gJiYgdHlwZW9mIHBheWxvYWRba10gPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXlsb2FkW2tdID0gcGF5bG9hZFtrXS50cmltKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gICAgaWYgKHBheWxvYWRba10gJiYgdmFsaWRhdGlvblJ1bGVzW2tdICYmIHZhbGlkYXRpb25SdWxlc1trXS5iZWZvcmVWYWwpIHtcbiAgICAgIHBheWxvYWRba10gPSB2YWxpZGF0aW9uUnVsZXNba10uYmVmb3JlVmFsKHBheWxvYWRba10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfVxuICB9KTtcblxuICBub25OdWxsUGFyYW1zQXJyYXkuZXZlcnkoKGspID0+IHtcbiAgICBpZiAoIXZhbGlkYXRpb25SdWxlc1trXSkge1xuICAgICAgY29uc29sZS5sb2coYG5vIHZhbGlkYXRpb24gcnVsZSBmb3Igbm9uLW51bGwgcGFyYW1ldGVyICR7a30gaW4gXFxuKSR7SlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgMil9YCk7XG4gICAgfSBlbHNlIGlmICghcGF5bG9hZFtrXSkge1xuICAgICAgcmV0LmNvZGUgPSB2YWxpZGF0aW9uUnVsZXNba10uZW1wdHlDb2RlO1xuICAgICAgcmV0Lm1lc3NhZ2UgPSBgJHtrfSBlbXB0eWA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBpZiAocmV0LmNvZGUgIT09IDApIHtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgT2JqZWN0LmtleXMocGF5bG9hZCkuZXZlcnkoKGspID0+IHtcbiAgICBpZiAoIXZhbGlkYXRpb25SdWxlc1trXSkge1xuICAgICAgLy8gY29uc29sZS5sb2coYG5vIHZhbGlkYXRpb24gcnVsZSBmb3IgcGFyYW1ldGVyICR7a30gaW4gXFxuKSR7SlNPTi5zdHJpbmdpZnkocGF5bG9hZCwgbnVsbCwgMil9YCk7XG4gICAgfSBlbHNlIGlmICghdmFsaWRhdGlvblJ1bGVzW2tdLnJlZ2V4KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgbm8gcmVnZXggcnVsZSBmb3IgcGFyYW1ldGVyICR7a31gKTtcbiAgICB9IGVsc2UgaWYgKCF2YWxpZGF0aW9uUnVsZXNba10ucmVnZXgudGVzdChwYXlsb2FkW2tdKSkge1xuICAgICAgcmV0LmNvZGUgPSB2YWxpZGF0aW9uUnVsZXNba10uY29kZTtcbiAgICAgIHJldC5tZXNzYWdlID0gYHByb3ZpZGVkICR7a30gaWxsaWdhbGA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0ZSxcbiAgdmFsaWRhdGlvblJ1bGVzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvcGFyYW1zVmFsaWRhdG9yLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgUmVkaXJlY3QsXG4gIExpbmssXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEVtYWlsRmllbGQgZnJvbSAnLi9jb21tb24vdXNlci9FbWFpbEZpZWxkJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vY29tbW9uL3VzZXIvUGFzc3dvcmRGaWVsZCc7XG5pbXBvcnQgT0F1dGhQcm92aWRlcnMgZnJvbSAnLi9jb21tb24vdXNlci9PQXV0aFByb3ZpZGVycyc7XG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5pbXBvcnQgUVFJbmZvIGZyb20gJy4vY29tbW9uL3VzZXIvb2F1dGgvUVFJbmZvJztcblxuaW1wb3J0IGluaXQgZnJvbSAnLi4vaW5pdEZvcm1WYWxpZGF0aW9uJztcblxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9hdXRoVXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN1Ym1pdEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzaWdudXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0U3VibWl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBidXN5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgdGhpcy5wcm9wcy5zZXRTdWJtaXRNb2RlKCk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgkKHRoaXMuZm9ybSkuZm9ybSgnaXMgdmFsaWQnKSkge1xuICAgICAgdGhpcy5wcm9wcy5zaWdudXAodGhpcy5wcm9wcy5zdWJtaXRJbmZvKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyLCBvYXV0aFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHVzZXIuc3VjY2Vzcykge1xuICAgICAgaWYgKCF1c2VyLmNhbGxiYWNrIHx8IHVzZXIuY2FsbGJhY2sgPT09ICcvJykge1xuICAgICAgICByZXR1cm4gKDxSZWRpcmVjdCB0bz17IHsgcGF0aG5hbWU6ICcvJyB9IH0vPik7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXNlci5jYWxsYmFjayk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZm9ybS1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGltYWdlIGhlYWRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIGFsdD1cIlwiIHN0eWxlPXsgeyBib3JkZXJSYWRpdXM6ICc0cHgnIH0gfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAge29hdXRoVXNlci5pZCA/ICfms6jlhownIDogJ+azqOWGjCd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0aGlzLnByb3BzLm9hdXRoVXNlci5pZCA/IDxRUUluZm8vPiA6ICcnfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGZvcm0gcmVmPXsgZSA9PiB0aGlzLmZvcm0gPSBlIH0gY2xhc3NOYW1lPXsgYHVpIGZvcm0gJHt0aGlzLnByb3BzLmJ1c3kgPyAnbG9hZGluZycgOiAnJ31gIH0gb25TdWJtaXQ9eyB0aGlzLm9uRm9ybVN1Ym1pdCB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxuICAgICAgICAgICAgPEVtYWlsRmllbGQgLz5cbiAgICAgICAgICAgIDxQYXNzd29yZEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIuWvhueggVwiIC8+XG4gICAgICAgICAgICA8UGFzc3dvcmRGaWVsZCBuYW1lPSdjb25maXJtX3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIuehruiupOWvhueggVwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGZsdWlkIHRlYWwgc3VibWl0IGJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7ms6jlhow8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGVycm9yIG1lc3NhZ2VcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8T0F1dGhQcm92aWRlcnMgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgICAg5bey5rOo5YaM6L+H77yfXG4gICAgICAgICAgPExpbmsgdG89Jy91c2VyL3NpZ25pbicgaHJlZj1cIlwiPnt0aGlzLnByb3BzLm9hdXRoVXNlci5pZCA/ICfnu5Hlrprlt7LmnInotKbmiLcnIDogJ+WOu+eZu+WFpSd9PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwb2ludGluZyByaWdodCBncmV5IGljb25cIj48L2k+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd1aSByaWdodCBmbG9hdGVkJyB0bz0nLyc+6L+U5Zue5Li76aG1PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci50b0pTT04oKS51c2VyLFxuICBvYXV0aFVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkub2F1dGhVc2VyLFxuICBzdWJtaXRJbmZvOiBzdGF0ZS51c2VyLnRvSlNPTigpLnN1Ym1pdEluZm8sXG4gIGJ1c3k6IHN0YXRlLmFzeW5jU3RhdHVzLnRvSlNPTigpLlVTRVJfU0lHTlVQX0JVU1ksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2lnbnVwOiAoaW5mbykgPT4ge1xuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2lnbnVwKGluZm8pKTtcbiAgICB9LFxuICAgIHNldFN1Ym1pdE1vZGU6ICgpID0+IHtcbiAgICAgIHVzZXJBY3Rpb25zLnNldFN1Ym1pdE1vZGUoZGlzcGF0Y2gsICdzaWdudXAnKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lnbnVwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1NpZ251cC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtcbiAgTGluayxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmNsYXNzIFNpZ25vdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYnVzeTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzaWdub3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNpZ25vdXQoKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmJ1c3kgJiYgcHJldlByb3BzLmJ1c3kpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZm9ybS1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGltYWdlIGhlYWRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAg55m75Ye6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd1aSBsZWZ0IGFsaWduZWQgaWNvbiBtZXNzYWdlJyB9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmJ1c3kgPyA8aSBjbGFzc05hbWU9XCJub3RjaGVkIGNpcmNsZSBsb2FkaW5nIGljb25cIj48L2k+IDogPGkgY2xhc3NOYW1lPVwiZ3JlZW4gY2hlY2sgaWNvblwiPjwvaT59XG4gICAgICAgICAge3RoaXMucHJvcHMuYnVzeSA/IDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXsgeyB0ZXh0QWxpZ246ICdsZWZ0JyB9IH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAg5q2j5Zyo55m75Ye6Li4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD7nmbvlh7rlkI7kvJrot7Povazoh7PkuLvpobU8L3A+XG4gICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9eyB7IHRleHRBbGlnbjogJ2xlZnQnIH0gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICDlt7Lnmbvlh7pcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPuato+WcqOi3s+i9rOiHs+S4u+mhtTwvcD5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwb2ludGluZyByaWdodCBncmV5IGljb25cIj48L2k+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd1aSByaWdodCBmbG9hdGVkJyB0bz0nLyc+56uL5Yi76L+U5Zue5Li76aG1PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH07XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkudXNlcixcbiAgYnVzeTogc3RhdGUuYXN5bmNTdGF0dXMudG9KU09OKCkuVVNFUl9TSUdOT1VUX0JVU1ksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2lnbm91dDogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2lnbm91dCgpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWdub3V0KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9TaWdub3V0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgTGluayxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUGFzc3dvcmRGaWVsZCBmcm9tICcuL2NvbW1vbi91c2VyL1Bhc3N3b3JkRmllbGQnO1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuLi9pbml0Rm9ybVZhbGlkYXRpb24nO1xuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzdWJtaXRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlX3Bhc3N3b3JkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldFN1Ym1pdE1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYnVzeTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICB0aGlzLnByb3BzLnNldFN1Ym1pdE1vZGUoKTtcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlci5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyksIDIwMDApO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9ybVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCQodGhpcy5mb3JtKS5mb3JtKCdpcyB2YWxpZCcpKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZV9wYXNzd29yZCh0aGlzLnByb3BzLnN1Ym1pdEluZm8pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlci5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9zaWduaW4nKSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXVzZXIuc3VjY2Vzcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWZvcm0tY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGltYWdlIGhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICDmm7TmlrDlr4bnoIFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndWkgbGVmdCBhbGlnbmVkIGljb24gbWVzc2FnZScgfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5vdGNoZWQgY2lyY2xlIGxvYWRpbmcgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXsgeyB0ZXh0QWxpZ246ICdsZWZ0JyB9IH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAg5b2T5YmN54q25oCB5pyq55m75YWlL+W3sueZu+WHulxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+5q2j5Zyo6Lez6L2s6Iez55m75YWl6aG16Z2iLi4uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndWkgcmlnaHQgZmxvYXRlZCcgdG89Jy91c2VyL3NpZ25pbic+56uL5Yi76Lez6L2s6Iez55m75YWl6aG16Z2iPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwb2ludGluZyByaWdodCBncmV5IGljb25cIj48L2k+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VpIHJpZ2h0IGZsb2F0ZWQnIHRvPScvJz7nq4vliLvov5Tlm57kuLvpobU8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZm9ybS1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGltYWdlIGhlYWRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIGFsdD1cIlwiIHN0eWxlPXsgeyBib3JkZXJSYWRpdXM6ICc0cHgnIH0gfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICDmm7TmlrDlr4bnoIFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGZvcm0gcmVmPXsgZSA9PiB0aGlzLmZvcm0gPSBlIH0gY2xhc3NOYW1lPXsgYHVpIGZvcm0gJHt0aGlzLnByb3BzLmJ1c3kgPyAnbG9hZGluZycgOiAnJ31gIH0gb25TdWJtaXQ9eyB0aGlzLm9uRm9ybVN1Ym1pdCB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbmFtZT0nb2xkX3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIuaXp+WvhueggVwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbmFtZT0nbmV3X3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIuaWsOWvhueggVwiLz5cbiAgICAgICAgICAgIDxQYXNzd29yZEZpZWxkIG5hbWU9J2NvbmZpcm1fbmV3X3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cIuehruiupOaWsOWvhueggVwiLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgZmx1aWQgdGVhbCBzdWJtaXQgYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPuabtOaWsOWvhueggTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZXJyb3IgbWVzc2FnZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VpIHJpZ2h0IGZsb2F0ZWQnIHRvPScvJz7ov5Tlm57kuLvpobU8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLnVzZXIsXG4gIHN1Ym1pdEluZm86IHN0YXRlLnVzZXIudG9KU09OKCkuc3VibWl0SW5mbyxcbiAgYnVzeTogc3RhdGUuYXN5bmNTdGF0dXMudG9KU09OKCkuVVNFUl9VUERBVEVfUEFTU1dPUkRfQlVTWSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVfcGFzc3dvcmQ6IChpbmZvKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy51cGRhdGVfcGFzc3dvcmQoaW5mbykpO1xuICAgIH0sXG4gICAgc2V0U3VibWl0TW9kZTogKCkgPT4ge1xuICAgICAgdXNlckFjdGlvbnMuc2V0U3VibWl0TW9kZShkaXNwYXRjaCwgJ3VwZGF0ZV9wYXNzd29yZCcpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWdudXApO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9QYXNzd29yZC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtcbiAgTGluayxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJvdXRlLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3QtZm91bmQtY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGltYWdlIGhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA0MDQgLCDljbPlsIbov5Tlm57kuLvpobVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAndWkgbGVmdCBhbGlnbmVkIGljb24gbWVzc2FnZScgfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJlZCBidWcgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXsgeyB0ZXh0QWxpZ246ICdsZWZ0JyB9IH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAg5Zub55m+6Zu25Zub5piv5LuA5LmI5oSP5oCd77yfXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD40MDQgPSDmiJHku6zku4DkuYjkuZ/msqHmnInmib7liLDvvIE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd1aSByaWdodCBmbG9hdGVkJyB0bz0nLyc+56uL5Yi76L+U5Zue5Li76aG1PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH07XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+ICh7XG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOb3RGb3VuZCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvTm90Rm91bmQuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5pbXBvcnQgeyBmcm9tSlMgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5jb25zdCBjb21iaW5lZF9yZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycyk7XG4vLyBtaWRkbGV3YXJlc1xuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpO1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcbi8vIEdyYWIgdGhlIHN0YXRlIGZyb20gYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgaW50byB0aGUgc2VydmVyLWdlbmVyYXRlZCBIVE1MXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fO1xuLy8gQWxsb3cgdGhlIHBhc3NlZCBzdGF0ZSB0byBiZSBnYXJiYWdlLWNvbGxlY3RlZFxuZGVsZXRlIHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb21iaW5lZF9yZWR1Y2VycyxcbiAge1xuICAgIHVzZXI6IGZyb21KUyh7XG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZS51c2VyLFxuICAgICAgc3VibWl0SW5mbzogZnJvbUpTKHt9KSxcbiAgICB9KSxcbiAgfSxcbiAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUoXG4gICAgdGh1bmtNaWRkbGV3YXJlLCAvLyBsZXRzIHVzIGRpc3BhdGNoKCkgZnVuY3Rpb25zXG4gICAgbG9nZ2VyTWlkZGxld2FyZSwgLy8gbmVhdCBtaWRkbGV3YXJlIHRoYXQgbG9ncyBhY3Rpb25zXG4gICkpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiLCJpbXBvcnQgdXNlciBmcm9tICcuL3VzZXJSZWR1Y2VyJztcbmltcG9ydCBhc3luY1N0YXR1cyBmcm9tICcuL2FzeW5jU3RhdHVzUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHsgYXN5bmNTdGF0dXMsIHVzZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGZyb21KUyB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9uVHlwZXMnO1xuXG5jb25zdCB1c2VyaW5pdCA9IGZyb21KUyh7XG4gIHVzZXI6IHt9LFxuICBzdWJtaXRJbmZvOiB7fSxcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gdXNlcmluaXQsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05JTl9TVEFSVDoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05JTl9FTkQ6IHtcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5jb2RlID09PSAwKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCd1c2VyJywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkLmRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05JTl9FUlJPUjoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05VUF9TVEFSVDoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05VUF9FTkQ6IHtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCd1c2VyJywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkLmRhdGEpKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05VUF9FUlJPUjoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05PVVRfU1RBUlQ6IHtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCd1c2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgnb2F1dGhVc2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9TSUdOT1VUX0VORDoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCdvYXV0aFVzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05PVVRfRVJST1I6IHtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCd1c2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgnb2F1dGhVc2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9TSUdOT1VUX1NUQVJUOiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9TSUdOT1VUX0VORDoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ29hdXRoVXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfT0FVVEhfU0lHTk9VVF9FUlJPUjoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ29hdXRoVXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfVVBEQVRFX1BBU1NXT1JEX1NUQVJUOiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9VUERBVEVfUEFTU1dPUkRfRU5EOiB7XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQuY29kZSA9PT0gMCkge1xuICAgICAgICBzdGF0ZSA9IHN0YXRlLnNldCgndXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfVVBEQVRFX1BBU1NXT1JEX0VSUk9SOiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9TRVRfU1VCTUlUX0lORk86IHtcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5tb2RlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCdzdWJtaXRJbmZvJywgZnJvbUpTKHsgbW9kZTogYWN0aW9uLnBheWxvYWQubW9kZSB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb24ucGF5bG9hZCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgIHN0YXRlID0gc3RhdGUuc2V0SW4oWydzdWJtaXRJbmZvJywga10sIGFjdGlvbi5wYXlsb2FkW2tdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiLCJpbXBvcnQgeyBmcm9tSlMsIE1hcCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzeW5jVHlwZXMsIGFzeW5jVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25UeXBlcyc7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvblR5cGVzJzsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IGluaXRPYmplY3QgPSB7fTtcblxuc3luY1R5cGVzLmZvckVhY2goKHRwKSA9PiB7XG4gIC8vIGZvciBlYWNoIHN5bmMgYWN0aW9uLCB0aGVyZSBpcyBubyBidXN5XG4gIGluaXRPYmplY3RbYCR7dHB9X01FU1NBR0VgXSA9IE1hcCh7fSk7XG59KTtcbmFzeW5jVHlwZXMuZm9yRWFjaCgodHApID0+IHtcbiAgLy8gZm9yIGVhY2ggYXN5bmMgYWN0aW9uLCB0aGVyZSBpcyBhIGJ1c3kgZmxhZ1xuICBpbml0T2JqZWN0W2Ake3RwfV9CVVNZYF0gPSBmYWxzZTtcbiAgaW5pdE9iamVjdFtgJHt0cH1fTUVTU0FHRWBdID0gTWFwKHt9KTtcbn0pO1xuXG5jb25zdCBzdGF0dXNJbml0ID0gZnJvbUpTKHtcbiAgLi4uaW5pdE9iamVjdCxcbiAgSEVBREVSX01FU1NBR0U6IE1hcCh7IGlkOiAwIH0pLFxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBzdGF0dXNJbml0LCBhY3Rpb24pID0+IHtcbiAgY29uc3QgYnJlYWtzID0gYWN0aW9uLnR5cGUuc3BsaXQoJ18nKTtcblxuICBjb25zdCBhY3Rpb25OYW1lID0gXy5qb2luKF8uc2xpY2UoYnJlYWtzLCAwLCBicmVha3MubGVuZ3RoIC0gMSksICdfJyk7XG5cbiAgLypcbiAgICB1aV9tZXNzYWdlOntcbiAgICAgIHN0YXR1czpcbiAgICAgIGhlYWRlcjpcbiAgICAgIGlubGluZTpcbiAgICB9XG4gICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25UeXBlcy5TRVRfUFJJU1RJTkUpIHtcbiAgICBpZiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuYWN0aW9uKSB7XG4gICAgICAvLyBzZXQgc3BlY2lmaWMgYWN0aW9uIG1lc3NhZ2UgcHJpc3RpbmVcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KGAke2FjdGlvbi5wYXlsb2FkLmFjdGlvbn1fTUVTU0FHRWAsIE1hcCh7IGlkOiAwIH0pKTtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KGAke2FjdGlvbi5wYXlsb2FkLmFjdGlvbn1fQlVTWWAsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IGFsbCBhY3Rpb25zIHN0YXRlcyBwcmlzdGluZVxuICAgICAgc3RhdGUgPSBzdGF0dXNJbml0O1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZCAmJiB0eXBlb2YgKGFjdGlvbi5wYXlsb2FkLnVpX21lc3NhZ2UpID09PSAnb2JqZWN0Jykge1xuICAgIC8vIGl0J3MgYW4gcmVndWxhciBhc3luYyBhY3Rpb25cbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYWN0aW9uLnBheWxvYWQudWlfbWVzc2FnZSxcbiAgICAgIGlkOiB1dWlkLnY0KCksXG4gICAgfTtcbiAgICAvLyBzZXQgdGhlIGlubGluZSBtZXNzYWdlXG4gICAgc3RhdGUgPSBzdGF0ZS5zZXQoYCR7YWN0aW9uTmFtZX1fTUVTU0FHRWAsIE1hcChtZXNzYWdlKSk7XG4gICAgLy8gc2V0IHRoZSBoZWFkZXIgbWVzc2FnZVxuICAgIHN0YXRlID0gc3RhdGUuc2V0KCdIRUFERVJfTUVTU0FHRScsIE1hcChtZXNzYWdlKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2xlYXIgdGhlIGlubGluZSBtZXNzYWdlXG4gICAgc3RhdGUgPSBzdGF0ZS5zZXQoYCR7YWN0aW9uTmFtZX1fTUVTU0FHRWAsIE1hcCh7fSkpO1xuICAgIC8vIGNsZWFyIHRoZSBoZWFkZXIgbWVzc2FnZVxuICAgIHN0YXRlID0gc3RhdGUuc2V0KCdIRUFERVJfTUVTU0FHRScsIE1hcCh7IGlkOiAwIH0pKTtcbiAgfVxuXG4gIHN3aXRjaCAoXy5sYXN0KGJyZWFrcykpIHtcbiAgICBjYXNlICdTVEFSVCc6IHtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KGAke2FjdGlvbk5hbWV9X0JVU1lgLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSAnRU5EJzoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoYCR7YWN0aW9uTmFtZX1fQlVTWWAsIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSAnRVJST1InOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldChgJHthY3Rpb25OYW1lfV9CVVNZYCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL3JlZHVjZXJzL2FzeW5jU3RhdHVzUmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=