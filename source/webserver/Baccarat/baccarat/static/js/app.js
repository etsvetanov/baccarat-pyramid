webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(178);
	
	var _index = __webpack_require__(199);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _app = __webpack_require__(203);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var enhancers = (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	});
	
	var store = (0, _redux.createStore)(_index2.default, {}, enhancers);
	/*
	    the "store" provides 3 methods:
	      - getState() - get the current application state
	      - dispatch() - to change the application state by dispatching an action
	      - subscribe() - to subscribe to changes
	*/
	
	_reactDom2.default.render(_react2.default.createElement(_app2.default, { store: store }), document.getElementById('root'));

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _menu = __webpack_require__(200);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _optionsReducer = __webpack_require__(202);
	
	var _optionsReducer2 = _interopRequireDefault(_optionsReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { combineReducers } from 'redux';
	function rootReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  // this is the shape of the state object
	  return {
	    menuItems: (0, _menu2.default)(state.menuItems, action),
	    userOptions: (0, _optionsReducer2.default)(state.userOptions, action)
	  };
	}
	
	exports.default = rootReducer;
	
	/*
	    * The reducer is a function that returns the new store state tree.
	    * The convention is that if the reducer receives "undefined" as the state argument, it must return
	    *   what it considers to be the initial state. This can be handled by the ES6 default argument.
	    * The state tree is a single object with properties for the different "substates".
	    * The store is registered with a single reducer.
	    * The reducer function may be split into separate functions, each managing independent parts of
	      the state
	    * These separate functions must be "combined" to the single function passed to the store.
	    * Any reducer must return the current state for any unknown action.

	    If using 'combineReducers':
	    * The helper function 'combineReducers' turns an object, whose values are different reducing functions,
	      into a single reducing function you pass to 'createStore'
	    * The resulting recuder calls every child reducer, and gather their results into a single state
	      objecy. The shape of the state object matches the keys of the passed reducers.
	    * A popular convention is to name reducers after the state slices they manage.
	    * Summary: combineReducers will return a reducer. When called by the store, this reducer will
	      return an object, representing the new state, whose keys will be the same as the names of the
	      separate reducers
	    * http://redux.js.org/docs/api/combineReducers.html
	*/

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actionTypes = __webpack_require__(201);
	
	var initialState = [{
	    text: 'Simulate',
	    active: true
	}, {
	    text: 'Options',
	    active: false
	}, {
	    text: 'Admin',
	    active: false
	}];
	
	function menuItems() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionTypes.SELECT_MENU:
	            var newState = state.map(function (item) {
	                return Object.assign({}, item, { active: item.text === action.payload.menuText });
	            });
	            return newState;
	        default:
	            return state;
	    }
	}
	
	exports.default = menuItems;

/***/ },

/***/ 201:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SELECT_MENU = exports.SELECT_MENU = 'SELECT_MENU';
	var SET_OPTION = exports.SET_OPTION = 'SET_OPTION';
	var TOGGLE_OPTION = exports.TOGGLE_OPTION = 'TOGGLE_OPTION';
	var FETCH_OPTIONS = exports.FETCH_OPTIONS = 'FETCH_OPTIONS';

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actionTypes = __webpack_require__(201);
	
	var initialState = [{
	    name: "Starting bet",
	    id: "starting_bet",
	    value: 1,
	    min: "0.1",
	    max: "100",
	    step: "0.1"
	}, {
	    name: "Step",
	    id: "step",
	    value: 1,
	    min: "1",
	    max: "5",
	    step: "1"
	}, {
	    name: "Pairs",
	    id: "pairs",
	    value: 10,
	    min: "1",
	    max: "100",
	    step: "1"
	}, {
	    name: "Bet column",
	    id: "bet_column",
	    value: true
	}, {
	    name: "Index column",
	    id: "index_column",
	    value: true
	}, {
	    name: "Level column",
	    id: "level_column",
	    value: true
	}, {
	    name: "Net column",
	    id: "net_column",
	    value: true
	}, {
	    name: "Partner column",
	    id: "partner_column",
	    value: true
	}, {
	    name: "Choice column",
	    id: "choice_column",
	    value: true
	}, {
	    name: "Result column",
	    id: "result_column",
	    value: true
	}, {
	    name: "Debt column",
	    id: "debt_column",
	    value: true
	}, {
	    name: "Real player rows",
	    id: "real_player_rows",
	    value: true
	}, {
	    name: "Virtual player rows",
	    id: "virtual_player_rows",
	    value: true
	}];
	
	function userOption() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionTypes.SET_OPTION:
	            if (state.name !== action.payload.name) {
	                return state;
	            }
	            return Object.assign({}, state, { value: action.payload.value });
	
	        case _actionTypes.TOGGLE_OPTION:
	            if (state.name !== action.payload.name) {
	                return state;
	            }
	            return Object.assign({}, state, { value: !state.value });
	
	        default:
	            return state;
	    }
	}
	
	function userOptions() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionTypes.SET_OPTION:
	            return state.map(function (opt) {
	                return userOption(opt, action);
	            });
	        case _actionTypes.TOGGLE_OPTION:
	            return state.map(function (opt) {
	                return userOption(opt, action);
	            });
	        default:
	            return state;
	    }
	}
	
	exports.default = userOptions;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(204);
	
	var _reactRedux = __webpack_require__(259);
	
	var _base = __webpack_require__(274);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _admin = __webpack_require__(276);
	
	var _admin2 = _interopRequireDefault(_admin);
	
	var _optionsPage = __webpack_require__(277);
	
	var _optionsPage2 = _interopRequireDefault(_optionsPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import SimulatePage from 'pages/simulatePage.jsx';
	
	/*
	    The 'Provider' component makes the Redux available to the connect() calls in the component
	    hierarchy below. Normally you can't use connect() without wrapping the root component in
	    <Provider> (or you'd have to pass 'store' as a prop to every connect()'ed component.
	*/
	
	var App = function App(_ref) {
	    var store = _ref.store;
	    return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.browserHistory },
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: '/', component: _base2.default },
	                _react2.default.createElement(_reactRouter.Route, { path: 'admin', component: _admin2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'options', component: _optionsPage2.default })
	            )
	        )
	    );
	};
	
	exports.default = App;
	
	// TODO: style active <Link>s and abstract as in: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavBar = __webpack_require__(275);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BasePage = function (_React$Component) {
	    _inherits(BasePage, _React$Component);
	
	    function BasePage() {
	        _classCallCheck(this, BasePage);
	
	        return _possibleConstructorReturn(this, (BasePage.__proto__ || Object.getPrototypeOf(BasePage)).apply(this, arguments));
	    }
	
	    _createClass(BasePage, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_NavBar2.default, null),
	                this.props.children
	            );
	        }
	    }]);
	
	    return BasePage;
	}(_react2.default.Component);
	
	exports.default = BasePage;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(204);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavBar = function (_Component) {
	    _inherits(NavBar, _Component);
	
	    function NavBar() {
	        _classCallCheck(this, NavBar);
	
	        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	    }
	
	    _createClass(NavBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'app-nav-bar' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'navbar-nav-buttons' },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/options' },
	                        'Options'
	                    ),
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/simulate' },
	                        'Simulate'
	                    ),
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/admin' },
	                        'Admin'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'navbar-logout' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '/logout' },
	                        'logout'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NavBar;
	}(_react.Component);
	
	exports.default = NavBar;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AdminPage = function (_React$Component) {
	    _inherits(AdminPage, _React$Component);
	
	    function AdminPage() {
	        _classCallCheck(this, AdminPage);
	
	        var _this = _possibleConstructorReturn(this, (AdminPage.__proto__ || Object.getPrototypeOf(AdminPage)).call(this));
	
	        _this.state = {
	            username: "",
	            password: ""
	        };
	
	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.handleAddUserClick = _this.handleAddUserClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(AdminPage, [{
	        key: "handleAddUserClick",
	        value: function handleAddUserClick() {
	            // const fetchHeaders = new Headers();
	            // console.log('headers:', fetchHeaders);
	
	            var formData = new FormData();
	            formData.append('username', this.state.username);
	            formData.append('password', this.state.password);
	
	            var fetchInit = {
	                method: 'POST',
	                // headers: fetchHeaders,
	                body: formData
	            };
	
	            fetch('/api/create_user', fetchInit).then(function (response) {
	                console.log('User created', response);
	            });
	
	            this.setState({
	                username: '',
	                password: ''
	            });
	        }
	    }, {
	        key: "handleChange",
	        value: function handleChange(event) {
	            var stateProperty = event.target.name;
	            this.setState(_defineProperty({}, stateProperty, event.target.value));
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "main" },
	                _react2.default.createElement(
	                    "form",
	                    null,
	                    _react2.default.createElement(
	                        "fieldset",
	                        null,
	                        _react2.default.createElement(
	                            "legend",
	                            null,
	                            " Create new user "
	                        ),
	                        _react2.default.createElement(
	                            "table",
	                            { className: "inline-form" },
	                            _react2.default.createElement(
	                                "tbody",
	                                null,
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        _react2.default.createElement(
	                                            "label",
	                                            null,
	                                            " Username "
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        _react2.default.createElement("input", { className: "fancy-input",
	                                            type: "text",
	                                            name: "username",
	                                            value: this.state.username,
	                                            onChange: this.handleChange,
	                                            autoComplete: "new-password"
	                                        })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        _react2.default.createElement(
	                                            "label",
	                                            null,
	                                            " Password "
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        _react2.default.createElement("input", { className: "fancy-input",
	                                            type: "password",
	                                            name: "password",
	                                            value: this.state.password,
	                                            onChange: this.handleChange,
	                                            autoComplete: "new-password"
	                                        })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        "  "
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        _react2.default.createElement(
	                                            "div",
	                                            { className: "button", onClick: this.handleAddUserClick },
	                                            "Create"
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return AdminPage;
	}(_react2.default.Component);
	
	exports.default = AdminPage;

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _optionsListContainer = __webpack_require__(278);
	
	var _optionsListContainer2 = _interopRequireDefault(_optionsListContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Switch from '../components/Switch.jsx';
	
	
	var OptionsPage = function (_React$Component) {
	    _inherits(OptionsPage, _React$Component);
	
	    function OptionsPage() {
	        _classCallCheck(this, OptionsPage);
	
	        return _possibleConstructorReturn(this, (OptionsPage.__proto__ || Object.getPrototypeOf(OptionsPage)).apply(this, arguments));
	    }
	
	    _createClass(OptionsPage, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'main' },
	                _react2.default.createElement(_optionsListContainer2.default, null)
	            );
	        }
	    }]);
	
	    return OptionsPage;
	}(_react2.default.Component);
	
	exports.default = OptionsPage;

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(259);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _optionsList = __webpack_require__(279);
	
	var _optionsList2 = _interopRequireDefault(_optionsList);
	
	var _spinner = __webpack_require__(284);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _index = __webpack_require__(282);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionsListContainer = function (_Component) {
	    _inherits(OptionsListContainer, _Component);
	
	    function OptionsListContainer() {
	        _classCallCheck(this, OptionsListContainer);
	
	        return _possibleConstructorReturn(this, (OptionsListContainer.__proto__ || Object.getPrototypeOf(OptionsListContainer)).apply(this, arguments));
	    }
	
	    _createClass(OptionsListContainer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData();
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData() {
	            console.log('will fetch data...');
	            var requestOptions = this.props.requestOptions;
	
	            fetch('/api/user_options', { credentials: 'include' }).then(function (response) {
	                console.log('DA RESPONSE', response);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.props.isLoading) {
	                return _react2.default.createElement(_spinner2.default, null);
	            }
	
	            return _react2.default.createElement(_optionsList2.default, {
	                options: this.props.options
	            });
	        }
	    }]);
	
	    return OptionsListContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        options: state.userOptions
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        // TODO: remove this?
	        toggleOption: function toggleOption(name) {
	            dispatch((0, _index.toggleOption)(name));
	        },
	
	        setOption: function setOption(name, value) {
	            dispatch((0, _index.setOption)(name, value));
	        },
	
	        requestOptions: function (_requestOptions) {
	            function requestOptions() {
	                return _requestOptions.apply(this, arguments);
	            }
	
	            requestOptions.toString = function () {
	                return _requestOptions.toString();
	            };
	
	            return requestOptions;
	        }(function () {
	            dispatch(requestOptions());
	        })
	    };
	};
	
	OptionsListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OptionsListContainer);
	
	exports.default = OptionsListContainer;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switch = __webpack_require__(280);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _slider = __webpack_require__(281);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _spinner = __webpack_require__(284);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionsList = function (_React$Component) {
	    _inherits(OptionsList, _React$Component);
	
	    function OptionsList(props) {
	        _classCallCheck(this, OptionsList);
	
	        var _this = _possibleConstructorReturn(this, (OptionsList.__proto__ || Object.getPrototypeOf(OptionsList)).call(this, props));
	
	        _this._handleChange = _this._handleChange.bind(_this);
	        _this._renderItem = _this._renderItem.bind(_this);
	        return _this;
	    }
	
	    _createClass(OptionsList, [{
	        key: '_getValue',
	        value: function _getValue(event) {
	            switch (event.target.type) {
	                case 'checkbox':
	                    return event.target.checked;
	                case 'range':
	                    return parseFloat(event.target.value);
	                case 'number':
	                    var number = parseFloat(event.target.value);
	                    if (number > event.target.max) {
	                        return parseFloat(event.target.max);
	                    }
	                    return parseFloat(event.target.value);
	            }
	        }
	    }, {
	        key: '_handleChange',
	        value: function _handleChange(event) {
	            // const value = event.target.value;
	            var value = this._getValue(event);
	            var name = event.target.name;
	            this.props.setOption(name, value);
	        }
	    }, {
	        key: '_renderItem',
	        value: function _renderItem(option) {
	            var optionControl = void 0;
	
	            switch (_typeof(option.value)) {
	                case 'boolean':
	                    optionControl = _react2.default.createElement(_Switch2.default, {
	                        name: option.name,
	                        checked: option.value,
	                        id: option.id,
	                        handleChange: this._handleChange
	                    });
	                    break;
	                case 'number':
	                    optionControl = _react2.default.createElement(_slider2.default, {
	                        value: option.value,
	                        name: option.name,
	                        handleChange: this._handleChange,
	                        min: option.min,
	                        max: option.max,
	                        step: option.step
	                    });
	            }
	
	            return _react2.default.createElement(
	                'li',
	                { key: option.name, className: 'option-container' },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'inline-label' },
	                    ' ',
	                    option.name,
	                    ' '
	                ),
	                optionControl
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'ul',
	                null,
	                this.props.options.map(this._renderItem)
	            );
	        }
	    }]);
	
	    return OptionsList;
	}(_react2.default.Component);
	
	OptionsList.propTypes = {
	    options: _react.PropTypes.array
	};
	
	exports.default = OptionsList;

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

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
	
	var Switch = function (_React$Component) {
	    _inherits(Switch, _React$Component);
	
	    function Switch() {
	        _classCallCheck(this, Switch);
	
	        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
	    }
	
	    _createClass(Switch, [{
	        key: "render",
	        value: function render() {
	            var inputId = "id_" + this.props.id;
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { className: "onoffswitch" },
	                    _react2.default.createElement("input", { type: "checkbox",
	                        name: this.props.name,
	                        className: "onoffswitch-checkbox",
	                        onChange: this.props.handleChange,
	                        checked: this.props.checked,
	                        id: inputId
	                    }),
	                    _react2.default.createElement(
	                        "label",
	                        { className: "onoffswitch-label", htmlFor: inputId },
	                        _react2.default.createElement(
	                            "span",
	                            { className: "onoffswitch-inner" },
	                            " "
	                        ),
	                        _react2.default.createElement(
	                            "span",
	                            { className: "onoffswitch-switch" },
	                            " "
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Switch;
	}(_react2.default.Component);
	
	Switch.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    checked: _react.PropTypes.bool.isRequired,
	    handleChange: _react.PropTypes.func
	};
	
	exports.default = Switch;
	
	//             {/*onChange={this.props.handleChange}*/}

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

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
	
	var Slider = function (_React$Component) {
	    _inherits(Slider, _React$Component);
	
	    function Slider() {
	        _classCallCheck(this, Slider);
	
	        return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
	    }
	
	    _createClass(Slider, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "slider-container" },
	                _react2.default.createElement("input", { type: "range",
	                    name: this.props.name,
	                    value: this.props.value,
	                    onChange: this.props.handleChange,
	                    className: "slider",
	                    min: this.props.min,
	                    max: this.props.max,
	                    step: this.props.step
	                }),
	                _react2.default.createElement("input", { type: "number",
	                    name: this.props.name,
	                    value: this.props.value,
	                    onChange: this.props.handleChange,
	                    className: "slider-input",
	                    min: this.props.min,
	                    max: this.props.max,
	                    step: this.props.step,
	                    pattern: "\\d{2}"
	                })
	            );
	        }
	    }]);
	
	    return Slider;
	}(_react2.default.Component);
	
	Slider.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    handleChange: _react.PropTypes.func.isRequired,
	    value: _react.PropTypes.number.isRequired,
	    min: _react.PropTypes.string,
	    max: _react.PropTypes.string,
	    step: _react.PropTypes.string
	};
	
	Slider.defaultProps = {
	    max: "100",
	    min: "1",
	    step: "1"
	};
	
	exports.default = Slider;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toggleOption = exports.setOption = exports.selectMenu = undefined;
	
	var _actionTypes = __webpack_require__(201);
	
	// ACTION CREATORS:
	
	
	var selectMenu = exports.selectMenu = function selectMenu(menuText) {
	    return {
	        type: _actionTypes.SELECT_MENU,
	        payload: {
	            menuText: menuText
	        }
	    };
	};
	
	var setOption = exports.setOption = function setOption(name, value) {
	    return {
	        type: _actionTypes.SET_OPTION,
	        payload: {
	            name: name,
	            value: value
	        }
	    };
	};
	
	var toggleOption = exports.toggleOption = function toggleOption(name) {
	    return {
	        type: _actionTypes.TOGGLE_OPTION,
	        payload: {
	            name: name
	        }
	    };
	};

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spinner = function Spinner() {
	    return _react2.default.createElement(
	        "svg",
	        { className: "spinner", width: "65px", height: "65px", viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" },
	        _react2.default.createElement("circle", { className: "path", fill: "none", strokeWidth: "6", strokeLinecap: "round", cx: "33", cy: "33", r: "30" })
	    );
	};
	
	exports.default = Spinner;

/***/ }

});
//# sourceMappingURL=app.js.map