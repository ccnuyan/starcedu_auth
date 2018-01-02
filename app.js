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
    user: 'postgres',
    database: 'postgres',
    host: Object({"NODE_ENV":"development"}).DBHOST ? Object({"NODE_ENV":"development"}).DBHOST : 'localhost',
    port: Object({"NODE_ENV":"development"}).DBPORT ? Object({"NODE_ENV":"development"}).DBPORT : 5432,
    // host: '192.168.1.60',
    // port: 6543,
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
    user: 'postgres',
    database: 'postgres',
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
    user: 'dtyibgge',
    database: 'dtyibgge',
    password: 'Q4dSLIOIxul5y369v1KFqcYxHH90jdv4',
    host: 'baasu.db.elephantsql.com',
    port: 5432,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvUGFzc3dvcmRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvaW5pdEZvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi91c2VyL0VtYWlsRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvT0F1dGhQcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvb2F1dGgvUVFJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL3N0eWxlLnNjc3M/MmJmZSIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vRnJvbnRQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLnByb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy50ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi9Ib21lTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9XZWJBcHBzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2luY2x1ZGVzL1Nsb2dhbjEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5jbHVkZXMvU2xvZ2FuMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9EZXNrdG9wQXBwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9PdGhlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9TaWduaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbmZpZy9jb25maWcuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbmZpZy9jb25maWcucHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9tZXNzYWdlTWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3BhcmFtc1ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9TaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvU2lnbm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9QYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvYXN5bmNTdGF0dXNSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwic3luY1R5cGVzIiwiYXN5bmNUeXBlcyIsImZvckVhY2giLCJ0cCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJQYXNzd29yZEZpZWxkIiwib25DaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGF5bG9hZCIsInByb3BzIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3VibWl0SW5mbyIsInBsYWNlaG9sZGVyIiwic3VibWl0SW5mbyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ1c2VyIiwib2JqZWN0IiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidG9KU09OIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpbml0IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmb3JtIiwiZmllbGRzIiwiZW1haWwiLCJpZGVudGlmaWVyIiwicnVsZXMiLCJ0eXBlIiwicHJvbXB0IiwidmFsaWRhdGlvblJ1bGVzIiwidXNlcm5hbWUiLCJyZWdleCIsInBhc3N3b3JkIiwib2xkX3Bhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwiY29uZmlybV9wYXNzd29yZCIsImNvbmZpcm1fbmV3X3Bhc3N3b3JkIiwiRW1haWxGaWVsZCIsInRvTG93ZXJDYXNlIiwiT0F1dGhQcm92aWRlcnMiLCJRUUluZm8iLCJvYXV0aFVzZXIiLCJidXN5Iiwib2F1dGhfc2lnbm91dCIsIm1hcmdpblRvcCIsInByb2ZpbGUiLCJmaWd1cmV1cmxfcXFfMSIsIm5pY2tuYW1lIiwiYm9vbCIsImFzeW5jU3RhdHVzIiwiVVNFUl9PQVVUSF9TSUdOT1VUX0JVU1kiLCJyb290Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJSb3V0ZXMiLCJvcGFjaXR5IiwiTWVzc2FnZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIm1lc3NhZ2UiLCJpZCIsImhlYWRlciIsIm1lc3NlbmdlciIsInRyYW5zaXRpb24iLCJhbmltYXRpb24iLCJkdXJhdGlvbiIsImludGVydmFsIiwiZ2V0U3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJnZXREZXRhaWwiLCJkZXRhaWxzIiwibWFwIiwiTWF0aCIsInJhbmRvbSIsIm1zZyIsImUiLCJzdGF0dXMiLCJnZXQiLCJIb21lIiwiY29tcG9uZW50RGlkTW91bnQiLCJ2aXNpYmlsaXR5Iiwib25jZSIsIm9uVG9wVmlzaWJsZSIsImNzcyIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJib3JkZXJCb3R0b20iLCJvblRvcFBhc3NlZCIsImFkZENsYXNzIiwib25VcGRhdGUiLCJjYWxjdWxhdGlvbnMiLCJwZXJjZW50YWdlUGFzc2VkIiwibWFpbiIsIm1hcmdpbiIsImxvY2F0aW9uIiwiRm9vdGVyIiwiRnJvbnRQYW5lbCIsInRpdGxlIiwiaGlzdG9yeSIsImNvbmZpZ1ZhciIsImVudiIsImNvbmZpZyIsImdsb2JhbCIsIm1vZGUiLCJwb3J0IiwiZG9tYWluIiwiYXV0aCIsInNlc3Npb24iLCJzZWNyZXQiLCJqd3QiLCJleHBpcmVzSW4iLCJjb29raWUiLCJtYXhhZ2UiLCJvYXV0aCIsInFxIiwiYXBwX2lkIiwiYXBwX2tleSIsInBjQ29kZUhvc3QiLCJwY1Rva2VuSG9zdCIsImluZm9Ib3N0IiwicGNPcGVuaWRIb3N0IiwicmVkaXJlY3RfdXJpIiwiZGJuYW1lIiwicGciLCJkYXRhYmFzZSIsImhvc3QiLCJEQkhPU1QiLCJEQlBPUlQiLCJtYXgiLCJpZGxlVGltZW91dE1pbGxpcyIsInJlc291cmNlcyIsInN0eWxlc2hlZXRzIiwibm9ybWFsaXplIiwic2VtYW50aWMiLCJzY3JpcHRzIiwianF1ZXJ5IiwiaHRtbDVzaGl2IiwiY2xhc3NsaXN0IiwiRml4ZWRNZW51Iiwic3VjY2VzcyIsIm1hdGNoIiwiV2ViQXBwcyIsIlNsb2dhbjEiLCJwcm9ncmVzcyIsImFjY29yZGlvbiIsIkRlc2t0b3BBcHBzIiwiT3RoZXJzIiwiU2lnbmluIiwib25Gb3JtU3VibWl0Iiwic2lnbmluIiwic2V0U3VibWl0TW9kZSIsImNhbGxiYWNrIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJyZXBsYWNlIiwiYm9yZGVyUmFkaXVzIiwiVVNFUl9TSUdOSU5fQlVTWSIsImluZm8iLCJnZXRIZWFkZXJzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJzZXJ2aWNlQmFzZSIsImJhc2UiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVVNFUl9TSUdOSU5fU1RBUlQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmV0IiwiVVNFUl9TSUdOSU5fRU5EIiwiY2F0Y2giLCJVU0VSX1NJR05JTl9FUlJPUiIsInNpZ251cCIsIlVTRVJfU0lHTlVQX1NUQVJUIiwiVVNFUl9TSUdOVVBfRU5EIiwiVVNFUl9TSUdOVVBfRVJST1IiLCJzaWdub3V0IiwiVVNFUl9TSUdOT1VUX1NUQVJUIiwiVVNFUl9TSUdOT1VUX0VORCIsIlVTRVJfU0lHTk9VVF9FUlJPUiIsInVwZGF0ZV9wYXNzd29yZCIsIlVTRVJfVVBEQVRFX1BBU1NXT1JEX1NUQVJUIiwiVVNFUl9VUERBVEVfUEFTU1dPUkRfRU5EIiwiVVNFUl9VUERBVEVfUEFTU1dPUkRfRVJST1IiLCJVU0VSX09BVVRIX1NJR05PVVRfU1RBUlQiLCJVU0VSX09BVVRIX1NJR05PVVRfRU5EIiwiVVNFUl9PQVVUSF9TSUdOT1VUX0VSUk9SIiwib2F1dGhfdW5saW5rIiwiVVNFUl9PQVVUSF9VTkxJTktfU1RBUlQiLCJVU0VSX09BVVRIX1VOTElOS19FTkQiLCJVU0VSX09BVVRIX1VOTElOS19FUlJPUiIsIlVTRVJfU0VUX1NVQk1JVF9JTkZPIiwibWVzc2FnZURpY3QiLCJjb2RlIiwiVVNFUl9CSU5EX0FVVEhFTlRJQ0FURV9FUlJPUiIsIlVTRVJfQklORF9BVVRIRU5USUNBVEVfRU5EIiwiVVNFUl9TSUdOT1VUIiwiVVNFUl9VU0VSTkFNRV9DSEVDS19FUlJPUiIsImlubGluZSIsIlVTRVJfVVNFUk5BTUVfQ0hFQ0tfRU5EIiwidmFsaWQiLCJVU0VSX0dFVF9PQVVUSF9JTkZPX0VORCIsIlVTRVJfR0VUX09BVVRIX0lORk9fRVJST1IiLCJoYW5kbGVyIiwidWlfbWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJiZWZvcmVWYWwiLCJ2YWwiLCJlbXB0eUNvZGUiLCJiaW5kX3VzZXJfaWQiLCJvYXV0aF91c2VyX2lkIiwidW5pcXVlX3Byb3ZpZGVyX2lkIiwicHJvdmlkZXIiLCJ2YWxpZGF0ZSIsIm5vbk51bGxQYXJhbXNBcnJheSIsImsiLCJ0cmltIiwiZXZlcnkiLCJ0ZXN0IiwiU2lnbnVwIiwiVVNFUl9TSUdOVVBfQlVTWSIsIlNpZ25vdXQiLCJ0ZXh0QWxpZ24iLCJzZXRUaW1lb3V0IiwicHVzaCIsIlVTRVJfU0lHTk9VVF9CVVNZIiwiVVNFUl9VUERBVEVfUEFTU1dPUkRfQlVTWSIsIk5vdEZvdW5kIiwiY29tYmluZWRfcmVkdWNlcnMiLCJsb2dnZXJNaWRkbGV3YXJlIiwiY29tcG9zZUVuaGFuY2VycyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsInByZWxvYWRlZFN0YXRlIiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwidXNlcmluaXQiLCJhY3Rpb24iLCJzZXQiLCJkYXRhIiwic2V0SW4iLCJpbml0T2JqZWN0Iiwic3RhdHVzSW5pdCIsIkhFQURFUl9NRVNTQUdFIiwiYnJlYWtzIiwic3BsaXQiLCJhY3Rpb25OYW1lIiwiam9pbiIsInNsaWNlIiwibGVuZ3RoIiwiU0VUX1BSSVNUSU5FIiwidjQiLCJsYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsRUFBZDs7QUFHTyxJQUFNQyxnQ0FBWSxDQUN2QixzQkFEdUIsRUFFdkIsY0FGdUIsQ0FBbEI7QUFJQSxJQUFNQyxrQ0FBYSxDQUN4QixhQUR3QixFQUV4QixhQUZ3QixFQUd4QixjQUh3QixFQUl4QixvQkFKd0IsRUFLeEIsbUJBTHdCLEVBTXhCLHNCQU53QixDQUFuQjs7QUFTUEQsVUFBVUUsT0FBVixDQUFrQixVQUFDQyxFQUFELEVBQVE7QUFDeEJKLFFBQU1JLEVBQU4sSUFBWUEsRUFBWjtBQUNELENBRkQ7O0FBSUFGLFdBQVdDLE9BQVgsQ0FBbUIsVUFBQ0MsRUFBRCxFQUFRO0FBQ3pCSixRQUFTSSxFQUFULGVBQTBCQSxFQUExQjtBQUNBSixRQUFTSSxFQUFULGFBQXdCQSxFQUF4QjtBQUNBSixRQUFTSSxFQUFULGVBQTBCQSxFQUExQjtBQUNELENBSkQ7O0FBTUFDLE9BQU9DLElBQVAsQ0FBWU4sS0FBWixFQUFtQkcsT0FBbkIsQ0FBMkIsVUFBQ0ksR0FBRCxFQUFTO0FBQ2xDUCxRQUFNTyxHQUFOLElBQWFBLEdBQWI7QUFDRCxDQUZEOztrQkFJZVAsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1RLGE7Ozs7Ozs7Ozs7Ozs7O29NQVNKQyxRLEdBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BCQSxZQUFNQyxjQUFOO0FBQ0EsVUFBTUMsVUFBVSxFQUFoQjtBQUNBQSxjQUFRLE1BQUtDLEtBQUwsQ0FBV0MsSUFBbkIsSUFBMkJKLE1BQU1LLE1BQU4sQ0FBYUMsS0FBeEM7QUFDQSxZQUFLSCxLQUFMLENBQVdJLGFBQVgsQ0FBeUJMLE9BQXpCO0FBQ0QsSzs7Ozs7NkJBRVE7QUFB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QUFld04sVUFBdkIsTUFBdUMsUUFBN0QsRUFBdUU7QUFDNUU7QUFDQSxRQUFNM0osdUJBQ0Q0TCxPQUFPelAsT0FBUCxDQUFld04sVUFEZDtBQUVKMUosVUFBSSxlQUFLeU0sRUFBTDtBQUZBLE1BQU47QUFJQTtBQUNBeFAsWUFBUUEsTUFBTTJPLEdBQU4sQ0FBYVEsVUFBYixlQUFtQyxvQkFBSXJNLE9BQUosQ0FBbkMsQ0FBUjtBQUNBO0FBQ0E5QyxZQUFRQSxNQUFNMk8sR0FBTixDQUFVLGdCQUFWLEVBQTRCLG9CQUFJN0wsT0FBSixDQUE1QixDQUFSO0FBQ0QsR0FWTSxNQVVBO0FBQ0w7QUFDQTlDLFlBQVFBLE1BQU0yTyxHQUFOLENBQWFRLFVBQWIsZUFBbUMsb0JBQUksRUFBSixDQUFuQyxDQUFSO0FBQ0E7QUFDQW5QLFlBQVFBLE1BQU0yTyxHQUFOLENBQVUsZ0JBQVYsRUFBNEIsb0JBQUksRUFBRTVMLElBQUksQ0FBTixFQUFKLENBQTVCLENBQVI7QUFDRDs7QUFFRCxVQUFRLGlCQUFFME0sSUFBRixDQUFPUixNQUFQLENBQVI7QUFDRSxTQUFLLE9BQUw7QUFBYztBQUNaalAsZ0JBQVFBLE1BQU0yTyxHQUFOLENBQWFRLFVBQWIsWUFBZ0MsSUFBaEMsQ0FBUjtBQUNBLGVBQU9uUCxLQUFQO0FBQ0Q7QUFDRCxTQUFLLEtBQUw7QUFBWTtBQUNWQSxnQkFBUUEsTUFBTTJPLEdBQU4sQ0FBYVEsVUFBYixZQUFnQyxLQUFoQyxDQUFSO0FBQ0EsZUFBT25QLEtBQVA7QUFDRDtBQUNELFNBQUssT0FBTDtBQUFjO0FBQ1pBLGdCQUFRQSxNQUFNMk8sR0FBTixDQUFhUSxVQUFiLFlBQWdDLEtBQWhDLENBQVI7QUFDQSxlQUFPblAsS0FBUDtBQUNEO0FBQ0Q7QUFBUztBQUNQLGVBQU9BLEtBQVA7QUFDRDtBQWZIO0FBaUJELEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdHlwZXMgPSB7XG59O1xuXG5leHBvcnQgY29uc3Qgc3luY1R5cGVzID0gW1xuICAnVVNFUl9TRVRfU1VCTUlUX0lORk8nLFxuICAnU0VUX1BSSVNUSU5FJyxcbl07XG5leHBvcnQgY29uc3QgYXN5bmNUeXBlcyA9IFtcbiAgJ1VTRVJfU0lHTklOJyxcbiAgJ1VTRVJfU0lHTlVQJyxcbiAgJ1VTRVJfU0lHTk9VVCcsXG4gICdVU0VSX09BVVRIX1NJR05PVVQnLFxuICAnVVNFUl9PQVVUSF9VTkxJTksnLFxuICAnVVNFUl9VUERBVEVfUEFTU1dPUkQnLFxuXTtcblxuc3luY1R5cGVzLmZvckVhY2goKHRwKSA9PiB7XG4gIHR5cGVzW3RwXSA9IHRwO1xufSk7XG5cbmFzeW5jVHlwZXMuZm9yRWFjaCgodHApID0+IHtcbiAgdHlwZXNbYCR7dHB9X1NUQVJUYF0gPSBgJHt0cH1fU1RBUlRgO1xuICB0eXBlc1tgJHt0cH1fRU5EYF0gPSBgJHt0cH1fRU5EYDtcbiAgdHlwZXNbYCR7dHB9X0VSUk9SYF0gPSBgJHt0cH1fU1RBUlRgO1xufSk7XG5cbk9iamVjdC5rZXlzKHR5cGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgdHlwZXNba2V5XSA9IGtleTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9hY3Rpb25UeXBlcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB1c2VyQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY2xhc3MgUGFzc3dvcmRGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN1Ym1pdEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzZXRTdWJtaXRJbmZvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcbiAgICBwYXlsb2FkW3RoaXMucHJvcHMubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5zZXRTdWJtaXRJbmZvKHBheWxvYWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBsZWZ0IGljb24gaW5wdXRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJsb2NrIGljb25cIj48L2k+XG4gICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHZhbHVlPXsgdGhpcy5wcm9wcy5zdWJtaXRJbmZvW3RoaXMucHJvcHMubmFtZV0gfHwgJycgfSB0eXBlPVwicGFzc3dvcmRcIiB7IC4uLiB7IG5hbWUsIHBsYWNlaG9sZGVyIH0gfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci50b0pTT04oKS51c2VyLFxuICBzdWJtaXRJbmZvOiBzdGF0ZS51c2VyLnRvSlNPTigpLnN1Ym1pdEluZm8sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2V0U3VibWl0SW5mbzogKHBheWxvYWQpID0+IHtcbiAgICAgIHVzZXJBY3Rpb25zLnNldFN1Ym1pdEluZm8oZGlzcGF0Y2gsIHBheWxvYWQpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYXNzd29yZEZpZWxkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi91c2VyL1Bhc3N3b3JkRmllbGQuanMiLCJpbXBvcnQgcGFyYW1zVmFsaWRhdG9yIGZyb20gJy4uL2FwaS9wYXJhbXNWYWxpZGF0b3InO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAkKGRvY3VtZW50KVxuICAucmVhZHkoKCkgPT4ge1xuICAgIC8vIGZvcm0gdmFsaWRhdGlvblxuICAgICQoJy51aS5mb3JtJylcbiAgICAgIC5mb3JtKHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIGlkZW50aWZpZXI6ICdlbWFpbCcsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5JyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfor7fovpPlhaVFLW1haWwnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JlZ0V4cCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtc1ZhbGlkYXRvci52YWxpZGF0aW9uUnVsZXMudXNlcm5hbWUucmVnZXgsXG4gICAgICAgICAgICAgICAgcHJvbXB0OiAn6K+36L6T5YWl5pyJ5pWI55qEIEUtbWFpbCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGlkZW50aWZpZXI6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5JyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfor7fovpPlhaU2LTIw5L2N5a+G56CBJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyZWdFeHAnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXNWYWxpZGF0b3IudmFsaWRhdGlvblJ1bGVzLnBhc3N3b3JkLnJlZ2V4LFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+WvhueggemVv+W6puWcqDZ+MjDkuYvpl7TvvIzlj6rog73ljIXlkKvlpKflsI/lhpnlrZfmr43lkozmlbDlrZcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9sZF9wYXNzd29yZDoge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogJ29sZF9wYXNzd29yZCcsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5JyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfor7fovpPlhaU2LTE45L2N5a+G56CBJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyZWdFeHAnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXNWYWxpZGF0b3IudmFsaWRhdGlvblJ1bGVzLnBhc3N3b3JkLnJlZ2V4LFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+WvhueggemVv+W6puWcqDZ+MjDkuYvpl7TvvIzlj6rog73ljIXlkKvlpKflsI/lhpnlrZfmr43lkozmlbDlrZcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5ld19wYXNzd29yZDoge1xuICAgICAgICAgICAgaWRlbnRpZmllcjogJ25ld19wYXNzd29yZCcsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5JyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfor7fovpPlhaU2LTE45L2N5a+G56CBJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyZWdFeHAnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXNWYWxpZGF0b3IudmFsaWRhdGlvblJ1bGVzLnBhc3N3b3JkLnJlZ2V4LFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+WvhueggemVv+W6puWcqDZ+MjDkuYvpl7TvvIzlj6rog73ljIXlkKvlpKflsI/lhpnlrZfmr43lkozmlbDlrZcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGlkZW50aWZpZXI6ICdjb25maXJtX3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1wdHknLFxuICAgICAgICAgICAgICAgIHByb21wdDogJ+ivt+WGjeasoei+k+WFpeWvhueggeehruiupCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWF0Y2hbcGFzc3dvcmRdJyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfkuKTmrKHovpPlhaXlr4bnoIHlupTor6Xkv53mjIHkuIDoh7QnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpcm1fbmV3X3Bhc3N3b3JkOiB7XG4gICAgICAgICAgICBpZGVudGlmaWVyOiAnY29uZmlybV9uZXdfcGFzc3dvcmQnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlbXB0eScsXG4gICAgICAgICAgICAgICAgcHJvbXB0OiAn6K+35YaN5qyh6L6T5YWl5paw5a+G56CB56Gu6K6kJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdtYXRjaFtuZXdfcGFzc3dvcmRdJyxcbiAgICAgICAgICAgICAgICBwcm9tcHQ6ICfkuKTmrKHovpPlhaXnmoTmlrDlr4bnoIHlupTor6Xkv53mjIHkuIDoh7QnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2luaXRGb3JtVmFsaWRhdGlvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB1c2VyQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY2xhc3MgRW1haWxGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN1Ym1pdEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzZXRTdWJtaXRJbmZvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0U3VibWl0SW5mbyhldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBsZWZ0IGljb24gZW1haWwgaW5wdXRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyIGljb25cIj48L2k+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwi6YKu566xXCJcbiAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy5zdWJtaXRJbmZvLnVzZXJuYW1lIHx8ICcnIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLnVzZXIsXG4gIHN1Ym1pdEluZm86IHN0YXRlLnVzZXIudG9KU09OKCkuc3VibWl0SW5mbyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZXRTdWJtaXRJbmZvOiAodXNlcm5hbWUpID0+IHtcbiAgICAgIHVzZXJBY3Rpb25zLnNldFN1Ym1pdEluZm8oZGlzcGF0Y2gsIHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRW1haWxGaWVsZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vdXNlci9FbWFpbEZpZWxkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT0F1dGhQcm92aWRlcnMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxhIGhyZWY9XCIvb2F1dGgvbHVhbmNoL3FxXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInFxIHllbGxvdyBpY29uXCI+PC9pPlxuICAgICAgICAgIFFRXG4gICAgICA8L2E+XG4gICAgICB7JyB8ICd9XG4gICAgICA8YSBocmVmPVwiXCI+PGkgY2xhc3NOYW1lPVwid2VjaGF0IGdyZXkgaWNvblwiPjwvaT7lvq7kv6E8L2E+XG4gICAgICB7JyB8ICd9XG4gICAgICA8YSBocmVmPVwiXCI+PGkgY2xhc3NOYW1lPVwid2VpYm8gZ3JleSBpY29uXCI+PC9pPuW+ruWNmjwvYT5cbiAgICAgIHsnIHwgJ31cbiAgICAgIDxhIGhyZWY9XCJcIj48aSBjbGFzc05hbWU9XCJwYXlwYWwgZ3JleSBpY29uXCI+PC9pPuaUr+S7mOWunTwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9BdXRoUHJvdmlkZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL3VzZXIvT0F1dGhQcm92aWRlcnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmNsYXNzIFFRSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb2F1dGhVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb2F1dGhfc2lnbm91dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBidXN5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb2F1dGhVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGB1aSBzZWdtZW50ICR7dGhpcy5wcm9wcy5idXN5ID8gJ2xvYWRpbmcnIDogJyd9YCB9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJpZ2h0IGZsb2F0ZWQgdWkgdGlueSBidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5wcm9wcy5vYXV0aF9zaWdub3V0IH0+5rOo6ZSAPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGVmdCBmbG9hdGVkIHVpIGltYWdlXCIgYWx0PVwiXCJcbiAgICAgICAgICAgICAgc3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcgfSB9XG4gICAgICAgICAgICAgIHNyYz17IG9hdXRoVXNlci5wcm9maWxlLmZpZ3VyZXVybF9xcV8xIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICB7b2F1dGhVc2VyLnByb2ZpbGUubmlja25hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICDmnaXoh6rvvJrohb7orq9RUVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgb2F1dGhVc2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLm9hdXRoVXNlcixcbiAgYnVzeTogc3RhdGUuYXN5bmNTdGF0dXMudG9KU09OKCkuVVNFUl9PQVVUSF9TSUdOT1VUX0JVU1ksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb2F1dGhfc2lnbm91dDogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMub2F1dGhfc2lnbm91dCgpKTtcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFFRSW5mbyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vdXNlci9vYXV0aC9RUUluZm8uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9pbmNsdWRlcyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcblxuY29uc3Qgcm9vdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKTtcblxuUHJvdmlkZXIucHJvcFR5cGVzLmNoaWxkcmVuID0gUHJvcFR5cGVzLm9iamVjdDtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxuICAgIDxSb3V0ZXMvPlxuICA8L1Byb3ZpZGVyPiwgcm9vdE5vZGUpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udGVuZC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5cbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9pbmNsdWRlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcbiAgUm91dGUsXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZWRTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItdHJhbnNpdGlvbic7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL2NvbW1vbi9NZXNzYWdlJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9Ob3RGb3VuZCc7XG5cblxuY29uc3QgUm91dGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QW5pbWF0ZWRTd2l0Y2hcbiAgICAgICAgYXRFbnRlcj17IHsgb3BhY2l0eTogMCB9IH1cbiAgICAgICAgYXRMZWF2ZT17IHsgb3BhY2l0eTogMCB9IH1cbiAgICAgICAgYXRBY3RpdmU9eyB7IG9wYWNpdHk6IDEgfSB9XG4gICAgICAgID5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXsgSG9tZSB9IHBhdGg9Jy8nIGV4YWN0PXsgdHJ1ZSB9PjwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17IFVzZXIgfSBwYXRoPScvdXNlcic+PC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXsgTm90Rm91bmQgfSBwYXRoPScvKic+PC9Sb3V0ZT5cbiAgICAgICAgPC9BbmltYXRlZFN3aXRjaD5cbiAgICAgICAgPE1lc3NhZ2UgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Sb3V0ZXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG1lc3NhZ2UuaWQgIT09IHByZXZQcm9wcy5tZXNzYWdlLmlkKSB7XG4gICAgICBpZiAobWVzc2FnZS5oZWFkZXIpIHtcbiAgICAgICAgJCh0aGlzLm1lc3NlbmdlcilcbiAgICAgICAgICAudHJhbnNpdGlvbih7IGFuaW1hdGlvbjogJ2ZhZGUgaW4nLCBkdXJhdGlvbjogJzUwMG1zJyB9KVxuICAgICAgICAgIC50cmFuc2l0aW9uKHsgaW50ZXJ2YWw6IDIwMDAsIGFuaW1hdGlvbjogJ2ZhZGUgb3V0JywgZHVyYXRpb246ICc1MDBtcycgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAnNDBweCcsXG4gICAgICB3aWR0aDogJzM2MHB4JyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgbWFyZ2luTGVmdDogJy0xODBweCcsXG4gICAgfTtcbiAgfVxuXG4gIGdldERldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG1lc3NhZ2UuZGV0YWlscykge1xuICAgICAgaWYgKHR5cGVvZiAobWVzc2FnZS5kZXRhaWxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57bWVzc2FnZS5kZXRhaWxzfTwvZGl2Pik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIChtZXNzYWdlLmRldGFpbHMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidWkgbGlzdFwiPlxuICAgICAgICAgIHttZXNzYWdlLmRldGFpbHMubWFwKG1zZyA9PiA8ZGl2IGtleT17IE1hdGgucmFuZG9tKCkgfSBjbGFzc05hbWU9XCJ1aSBpdGVtXCI+e21zZ308L2Rpdj4pfVxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgZSA9PiB0aGlzLm1lc3NlbmdlciA9IGUgfSBjbGFzc05hbWU9XCJ1aSBjb2x1bW5cIiBzdHlsZT17IHRoaXMuZ2V0U3R5bGUoKSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGB1aSBjZW50ZXIgYWxpZ25lZCBtZXNzYWdlICR7bWVzc2FnZS5oZWFkZXIgPyAnJyA6ICdoaWRkZW4nfSAke21lc3NhZ2Uuc3RhdHVzfWAgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAge21lc3NhZ2UuaGVhZGVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLmdldERldGFpbCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvIGRpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIG1lc3NhZ2U6IHN0YXRlLmFzeW5jU3RhdHVzLmdldCgnSEVBREVSX01FU1NBR0UnKS50b0pTT04oKSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lc3NhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvY29tbW9uL01lc3NhZ2UuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tbW9uL0Zvb3Rlcic7XG5pbXBvcnQgRnJvbnRQYW5lbCBmcm9tICcuL2NvbW1vbi9Gcm9udFBhbmVsJztcbmltcG9ydCBIb21lTWVudSBmcm9tICcuL2NvbW1vbi9Ib21lTWVudSc7XG5cbmltcG9ydCBXZWJBcHBzIGZyb20gJy4vaW5jbHVkZXMvV2ViQXBwcyc7XG5pbXBvcnQgU2xvZ2FuMSBmcm9tICcuL2luY2x1ZGVzL1Nsb2dhbjEnO1xuaW1wb3J0IFNsb2dhbjIgZnJvbSAnLi9pbmNsdWRlcy9TbG9nYW4yJztcbmltcG9ydCBEZXNrdG9wQXBwcyBmcm9tICcuL2luY2x1ZGVzL0Rlc2t0b3BBcHBzJztcbmltcG9ydCBPdGhlcnMgZnJvbSAnLi9pbmNsdWRlcy9PdGhlcnMnO1xuXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAkKCcjbWFpbicpXG4gICAgLnZpc2liaWxpdHkoe1xuICAgICAgb25jZTogZmFsc2UsXG4gICAgICBvblRvcFZpc2libGUoKSB7XG4gICAgICAgICQoJy5ob21lLm1lbnUnKS5jc3MoeyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBoZWlnaHQ6ICcxNTBweCcsIGJvcmRlckJvdHRvbTogJzBweCcgfSk7XG4gICAgICB9LFxuICAgICAgb25Ub3BQYXNzZWQoKSB7XG4gICAgICAgICQoJy5ob21lLm1lbnUnKS5jc3MoeyBiYWNrZ3JvdW5kOiAnJywgaGVpZ2h0OiAnNjRweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCB3aGl0ZScgfSkuYWRkQ2xhc3MoJ3RlYWwnKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAkKCcubWFzdGhlYWQnKVxuICAgIC52aXNpYmlsaXR5KHtcbiAgICAgIG9uY2U6IGZhbHNlLFxuICAgICAgb25VcGRhdGUoY2FsY3VsYXRpb25zKSB7XG4gICAgICAgICQoJy5mcm9udF9wYW5lbF9vdmVybGF5JykuY3NzKHsgb3BhY2l0eTogMC42ICsgKGNhbGN1bGF0aW9ucy5wZXJjZW50YWdlUGFzc2VkICogMC40KSB9KTtcbiAgICAgIH0sXG4gICAgfSlcbiAgO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcm91dGUgbWFpbi1yb3V0ZS1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250ZW50XCI+XG4gICAgICAgICAgPEZyb250UGFuZWwgLz5cbiAgICAgICAgICA8ZGl2IHJlZj17IGUgPT4gdGhpcy5tYWluID0gZSB9IGlkPVwibWFpblwiIHN0eWxlPXsgeyBtYXJnaW46ICctMzAwcHggMCAwIDAnLCB3aWR0aDogJzEwMCUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9IH0+PC9kaXY+XG4gICAgICAgICAgPFdlYkFwcHMvPlxuICAgICAgICAgIDxTbG9nYW4xLz5cbiAgICAgICAgICA8RGVza3RvcEFwcHMgLz5cbiAgICAgICAgICA8U2xvZ2FuMi8+XG4gICAgICAgICAgPE90aGVycyAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIb21lTWVudSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhvbWUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gcHJvcDogUHJvcFR5cGVzLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGludmVydGVkIHZlcnRpY2FsIGZvb3RlciB0ZWFsIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHN0YWNrYWJsZSBpbnZlcnRlZCBkaXZpZGVkIGVxdWFsIGhlaWdodCBzdGFja2FibGUgZ3JpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHJlZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+U291cmNlPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBsaW5rIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCIgaHJlZj1cImh0dHA6Ly93d3cuZ2l0aHViLmNvbS9jY251eWFuL3N0YXJjZWR1X2F1dGgvdHJlZS9kZXZlbG9wXCI+R2l0aHViPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHJlZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+VGVjaCAmIFRvb2xzPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBsaW5rIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCIgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvXCI+UmVhY3QuanM8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIGhyZWY9XCJodHRwczovL3NlbWFudGljLXVpLmNvbS9tb2R1bGVzL3RyYW5zaXRpb24uaHRtbFwiPlNlbWFudGljIFVJPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiaHR0cHM6Ly9yZWFjdHRyYWluaW5nLmNvbS9yZWFjdC1yb3V0ZXIvXCI+UmVhY3QgUm91dGVyPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiBocmVmPVwiaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZG9jcy9pbnRyb2R1Y3Rpb24vXCI+UmVkdXg8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIGhyZWY9XCJodHRwczovL3JlZ2V4ci5jb20vXCI+UmVnZXhyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXZlbiB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+VG9vbHM8L2g0PlxuICAgICAgICAgICAgICA8cD5FeHRyYSBzcGFjZSBmb3IgYSBjYWxsIHRvIGFjdGlvbiBpbnNpZGUgdGhlIGZvb3RlciB0aGF0IGNvdWxkIGhlbHAgcmUtZW5nYWdlIHVzZXJzLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vRm9vdGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEZyb250UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgdmVydGljYWwgbWFzdGhlYWQgY2VudGVyIGFsaWduZWQgdHJhbnNwYXJlbnQgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250X3BhbmVsX2JhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250X3BhbmVsX292ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRleHQgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgaGVhZGVyXCI+XG4gICAgICAgICAgICAgIHtjb25maWcudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgyPkRvIHdoYXRldmVyIHlvdSB3YW50IHdoZW4geW91IHdhbnQgdG8uPC9oMj5cbiAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJ1aSBodWdlIHByaW1hcnkgYnV0dG9uXCIgaHJlZj1cIi9hcHBzL25vdGVib29rXCI+R2V0IFN0YXJ0ZWQgPGkgY2xhc3NOYW1lPVwicmlnaHQgYXJyb3cgaWNvblwiPjwvaT48L2E+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci50b0pTT04oKS51c2VyLFxufSk7XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZyb250UGFuZWwpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2NvbW1vbi9Gcm9udFBhbmVsLmpzIiwiLy8gaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuaW1wb3J0IGRldmVsb3BtZW50IGZyb20gJy4vY29uZmlnLmRldmVsb3BtZW50JztcbmltcG9ydCBwcm9kdWN0aW9uIGZyb20gJy4vY29uZmlnLnByb2R1Y3Rpb24nO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi9jb25maWcudGVzdCc7XG5cbmxldCBjb25maWdWYXIgPSB7fTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNvbmZpZ1ZhciA9IHByb2R1Y3Rpb247XG4gIGNvbmZpZ1Zhci5lbnYgPSAncHJvZHVjdGlvbic7XG59IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgY29uZmlnVmFyID0gdGVzdDtcbiAgY29uZmlnVmFyLmVudiA9ICd0ZXN0Jztcbn0gZWxzZSB7XG4gIGNvbmZpZ1ZhciA9IGRldmVsb3BtZW50O1xuICBjb25maWdWYXIuZW52ID0gJ2RldmVsb3BtZW50Jztcbn1cbmNvbnN0IGNvbmZpZyA9IGNvbmZpZ1Zhcjtcbmdsb2JhbC5jb25maWcgPSBjb25maWc7XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gIHRpdGxlOiAnc3RhckPmlZnogrItZGV2JyxcbiAgcG9ydDogODAwMCxcbiAgZG9tYWluOiAnd3d3LnN5bmNvbGxlZ2UuY29tJyxcbiAgYXV0aDoge1xuICAgIHNlc3Npb246IHtcbiAgICAgIHNlY3JldDogJzEyMzQ1Njc4JyxcbiAgICB9LFxuICAgIGp3dDoge1xuICAgICAgc2VjcmV0OiAnMTIzNDU2NzgnLFxuICAgICAgZXhwaXJlc0luOiAnMTRkJyxcbiAgICB9LFxuICAgIGNvb2tpZToge1xuICAgICAgbmFtZTogJ2F1dGhvcml6YXRpb24nLFxuICAgICAgbWF4YWdlOiA3ICogMjQgKiAzNjAwICogMTAwMCxcbiAgICB9LFxuICB9LFxuICBvYXV0aDoge1xuICAgIHFxOiB7XG4gICAgICBhcHBfaWQ6ICcxMDEyNzEwODAnLFxuICAgICAgYXBwX2tleTogJ2M4OWM5NTA3NTk4NDYzMDdhZjVhODQyNWJiOWEzYTY0JyxcbiAgICAgIHBjQ29kZUhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9hdXRob3JpemUnLFxuICAgICAgcGNUb2tlbkhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC90b2tlbicsXG4gICAgICBpbmZvSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL3VzZXIvZ2V0X3VzZXJfaW5mbycsXG4gICAgICBwY09wZW5pZEhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9tZScsXG4gICAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vd3d3LnN5bmNvbGxlZ2UuY29tL29hdXRoL2NhbGxiYWNrL3FxJyxcbiAgICB9LFxuICB9LFxuICBkYm5hbWU6ICdzdGFyY2VkdV9hdXRoJyxcbiAgcGc6IHtcbiAgICB1c2VyOiAncG9zdGdyZXMnLFxuICAgIGRhdGFiYXNlOiAncG9zdGdyZXMnLFxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCSE9TVCA/IHByb2Nlc3MuZW52LkRCSE9TVCA6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCUE9SVCA/IHByb2Nlc3MuZW52LkRCUE9SVCA6IDU0MzIsXG4gICAgLy8gaG9zdDogJzE5Mi4xNjguMS42MCcsXG4gICAgLy8gcG9ydDogNjU0MyxcbiAgICBtYXg6IDEwLFxuICAgIGlkbGVUaW1lb3V0TWlsbGlzOiAzMDAwMCxcbiAgfSxcbiAgcmVzb3VyY2VzOiB7XG4gICAgc3R5bGVzaGVldHM6IHtcbiAgICAgIG5vcm1hbGl6ZTogJy8vY2RuLmJvb3Rjc3MuY29tL25vcm1hbGl6ZS82LjAuMC9ub3JtYWxpemUubWluLmNzcycsXG4gICAgICBzZW1hbnRpYzogJy9zdGF0aWMvc2VtYW50aWMvc2VtYW50aWMubWluLmNzcycsXG4gICAgfSxcbiAgICBzY3JpcHRzOiB7XG4gICAgICBqcXVlcnk6ICcvL2Nkbi5ib290Y3NzLmNvbS9qcXVlcnkvMy4yLjEvanF1ZXJ5Lm1pbi5qcycsXG4gICAgICBodG1sNXNoaXY6ICcvL2Nkbi5ib290Y3NzLmNvbS9odG1sNXNoaXYvcjI5L2h0bWw1Lm1pbi5qcycsXG4gICAgICBjbGFzc2xpc3Q6ICcvL2Nkbi5ib290Y3NzLmNvbS9jbGFzc2xpc3QvMjAxNC4wMS4zMS9jbGFzc0xpc3QubWluLmpzJyxcbiAgICAgIHNlbWFudGljOiAnL3N0YXRpYy9zZW1hbnRpYy9zZW1hbnRpYy5taW4uanMnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2NvbmZpZy5kZXZlbG9wbWVudC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICB0aXRsZTogJ3N0YXJD5pWZ6IKyJyxcbiAgcG9ydDogODAwMCxcbiAgZG9tYWluOiAnd3d3LnN5bmNvbGxlZ2UuY29tJyxcbiAgYXV0aDoge1xuICAgIHNlc3Npb246IHtcbiAgICAgIHNlY3JldDogJzEyMzQ1Njc4JyxcbiAgICB9LFxuICAgIGp3dDoge1xuICAgICAgc2VjcmV0OiAnMTIzNDU2NzgnLFxuICAgICAgZXhwaXJlc0luOiAnMTRkJyxcbiAgICB9LFxuICAgIGNvb2tpZToge1xuICAgICAgbmFtZTogJ2F1dGhvcml6YXRpb24nLFxuICAgICAgbWF4YWdlOiA3ICogMjQgKiAzNjAwICogMTAwMCxcbiAgICB9LFxuICB9LFxuICBvYXV0aDoge1xuICAgIHFxOiB7XG4gICAgICBhcHBfaWQ6ICcxMDEyNzEwODAnLFxuICAgICAgYXBwX2tleTogJ2M4OWM5NTA3NTk4NDYzMDdhZjVhODQyNWJiOWEzYTY0JyxcbiAgICAgIHBjQ29kZUhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9hdXRob3JpemUnLFxuICAgICAgcGNUb2tlbkhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC90b2tlbicsXG4gICAgICBpbmZvSG9zdDogJ2h0dHBzOi8vZ3JhcGgucXEuY29tL3VzZXIvZ2V0X3VzZXJfaW5mbycsXG4gICAgICBwY09wZW5pZEhvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS9vYXV0aDIuMC9tZScsXG4gICAgICByZWRpcmVjdF91cmk6ICdodHRwOi8vd3d3LnN5bmNvbGxlZ2UuY29tL29hdXRoL2NhbGxiYWNrL3FxJyxcbiAgICB9LFxuICB9LFxuICBkYm5hbWU6ICdzdGFyY2VkdV9hdXRoJyxcbiAgcGc6IHtcbiAgICB1c2VyOiAncG9zdGdyZXMnLFxuICAgIGRhdGFiYXNlOiAncG9zdGdyZXMnLFxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCSE9TVCA/IHByb2Nlc3MuZW52LkRCSE9TVCA6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCUE9SVCA/IHByb2Nlc3MuZW52LkRCUE9SVCA6IDU0MzIsXG4gICAgbWF4OiAxMCxcbiAgICBpZGxlVGltZW91dE1pbGxpczogMzAwMDAsXG4gIH0sXG4gIHJlc291cmNlczoge1xuICAgIHN0eWxlc2hlZXRzOiB7XG4gICAgICBub3JtYWxpemU6ICcvL2Nkbi5ib290Y3NzLmNvbS9ub3JtYWxpemUvNi4wLjAvbm9ybWFsaXplLm1pbi5jc3MnLFxuICAgICAgc2VtYW50aWM6ICcvc3RhdGljL3NlbWFudGljL3NlbWFudGljLm1pbi5jc3MnLFxuICAgIH0sXG4gICAgc2NyaXB0czoge1xuICAgICAganF1ZXJ5OiAnLy9jZG4uYm9vdGNzcy5jb20vanF1ZXJ5LzMuMi4xL2pxdWVyeS5taW4uanMnLFxuICAgICAgaHRtbDVzaGl2OiAnLy9jZG4uYm9vdGNzcy5jb20vaHRtbDVzaGl2L3IyOS9odG1sNS5taW4uanMnLFxuICAgICAgY2xhc3NsaXN0OiAnLy9jZG4uYm9vdGNzcy5jb20vY2xhc3NsaXN0LzIwMTQuMDEuMzEvY2xhc3NMaXN0Lm1pbi5qcycsXG4gICAgICBzZW1hbnRpYzogJy9zdGF0aWMvc2VtYW50aWMvc2VtYW50aWMubWluLmpzJyxcbiAgICB9LFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9jb25maWcucHJvZHVjdGlvbi5qcyIsIi8vIGNvbmZpZyBmb3IgZGF0YWJhc2UgdGVzdCBpbiByZW1vdGUgc2VydmVyO1xuZXhwb3J0IGRlZmF1bHQge1xuICBtb2RlOiAndGVzdCcsXG4gIHRpdGxlOiAnc3RhckPmlZnogrItdGVzdCcsXG4gIHBvcnQ6IDgwMDEsXG4gIGRvbWFpbjogJ3d3dy5zeW5jb2xsZWdlLmNvbScsXG4gIGF1dGg6IHtcbiAgICBzZXNzaW9uOiB7XG4gICAgICBzZWNyZXQ6ICcxMjM0NTY3OCcsXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgIHNlY3JldDogJzEyMzQ1Njc4JyxcbiAgICAgIGV4cGlyZXNJbjogJzE0ZCcsXG4gICAgfSxcbiAgICBjb29raWU6IHtcbiAgICAgIG5hbWU6ICdhdXRob3JpemF0aW9uJyxcbiAgICAgIG1heGFnZTogNyAqIDI0ICogMzYwMCAqIDEwMDAsXG4gICAgfSxcbiAgfSxcbiAgb2F1dGg6IHtcbiAgICBxcToge1xuICAgICAgYXBwX2lkOiAnMTAxMjcxMDgwJyxcbiAgICAgIGFwcF9rZXk6ICdjODljOTUwNzU5ODQ2MzA3YWY1YTg0MjViYjlhM2E2NCcsXG4gICAgICBwY0NvZGVIb3N0OiAnaHR0cHM6Ly9ncmFwaC5xcS5jb20vb2F1dGgyLjAvYXV0aG9yaXplJyxcbiAgICAgIHBjVG9rZW5Ib3N0OiAnaHR0cHM6Ly9ncmFwaC5xcS5jb20vb2F1dGgyLjAvdG9rZW4nLFxuICAgICAgaW5mb0hvc3Q6ICdodHRwczovL2dyYXBoLnFxLmNvbS91c2VyL2dldF91c2VyX2luZm8nLFxuICAgICAgcGNPcGVuaWRIb3N0OiAnaHR0cHM6Ly9ncmFwaC5xcS5jb20vb2F1dGgyLjAvbWUnLFxuICAgICAgcmVkaXJlY3RfdXJpOiAnaHR0cDovL3d3dy5zeW5jb2xsZWdlLmNvbS9vYXV0aC9jYWxsYmFjay9xcScsXG4gICAgfSxcbiAgfSxcbiAgZGJuYW1lOiAnc3RhcmNlZHVfYXV0aCcsXG4gIHBnOiB7XG4gICAgdXNlcjogJ2R0eWliZ2dlJyxcbiAgICBkYXRhYmFzZTogJ2R0eWliZ2dlJyxcbiAgICBwYXNzd29yZDogJ1E0ZFNMSU9JeHVsNXkzNjl2MUtGcWNZeEhIOTBqZHY0JyxcbiAgICBob3N0OiAnYmFhc3UuZGIuZWxlcGhhbnRzcWwuY29tJyxcbiAgICBwb3J0OiA1NDMyLFxuICAgIG1heDogMixcbiAgICBpZGxlVGltZW91dE1pbGxpczogMzAwMDAsXG4gIH0sXG4gIHJlc291cmNlczoge1xuICAgIHN0eWxlc2hlZXRzOiB7XG4gICAgICBub3JtYWxpemU6ICcvL2Nkbi5ib290Y3NzLmNvbS9ub3JtYWxpemUvNi4wLjAvbm9ybWFsaXplLm1pbi5jc3MnLFxuICAgICAgc2VtYW50aWM6ICcvc3RhdGljL3NlbWFudGljL3NlbWFudGljLm1pbi5jc3MnLFxuICAgIH0sXG4gICAgc2NyaXB0czoge1xuICAgICAganF1ZXJ5OiAnLy9jZG4uYm9vdGNzcy5jb20vanF1ZXJ5LzMuMi4xL2pxdWVyeS5taW4uanMnLFxuICAgICAgaHRtbDVzaGl2OiAnLy9jZG4uYm9vdGNzcy5jb20vaHRtbDVzaGl2L3IyOS9odG1sNS5taW4uanMnLFxuICAgICAgY2xhc3NsaXN0OiAnLy9jZG4uYm9vdGNzcy5jb20vY2xhc3NsaXN0LzIwMTQuMDEuMzEvY2xhc3NMaXN0Lm1pbi5qcycsXG4gICAgICBzZW1hbnRpYzogJy9zdGF0aWMvc2VtYW50aWMvc2VtYW50aWMubWluLmpzJyxcbiAgICB9LFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9jb25maWcudGVzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBGaXhlZE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1hdGNoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3VpIGh1Z2UgaW52ZXJ0ZWQgc2Vjb25kYXJ5IGhvbWUgIG1lbnUnIH0gc3R5bGU9eyB7IG1hcmdpbjogMCwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHdoaXRlJyB9IH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYWN0aXZlIGljb24gaXRlbVwiIHRvPScvJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGVudFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGhvbWVcIj48L2k+XG4gICAgICAgICAgICAgIOS4u+mhtVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb24gaXRlbVwiIGhyZWY9Jy9hcHBzL25vdGVib29rJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGVudFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGJvb2tcIj48L2k+XG4gICAgICAgICAgICAgIOeslOiusFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb24gaXRlbVwiIGhyZWY9Jy9hcHBzL2Rpc2snPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gY2xvdWQgb3V0bGluZVwiPjwvaT5cbiAgICAgICAgICAgICAg572R55uYXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBtZW51XCI+XG4gICAgICAgICAgICB7dXNlci5zdWNjZXNzID9cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaWNvbiBpdGVtXCIgdG89Jy91c2VyL3Bhc3N3b3JkJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gdXNlciBvdXRsaW5lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIHt1c2VyLnN1Y2Nlc3MgP1xuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJpY29uIGl0ZW1cIiB0bz0nL3VzZXIvc2lnbm91dCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIHNpZ24gb3V0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAg55m75Ye6XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz4gOiAnJ31cbiAgICAgICAgICAgIHt1c2VyLnN1Y2Nlc3MgPyAnJyA6XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJpY29uIGl0ZW1cIiB0bz0nL3VzZXIvc2lnbmluJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBzaWduIGluXCI+PC9pPlxuICAgICAgICAgICAgICAgIOeZu+WFpVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz59XG4gICAgICAgICAgICB7dXNlci5zdWNjZXNzID8gJycgOlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaWNvbiBpdGVtXCIgdG89Jy91c2VyL3NpZ251cCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gc21pbGVcIj48L2k+XG4gICAgICAgICAgICAgICAg5rOo5YaMXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRml4ZWRNZW51KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9jb21tb24vSG9tZU1lbnUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBXZWJBcHBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgLy8gICAkKCcud2ViYXBwJylcbiAgLy8gICAgIC52aXNpYmlsaXR5KHtcbiAgLy8gICAgICAgb25jZTogdHJ1ZSxcbiAgLy8gICAgICAgLy8gdXBkYXRlIHNpemUgd2hlbiBuZXcgY29udGVudCBsb2Fkc1xuICAvLyAgICAgICBvYnNlcnZlQ2hhbmdlczogdHJ1ZSxcbiAgLy8gICAgICAgLy8gbG9hZCBjb250ZW50IG9uIGJvdHRvbSBlZGdlIHZpc2libGVcbiAgLy8gICAgICAgb25Ub3BWaXNpYmxlKCkge1xuICAvLyAgICAgICAgIC8vIGxvYWRzIGEgbWF4IG9mIDUgdGltZXNcbiAgLy8gICAgICAgICAkKCcud2ViYXBwIC5jYXJkJylcbiAgLy8gICAgICAgICAudHJhbnNpdGlvbih7XG4gIC8vICAgICAgICAgICBhbmltYXRpb246ICdwdWxzZScsXG4gIC8vICAgICAgICAgICBpbnRlcnZhbDogMzAwLFxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSk7XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc3RyaXBlIHZlcnRpY2FsIHdlYmFwcCBzZWdtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGhlYWRlclwiPlxuICAgICAgICAgICAgV2ViIEFwcHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdGhyZWUgY2FyZHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZ3JlZW4gY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPuWkh+ivvueslOiusDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIj5BY3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzbWFsbCBmZWVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+RWxsaW90IEZ1PC9hPiBhZGRlZCA8YT5KZW5ueSBIZXNzPC9hPiB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3RldmllIEZlbGljaWFubzwvYT4gd2FzIGFkZGVkIGFzIGFuIDxhPkFkbWluaXN0cmF0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SGVsZW4gVHJveTwvYT4gYWRkZWQgdHdvIHBpY3R1cmVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiIGhyZWY9XCIvYXBwcy9ub3RlYm9va1wiPkdvPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSByZWQgY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPuiEkeWbvjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIj5BY3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzbWFsbCBmZWVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+RWxsaW90IEZ1PC9hPiBhZGRlZCA8YT5KZW5ueSBIZXNzPC9hPiB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3RldmllIEZlbGljaWFubzwvYT4gd2FzIGFkZGVkIGFzIGFuIDxhPkFkbWluaXN0cmF0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SGVsZW4gVHJveTwvYT4gYWRkZWQgdHdvIHBpY3R1cmVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiPkdvPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBibHVlIGNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj7nvZHnm5jnqbrpl7Q8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1aSBzdWIgaGVhZGVyXCI+QWN0aXZpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc21hbGwgZmVlZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkVsbGlvdCBGdTwvYT4gYWRkZWQgPGE+SmVubnkgSGVzczwvYT4gdG8gdGhlIHByb2plY3RcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0ZXZpZSBGZWxpY2lhbm88L2E+IHdhcyBhZGRlZCBhcyBhbiA8YT5BZG1pbmlzdHJhdG9yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhlbGVuIFRyb3k8L2E+IGFkZGVkIHR3byBwaWN0dXJlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiIGhyZWY9XCIvYXBwcy9kaXNrXCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYkFwcHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9XZWJBcHBzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2xvZ2FuMSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gcHJvcDogUHJvcFR5cGVzLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgJCgnLnVpLnByb2dyZXNzJykucHJvZ3Jlc3MoKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHZlcnRpY2FsIHN0cmlwZSBzZWdtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgdGV4dCBjb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJodWdlIGljb24gYmVsbFwiPjwvaT5cbiAgICAgICAgICAgIFRvdGFsIFByb2dyZXNzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGRhdGEtcGVyY2VudD0nNDAnIGNsYXNzTmFtZT1cInVpIHdoaXRlIHByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+NDAlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgZGF0YS1wZXJjZW50PSc2MCcgY2xhc3NOYW1lPVwidWkgeWVsbG93IHByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj7orqTor4Hns7vnu58m5pyN5YqhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLXBlcmNlbnQ9JzMwJyBjbGFzc05hbWU9XCJ1aSBncmVlbiBwcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+572R55uY57O757ufJuS6keWtmOWCqOacjeWKoTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xvZ2FuMTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvaW5jbHVkZXMvU2xvZ2FuMS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNsb2dhbjEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAkKCcudWkuYWNjb3JkaW9uJykuYWNjb3JkaW9uKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgdmVydGljYWwgc3RyaXBlIHRlYWwgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRleHQgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGludmVydGVkIGhlYWRlclwiPlxuICAgICAgICAgICAgRkFRXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGludmVydGVkIGFjY29yZGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIFdoYXQgaXMgYSBkb2c/XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gaGlkZGVuXCI+QSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuXG4gICAgICAgICAgICAgIEtub3duIGZvciBpdHMgbG95YWx0eSBhbmQgZmFpdGhmdWxuZXNzLCBpdCBjYW4gYmUgZm91bmQgYXMgYSB3ZWxjb21lIGd1ZXN0IGluIG1hbnkgaG91c2Vob2xkcyBhY3Jvc3MgdGhlIHdvcmxkLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJkcm9wZG93biBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIFdoYXQga2luZHMgb2YgZG9ncyBhcmUgdGhlcmU/XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gaGlkZGVuXCI+VGhlcmUgYXJlIG1hbnkgYnJlZWRzIG9mIGRvZ3MuXG4gICAgICAgICAgICAgIEVhY2ggYnJlZWQgdmFyaWVzIGluIHNpemUgYW5kIHRlbXBlcmFtZW50LlxuICAgICAgICAgICAgICBPd25lcnMgb2Z0ZW4gc2VsZWN0IGEgYnJlZWQgb2YgZG9nIHRoYXQgdGhleSBmaW5kIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVpciBvd24gbGlmZXN0eWxlIGFuZCBkZXNpcmVzIGZyb20gYSBjb21wYW5pb24uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGljb25cIj48L2k+XG4gICAgICAgICAgICAgIEhvdyBkbyB5b3UgYWNxdWlyZSBhIGRvZz9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gdmlzaWJsZVwiPlRocmVlIGNvbW1vbiB3YXlzIGZvciBhIHByb3NwZWN0aXZlIG93bmVyIHRvIGFjcXVpcmUgYSBkb2cgaXMgZnJvbSBwZXQgc2hvcHMsIHByaXZhdGUgb3duZXJzLCBvciBzaGVsdGVycy48L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gdmlzaWJsZVwiPkEgcGV0IHNob3AgbWF5IGJlIHRoZSBtb3N0IGNvbnZlbmllbnQgd2F5IHRvIGJ1eSBhIGRvZy5cbiAgICAgICAgICAgICAgQnV5aW5nIGEgZG9nIGZyb20gYSBwcml2YXRlIG93bmVyIGFsbG93cyB5b3UgdG8gYXNzZXNzIHRoZSBwZWRpZ3JlZSBhbmQgdXBicmluZ2luZyBvZiB5b3VyIGRvZyBiZWZvcmUgY2hvb3NpbmcgdG8gdGFrZSBpdCBob21lLlxuICAgICAgICAgICAgICBMYXN0bHksIGZpbmRpbmcgeW91ciBkb2cgZnJvbSBhIHNoZWx0ZXIsIGhlbHBzIGdpdmUgYSBnb29kIGhvbWUgdG8gYSBkb2cgd2hvIG1heSBub3QgZmluZCBvbmUgc28gcmVhZGlseS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsb2dhbjE7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL2luY2x1ZGVzL1Nsb2dhbjIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEZXNrdG9wQXBwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gIC8vICAgJCgnLmRlc2t0b3BhcHAnKVxuICAvLyAgIC52aXNpYmlsaXR5KHtcbiAgLy8gICAgIG9uY2U6IHRydWUsXG4gIC8vICAgICAvLyB1cGRhdGUgc2l6ZSB3aGVuIG5ldyBjb250ZW50IGxvYWRzXG4gIC8vICAgICBvYnNlcnZlQ2hhbmdlczogdHJ1ZSxcbiAgLy8gICAgIC8vIGxvYWQgY29udGVudCBvbiBib3R0b20gZWRnZSB2aXNpYmxlXG4gIC8vICAgICBvblRvcFZpc2libGUoKSB7XG4gIC8vICAgICAgIC8vIGxvYWRzIGEgbWF4IG9mIDUgdGltZXNcbiAgLy8gICAgICAgJCgnLmRlc2t0b3BhcHAgLmNhcmQnKVxuICAvLyAgICAgICAudHJhbnNpdGlvbih7XG4gIC8vICAgICAgICAgYW5pbWF0aW9uOiAncHVsc2UnLFxuICAvLyAgICAgICAgIGludGVydmFsOiAzMDAsXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHN0cmlwZSB2ZXJ0aWNhbCBkZXNrdG9wYXBwIHNlZ21lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBjb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICDmoYzpnaIgQXBwc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0d28gY2FyZHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgcGluayBjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+5pWZ5biI56uvPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiPkFjdGl2aXR5PC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNtYWxsIGZlZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5FbGxpb3QgRnU8L2E+IGFkZGVkIDxhPkplbm55IEhlc3M8L2E+IHRvIHRoZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3RldmllIEZlbGljaWFubzwvYT4gd2FzIGFkZGVkIGFzIGFuIDxhPkFkbWluaXN0cmF0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SGVsZW4gVHJveTwvYT4gYWRkZWQgdHdvIHBpY3R1cmVzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiPkRvd25sb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRlYWwgY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPuWtpueUn+errzwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIj5BY3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzbWFsbCBmZWVkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+RWxsaW90IEZ1PC9hPiBhZGRlZCA8YT5KZW5ueSBIZXNzPC9hPiB0byB0aGUgcHJvamVjdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0ZXZpZSBGZWxpY2lhbm88L2E+IHdhcyBhZGRlZCBhcyBhbiA8YT5BZG1pbmlzdHJhdG9yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhlbGVuIFRyb3k8L2E+IGFkZGVkIHR3byBwaWN0dXJlc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5Eb3dubG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcEFwcHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9EZXNrdG9wQXBwcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE90aGVycyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gIC8vICAgJCgnLm90aGVyYXBwJylcbiAgLy8gICAgIC52aXNpYmlsaXR5KHtcbiAgLy8gICAgICAgb25jZTogdHJ1ZSxcbiAgLy8gICAgICAgLy8gdXBkYXRlIHNpemUgd2hlbiBuZXcgY29udGVudCBsb2Fkc1xuICAvLyAgICAgICBvYnNlcnZlQ2hhbmdlczogdHJ1ZSxcbiAgLy8gICAgICAgLy8gbG9hZCBjb250ZW50IG9uIGJvdHRvbSBlZGdlIHZpc2libGVcbiAgLy8gICAgICAgb25Ub3BWaXNpYmxlKCkge1xuICAvLyAgICAgICAgIC8vIGxvYWRzIGEgbWF4IG9mIDUgdGltZXNcbiAgLy8gICAgICAgICAkKCcub3RoZXJhcHAgLmNhcmQnKVxuICAvLyAgICAgICAgIC50cmFuc2l0aW9uKHtcbiAgLy8gICAgICAgICAgIGFuaW1hdGlvbjogJ3B1bHNlJyxcbiAgLy8gICAgICAgICAgIGludGVydmFsOiAzMDAsXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9KTtcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzdHJpcGUgdmVydGljYWwgb3RoZXJhcHAgc2VnbWVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIOWFtuS7liBBcHBzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHRocmVlIGNhcmRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHJlZCBjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+5a2m5Lmg57uP5Y6G5YiG5p6Q57O757ufPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWkgc3ViIGhlYWRlclwiPkFjdGl2aXR5PC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNtYWxsIGZlZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5FbGxpb3QgRnU8L2E+IGFkZGVkIDxhPkplbm55IEhlc3M8L2E+IHRvIHRoZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TdGV2aWUgRmVsaWNpYW5vPC9hPiB3YXMgYWRkZWQgYXMgYW4gPGE+QWRtaW5pc3RyYXRvcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5IZWxlbiBUcm95PC9hPiBhZGRlZCB0d28gcGljdHVyZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYSBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIj5HbzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlclwiIHN0eWxlPXsgeyBtYXJnaW46ICcyNTBweCcgfSB9PjwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdGhlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9pbmNsdWRlcy9PdGhlcnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIFJvdXRlLFxuICB3aXRoUm91dGVyLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFuaW1hdGVkU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLXRyYW5zaXRpb24nO1xuaW1wb3J0IFNpZ25pbiBmcm9tICcuL1NpZ25pbic7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vU2lnbnVwJztcbmltcG9ydCBTaWdub3V0IGZyb20gJy4vU2lnbm91dCc7XG5pbXBvcnQgUGFzc3dvcmQgZnJvbSAnLi9QYXNzd29yZCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH1cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbmltYXRlZFN3aXRjaFxuICAgICAgICAgIGF0RW50ZXI9eyB7IG9wYWNpdHk6IDAgfSB9XG4gICAgICAgICAgYXRMZWF2ZT17IHsgb3BhY2l0eTogMCB9IH1cbiAgICAgICAgICBhdEFjdGl2ZT17IHsgb3BhY2l0eTogMSB9IH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLWZvcm0gbWFpbi1yb3V0ZS1jb250ZW50XCJcbiAgICAgID5cbiAgICAgICAgPFJvdXRlIGxvY2F0aW9uPXsgbG9jYXRpb24gfSBjb21wb25lbnQ9eyBTaWduaW4gfSBwYXRoPScvdXNlci9zaWduaW4nIGV4YWN0PXsgdHJ1ZSB9PjwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBsb2NhdGlvbj17IGxvY2F0aW9uIH0gY29tcG9uZW50PXsgU2lnbnVwIH0gcGF0aD0nL3VzZXIvc2lnbnVwJyBleGFjdD17IHRydWUgfT48L1JvdXRlPlxuICAgICAgICA8Um91dGUgbG9jYXRpb249eyBsb2NhdGlvbiB9IGNvbXBvbmVudD17IFNpZ25vdXQgfSBwYXRoPScvdXNlci9zaWdub3V0JyBleGFjdD17IHRydWUgfT48L1JvdXRlPlxuICAgICAgICA8Um91dGUgbG9jYXRpb249eyBsb2NhdGlvbiB9IGNvbXBvbmVudD17IFBhc3N3b3JkIH0gcGF0aD0nL3VzZXIvcGFzc3dvcmQnIGV4YWN0PXsgdHJ1ZSB9PjwvUm91dGU+XG4gICAgICA8L0FuaW1hdGVkU3dpdGNoPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIb21lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1VzZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBSZWRpcmVjdCxcbiAgTGluayxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cblxuaW1wb3J0IEVtYWlsRmllbGQgZnJvbSAnLi9jb21tb24vdXNlci9FbWFpbEZpZWxkJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vY29tbW9uL3VzZXIvUGFzc3dvcmRGaWVsZCc7XG5pbXBvcnQgT0F1dGhQcm92aWRlcnMgZnJvbSAnLi9jb21tb24vdXNlci9PQXV0aFByb3ZpZGVycyc7XG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5pbXBvcnQgUVFJbmZvIGZyb20gJy4vY29tbW9uL3VzZXIvb2F1dGgvUVFJbmZvJztcblxuaW1wb3J0IGluaXQgZnJvbSAnLi4vaW5pdEZvcm1WYWxpZGF0aW9uJztcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb2F1dGhVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc3VibWl0SW5mbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGJ1c3k6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgc2V0U3VibWl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzaWduaW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICB0aGlzLnByb3BzLnNldFN1Ym1pdE1vZGUoKTtcbiAgfVxuXG4gIG9uRm9ybVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCQodGhpcy5mb3JtKS5mb3JtKCdpcyB2YWxpZCcpKSB7XG4gICAgICB0aGlzLnByb3BzLnNpZ25pbih0aGlzLnByb3BzLnN1Ym1pdEluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHVzZXIuc3VjY2Vzcykge1xuICAgICAgaWYgKCF1c2VyLmNhbGxiYWNrIHx8IHVzZXIuY2FsbGJhY2sgPT09ICcvJykge1xuICAgICAgICByZXR1cm4gKDxSZWRpcmVjdCB0bz17IHsgcGF0aG5hbWU6ICcvJyB9IH0vPik7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXNlci5jYWxsYmFjayk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZm9ybS1jb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSB0ZWFsIGltYWdlIGhlYWRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIGFsdD1cIlwiIHN0eWxlPXsgeyBib3JkZXJSYWRpdXM6ICc0cHgnIH0gfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICB7J+eZu+WFpSd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0aGlzLnByb3BzLm9hdXRoVXNlci5pZCA/IDxRUUluZm8vPiA6ICcnfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGZvcm0gcmVmPXsgZSA9PiB0aGlzLmZvcm0gPSBlIH0gY2xhc3NOYW1lPXsgYHVpIGZvcm0gJHt0aGlzLnByb3BzLmJ1c3kgPyAnbG9hZGluZycgOiAnJ31gIH0gb25TdWJtaXQ9eyB0aGlzLm9uRm9ybVN1Ym1pdCB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VnbWVudFwiPlxuICAgICAgICAgICAgPEVtYWlsRmllbGQvPlxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbmFtZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi5a+G56CBXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBmbHVpZCB0ZWFsIHN1Ym1pdCBidXR0b25cIiB0eXBlPVwic3VibWl0XCI+55m75YWlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBlcnJvciBtZXNzYWdlXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPE9BdXRoUHJvdmlkZXJzLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgIOWwmuacquazqOWGjO+8n1xuICAgICAgICAgIDxMaW5rIHRvPScvdXNlci9zaWdudXAnID7ljrvms6jlhowhPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwb2ludGluZyByaWdodCBncmV5IGljb25cIj48L2k+XG4gICAgICAgICAg5b+Y6K6w5a+G56CB77yfXG4gICAgICAgICAgPHNwYW4gdG89Jy91c2VyL3NpZ251cCcgPuWOu+aJvuWbniEo5pyq5a6e546wKTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndWkgcmlnaHQgZmxvYXRlZCcgdG89Jy8nPui/lOWbnuS4u+mhtTwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkudXNlcixcbiAgb2F1dGhVc2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLm9hdXRoVXNlcixcbiAgc3VibWl0SW5mbzogc3RhdGUudXNlci50b0pTT04oKS5zdWJtaXRJbmZvLFxuICBidXN5OiBzdGF0ZS5hc3luY1N0YXR1cy50b0pTT04oKS5VU0VSX1NJR05JTl9CVVNZLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNpZ25pbjogKGluZm8pID0+IHtcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLnNpZ25pbihpbmZvKSk7XG4gICAgfSxcbiAgICBzZXRTdWJtaXRNb2RlOiAoKSA9PiB7XG4gICAgICB1c2VyQWN0aW9ucy5zZXRTdWJtaXRNb2RlKGRpc3BhdGNoLCAnc2lnbmluJyk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25pbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9TaWduaW4uanMiLCJjb25zdCBnZXRIZWFkZXJzID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgaGVhZGVycy5hcHBlbmQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGhlYWRlcnMuYXBwZW5kKCdhY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICByZXR1cm4gaGVhZGVycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0SGVhZGVycyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCIvLyBpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5pbXBvcnQgZGV2ZWxvcG1lbnQgZnJvbSAnLi9jb25maWcuZGV2ZWxvcG1lbnQnO1xuaW1wb3J0IHByb2R1Y3Rpb24gZnJvbSAnLi9jb25maWcucHJvZHVjdGlvbic7XG5cbmxldCBjb25maWdWYXIgPSB7fTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNvbmZpZ1ZhciA9IHByb2R1Y3Rpb247XG4gIGNvbmZpZ1Zhci5lbnYgPSAncHJvZHVjdGlvbic7XG59IGVsc2Uge1xuICBjb25maWdWYXIgPSBkZXZlbG9wbWVudDtcbiAgY29uZmlnVmFyLmVudiA9ICdkZXZlbG9wbWVudCc7XG59XG5jb25zdCBjb25maWcgPSBjb25maWdWYXI7XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29uZmlnL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzZXJ2aWNlQmFzZTogJ2h0dHA6Ly93d3cuc3luY29sbGVnZS5jb20vJyxcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb25maWcvY29uZmlnLmRldmVsb3BtZW50LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzZXJ2aWNlQmFzZTogJ2h0dHA6Ly93d3cuc3luY29sbGVnZS5jb20vJyxcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb25maWcvY29uZmlnLnByb2R1Y3Rpb24uanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vZnJvbnRlbmQvY29uZmlnJztcbmltcG9ydCBmaWxsIGZyb20gJy4vbWVzc2FnZU1pZGRsZXdhcmUnO1xuXG5jb25zdCBiYXNlID0gY29uZmlnLnNlcnZpY2VCYXNlO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1yZXR1cm4gKi9cblxuY29uc3Qgc2lnbmluID0gKGluZm8pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB1dGlscy5nZXRIZWFkZXJzKCksXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbmZvKSxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0lHTklOX1NUQVJUIH0pKTtcblxuICAgIGZldGNoKGAke2Jhc2V9YXBpL3VzZXIvc2lnbmluYCwgcGF5bG9hZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TSUdOSU5fRU5ELCBwYXlsb2FkOiByZXQgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05JTl9FUlJPUiB9KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuY29uc3Qgc2lnbnVwID0gKGluZm8pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB1dGlscy5nZXRIZWFkZXJzKCksXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbmZvKSxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0lHTlVQX1NUQVJUIH0pKTtcblxuICAgIGZldGNoKGAke2Jhc2V9YXBpL3VzZXIvc2lnbnVwYCwgcGF5bG9hZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TSUdOVVBfRU5ELCBwYXlsb2FkOiByZXQgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05VUF9FUlJPUiB9KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHV0aWxzLmdldEhlYWRlcnMoKSxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0lHTk9VVF9TVEFSVCB9KSk7XG5cbiAgICBmZXRjaChgJHtiYXNlfWFwaS91c2VyL3NpZ25vdXRgLCBwYXlsb2FkKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmV0KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05PVVRfRU5ELCBwYXlsb2FkOiByZXQgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1NJR05PVVRfRVJST1IgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IHVwZGF0ZV9wYXNzd29yZCA9IChpbmZvKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB1dGlscy5nZXRIZWFkZXJzKCksXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbmZvKSxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfVVBEQVRFX1BBU1NXT1JEX1NUQVJUIH0pKTtcblxuICAgIGZldGNoKGAke2Jhc2V9YXBpL3VzZXIvdXBkYXRlX3Bhc3N3b3JkYCwgcGF5bG9hZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9VUERBVEVfUEFTU1dPUkRfRU5ELCBwYXlsb2FkOiByZXQgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX1VQREFURV9QQVNTV09SRF9FUlJPUiB9KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuY29uc3Qgb2F1dGhfc2lnbm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHV0aWxzLmdldEhlYWRlcnMoKSxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfT0FVVEhfU0lHTk9VVF9TVEFSVCB9KSk7XG5cbiAgICBmZXRjaChgJHtiYXNlfWFwaS9vYXV0aC9zaWdub3V0YCwgcGF5bG9hZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJldCkgPT4ge1xuICAgICAgICBpZiAocmV0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9TSUdOT1VUX0VORCwgcGF5bG9hZDogcmV0IH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChmaWxsKHsgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9TSUdOT1VUX0VSUk9SIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1NJR05PVVRfRVJST1IgfSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IG9hdXRoX3VubGluayA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB1dGlscy5nZXRIZWFkZXJzKCksXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1VOTElOS19TVEFSVCB9KSk7XG5cbiAgICBmZXRjaChgJHtiYXNlfWFwaS9vYXV0aC91bmxpbmtgLCBwYXlsb2FkKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmV0KSA9PiB7XG4gICAgICAgIGlmIChyZXQuc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1VOTElOS19FTkQsIHBheWxvYWQ6IHJldCB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goZmlsbCh7IHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfT0FVVEhfVU5MSU5LX0VSUk9SIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZpbGwoeyB0eXBlOiBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1VOTElOS19FUlJPUiB9KSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICB9O1xufTtcblxuY29uc3Qgc2V0U3VibWl0TW9kZSA9IChkaXNwYXRjaCwgbW9kZSkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuVVNFUl9TRVRfU1VCTUlUX0lORk8sXG4gICAgcGF5bG9hZDoge1xuICAgICAgbW9kZSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmNvbnN0IHNldFN1Ym1pdEluZm8gPSAoZGlzcGF0Y2gsIGluZm8pID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlVTRVJfU0VUX1NVQk1JVF9JTkZPLFxuICAgIHBheWxvYWQ6IGluZm8sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWduaW4sXG4gIHNpZ251cCxcbiAgc2lnbm91dCxcbiAgdXBkYXRlX3Bhc3N3b3JkLFxuICBvYXV0aF91bmxpbmssXG4gIG9hdXRoX3NpZ25vdXQsXG4gIHNldFN1Ym1pdE1vZGUsXG4gIHNldFN1Ym1pdEluZm8sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgbWVzc2FnZURpY3QgPSB7XG4gIFVTRVJfU0lHTlVQX0VSUk9SOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+azqOWGjOWksei0pScsXG4gICAgICBkZXRhaWxzOiAn6L+Z5Y+v6IO95piv55Sx5LqO572R57uc6Zeu6aKY6YCg5oiQ55qEJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX1NJR05VUF9FTkQ6IChwYXlsb2FkKSA9PiB7XG4gICAgaWYgKHBheWxvYWQuY29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgIGhlYWRlcjogJ+azqOWGjOaIkOWKnycsXG4gICAgICAgIGRldGFpbHM6ICfov5jnrYnku4DkuYjvvIzlj6/ku6XlvIDlp4vlsL3mg4XnjqnogI3kuoYnLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHBheWxvYWQuY29kZSA9PT0gNDAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGhlYWRlcjogJ+azqOWGjOWksei0pScsXG4gICAgICAgIGRldGFpbHM6ICflj6/og73mmK/nlLHkuo7or6XnlKjmiLflkI3lt7Lnu4/ooqvms6jlhozov4fkuoYnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+azqOWGjOWksei0pScsXG4gICAgICBkZXRhaWxzOiAn55So5oi35ZCNL+WvhueggeS4jeespuWQiOimgeaxgicsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9TSUdOSU5fRVJST1I6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaGVhZGVyOiAn55m75YWl5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6ICfov5nlj6/og73mmK/nlLHkuo7nvZHnu5zpl67popjpgKDmiJDnmoQnLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfU0lHTklOX0VORDogKHBheWxvYWQpID0+IHtcbiAgICBpZiAocGF5bG9hZC5jb2RlID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgaGVhZGVyOiAn55m75YWl5oiQ5YqfJyxcbiAgICAgICAgZGV0YWlsczogJ+i/mOetieS7gOS5iO+8jOWPr+S7peW8gOWni+WwveaDheeOqeiAjeS6hicsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocGF5bG9hZC5jb2RlID09PSA0MDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgaGVhZGVyOiAn55m75YWl5aSx6LSlJyxcbiAgICAgICAgZGV0YWlsczogJ+eUqOaIt+S4jeWtmOWcqOaIlueUqOaIt+WQjS/lr4bnoIHplJnor68nLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+eZu+WFpeWksei0pScsXG4gICAgICBkZXRhaWxzOiAn55So5oi35ZCNL+WvhueggeS4jeespuWQiOimgeaxgicsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9TSUdOT1VUX0VSUk9SOiAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGhlYWRlcjogJ+eZu+WHuuWksei0pScsXG4gICAgICBkZXRhaWxzOiAn6L+Z5Y+v6IO95piv55Sx5LqO572R57uc6Zeu6aKY6YCg5oiQ55qEJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX1NJR05PVVRfRU5EOiAocGF5bG9hZCkgPT4ge1xuICAgIGlmIChwYXlsb2FkLmNvZGUgIT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgaGVhZGVyOiAn55m75Ye65aSx6LSlJyxcbiAgICAgICAgZGV0YWlsczogJ+i/meWPr+iDveaYr+eUseS6juacjeWKoeWZqOeahOmUmeivr+mAoOaIkOeahCcsXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgVVNFUl9VUERBVEVfUEFTU1dPUkRfRVJST1I6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaGVhZGVyOiAn5pu05paw5a+G56CB5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6ICfov5nlj6/og73mmK/nlLHkuo7nvZHnu5zpl67popjpgKDmiJDnmoQnLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfVVBEQVRFX1BBU1NXT1JEX0VORDogKHBheWxvYWQpID0+IHtcbiAgICBpZiAocGF5bG9hZC5jb2RlID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgaGVhZGVyOiAn5pu05paw5a+G56CB5oiQ5YqfJyxcbiAgICAgICAgZGV0YWlsczogJ+ivt+S9v+eUqOaWsOWvhueggemHjeaWsOeZu+WFpScsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocGF5bG9hZC5jb2RlID09PSA0MDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgaGVhZGVyOiAn5pu05paw5a+G56CB5aSx6LSlJyxcbiAgICAgICAgZGV0YWlsczogJ+ivt+ehruS/neS9oOeahOWOn+Wni+Wvhueggeato+ehricsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaGVhZGVyOiAn5pu05paw5a+G56CB5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6ICfmlrDlr4bnoIHkuI3nrKblkIjopoHmsYInLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfQklORF9BVVRIRU5USUNBVEVfRVJST1I6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgaGVhZGVyOiAn57uR5a6a5aSx6LSlJyxcbiAgICAgIGRldGFpbHM6ICfov5nlj6/og73mmK/nlLHkuo7nvZHnu5zpl67popjpgKDmiJDnmoQnLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfQklORF9BVVRIRU5USUNBVEVfRU5EOiAocGF5bG9hZCkgPT4ge1xuICAgIGlmIChwYXlsb2FkLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICBoZWFkZXI6ICfnu5HlrprmiJDlip8nLFxuICAgICAgICBkZXRhaWxzOiAn6L+Y562J5LuA5LmI77yM5Y+v5Lul5byA5aeL5bC95oOF546p6ICN5LqGJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBoZWFkZXI6ICfnu5HlrprlpLHotKUnLFxuICAgICAgZGV0YWlsczogW1xuICAgICAgICAn6K+356Gu5L+d5L2g5bey5rOo5YaM77yM5bm26YeN5paw5qC45a+55L2g55qE55So5oi35ZCN5ZKM5a+G56CBJyxcbiAgICAgICAgJ+ivt+ehruS/neayoeaciemHjeWkjee7keWumicsXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIFVTRVJfU0lHTk9VVDogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIGhlYWRlcjogJ+aIkOWKn+eZu+WHuicsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9VU0VSTkFNRV9DSEVDS19FUlJPUjogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBpbmxpbmU6ICfnlKjmiLflkI3mo4Dmn6XlpLHotKUnLFxuICAgICAgZGV0YWlsczogJ+i/meWPr+iDveaYr+e9kee7nOWOn+WboOmAoOaIkOeahO+8jOS9oOWPr+S7peWwneivlee7p+e7reazqOWGjCcsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9VU0VSTkFNRV9DSEVDS19FTkQ6IChwYXlsb2FkKSA9PiB7XG4gICAgaWYgKHBheWxvYWQudmFsaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICBpbmxpbmU6ICfkvaDkuI3og73kvb/nlKjor6XnlKjmiLflkI0nLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGlubGluZTogJ+S9oOS4jeiDveS9v+eUqOivpeeUqOaIt+WQjScsXG4gICAgICBkZXRhaWxzOiAn6L+Z5Y+v6IO95piv55Sx5LqO5bey57uP5pyJ5Lq65L2/55So6K+l55So5oi35ZCN5rOo5YaM5LqGJyxcbiAgICB9O1xuICB9LFxuICBVU0VSX0dFVF9PQVVUSF9JTkZPX0VORDogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgIGlubGluZTogJ+iOt+WPluesrOS4ieaWueeZu+W9leS/oeaBr+WujOaIkCcsXG4gICAgfTtcbiAgfSxcbiAgVVNFUl9HRVRfT0FVVEhfSU5GT19FUlJPUjogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBpbmxpbmU6ICfojrflj5bnrKzkuInmlrnnmbvlvZXkv6Hmga/lpLHotKUnLFxuICAgICAgZGV0YWlsczogJ+i/meWPr+iDveaYr+e9kee7nOWOn+WboOmAoOaIkOeahCcsXG4gICAgfTtcbiAgfSxcbn07XG5cbi8vIHRoaXMgaXMgYSBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgYWN0aW9uIHBhcmFtZXRlclxuZXhwb3J0IGRlZmF1bHQgKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZXIgPSBtZXNzYWdlRGljdFt0eXBlXTtcbiAgaWYgKGhhbmRsZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgdWlfbWVzc2FnZTogaGFuZGxlcihwYXlsb2FkKSB8fCB7fSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBjb25zb2xlLmxvZyhgbm8gbWVzc2FnZSBoYW5kbGVyIGZvdW5kIGZvciB0eXBlOiAke3R5cGV9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICByZXR1cm4geyB0eXBlLCBwYXlsb2FkIH07XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvYWN0aW9ucy9tZXNzYWdlTWlkZGxld2FyZS5qcyIsImNvbnN0IHZhbGlkYXRpb25SdWxlcyA9IHtcbiAgdXNlcm5hbWU6IHtcbiAgICBiZWZvcmVWYWw6ICh2YWwpID0+IHtcbiAgICAgIHJldHVybiB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIHJlZ2V4Oi8oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS8sIC8vZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGVtcHR5Q29kZTogMTAxLFxuICAgIGNvZGU6IDEwMixcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICByZWdleDogL15bQS1aYS16MC05XXs2LDIwfSQvLFxuICAgIGVtcHR5Q29kZTogMTExLFxuICAgIGNvZGU6IDExMixcbiAgfSxcbiAgb2xkX3Bhc3N3b3JkOiB7XG4gICAgcmVnZXg6IC9eW0EtWmEtejAtOV17NiwyMH0kLyxcbiAgICBlbXB0eUNvZGU6IDEyMSxcbiAgICBjb2RlOiAxMjIsXG4gIH0sXG4gIG5ld19wYXNzd29yZDoge1xuICAgIHJlZ2V4OiAvXltBLVphLXowLTldezYsMjB9JC8sXG4gICAgZW1wdHlDb2RlOiAxMzEsXG4gICAgY29kZTogMTMyLFxuICB9LFxuICBiaW5kX3VzZXJfaWQ6IHtcbiAgICBlbXB0eUNvZGU6IDE0MSxcbiAgfSxcbiAgb2F1dGhfdXNlcl9pZDoge1xuICAgIGVtcHR5Q29kZTogMTUxLFxuICB9LFxuICB1bmlxdWVfcHJvdmlkZXJfaWQ6IHtcbiAgICBlbXB0eUNvZGU6IDE2MSxcbiAgfSxcbiAgcHJvdmlkZXI6IHtcbiAgICBlbXB0eUNvZGU6IDE3MSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIGVtcHR5Q29kZTogMTgxLFxuICB9LFxufTtcblxuY29uc3QgdmFsaWRhdGUgPSAocGF5bG9hZCwgbm9uTnVsbFBhcmFtc0FycmF5KSA9PiB7XG4gIGNvbnN0IHJldCA9IHtcbiAgICBjb2RlOiAwLFxuICAgIG1lc3NhZ2U6ICcnLFxuICB9O1xuXG4gIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGspID0+IHtcbiAgICBpZiAocGF5bG9hZFtrXSAmJiB0eXBlb2YgcGF5bG9hZFtrXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBheWxvYWRba10gPSBwYXlsb2FkW2tdLnRyaW0oKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIH1cbiAgICBpZiAocGF5bG9hZFtrXSAmJiB2YWxpZGF0aW9uUnVsZXNba10gJiYgdmFsaWRhdGlvblJ1bGVzW2tdLmJlZm9yZVZhbCkge1xuICAgICAgcGF5bG9hZFtrXSA9IHZhbGlkYXRpb25SdWxlc1trXS5iZWZvcmVWYWwocGF5bG9hZFtrXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9XG4gIH0pO1xuXG4gIG5vbk51bGxQYXJhbXNBcnJheS5ldmVyeSgoaykgPT4ge1xuICAgIGlmICghdmFsaWRhdGlvblJ1bGVzW2tdKSB7XG4gICAgICBjb25zb2xlLmxvZyhgbm8gdmFsaWRhdGlvbiBydWxlIGZvciBub24tbnVsbCBwYXJhbWV0ZXIgJHtrfSBpbiBcXG4pJHtKU09OLnN0cmluZ2lmeShwYXlsb2FkLCBudWxsLCAyKX1gKTtcbiAgICB9IGVsc2UgaWYgKCFwYXlsb2FkW2tdKSB7XG4gICAgICByZXQuY29kZSA9IHZhbGlkYXRpb25SdWxlc1trXS5lbXB0eUNvZGU7XG4gICAgICByZXQubWVzc2FnZSA9IGAke2t9IGVtcHR5YDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlmIChyZXQuY29kZSAhPT0gMCkge1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBPYmplY3Qua2V5cyhwYXlsb2FkKS5ldmVyeSgoaykgPT4ge1xuICAgIGlmICghdmFsaWRhdGlvblJ1bGVzW2tdKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgbm8gdmFsaWRhdGlvbiBydWxlIGZvciBwYXJhbWV0ZXIgJHtrfSBpbiBcXG4pJHtKU09OLnN0cmluZ2lmeShwYXlsb2FkLCBudWxsLCAyKX1gKTtcbiAgICB9IGVsc2UgaWYgKCF2YWxpZGF0aW9uUnVsZXNba10ucmVnZXgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBubyByZWdleCBydWxlIGZvciBwYXJhbWV0ZXIgJHtrfWApO1xuICAgIH0gZWxzZSBpZiAoIXZhbGlkYXRpb25SdWxlc1trXS5yZWdleC50ZXN0KHBheWxvYWRba10pKSB7XG4gICAgICByZXQuY29kZSA9IHZhbGlkYXRpb25SdWxlc1trXS5jb2RlO1xuICAgICAgcmV0Lm1lc3NhZ2UgPSBgcHJvdmlkZWQgJHtrfSBpbGxpZ2FsYDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRlLFxuICB2YWxpZGF0aW9uUnVsZXMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9wYXJhbXNWYWxpZGF0b3IuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBSZWRpcmVjdCxcbiAgTGluayxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRW1haWxGaWVsZCBmcm9tICcuL2NvbW1vbi91c2VyL0VtYWlsRmllbGQnO1xuaW1wb3J0IFBhc3N3b3JkRmllbGQgZnJvbSAnLi9jb21tb24vdXNlci9QYXNzd29yZEZpZWxkJztcbmltcG9ydCBPQXV0aFByb3ZpZGVycyBmcm9tICcuL2NvbW1vbi91c2VyL09BdXRoUHJvdmlkZXJzJztcbmltcG9ydCB1c2VyQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zJztcbmltcG9ydCBRUUluZm8gZnJvbSAnLi9jb21tb24vdXNlci9vYXV0aC9RUUluZm8nO1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuLi9pbml0Rm9ybVZhbGlkYXRpb24nO1xuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb2F1dGhVc2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc3VibWl0SW5mbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHNpZ251cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRTdWJtaXRNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGJ1c3k6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICB0aGlzLnByb3BzLnNldFN1Ym1pdE1vZGUoKTtcbiAgfVxuXG4gIG9uRm9ybVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCQodGhpcy5mb3JtKS5mb3JtKCdpcyB2YWxpZCcpKSB7XG4gICAgICB0aGlzLnByb3BzLnNpZ251cCh0aGlzLnByb3BzLnN1Ym1pdEluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXIsIG9hdXRoVXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodXNlci5zdWNjZXNzKSB7XG4gICAgICBpZiAoIXVzZXIuY2FsbGJhY2sgfHwgdXNlci5jYWxsYmFjayA9PT0gJy8nKSB7XG4gICAgICAgIHJldHVybiAoPFJlZGlyZWN0IHRvPXsgeyBwYXRobmFtZTogJy8nIH0gfS8+KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1c2VyLmNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVpIHRlYWwgaW1hZ2UgaGVhZGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiXCIgc3R5bGU9eyB7IGJvcmRlclJhZGl1czogJzRweCcgfSB9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICB7b2F1dGhVc2VyLmlkID8gJ+azqOWGjCcgOiAn5rOo5YaMJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAge3RoaXMucHJvcHMub2F1dGhVc2VyLmlkID8gPFFRSW5mby8+IDogJyd9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8Zm9ybSByZWY9eyBlID0+IHRoaXMuZm9ybSA9IGUgfSBjbGFzc05hbWU9eyBgdWkgZm9ybSAke3RoaXMucHJvcHMuYnVzeSA/ICdsb2FkaW5nJyA6ICcnfWAgfSBvblN1Ym1pdD17IHRoaXMub25Gb3JtU3VibWl0IH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50XCI+XG4gICAgICAgICAgICA8RW1haWxGaWVsZCAvPlxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbmFtZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi5a+G56CBXCIgLz5cbiAgICAgICAgICAgIDxQYXNzd29yZEZpZWxkIG5hbWU9J2NvbmZpcm1fcGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi56Gu6K6k5a+G56CBXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgZmx1aWQgdGVhbCBzdWJtaXQgYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPuazqOWGjDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZXJyb3IgbWVzc2FnZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxPQXV0aFByb3ZpZGVycyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwb2ludGluZyByaWdodCBncmV5IGljb25cIj48L2k+XG4gICAgICAgICAgICDlt7Lms6jlhozov4fvvJ9cbiAgICAgICAgICA8TGluayB0bz0nL3VzZXIvc2lnbmluJyBocmVmPVwiXCI+e3RoaXMucHJvcHMub2F1dGhVc2VyLmlkID8gJ+e7keWumuW3suaciei0puaItycgOiAn5Y6755m75YWlJ308L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VpIHJpZ2h0IGZsb2F0ZWQnIHRvPScvJz7ov5Tlm57kuLvpobU8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLnRvSlNPTigpLnVzZXIsXG4gIG9hdXRoVXNlcjogc3RhdGUudXNlci50b0pTT04oKS5vYXV0aFVzZXIsXG4gIHN1Ym1pdEluZm86IHN0YXRlLnVzZXIudG9KU09OKCkuc3VibWl0SW5mbyxcbiAgYnVzeTogc3RhdGUuYXN5bmNTdGF0dXMudG9KU09OKCkuVVNFUl9TSUdOVVBfQlVTWSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWdudXA6IChpbmZvKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zaWdudXAoaW5mbykpO1xuICAgIH0sXG4gICAgc2V0U3VibWl0TW9kZTogKCkgPT4ge1xuICAgICAgdXNlckFjdGlvbnMuc2V0U3VibWl0TW9kZShkaXNwYXRjaCwgJ3NpZ251cCcpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWdudXApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvU2lnbnVwLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge1xuICBMaW5rLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB1c2VyQWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY2xhc3MgU2lnbm91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBidXN5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHNpZ25vdXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2lnbm91dCgpO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYnVzeSAmJiBwcmV2UHJvcHMuYnVzeSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVpIHRlYWwgaW1hZ2UgaGVhZGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICDnmbvlh7pcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3VpIGxlZnQgYWxpZ25lZCBpY29uIG1lc3NhZ2UnIH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuYnVzeSA/IDxpIGNsYXNzTmFtZT1cIm5vdGNoZWQgY2lyY2xlIGxvYWRpbmcgaWNvblwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJncmVlbiBjaGVjayBpY29uXCI+PC9pPn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5idXN5ID8gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9eyB7IHRleHRBbGlnbjogJ2xlZnQnIH0gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICDmraPlnKjnmbvlh7ouLi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPueZu+WHuuWQjuS8mui3s+i9rOiHs+S4u+mhtTwvcD5cbiAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBzdHlsZT17IHsgdGV4dEFsaWduOiAnbGVmdCcgfSB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIOW3sueZu+WHulxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+5q2j5Zyo6Lez6L2s6Iez5Li76aG1PC9wPlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VpIHJpZ2h0IGZsb2F0ZWQnIHRvPScvJz7nq4vliLvov5Tlm57kuLvpobU8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlci50b0pTT04oKS51c2VyLFxuICBidXN5OiBzdGF0ZS5hc3luY1N0YXR1cy50b0pTT04oKS5VU0VSX1NJR05PVVRfQlVTWSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWdub3V0OiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zaWdub3V0KCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25vdXQpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1NpZ25vdXQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBMaW5rLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vY29tbW9uL3VzZXIvUGFzc3dvcmRGaWVsZCc7XG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmltcG9ydCBpbml0IGZyb20gJy4uL2luaXRGb3JtVmFsaWRhdGlvbic7XG5cbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN1Ym1pdEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVfcGFzc3dvcmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0U3VibWl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBidXN5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0U3VibWl0TW9kZSgpO1xuICAgIGlmICghdGhpcy5wcm9wcy51c2VyLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKSwgMjAwMCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJCh0aGlzLmZvcm0pLmZvcm0oJ2lzIHZhbGlkJykpIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlX3Bhc3N3b3JkKHRoaXMucHJvcHMuc3VibWl0SW5mbyk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy51c2VyLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL3NpZ25pbicpLCAyMDAwKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghdXNlci5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVpIHRlYWwgaW1hZ2UgaGVhZGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIOabtOaWsOWvhueggVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd1aSBsZWZ0IGFsaWduZWQgaWNvbiBtZXNzYWdlJyB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibm90Y2hlZCBjaXJjbGUgbG9hZGluZyBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9eyB7IHRleHRBbGlnbjogJ2xlZnQnIH0gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICDlvZPliY3nirbmgIHmnKrnmbvlhaUv5bey55m75Ye6XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD7mraPlnKjot7Povazoh7PnmbvlhaXpobXpnaIuLi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd1aSByaWdodCBmbG9hdGVkJyB0bz0nL3VzZXIvc2lnbmluJz7nq4vliLvot7Povazoh7PnmbvlhaXpobXpnaI8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBvaW50aW5nIHJpZ2h0IGdyZXkgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndWkgcmlnaHQgZmxvYXRlZCcgdG89Jy8nPueri+WIu+i/lOWbnuS4u+mhtTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1mb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVpIHRlYWwgaW1hZ2UgaGVhZGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgYWx0PVwiXCIgc3R5bGU9eyB7IGJvcmRlclJhZGl1czogJzRweCcgfSB9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIOabtOaWsOWvhueggVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gyPlxuICAgICAgICA8Zm9ybSByZWY9eyBlID0+IHRoaXMuZm9ybSA9IGUgfSBjbGFzc05hbWU9eyBgdWkgZm9ybSAke3RoaXMucHJvcHMuYnVzeSA/ICdsb2FkaW5nJyA6ICcnfWAgfSBvblN1Ym1pdD17IHRoaXMub25Gb3JtU3VibWl0IH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBzZWdtZW50XCI+XG4gICAgICAgICAgICA8UGFzc3dvcmRGaWVsZCBuYW1lPSdvbGRfcGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi5pen5a+G56CBXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8UGFzc3dvcmRGaWVsZCBuYW1lPSduZXdfcGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi5paw5a+G56CBXCIvPlxuICAgICAgICAgICAgPFBhc3N3b3JkRmllbGQgbmFtZT0nY29uZmlybV9uZXdfcGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi56Gu6K6k5paw5a+G56CBXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBmbHVpZCB0ZWFsIHN1Ym1pdCBidXR0b25cIiB0eXBlPVwic3VibWl0XCI+5pu05paw5a+G56CBPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBlcnJvciBtZXNzYWdlXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicG9pbnRpbmcgcmlnaHQgZ3JleSBpY29uXCI+PC9pPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndWkgcmlnaHQgZmxvYXRlZCcgdG89Jy8nPui/lOWbnuS4u+mhtTwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIudG9KU09OKCkudXNlcixcbiAgc3VibWl0SW5mbzogc3RhdGUudXNlci50b0pTT04oKS5zdWJtaXRJbmZvLFxuICBidXN5OiBzdGF0ZS5hc3luY1N0YXR1cy50b0pTT04oKS5VU0VSX1VQREFURV9QQVNTV09SRF9CVVNZLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZV9wYXNzd29yZDogKGluZm8pID0+IHtcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLnVwZGF0ZV9wYXNzd29yZChpbmZvKSk7XG4gICAgfSxcbiAgICBzZXRTdWJtaXRNb2RlOiAoKSA9PiB7XG4gICAgICB1c2VyQWN0aW9ucy5zZXRTdWJtaXRNb2RlKGRpc3BhdGNoLCAndXBkYXRlX3Bhc3N3b3JkJyk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ251cCk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1Bhc3N3b3JkLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge1xuICBMaW5rLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcm91dGUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZC1jb250ZW50XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVpIHRlYWwgaW1hZ2UgaGVhZGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDQwNCAsIOWNs+Wwhui/lOWbnuS4u+mhtVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd1aSBsZWZ0IGFsaWduZWQgaWNvbiBtZXNzYWdlJyB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmVkIGJ1ZyBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9eyB7IHRleHRBbGlnbjogJ2xlZnQnIH0gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICDlm5vnmb7pm7blm5vmmK/ku4DkuYjmhI/mgJ3vvJ9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPjQwNCA9IOaIkeS7rOS7gOS5iOS5n+ayoeacieaJvuWIsO+8gTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwb2ludGluZyByaWdodCBncmV5IGljb25cIj48L2k+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VpIHJpZ2h0IGZsb2F0ZWQnIHRvPScvJz7nq4vliLvov5Tlm57kuLvpobU8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCkgPT4gKHtcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5vdEZvdW5kKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCB7IGZyb21KUyB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNvbWJpbmVkX3JlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbi8vIG1pZGRsZXdhcmVzXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gY3JlYXRlTG9nZ2VyKCk7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuLy8gR3JhYiB0aGUgc3RhdGUgZnJvbSBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBpbnRvIHRoZSBzZXJ2ZXItZ2VuZXJhdGVkIEhUTUxcbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187XG4vLyBBbGxvdyB0aGUgcGFzc2VkIHN0YXRlIHRvIGJlIGdhcmJhZ2UtY29sbGVjdGVkXG5kZWxldGUgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvbWJpbmVkX3JlZHVjZXJzLFxuICB7XG4gICAgdXNlcjogZnJvbUpTKHtcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLnVzZXIsXG4gICAgICBzdWJtaXRJbmZvOiBmcm9tSlMoe30pLFxuICAgIH0pLFxuICB9LFxuICBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZShcbiAgICB0aHVua01pZGRsZXdhcmUsIC8vIGxldHMgdXMgZGlzcGF0Y2goKSBmdW5jdGlvbnNcbiAgICBsb2dnZXJNaWRkbGV3YXJlLCAvLyBuZWF0IG1pZGRsZXdhcmUgdGhhdCBsb2dzIGFjdGlvbnNcbiAgKSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC5qcyIsImltcG9ydCB1c2VyIGZyb20gJy4vdXNlclJlZHVjZXInO1xuaW1wb3J0IGFzeW5jU3RhdHVzIGZyb20gJy4vYXN5bmNTdGF0dXNSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgeyBhc3luY1N0YXR1cywgdXNlciB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IHVzZXJpbml0ID0gZnJvbUpTKHtcbiAgdXNlcjoge30sXG4gIHN1Ym1pdEluZm86IHt9LFxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB1c2VyaW5pdCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTklOX1NUQVJUOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgndXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTklOX0VORDoge1xuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmNvZGUgPT09IDApIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQuZGF0YSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTklOX0VSUk9SOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgndXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTlVQX1NUQVJUOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgndXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTlVQX0VORDoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQuZGF0YSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTlVQX0VSUk9SOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgndXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTk9VVF9TVEFSVDoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCdvYXV0aFVzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NJR05PVVRfRU5EOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgndXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ29hdXRoVXNlcicsIGZyb21KUyh7fSkpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGFjdGlvblR5cGVzLlVTRVJfU0lHTk9VVF9FUlJPUjoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3VzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCdvYXV0aFVzZXInLCBmcm9tSlMoe30pKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1NJR05PVVRfU1RBUlQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX09BVVRIX1NJR05PVVRfRU5EOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgnb2F1dGhVc2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9PQVVUSF9TSUdOT1VUX0VSUk9SOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldCgnb2F1dGhVc2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9VUERBVEVfUEFTU1dPUkRfU1RBUlQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1VQREFURV9QQVNTV09SRF9FTkQ6IHtcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5jb2RlID09PSAwKSB7XG4gICAgICAgIHN0YXRlID0gc3RhdGUuc2V0KCd1c2VyJywgZnJvbUpTKHt9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVVNFUl9VUERBVEVfUEFTU1dPUkRfRVJST1I6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VU0VSX1NFVF9TVUJNSVRfSU5GTzoge1xuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLm1vZGUpIHtcbiAgICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ3N1Ym1pdEluZm8nLCBmcm9tSlMoeyBtb2RlOiBhY3Rpb24ucGF5bG9hZC5tb2RlIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgc3RhdGUgPSBzdGF0ZS5zZXRJbihbJ3N1Ym1pdEluZm8nLCBrXSwgYWN0aW9uLnBheWxvYWRba10pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsImltcG9ydCB7IGZyb21KUywgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHN5bmNUeXBlcywgYXN5bmNUeXBlcyB9IGZyb20gJy4uL2FjdGlvblR5cGVzJzsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9uVHlwZXMnOyAvL2VzbGludC1kaXNhYmxlLWxpbmVcblxuY29uc3QgaW5pdE9iamVjdCA9IHt9O1xuXG5zeW5jVHlwZXMuZm9yRWFjaCgodHApID0+IHtcbiAgLy8gZm9yIGVhY2ggc3luYyBhY3Rpb24sIHRoZXJlIGlzIG5vIGJ1c3lcbiAgaW5pdE9iamVjdFtgJHt0cH1fTUVTU0FHRWBdID0gTWFwKHt9KTtcbn0pO1xuYXN5bmNUeXBlcy5mb3JFYWNoKCh0cCkgPT4ge1xuICAvLyBmb3IgZWFjaCBhc3luYyBhY3Rpb24sIHRoZXJlIGlzIGEgYnVzeSBmbGFnXG4gIGluaXRPYmplY3RbYCR7dHB9X0JVU1lgXSA9IGZhbHNlO1xuICBpbml0T2JqZWN0W2Ake3RwfV9NRVNTQUdFYF0gPSBNYXAoe30pO1xufSk7XG5cbmNvbnN0IHN0YXR1c0luaXQgPSBmcm9tSlMoe1xuICAuLi5pbml0T2JqZWN0LFxuICBIRUFERVJfTUVTU0FHRTogTWFwKHsgaWQ6IDAgfSksXG59KTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHN0YXR1c0luaXQsIGFjdGlvbikgPT4ge1xuICBjb25zdCBicmVha3MgPSBhY3Rpb24udHlwZS5zcGxpdCgnXycpO1xuXG4gIGNvbnN0IGFjdGlvbk5hbWUgPSBfLmpvaW4oXy5zbGljZShicmVha3MsIDAsIGJyZWFrcy5sZW5ndGggLSAxKSwgJ18nKTtcblxuICAvKlxuICAgIHVpX21lc3NhZ2U6e1xuICAgICAgc3RhdHVzOlxuICAgICAgaGVhZGVyOlxuICAgICAgaW5saW5lOlxuICAgIH1cbiAgKi9cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvblR5cGVzLlNFVF9QUklTVElORSkge1xuICAgIGlmIChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5hY3Rpb24pIHtcbiAgICAgIC8vIHNldCBzcGVjaWZpYyBhY3Rpb24gbWVzc2FnZSBwcmlzdGluZVxuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoYCR7YWN0aW9uLnBheWxvYWQuYWN0aW9ufV9NRVNTQUdFYCwgTWFwKHsgaWQ6IDAgfSkpO1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoYCR7YWN0aW9uLnBheWxvYWQuYWN0aW9ufV9CVVNZYCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgYWxsIGFjdGlvbnMgc3RhdGVzIHByaXN0aW5lXG4gICAgICBzdGF0ZSA9IHN0YXR1c0luaXQ7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGlvbi5wYXlsb2FkICYmIHR5cGVvZiAoYWN0aW9uLnBheWxvYWQudWlfbWVzc2FnZSkgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gaXQncyBhbiByZWd1bGFyIGFzeW5jIGFjdGlvblxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZC51aV9tZXNzYWdlLFxuICAgICAgaWQ6IHV1aWQudjQoKSxcbiAgICB9O1xuICAgIC8vIHNldCB0aGUgaW5saW5lIG1lc3NhZ2VcbiAgICBzdGF0ZSA9IHN0YXRlLnNldChgJHthY3Rpb25OYW1lfV9NRVNTQUdFYCwgTWFwKG1lc3NhZ2UpKTtcbiAgICAvLyBzZXQgdGhlIGhlYWRlciBtZXNzYWdlXG4gICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ0hFQURFUl9NRVNTQUdFJywgTWFwKG1lc3NhZ2UpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciB0aGUgaW5saW5lIG1lc3NhZ2VcbiAgICBzdGF0ZSA9IHN0YXRlLnNldChgJHthY3Rpb25OYW1lfV9NRVNTQUdFYCwgTWFwKHt9KSk7XG4gICAgLy8gY2xlYXIgdGhlIGhlYWRlciBtZXNzYWdlXG4gICAgc3RhdGUgPSBzdGF0ZS5zZXQoJ0hFQURFUl9NRVNTQUdFJywgTWFwKHsgaWQ6IDAgfSkpO1xuICB9XG5cbiAgc3dpdGNoIChfLmxhc3QoYnJlYWtzKSkge1xuICAgIGNhc2UgJ1NUQVJUJzoge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5zZXQoYCR7YWN0aW9uTmFtZX1fQlVTWWAsIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlICdFTkQnOiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLnNldChgJHthY3Rpb25OYW1lfV9CVVNZYCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjYXNlICdFUlJPUic6IHtcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KGAke2FjdGlvbk5hbWV9X0JVU1lgLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvcmVkdWNlcnMvYXN5bmNTdGF0dXNSZWR1Y2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==