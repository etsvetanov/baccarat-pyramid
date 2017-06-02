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
	
	var _app = __webpack_require__(204);
	
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
	exports.getUserOptions = undefined;
	
	var _menu = __webpack_require__(200);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _optionsReducer = __webpack_require__(202);
	
	var _optionsReducer2 = _interopRequireDefault(_optionsReducer);
	
	var _simulationReducer = __webpack_require__(203);
	
	var _simulationReducer2 = _interopRequireDefault(_simulationReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function rootReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    // this is the shape of the state object
	    return {
	        menuItems: (0, _menu2.default)(state.menuItems, action),
	        userOptions: (0, _optionsReducer2.default)(state.userOptions, action),
	        simulation: (0, _simulationReducer2.default)(state.simulation, action)
	    };
	} // import { combineReducers } from 'redux';
	exports.default = rootReducer;
	var getUserOptions = exports.getUserOptions = function getUserOptions(state) {
	    return (0, _optionsReducer.getByOption)(state.userOptions);
	};
	
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
	var REQUEST_OPTIONS = exports.REQUEST_OPTIONS = 'REQUEST_OPTIONS';
	var RECEIVE_OPTIONS = exports.RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';
	var SAVE_OPTIONS_REQUEST = exports.SAVE_OPTIONS_REQUEST = 'SAVE_OPTIONS_REQUEST';
	var SAVE_OPTIONS_SUCCESS = exports.SAVE_OPTIONS_SUCCESS = 'SAVE_OPTIONS_SUCCESS';
	var START_SIMULATION = exports.START_SIMULATION = 'START_SIMULATION';
	var SET_PROGRESS = exports.SET_PROGRESS = 'SET_PROGRESS';
	var REQUEST_SIMULATION = exports.REQUEST_SIMULATION = 'REQUEST_SIMULATION';
	var SIMULATION_FINISHED = exports.SIMULATION_FINISHED = 'SIMULATION_FINISHED';

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getByOption = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actionTypes = __webpack_require__(201);
	
	var actionTypes = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialOptions = [{
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
	        case actionTypes.SET_OPTION:
	            if (state.name !== action.payload.name) {
	                return state;
	            }
	            return Object.assign({}, state, { value: action.payload.value });
	
	        case actionTypes.TOGGLE_OPTION:
	            if (state.name !== action.payload.name) {
	                return state;
	            }
	            return Object.assign({}, state, { value: !state.value });
	        case actionTypes.RECEIVE_OPTIONS:
	            var options = action.payload.options;
	
	
	            if (options.hasOwnProperty(state.id)) {
	                return _extends({}, state, {
	                    value: options[state.id]
	                });
	            }
	
	            return state;
	
	        default:
	            return state;
	    }
	}
	
	function optionsLoading() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actionTypes.REQUEST_OPTIONS:
	            return true;
	        case actionTypes.RECEIVE_OPTIONS:
	            return false;
	        default:
	            return state;
	    }
	}
	
	function optionsList() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialOptions;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actionTypes.SET_OPTION:
	        case actionTypes.TOGGLE_OPTION:
	        case actionTypes.RECEIVE_OPTIONS:
	            return state.map(function (opt) {
	                return userOption(opt, action);
	            });
	        default:
	            return state;
	    }
	}
	
	function optionsSaved() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'saved';
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actionTypes.SAVE_OPTIONS_REQUEST:
	            return "saving";
	        case actionTypes.SAVE_OPTIONS_SUCCESS:
	            return "saved";
	        case actionTypes.SET_OPTION:
	        case actionTypes.TOGGLE_OPTION:
	            return "dirty";
	        default:
	            return state;
	    }
	}
	
	function userOptions() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    return {
	        optionsLoading: optionsLoading(state.optionsLoading, action),
	        optionsSaved: optionsSaved(state.optionsSaved, action),
	        optionsList: optionsList(state.optionsList, action)
	    };
	}
	
	exports.default = userOptions;
	var getByOption = exports.getByOption = function getByOption(state) {
	    var user_options = {};
	
	    state.optionsList.forEach(function (option) {
	        return user_options[option.id] = option.value;
	    });
	
	    return user_options;
	};

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actionTypes = __webpack_require__(201);
	
	var actionTypes = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function simulationState() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'idle';
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actionTypes.START_SIMULATION:
	            return "running";
	        case actionTypes.REQUEST_SIMULATION:
	            return "requested";
	        case actionTypes.SET_PROGRESS:
	            if (action.progress === '100') {
	                return "finished";
	            } else {
	                return state;
	            }
	        default:
	            return state;
	    }
	}
	
	function simulationProgress() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actionTypes.SET_PROGRESS:
	            return action.progress;
	        default:
	            return state;
	    }
	}
	
	function simulation() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    return {
	        simulationState: simulationState(state.simulationState, action),
	        simulationProgress: simulationProgress(state.simulationProgress, action)
	    };
	}
	
	exports.default = simulation;

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(205);
	
	var _reactRedux = __webpack_require__(260);
	
	var _base = __webpack_require__(275);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _admin = __webpack_require__(277);
	
	var _admin2 = _interopRequireDefault(_admin);
	
	var _optionsPage = __webpack_require__(278);
	
	var _optionsPage2 = _interopRequireDefault(_optionsPage);
	
	var _simulationPage = __webpack_require__(929);
	
	var _simulationPage2 = _interopRequireDefault(_simulationPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	                _react2.default.createElement(_reactRouter.Route, { path: 'options', component: _optionsPage2.default }),
	                _react2.default.createElement(_reactRouter.Route, { path: 'simulate', component: _simulationPage2.default })
	            )
	        )
	    );
	};
	
	exports.default = App;
	
	// TODO: style active <Link>s and abstract as in: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links

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
	
	var _NavBar = __webpack_require__(276);
	
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

/***/ 276:
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
	
	var _reactRouter = __webpack_require__(205);
	
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

/***/ 277:
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

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _optionsListContainer = __webpack_require__(279);
	
	var _optionsListContainer2 = _interopRequireDefault(_optionsListContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(260);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _semanticUiReact = __webpack_require__(280);
	
	var _optionsList = __webpack_require__(924);
	
	var _optionsList2 = _interopRequireDefault(_optionsList);
	
	var _spinner = __webpack_require__(927);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _index = __webpack_require__(928);
	
	var actions = _interopRequireWildcard(_index);
	
	var _index2 = __webpack_require__(199);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionsListContainer = function (_Component) {
	    _inherits(OptionsListContainer, _Component);
	
	    function OptionsListContainer() {
	        _classCallCheck(this, OptionsListContainer);
	
	        var _this = _possibleConstructorReturn(this, (OptionsListContainer.__proto__ || Object.getPrototypeOf(OptionsListContainer)).call(this));
	
	        _this.handleSaveOptions = _this.handleSaveOptions.bind(_this);
	        return _this;
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
	            var _props = this.props,
	                requestOptions = _props.requestOptions,
	                receiveOptions = _props.receiveOptions;
	
	
	            requestOptions();
	
	            fetch('/api/user_options', { credentials: 'include' }).then(function (response) {
	                return response.json();
	            }).then(function (options) {
	                receiveOptions(options);
	            });
	        }
	    }, {
	        key: 'handleSaveOptions',
	        value: function handleSaveOptions() {
	            console.log('Saving options...');
	
	            var _props2 = this.props,
	                saveOptionsRequest = _props2.saveOptionsRequest,
	                saveOptionsSuccess = _props2.saveOptionsSuccess;
	
	
	            saveOptionsRequest();
	
	            fetch('/api/user_options', {
	                method: 'POST',
	                credentials: 'include',
	                body: JSON.stringify(this.props.optionsHash)
	            }).then(function (response) {
	                if (response.ok) {
	                    saveOptionsSuccess();
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.props.isLoading) {
	                console.log('Spin right round...');
	                return _react2.default.createElement(_spinner2.default, null);
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'options-container' },
	                _react2.default.createElement(_optionsList2.default, {
	                    options: this.props.options,
	                    setOption: this.props.setOption
	                }),
	                _react2.default.createElement(_semanticUiReact.Button, {
	                    content: 'Save options',
	                    loading: this.props.optionsSaved === "saving",
	                    icon: this.props.optionsSaved === "saved" ? "checkmark" : undefined,
	                    onClick: this.handleSaveOptions,
	                    color: this.props.optionsSaved === "dirty" ? "green" : undefined
	                })
	            );
	        }
	    }]);
	
	    return OptionsListContainer;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        optionsLoading: state.userOptions.optionsLoading,
	        optionsSaved: state.userOptions.optionsSaved,
	        options: state.userOptions.optionsList,
	        optionsHash: (0, _index2.getUserOptions)(state)
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        // TODO: remove this?
	        toggleOption: function toggleOption(name) {
	            dispatch(actions.toggleOption(name));
	        },
	
	        setOption: function setOption(name, value) {
	            dispatch(actions.setOption(name, value));
	        },
	
	        requestOptions: function requestOptions() {
	            dispatch(actions.requestOptions());
	        },
	
	        receiveOptions: function receiveOptions(options) {
	            dispatch(actions.receiveOptions(options));
	        },
	
	        saveOptionsRequest: function saveOptionsRequest() {
	            dispatch(actions.saveOptionsRequest());
	        },
	
	        saveOptionsSuccess: function saveOptionsSuccess() {
	            dispatch(actions.saveOptionsSuccess());
	        }
	    };
	};
	
	OptionsListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OptionsListContainer);
	
	exports.default = OptionsListContainer;

/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switch = __webpack_require__(925);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _slider = __webpack_require__(926);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _spinner = __webpack_require__(927);
	
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

/***/ 925:
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

/***/ 926:
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

/***/ 927:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Spinner = function Spinner(props) {
	    return _react2.default.createElement(
	        "svg",
	        { className: "spinner button-icon", width: props.width, height: props.height, viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" },
	        _react2.default.createElement("circle", { className: "path", fill: "none", strokeWidth: "6", strokeLinecap: "round", cx: "33", cy: "33", r: "30" })
	    );
	};
	
	exports.default = Spinner;

/***/ },

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.simulationFinished = exports.requestSimulation = exports.setProgress = exports.startSimulation = exports.saveOptionsSuccess = exports.saveOptionsRequest = exports.receiveOptions = exports.requestOptions = exports.toggleOption = exports.setOption = exports.selectMenu = undefined;
	
	var _actionTypes = __webpack_require__(201);
	
	var actionType = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// ACTION CREATORS:
	
	
	var selectMenu = exports.selectMenu = function selectMenu(menuText) {
	    return {
	        type: actionType.SELECT_MENU,
	        payload: {
	            menuText: menuText
	        }
	    };
	};
	
	var setOption = exports.setOption = function setOption(name, value) {
	    return {
	        type: actionType.SET_OPTION,
	        payload: {
	            name: name,
	            value: value
	        }
	    };
	};
	
	var toggleOption = exports.toggleOption = function toggleOption(name) {
	    return {
	        type: actionType.TOGGLE_OPTION,
	        payload: {
	            name: name
	        }
	    };
	};
	
	var requestOptions = exports.requestOptions = function requestOptions() {
	    return {
	        type: actionType.REQUEST_OPTIONS
	    };
	};
	
	var receiveOptions = exports.receiveOptions = function receiveOptions(options) {
	    return {
	        type: actionType.RECEIVE_OPTIONS,
	        payload: {
	            options: options
	        }
	    };
	};
	
	var saveOptionsRequest = exports.saveOptionsRequest = function saveOptionsRequest() {
	    return {
	        type: actionType.SAVE_OPTIONS_REQUEST
	    };
	};
	
	var saveOptionsSuccess = exports.saveOptionsSuccess = function saveOptionsSuccess() {
	    return {
	        type: actionType.SAVE_OPTIONS_SUCCESS
	    };
	};
	
	var startSimulation = exports.startSimulation = function startSimulation() {
	    return {
	        type: actionType.START_SIMULATION
	    };
	};
	
	var setProgress = exports.setProgress = function setProgress(progress) {
	    return {
	        type: actionType.SET_PROGRESS,
	        progress: progress
	    };
	};
	
	var requestSimulation = exports.requestSimulation = function requestSimulation() {
	    return {
	        type: actionType.REQUEST_SIMULATION
	    };
	};
	
	var simulationFinished = exports.simulationFinished = function simulationFinished() {
	    return {
	        type: actionType.SIMULATION_FINISHED
	    };
	};

/***/ },

/***/ 929:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(260);
	
	var _semanticUiReact = __webpack_require__(280);
	
	var _iterationTable = __webpack_require__(930);
	
	var _iterationTable2 = _interopRequireDefault(_iterationTable);
	
	var _chart = __webpack_require__(931);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	var _index = __webpack_require__(928);
	
	var actions = _interopRequireWildcard(_index);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SimulationPage = function (_React$Component) {
	    _inherits(SimulationPage, _React$Component);
	
	    function SimulationPage() {
	        _classCallCheck(this, SimulationPage);
	
	        var _this = _possibleConstructorReturn(this, (SimulationPage.__proto__ || Object.getPrototypeOf(SimulationPage)).call(this));
	
	        _this.handleStartSimulation = _this.handleStartSimulation.bind(_this);
	        // this.pollForProgress = this.pollForProgress.bind(this);
	        return _this;
	    }
	
	    _createClass(SimulationPage, [{
	        key: 'pollForProgress',
	        value: function pollForProgress() {
	            var self = this;
	
	            var timeoutId = window.setTimeout(function () {
	                fetch('/api/simulation_status', { credentials: 'include' }).then(function (response) {
	                    return response.json();
	                }).then(function (data) {
	                    if (data.progress !== '100') {
	                        self.pollForProgress();
	                    }
	                    self.props.setProgress(data.percentage);
	                });
	            }, 1000);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (prevProps.simulationState === 'requested' && this.props.simulationState === 'running') {
	                this.pollForProgress();
	            }
	        }
	    }, {
	        key: 'handleStartSimulation',
	        value: function handleStartSimulation() {
	            var _props = this.props,
	                startSimulation = _props.startSimulation,
	                requestSimulation = _props.requestSimulation;
	
	
	            requestSimulation();
	
	            fetch('/api/start_simulation', { credentials: 'include' }).then(function (response) {
	                if (response.ok) {
	                    startSimulation();
	                }
	            });
	        }
	    }, {
	        key: 'renderBeginButton',
	        value: function renderBeginButton() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'main' },
	                _react2.default.createElement(_semanticUiReact.Button, {
	                    content: 'Begin',
	                    onClick: this.handleStartSimulation,
	                    loading: this.props.simulationState === 'requested'
	                })
	            );
	        }
	    }, {
	        key: 'renderProgressBar',
	        value: function renderProgressBar() {
	            return _react2.default.createElement(
	                _semanticUiReact.Grid,
	                { columns: 'equal' },
	                _react2.default.createElement(_semanticUiReact.Grid.Column, null),
	                _react2.default.createElement(
	                    _semanticUiReact.Grid.Column,
	                    { width: 8 },
	                    _react2.default.createElement(_semanticUiReact.Progress, { percent: this.props.simulationProgress, autoSuccess: true, progress: true })
	                ),
	                _react2.default.createElement(_semanticUiReact.Grid.Column, null)
	            );
	        }
	    }, {
	        key: 'renderResults',
	        value: function renderResults() {
	            return _react2.default.createElement(
	                _semanticUiReact.Grid,
	                { columns: 'equal' },
	                _react2.default.createElement(
	                    _semanticUiReact.Grid.Row,
	                    null,
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Column,
	                        { width: 16, className: 'main' },
	                        _react2.default.createElement(_chart2.default, null)
	                    )
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Grid.Row,
	                    null,
	                    _react2.default.createElement(_semanticUiReact.Grid.Column, null),
	                    _react2.default.createElement(
	                        _semanticUiReact.Grid.Column,
	                        { width: 8 },
	                        _react2.default.createElement(_iterationTable2.default, null)
	                    ),
	                    _react2.default.createElement(_semanticUiReact.Grid.Column, null)
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            switch (this.props.simulationState) {
	                case 'idle':
	                case 'requested':
	                    return this.renderBeginButton();
	                case 'running':
	                    return this.renderProgressBar();
	                case 'finished':
	                    return this.renderResults();
	            }
	        }
	    }]);
	
	    return SimulationPage;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        simulationState: state.simulation.simulationState,
	        simulationProgress: state.simulation.simulationProgress
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        startSimulation: function startSimulation() {
	            dispatch(actions.startSimulation());
	        },
	        setProgress: function setProgress(percentage) {
	            dispatch(actions.setProgress(percentage));
	        },
	        requestSimulation: function requestSimulation() {
	            dispatch(actions.requestSimulation());
	        },
	        simulationFinished: function simulationFinished() {
	            dispatch(actions.simulationFinished());
	        }
	    };
	};
	
	SimulationPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SimulationPage);
	
	exports.default = SimulationPage;

/***/ },

/***/ 930:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _semanticUiReact = __webpack_require__(280);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IterationTable = function IterationTable() {
	    return _react2.default.createElement(
	        _semanticUiReact.Table,
	        { celled: true, inverted: true, selectable: true },
	        _react2.default.createElement(
	            _semanticUiReact.Table.Header,
	            null,
	            _react2.default.createElement(
	                _semanticUiReact.Table.Row,
	                null,
	                _react2.default.createElement(
	                    _semanticUiReact.Table.HeaderCell,
	                    null,
	                    'Name'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.HeaderCell,
	                    null,
	                    'Status'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.HeaderCell,
	                    null,
	                    'Notes'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            _semanticUiReact.Table.Body,
	            null,
	            _react2.default.createElement(
	                _semanticUiReact.Table.Row,
	                null,
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    null,
	                    'John'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    null,
	                    'Approved'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    { textAlign: 'right' },
	                    'None'
	                )
	            ),
	            _react2.default.createElement(
	                _semanticUiReact.Table.Row,
	                null,
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    null,
	                    'Jamie'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    null,
	                    'Approved'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    { textAlign: 'right' },
	                    'Requires call'
	                )
	            ),
	            _react2.default.createElement(
	                _semanticUiReact.Table.Row,
	                null,
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    null,
	                    'Jill'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    null,
	                    'Denied'
	                ),
	                _react2.default.createElement(
	                    _semanticUiReact.Table.Cell,
	                    { textAlign: 'right' },
	                    'None'
	                )
	            )
	        )
	    );
	};
	
	exports.default = IterationTable;

/***/ },

/***/ 931:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _zingchartReact = __webpack_require__(932);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _semanticUiReact = __webpack_require__(280);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chart = function (_Component) {
	    _inherits(Chart, _Component);
	
	    function Chart() {
	        _classCallCheck(this, Chart);
	
	        return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
	    }
	
	    _createClass(Chart, [{
	        key: 'render',
	        value: function render() {
	            var series = [{
	                values: [35, 42, 67, 89, 25, 34, 67, 85]
	            }];
	
	            var config = {};
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'chart-container' },
	                _react2.default.createElement(_zingchartReact.line, { id: 'iterationsChart', height: '300', width: '600', data: config, series: series, theme: 'dark' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'iteration-input-container' },
	                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'chevron left', size: 'big' }),
	                    _react2.default.createElement(_semanticUiReact.Input, { className: 'iteration-input' }),
	                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'chevron right', size: 'big' })
	                )
	            );
	        }
	    }]);
	
	    return Chart;
	}(_react.Component);
	
	exports.default = Chart;

/***/ }

});
//# sourceMappingURL=app.js.map