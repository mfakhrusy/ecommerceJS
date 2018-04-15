/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/mainpage/mainpageActions.js":
/*!*************************************************!*\
  !*** ./src/actions/mainpage/mainpageActions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSidebar = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var showSidebar = exports.showSidebar = function showSidebar(bool) {
  return {
    type: _actionTypes.SHOW_SIDEBAR,
    isSidebarOpen: bool
  };
}; /* eslint-disable arrow-body-style */

/***/ }),

/***/ "./src/actions/miscActions.js":
/*!************************************!*\
  !*** ./src/actions/miscActions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFavoriteItem = exports.addFavoriteItem = exports.showModal = undefined;

var _actionTypes = __webpack_require__(/*! ../constants/actionTypes */ "./src/constants/actionTypes.js");

var showModal = exports.showModal = function showModal(bool) {
  return {
    type: _actionTypes.SHOW_MODAL,
    isModalOpen: bool
  };
};

var addFavoriteItem = exports.addFavoriteItem = function addFavoriteItem(item) {
  return {
    type: _actionTypes.ADD_FAVORITE_ITEM,
    item: item
  };
};

var deleteFavoriteItem = exports.deleteFavoriteItem = function deleteFavoriteItem(item) {
  return {
    type: _actionTypes.DELETE_FAVORITE_ITEM,
    item: item
  };
};

/***/ }),

/***/ "./src/actions/views/categoriesActions.js":
/*!************************************************!*\
  !*** ./src/actions/views/categoriesActions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFilterCategories = exports.categoriesFetchData = exports.categoriesFetchDataSuccess = exports.categoriesIsLoading = exports.categoriesHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var categoriesHasErrored = exports.categoriesHasErrored = function categoriesHasErrored(bool) {
  return {
    type: _actionTypes.CATEGORIES_HAS_ERRORED,
    categoriesHasErrored: bool
  };
}; /* eslint-disable arrow-body-style */
var categoriesIsLoading = exports.categoriesIsLoading = function categoriesIsLoading(bool) {
  return {
    type: _actionTypes.CATEGORIES_IS_LOADING,
    categoriesIsLoading: bool
  };
};

var categoriesFetchDataSuccess = exports.categoriesFetchDataSuccess = function categoriesFetchDataSuccess(categories) {
  return {
    type: _actionTypes.CATEGORIES_FETCH_DATA_SUCCESS,
    categories: categories
  };
};

var categoriesFetchData = exports.categoriesFetchData = function categoriesFetchData(url) {
  return function (dispatch) {
    dispatch(categoriesIsLoading(true));

    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(categoriesIsLoading(false));

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (categories) {
      return dispatch(categoriesFetchDataSuccess(categories));
    }).catch(function () {
      return dispatch(categoriesHasErrored(true));
    });
  };
};

var setFilterCategories = exports.setFilterCategories = function setFilterCategories(category) {
  return {
    type: _actionTypes.SET_FILTER_CATEGORIES,
    filterCategory: category
  };
};

/***/ }),

/***/ "./src/actions/views/chatsActions.js":
/*!*******************************************!*\
  !*** ./src/actions/views/chatsActions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatsFetchData = exports.chatsFetchDataSuccess = exports.chatsIsLoading = exports.chatsHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var chatsHasErrored = exports.chatsHasErrored = function chatsHasErrored(bool) {
  return {
    type: _actionTypes.CHATS_HAS_ERRORED,
    chatsHasErrored: bool
  };
}; /* eslint-disable arrow-body-style */
var chatsIsLoading = exports.chatsIsLoading = function chatsIsLoading(bool) {
  return {
    type: _actionTypes.CHATS_IS_LOADING,
    chatsIsLoading: bool
  };
};

var chatsFetchDataSuccess = exports.chatsFetchDataSuccess = function chatsFetchDataSuccess(chats) {
  return {
    type: _actionTypes.CHATS_FETCH_DATA_SUCCESS,
    chats: chats
  };
};

var chatsFetchData = exports.chatsFetchData = function chatsFetchData(url) {
  return function (dispatch) {
    dispatch(chatsIsLoading(true));

    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(chatsIsLoading(false));

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (chats) {
      return dispatch(chatsFetchDataSuccess(chats));
    }).catch(function () {
      return dispatch(chatsHasErrored(true));
    });
  };
};

/***/ }),

/***/ "./src/actions/views/filterActions.js":
/*!********************************************!*\
  !*** ./src/actions/views/filterActions.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFilterPrice = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var setFilterPrice = exports.setFilterPrice = function setFilterPrice(price) {
  return {
    type: _actionTypes.SET_FILTER_PRICE,
    filterPrice: price
  };
};

// export const setFilterSort = (sort) => {
//   return {
//     type: SET_FILTER_SORT,
//     filterSort: sort,
//   };
// };
/* eslint-disable arrow-body-style */

/***/ }),

/***/ "./src/actions/views/homeActions.js":
/*!******************************************!*\
  !*** ./src/actions/views/homeActions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCommentToChat = exports.setHomeSearch = exports.setHomeModal = exports.homeFetchData = exports.homeFetchDataSuccess = exports.homeIsLoading = exports.homeHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var homeHasErrored = exports.homeHasErrored = function homeHasErrored(bool) {
  return {
    type: _actionTypes.HOME_HAS_ERRORED,
    homeHasErrored: bool
  };
};

var homeIsLoading = exports.homeIsLoading = function homeIsLoading(bool) {
  return {
    type: _actionTypes.HOME_IS_LOADING,
    homeIsLoading: bool
  };
};

var homeFetchDataSuccess = exports.homeFetchDataSuccess = function homeFetchDataSuccess(homeItems) {
  return {
    type: _actionTypes.HOME_FETCH_DATA_SUCCESS,
    homeItems: homeItems
  };
};

var homeFetchData = exports.homeFetchData = function homeFetchData(url) {
  return function (dispatch) {
    dispatch(homeIsLoading(true));

    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(homeIsLoading(false));

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (home) {
      return dispatch(homeFetchDataSuccess(home));
    }).catch(function () {
      return dispatch(homeHasErrored(true));
    });
  };
};

var setHomeModal = exports.setHomeModal = function setHomeModal(id) {
  return {
    type: _actionTypes.SET_HOME_MODAL,
    homeModal: id
  };
};

var setHomeSearch = exports.setHomeSearch = function setHomeSearch(text) {
  return {
    type: _actionTypes.SET_HOME_SEARCH,
    homeSearchText: text
  };
};

var addCommentToChat = exports.addCommentToChat = function addCommentToChat(id, name, createdAt, avatarUrl, imageUrl, comment) {
  return {
    id: id,
    createdAt: createdAt,
    name: name,
    avatarUrl: avatarUrl,
    imageUrl: imageUrl,
    comment: comment,
    type: _actionTypes.ADD_COMMENT_TO_CHAT
  };
};

/***/ }),

/***/ "./src/actions/views/loginActions.js":
/*!*******************************************!*\
  !*** ./src/actions/views/loginActions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ownuserFetchData = exports.setLogin = exports.ownuserFetchDataSuccess = exports.ownuserIsLoading = exports.ownuserHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var ownuserHasErrored = exports.ownuserHasErrored = function ownuserHasErrored(bool) {
  return {
    type: _actionTypes.OWNUSER_HAS_ERRORED,
    ownuserHasErrored: bool
  };
}; /* eslint-disable arrow-body-style */
var ownuserIsLoading = exports.ownuserIsLoading = function ownuserIsLoading(bool) {
  return {
    type: _actionTypes.OWNUSER_IS_LOADING,
    ownuserIsLoading: bool
  };
};

var ownuserFetchDataSuccess = exports.ownuserFetchDataSuccess = function ownuserFetchDataSuccess(ownuser) {
  return {
    type: _actionTypes.OWNUSER_FETCH_DATA_SUCCESS,
    ownuser: ownuser
  };
};

var setLogin = exports.setLogin = function setLogin(bool) {
  return {
    type: _actionTypes.SET_LOGIN,
    isLogin: bool
  };
};

var ownuserFetchData = exports.ownuserFetchData = function ownuserFetchData(url) {
  return function (dispatch) {
    dispatch(ownuserIsLoading(true));

    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(ownuserIsLoading(false));
      dispatch(setLogin(true));

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (ownuser) {
      return (
        // ownuser[0] -> because ownuser only has 1 data (and will be kept like that)
        // so let's just strip out the array so the dispatched state is object
        dispatch(ownuserFetchDataSuccess(ownuser[0]))
      );
    }).catch(function () {
      return dispatch(ownuserHasErrored(true));
    });
  };
};

/***/ }),

/***/ "./src/actions/views/notificationsActions.js":
/*!***************************************************!*\
  !*** ./src/actions/views/notificationsActions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationsFetchData = exports.notificationsFetchDataSuccess = exports.notificationsIsLoading = exports.notificationsHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var notificationsHasErrored = exports.notificationsHasErrored = function notificationsHasErrored(bool) {
  return {
    type: _actionTypes.NOTIFICATIONS_HAS_ERRORED,
    notificationsHasErrored: bool
  };
}; /* eslint-disable arrow-body-style */
var notificationsIsLoading = exports.notificationsIsLoading = function notificationsIsLoading(bool) {
  return {
    type: _actionTypes.NOTIFICATIONS_IS_LOADING,
    notificationsIsLoading: bool
  };
};

var notificationsFetchDataSuccess = exports.notificationsFetchDataSuccess = function notificationsFetchDataSuccess(notifications) {
  return {
    type: _actionTypes.NOTIFICATIONS_FETCH_DATA_SUCCESS,
    notifications: notifications
  };
};

var notificationsFetchData = exports.notificationsFetchData = function notificationsFetchData(url) {
  return function (dispatch) {
    dispatch(notificationsIsLoading(true));

    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(notificationsIsLoading(false));

      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (notifications) {
      return dispatch(notificationsFetchDataSuccess(notifications));
    }).catch(function () {
      return dispatch(notificationsHasErrored(true));
    });
  };
};

/***/ }),

/***/ "./src/actions/views/profileActions.js":
/*!*********************************************!*\
  !*** ./src/actions/views/profileActions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProfileModal = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

// will inject the favoriteItem (not the id like homeModal)
// to the action -> later to the Profile container
// favoriteItem is an object containing all of the item info
var setProfileModal = exports.setProfileModal = function setProfileModal(favoriteItem) {
  return {
    type: _actionTypes.SET_PROFILE_MODAL,
    profileModal: favoriteItem
  };
};

/***/ }),

/***/ "./src/assets/js/menuItems.js":
/*!************************************!*\
  !*** ./src/assets/js/menuItems.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  id: '1',
  label: 'Browse',
  mdIcon: 'home',
  route: '/',
  dropdown: false
}, {
  id: '2',
  label: 'Sell',
  mdIcon: 'camera_alt',
  route: '/sell',
  dropdown: false
}, {
  id: '3',
  label: 'Chat',
  mdIcon: 'chat',
  route: '/chat',
  dropdown: false
}, {
  id: '4',
  label: 'Notifications',
  mdIcon: 'notifications',
  route: '/notifications',
  dropdown: false
}, {
  id: '5',
  label: 'Categories',
  mdIcon: 'grid_on',
  route: '/categories',
  dropdown: false
}, {
  id: '6',
  label: 'Filter',
  mdIcon: 'filter_list',
  route: '/filter',
  dropdown: false
}, {
  id: '7',
  label: 'Profile',
  mdIcon: 'account_box',
  route: '/profile',
  dropdown: false
}];

/***/ }),

/***/ "./src/assets/js/socialItems.js":
/*!**************************************!*\
  !*** ./src/assets/js/socialItems.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  id: 1,
  label: 'GitHub',
  faIcon: 'fab fa-github',
  url: 'https://github.com/mfakhrusy'
}, {
  id: 2,
  label: 'Twitter',
  faIcon: 'fab fa-twitter',
  url: 'https://twitter.com/v8areu'
}, {
  id: 3,
  label: 'Linkedin',
  faIcon: 'fab fa-linkedin',
  url: 'https://www.linkedin.com/in/mfakhrusy/'
}, {
  id: 4,
  label: 'Website',
  faIcon: 'fas fa-globe',
  url: 'https://mfakhrusy.github.io'
}];

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MainpageContainer = __webpack_require__(/*! ../containers/mainpage/MainpageContainer */ "./src/containers/mainpage/MainpageContainer.js");

var _MainpageContainer2 = _interopRequireDefault(_MainpageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_MainpageContainer2.default, null)
  );
};

exports.default = App;

/***/ }),

/***/ "./src/components/mainpage/FilterButton.js":
/*!*************************************************!*\
  !*** ./src/components/mainpage/FilterButton.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(/*! react-md/lib/Buttons/Button */ "./node_modules/react-md/lib/Buttons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterButton = function FilterButton(_ref) {
  var className = _ref.className,
      history = _ref.history;
  return _react2.default.createElement(
    _Button2.default,
    {
      icon: true,
      className: className,
      onClick: function onClick() {
        history.push('/filter');
      }
    },
    'filter_list'
  );
};

FilterButton.propTypes = {
  className: _propTypes2.default.string.isRequired,
  history: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(FilterButton);

/***/ }),

/***/ "./src/components/mainpage/MainNavbar.js":
/*!***********************************************!*\
  !*** ./src/components/mainpage/MainNavbar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Toolbar = __webpack_require__(/*! react-md/lib/Toolbars/Toolbar */ "./node_modules/react-md/lib/Toolbars/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _MenuButtonContainer = __webpack_require__(/*! ../../containers/mainpage/MenuButtonContainer */ "./src/containers/mainpage/MenuButtonContainer.js");

var _MenuButtonContainer2 = _interopRequireDefault(_MenuButtonContainer);

var _FilterButton = __webpack_require__(/*! ./FilterButton */ "./src/components/mainpage/FilterButton.js");

var _FilterButton2 = _interopRequireDefault(_FilterButton);

var _SearchContainer = __webpack_require__(/*! ../../containers/mainpage/SearchContainer */ "./src/containers/mainpage/SearchContainer.js");

var _SearchContainer2 = _interopRequireDefault(_SearchContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainNavbar = function MainNavbar() {
  return _react2.default.createElement(_Toolbar2.default, {
    className: 'MainNavbar'
    // inset
    , fixed: true,
    nav: _react2.default.createElement(_MenuButtonContainer2.default, { className: 'MenuButton' }),
    title: _react2.default.createElement(_SearchContainer2.default, null),
    actions: _react2.default.createElement(_FilterButton2.default, { className: 'filterButton' })
  });
};

exports.default = MainNavbar;

/***/ }),

/***/ "./src/components/mainpage/Mainpage.js":
/*!*********************************************!*\
  !*** ./src/components/mainpage/Mainpage.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _CircularProgress = __webpack_require__(/*! react-md/lib/Progress/CircularProgress */ "./node_modules/react-md/lib/Progress/CircularProgress.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _LoginContainer = __webpack_require__(/*! ../../containers/views/login/LoginContainer */ "./src/containers/views/login/LoginContainer.js");

var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

var _HomeContainer = __webpack_require__(/*! ../../containers/views/home/HomeContainer */ "./src/containers/views/home/HomeContainer.js");

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _Sell = __webpack_require__(/*! ../views/sell/Sell */ "./src/components/views/sell/Sell.js");

var _Sell2 = _interopRequireDefault(_Sell);

var _ChatsContainer = __webpack_require__(/*! ../../containers/views/chats/ChatsContainer */ "./src/containers/views/chats/ChatsContainer.js");

var _ChatsContainer2 = _interopRequireDefault(_ChatsContainer);

var _NotificationsContainer = __webpack_require__(/*! ../../containers/views/notifications/NotificationsContainer */ "./src/containers/views/notifications/NotificationsContainer.js");

var _NotificationsContainer2 = _interopRequireDefault(_NotificationsContainer);

var _CategoriesContainer = __webpack_require__(/*! ../../containers/views/categories/CategoriesContainer */ "./src/containers/views/categories/CategoriesContainer.js");

var _CategoriesContainer2 = _interopRequireDefault(_CategoriesContainer);

var _ProfileContainer = __webpack_require__(/*! ../../containers/views/profile/ProfileContainer */ "./src/containers/views/profile/ProfileContainer.js");

var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

var _Help = __webpack_require__(/*! ../views/help/Help */ "./src/components/views/help/Help.js");

var _Help2 = _interopRequireDefault(_Help);

var _Filter = __webpack_require__(/*! ../views/filter/Filter */ "./src/components/views/filter/Filter.js");

var _Filter2 = _interopRequireDefault(_Filter);

var _urls = __webpack_require__(/*! ../../constants/urls */ "./src/constants/urls.js");

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// for accessibility,
// see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
// and https://react-md.mlaursen.com/components/progress/circular
var accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'mainpage-loading-progress'
};

var Mainpage = function (_React$Component) {
  _inherits(Mainpage, _React$Component);

  function Mainpage() {
    _classCallCheck(this, Mainpage);

    return _possibleConstructorReturn(this, (Mainpage.__proto__ || Object.getPrototypeOf(Mainpage)).apply(this, arguments));
  }

  _createClass(Mainpage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchData(_urls2.default.home.url);
    }
  }, {
    key: 'render',
    value: function render() {
      // categories related state is here because we need to render
      // the categories which located on Home, which is basically our first views
      if (this.props.ownuserIsLoading || this.props.categoriesIsLoading) {
        // for accessibility
        accessibilityProps['aria-busy'] = false;
        return _react2.default.createElement(_CircularProgress2.default, { id: accessibilityProps['aria-describedby'] });
      }
      if (this.props.ownuserHasErrored || this.props.categoriesHasErrored) {
        return _react2.default.createElement(
          'h2',
          null,
          'Error'
        );
      }
      if (this.props.isLogin) {
        return _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomeContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/sell', component: _Sell2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/chat', component: _ChatsContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/notifications', component: _NotificationsContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/categories', component: _CategoriesContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: _ProfileContainer2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/help', component: _Help2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/filter', component: _Filter2.default })
        );
      }
      return _react2.default.createElement(_LoginContainer2.default, null);
    }
  }]);

  return Mainpage;
}(_react2.default.Component);

Mainpage.propTypes = {
  fetchData: _propTypes2.default.func.isRequired,
  ownuserIsLoading: _propTypes2.default.bool.isRequired,
  ownuserHasErrored: _propTypes2.default.bool.isRequired,
  isLogin: _propTypes2.default.bool.isRequired,
  categoriesIsLoading: _propTypes2.default.bool.isRequired,
  categoriesHasErrored: _propTypes2.default.bool.isRequired
};

exports.default = Mainpage;

/***/ }),

/***/ "./src/components/mainpage/MenuButton.js":
/*!***********************************************!*\
  !*** ./src/components/mainpage/MenuButton.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(/*! react-md/lib/Buttons/Button */ "./node_modules/react-md/lib/Buttons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const MenuButton = ({ className, onClick, isSidebarOpen }) => {
var MenuButton = function (_React$Component) {
  _inherits(MenuButton, _React$Component);

  function MenuButton() {
    _classCallCheck(this, MenuButton);

    var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MenuButton, [{
    key: 'handleClick',
    value: function handleClick() {
      // this.props.onClick(!this.props.isSidebarOpen);
      this.props.onClick(true);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        {
          icon: true,
          className: this.props.className,
          onClick: this.handleClick
        },
        'menu'
      );
    }
  }]);

  return MenuButton;
}(_react2.default.Component);

MenuButton.propTypes = {
  className: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
  // isSidebarOpen: PropTypes.bool.isRequired,
};

exports.default = MenuButton;

/***/ }),

/***/ "./src/components/mainpage/Search.js":
/*!*******************************************!*\
  !*** ./src/components/mainpage/Search.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(/*! react-md/lib/TextFields/TextField */ "./node_modules/react-md/lib/TextFields/TextField.js");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'handleChange',
    value: function handleChange(text) {
      this.props.setHomeSearch(text);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_TextField2.default, {
        id: 'navigation-bar-search',
        data: ['test', 'test2'],
        placeholder: 'Search',
        onChange: function onChange(text) {
          _this2.handleChange(text);
        }
        // value={this.props.homeSearchText}
      });
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  setHomeSearch: _propTypes2.default.func.isRequired
  // homeSearchText: PropTypes.string.isRequired,
};

exports.default = Search;

/***/ }),

/***/ "./src/components/sidebar/MenuItem.js":
/*!********************************************!*\
  !*** ./src/components/sidebar/MenuItem.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _FontIcons = __webpack_require__(/*! react-md/lib/FontIcons */ "./node_modules/react-md/lib/FontIcons/index.js");

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ListItem = __webpack_require__(/*! react-md/lib/Lists/ListItem */ "./node_modules/react-md/lib/Lists/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { /* ListItem, */FontIcon } from 'react-md';


var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      if (this.props.route !== '/') {
        this.props.onClickBrowse();
        // a little hack, but works for now.
        // so the sidebar will close first then the route will fire
        setTimeout(function () {
          _this2.props.history.push(_this2.props.route);
        }, 350);
      } else {
        this.props.onClickBrowse();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ListItem2.default, {
        className: 'MenuItem',
        leftIcon: _react2.default.createElement(
          _FontIcons2.default,
          null,
          this.props.mdIcon
        ),
        primaryText: _react2.default.createElement(
          'p',
          null,
          this.props.label
        ),
        onClick: this.handleClick
      });
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
  label: _propTypes2.default.string.isRequired,
  mdIcon: _propTypes2.default.string.isRequired,
  route: _propTypes2.default.string.isRequired,
  history: _propTypes2.default.object.isRequired,
  onClickBrowse: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(MenuItem);

/***/ }),

/***/ "./src/components/sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/Sidebar.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Drawers = __webpack_require__(/*! react-md/lib/Drawers */ "./node_modules/react-md/lib/Drawers/index.js");

var _Drawers2 = _interopRequireDefault(_Drawers);

var _SidebarHeaderContainer = __webpack_require__(/*! ../../containers/sidebar/SidebarHeaderContainer */ "./src/containers/sidebar/SidebarHeaderContainer.js");

var _SidebarHeaderContainer2 = _interopRequireDefault(_SidebarHeaderContainer);

var _Sidemenu = __webpack_require__(/*! ./Sidemenu */ "./src/components/sidebar/Sidemenu.js");

var _Sidemenu2 = _interopRequireDefault(_Sidemenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this));

    _this.handleVisibility = _this.handleVisibility.bind(_this);
    _this.closeSidebar = _this.closeSidebar.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'handleVisibility',
    value: function handleVisibility() {
      // this will invoke when outside sidebar is clicked
      // so the sidebar will close/unmount
      if (this.props.isSidebarOpen) {
        this.props.showSidebar(!this.props.isSidebarOpen);
      }
    }
  }, {
    key: 'closeSidebar',
    value: function closeSidebar() {
      // this will unmount the sidebar
      // when one of the side menu item is clicked.
      this.props.showSidebar(false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Drawers2.default,
        {
          className: 'Sidebar',
          id: 'page-sidebar',
          type: _Drawers2.default.DrawerTypes.TEMPORARY,
          visible: this.props.isSidebarOpen,
          onVisibilityChange: this.handleVisibility,
          position: 'left',
          header: _react2.default.createElement(_SidebarHeaderContainer2.default, {
            closeSidebar: this.closeSidebar
          })
        },
        _react2.default.createElement(_Sidemenu2.default, { onClickBrowse: this.closeSidebar })
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

Sidebar.propTypes = {
  isSidebarOpen: _propTypes2.default.bool.isRequired,
  showSidebar: _propTypes2.default.func.isRequired
};

exports.default = Sidebar;

/***/ }),

/***/ "./src/components/sidebar/SidebarHeader.js":
/*!*************************************************!*\
  !*** ./src/components/sidebar/SidebarHeader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toolbar = __webpack_require__(/*! react-md/lib/Toolbars/Toolbar */ "./node_modules/react-md/lib/Toolbars/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _UserAvatarContainer = __webpack_require__(/*! ../../containers/utils/UserAvatarContainer */ "./src/containers/utils/UserAvatarContainer.js");

var _UserAvatarContainer2 = _interopRequireDefault(_UserAvatarContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Toolbar } from 'react-md';


var SidebarHeader = function (_React$Component) {
  _inherits(SidebarHeader, _React$Component);

  function SidebarHeader() {
    _classCallCheck(this, SidebarHeader);

    var _this = _possibleConstructorReturn(this, (SidebarHeader.__proto__ || Object.getPrototypeOf(SidebarHeader)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SidebarHeader, [{
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      this.props.closeSidebar();
      // a little hack, but works for now.
      // so the sidebar will close first then the route will fire
      setTimeout(function () {
        _this2.props.history.push('/profile');
      }, 350);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Toolbar2.default, {
        id: 'sidebar-header',
        className: 'SidebarHeader',
        colored: true,
        fixed: true,
        nav: _react2.default.createElement(
          'div',
          {
            onClick: this.handleClick,
            role: 'button',
            onKeyPress: this.handleClick,
            tabIndex: '0'
          },
          _react2.default.createElement(_UserAvatarContainer2.default, null)
        ),
        title: 'Hello, ' + this.props.ownuser.name
      });
    }
  }]);

  return SidebarHeader;
}(_react2.default.Component);

SidebarHeader.propTypes = {
  ownuser: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  closeSidebar: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(SidebarHeader);

/***/ }),

/***/ "./src/components/sidebar/Sidemenu.js":
/*!********************************************!*\
  !*** ./src/components/sidebar/Sidemenu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(/*! react-md/lib/Lists/List */ "./node_modules/react-md/lib/Lists/List.js");

var _List2 = _interopRequireDefault(_List);

var _MenuItem = __webpack_require__(/*! ./MenuItem */ "./src/components/sidebar/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _menuItems = __webpack_require__(/*! ../../assets/js/menuItems */ "./src/assets/js/menuItems.js");

var _menuItems2 = _interopRequireDefault(_menuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { List } from 'react-md';


var Sidemenu = function (_React$Component) {
  _inherits(Sidemenu, _React$Component);

  function Sidemenu() {
    _classCallCheck(this, Sidemenu);

    var _this = _possibleConstructorReturn(this, (Sidemenu.__proto__ || Object.getPrototypeOf(Sidemenu)).call(this));

    _this.state = {
      menuItems: _menuItems2.default
    };
    return _this;
  }

  _createClass(Sidemenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var localMenuItems = this.state.menuItems.map(function (item) {
        return _react2.default.createElement(_MenuItem2.default, {
          key: item.id,
          label: item.label,
          mdIcon: item.mdIcon,
          route: item.route,
          onClickBrowse: _this2.props.onClickBrowse
        });
      });
      return _react2.default.createElement(
        _List2.default,
        { className: 'Sidemenu' },
        localMenuItems
      );
    }
  }]);

  return Sidemenu;
}(_react2.default.Component);

Sidemenu.propTypes = {
  onClickBrowse: _propTypes2.default.func.isRequired
};

exports.default = Sidemenu;

/***/ }),

/***/ "./src/components/utils/Modal.js":
/*!***************************************!*\
  !*** ./src/components/utils/Modal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var modalClassNames = (0, _classnames2.default)(_defineProperty({
        Modal: true
      }, this.props.className, true));

      return _react2.default.createElement(
        'div',
        { className: modalClassNames },
        this.props.children
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  className: ''
};

Modal.propTypes = {
  // arrayOf element -> when children is more than 1
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
  className: _propTypes2.default.string
};

exports.default = Modal;

/***/ }),

/***/ "./src/components/utils/UserAvatar.js":
/*!********************************************!*\
  !*** ./src/components/utils/UserAvatar.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatars = __webpack_require__(/*! react-md/lib/Avatars */ "./node_modules/react-md/lib/Avatars/index.js");

var _Avatars2 = _interopRequireDefault(_Avatars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = function UserAvatar(_ref) {
  var ownuser = _ref.ownuser,
      className = _ref.className,
      role = _ref.role;

  return _react2.default.createElement(_Avatars2.default, {
    src: ownuser.avatarUrl,
    className: className,
    role: role
  });
};
// import { Avatar } from 'react-md';
/* eslint-disable arrow-body-style */


UserAvatar.defaultProps = {
  role: 'presentation',
  className: ''
};

UserAvatar.propTypes = {
  ownuser: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  role: _propTypes2.default.string
};

exports.default = UserAvatar;

/***/ }),

/***/ "./src/components/views/BackButton.js":
/*!********************************************!*\
  !*** ./src/components/views/BackButton.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Button } from 'react-md';


var BackButton = function (_React$Component) {
  _inherits(BackButton, _React$Component);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  _createClass(BackButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Buttons2.default,
        {
          icon: true,
          className: this.props.className,
          onClick: function onClick() {
            _this2.props.history.push('/');
          }
        },
        'arrow_back'
      );
    }
  }]);

  return BackButton;
}(_react2.default.Component);

BackButton.propTypes = {
  className: _propTypes2.default.string.isRequired,
  // onClick: PropTypes.func.isRequired,
  history: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(BackButton);

/***/ }),

/***/ "./src/components/views/Footer.js":
/*!****************************************!*\
  !*** ./src/components/views/Footer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _socialItems = __webpack_require__(/*! ../../assets/js/socialItems */ "./src/assets/js/socialItems.js");

var _socialItems2 = _interopRequireDefault(_socialItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Button, Card } from 'react-md';


var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Footer' },
        _react2.default.createElement(
          _Cards2.default,
          { className: 'FooterSocial' },
          _socialItems2.default.map(function (socialItem) {
            return _react2.default.createElement(
              'div',
              {
                key: socialItem.id,
                className: 'FooterSocialItem'
              },
              _react2.default.createElement(
                'a',
                {
                  href: socialItem.url,
                  target: '_blank'
                },
                _react2.default.createElement(_Buttons2.default, {
                  icon: true,
                  iconClassName: socialItem.faIcon
                })
              )
            );
          })
        ),
        _react2.default.createElement(
          _Cards2.default,
          { className: 'FooterNotice' },
          _react2.default.createElement(
            'p',
            null,
            'mfakhrusy - 2018'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ "./src/components/views/ViewNavbar.js":
/*!********************************************!*\
  !*** ./src/components/views/ViewNavbar.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _Toolbar = __webpack_require__(/*! react-md/lib/Toolbars/Toolbar */ "./node_modules/react-md/lib/Toolbars/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Toolbar, Button } from 'react-md';
var ViewNavbar = function ViewNavbar(_ref) {
  var inset = _ref.inset,
      fixed = _ref.fixed,
      nav = _ref.nav,
      title = _ref.title,
      actions = _ref.actions;
  return _react2.default.createElement(_Toolbar2.default, {
    className: 'ViewNavbar',
    id: 'view-navbar',
    inset: inset,
    fixed: fixed,
    nav: nav,
    title: title === '' ? '' : _react2.default.createElement(
      'div',
      { className: 'ViewNavbarTitle' },
      title
    ),
    actions: actions
  });
};

ViewNavbar.defaultProps = {
  inset: false,
  fixed: false,
  nav: _react2.default.createElement(
    _Buttons2.default,
    { icon: true },
    'menu'
  ),
  title: '',
  actions: _react2.default.createElement(
    _Buttons2.default,
    { icon: true },
    'more_vert'
  )
};

ViewNavbar.propTypes = {
  inset: _propTypes2.default.bool,
  fixed: _propTypes2.default.bool,
  nav: _propTypes2.default.element,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  actions: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)])
};

exports.default = ViewNavbar;

/***/ }),

/***/ "./src/components/views/Views.js":
/*!***************************************!*\
  !*** ./src/components/views/Views.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Drawers = __webpack_require__(/*! react-md/lib/Drawers */ "./node_modules/react-md/lib/Drawers/index.js");

var _Drawers2 = _interopRequireDefault(_Drawers);

var _Papers = __webpack_require__(/*! react-md/lib/Papers */ "./node_modules/react-md/lib/Papers/index.js");

var _Papers2 = _interopRequireDefault(_Papers);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _ViewNavbar = __webpack_require__(/*! ./ViewNavbar */ "./src/components/views/ViewNavbar.js");

var _ViewNavbar2 = _interopRequireDefault(_ViewNavbar);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, react/no-unused-state */

// import { Drawer, Paper, Button } from 'react-md';


var Views = function (_React$Component) {
  _inherits(Views, _React$Component);

  function Views() {
    _classCallCheck(this, Views);

    var _this = _possibleConstructorReturn(this, (Views.__proto__ || Object.getPrototypeOf(Views)).call(this));

    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(Views, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.pathname !== undefined) {
        this.setState({ isVisible: true });
        // unmount the sidebar --> edit, no longer required, IDK WHY THOUGH.
        // this.props.onClick(!this.props.isSidebarOpen);
        // this.props.onClick(false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var paperClassNames = (0, _classnames2.default)(_defineProperty({
        'view-paper': true,
        'view-fixed': this.props.fixed,
        'view-inset': this.props.inset
      }, this.props.className, !!this.props.className));

      return _react2.default.createElement(
        _Drawers2.default,
        {
          className: 'Views',
          type: _Drawers2.default.DrawerTypes.TEMPORARY,
          defaultVisible: true,
          position: 'right'
        },
        _react2.default.createElement(_ViewNavbar2.default, {
          inset: this.props.inset,
          fixed: this.props.fixed,
          nav: this.props.nav,
          title: this.props.title,
          actions: this.props.actions
        }),
        _react2.default.createElement(
          _Papers2.default,
          { className: paperClassNames },
          this.props.children
        )
      );
    }
  }]);

  return Views;
}(_react2.default.Component);

Views.defaultProps = {
  inset: false,
  fixed: false,
  className: '',
  nav: _react2.default.createElement(
    _Buttons2.default,
    { icon: true },
    'menu'
  ),
  title: '',
  actions: _react2.default.createElement(
    _Buttons2.default,
    { icon: true },
    'more_vert'
  )
};

Views.propTypes = {
  // isSidebarOpen: PropTypes.bool.isRequired,
  // onClick: PropTypes.func.isRequired,
  children: _propTypes2.default.element.isRequired,
  pathname: _propTypes2.default.string.isRequired,
  nav: _propTypes2.default.element,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  actions: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
  className: _propTypes2.default.string,
  fixed: _propTypes2.default.bool,
  inset: _propTypes2.default.bool
};

exports.default = Views;

/***/ }),

/***/ "./src/components/views/categories/Categories.js":
/*!*******************************************************!*\
  !*** ./src/components/views/categories/Categories.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CategoryContentContainer = __webpack_require__(/*! ../../../containers/views/categories/CategoryContentContainer */ "./src/containers/views/categories/CategoryContentContainer.js");

var _CategoryContentContainer2 = _interopRequireDefault(_CategoryContentContainer);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = function (_React$Component) {
  _inherits(Categories, _React$Component);

  function Categories() {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).apply(this, arguments));
  }

  _createClass(Categories, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ViewsContainer2.default,
        {
          pathname: this.props.location.pathname,
          inset: true,
          className: 'Categories',
          nav: _react2.default.createElement(_BackButton2.default, null)
        },
        _react2.default.createElement(_CategoryContentContainer2.default, { categories: this.props.categories })
      );
    }
  }]);

  return Categories;
}(_react2.default.Component);

Categories.propTypes = {
  categories: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  location: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(Categories);

/***/ }),

/***/ "./src/components/views/categories/CategoryContent.js":
/*!************************************************************!*\
  !*** ./src/components/views/categories/CategoryContent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(/*! react-md/lib/Grids/Grid */ "./node_modules/react-md/lib/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _CategoryItem = __webpack_require__(/*! ./CategoryItem */ "./src/components/views/categories/CategoryItem.js");

var _CategoryItem2 = _interopRequireDefault(_CategoryItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryContent = function (_React$Component) {
  _inherits(CategoryContent, _React$Component);

  function CategoryContent() {
    _classCallCheck(this, CategoryContent);

    var _this = _possibleConstructorReturn(this, (CategoryContent.__proto__ || Object.getPrototypeOf(CategoryContent)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(CategoryContent, [{
    key: 'handleClick',
    value: function handleClick(category) {
      this.props.setFilterCategories(category);
      this.props.showSidebar(false);
      this.props.history.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var categories = this.props.categories;

      return _react2.default.createElement(
        _Grid2.default,
        { containers: 'categories', className: 'CategoryContent', id: 'category-content' },
        categories.map(function (category) {
          return _react2.default.createElement(_CategoryItem2.default, {
            key: category.id,
            category: category,
            onClick: function onClick() {
              _this2.handleClick(category.type);
            }
          });
        })
      );
    }
  }]);

  return CategoryContent;
}(_react2.default.Component);

CategoryContent.propTypes = {
  categories: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setFilterCategories: _propTypes2.default.func.isRequired,
  showSidebar: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(CategoryContent);

/***/ }),

/***/ "./src/components/views/categories/CategoryItem.js":
/*!*********************************************************!*\
  !*** ./src/components/views/categories/CategoryItem.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cell = __webpack_require__(/*! react-md/lib/Grids/Cell */ "./node_modules/react-md/lib/Grids/Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

var _Card = __webpack_require__(/*! react-md/lib/Cards/Card */ "./node_modules/react-md/lib/Cards/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Cell, Card, Button } from 'react-md';


var CategoryItem = function (_React$Component) {
  _inherits(CategoryItem, _React$Component);

  function CategoryItem() {
    _classCallCheck(this, CategoryItem);

    return _possibleConstructorReturn(this, (CategoryItem.__proto__ || Object.getPrototypeOf(CategoryItem)).apply(this, arguments));
  }

  _createClass(CategoryItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          category = _props.category,
          onClick = _props.onClick;

      return _react2.default.createElement(
        _Cell2.default,
        { key: category.id, className: 'CategoryItem', id: 'category-category-' + category.id },
        _react2.default.createElement(
          _Card2.default,
          {
            className: 'CategoryItemCard',
            id: 'category-category-card-' + category.id,
            onClick: onClick
          },
          _react2.default.createElement(
            'div',
            null,
            category.label
          ),
          _react2.default.createElement(
            _Buttons2.default,
            {
              icon: true
            },
            category.mdIcon
          )
        )
      );
    }
  }]);

  return CategoryItem;
}(_react2.default.Component);

CategoryItem.propTypes = {
  category: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = CategoryItem;

/***/ }),

/***/ "./src/components/views/chats/ChatContent.js":
/*!***************************************************!*\
  !*** ./src/components/views/chats/ChatContent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(/*! react-md/lib/Tabs */ "./node_modules/react-md/lib/Tabs/index.js");

var _TabAll = __webpack_require__(/*! ./TabAll */ "./src/components/views/chats/TabAll.js");

var _TabAll2 = _interopRequireDefault(_TabAll);

var _TabBlock = __webpack_require__(/*! ./TabBlock */ "./src/components/views/chats/TabBlock.js");

var _TabBlock2 = _interopRequireDefault(_TabBlock);

var _TabBuy = __webpack_require__(/*! ./TabBuy */ "./src/components/views/chats/TabBuy.js");

var _TabBuy2 = _interopRequireDefault(_TabBuy);

var _TabSell = __webpack_require__(/*! ./TabSell */ "./src/components/views/chats/TabSell.js");

var _TabSell2 = _interopRequireDefault(_TabSell);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { TabsContainer, Tabs, Tab } from 'react-md';


var ChatContent = function (_Component) {
  _inherits(ChatContent, _Component);

  function ChatContent() {
    _classCallCheck(this, ChatContent);

    return _possibleConstructorReturn(this, (ChatContent.__proto__ || Object.getPrototypeOf(ChatContent)).apply(this, arguments));
  }

  _createClass(ChatContent, [{
    key: 'render',
    value: function render() {
      // filter each type
      var chatsAll = this.props.chats.filter(function (chat) {
        return chat.type !== 'block';
      });
      // buy means user want to buy
      var chatsBuy = this.props.chats.filter(function (chat) {
        return chat.type === 'buy';
      });
      // sell means user sell chat.
      var chatsSell = this.props.chats.filter(function (chat) {
        return chat.type === 'sell';
      });
      // block means blocked user (from either buy/sell)
      var chatsBlock = this.props.chats.filter(function (chat) {
        return chat.type === 'block';
      });

      return _react2.default.createElement(
        _Tabs.TabsContainer,
        {
          themed: true
        },
        _react2.default.createElement(
          _Tabs.Tabs,
          {
            inactiveTabClassName: 'md-text--secondary',
            mobile: true,
            tabId: 'chat-tab-menu',
            className: 'ChatContentTabs',
            id: 'chat-content-tabs'
          },
          _react2.default.createElement(
            _Tabs.Tab,
            { label: 'all' },
            _react2.default.createElement(_TabAll2.default, { chats: chatsAll })
          ),
          _react2.default.createElement(
            _Tabs.Tab,
            { label: 'buy' },
            _react2.default.createElement(_TabBuy2.default, { chats: chatsBuy })
          ),
          _react2.default.createElement(
            _Tabs.Tab,
            { label: 'sell' },
            _react2.default.createElement(_TabSell2.default, { chats: chatsSell })
          ),
          _react2.default.createElement(
            _Tabs.Tab,
            { label: 'block' },
            _react2.default.createElement(_TabBlock2.default, { chats: chatsBlock })
          )
        )
      );
    }
  }]);

  return ChatContent;
}(_react.Component);

ChatContent.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = ChatContent;

/***/ }),

/***/ "./src/components/views/chats/Chats.js":
/*!*********************************************!*\
  !*** ./src/components/views/chats/Chats.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircularProgress = __webpack_require__(/*! react-md/lib/Progress/CircularProgress */ "./node_modules/react-md/lib/Progress/CircularProgress.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _urls = __webpack_require__(/*! ../../../constants/urls */ "./src/constants/urls.js");

var _urls2 = _interopRequireDefault(_urls);

var _ChatContent = __webpack_require__(/*! ./ChatContent */ "./src/components/views/chats/ChatContent.js");

var _ChatContent2 = _interopRequireDefault(_ChatContent);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { CircularProgress } from 'react-md';


var accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'chats-loading-progress'
};

var Chats = function (_React$Component) {
  _inherits(Chats, _React$Component);

  function Chats() {
    _classCallCheck(this, Chats);

    return _possibleConstructorReturn(this, (Chats.__proto__ || Object.getPrototypeOf(Chats)).apply(this, arguments));
  }

  _createClass(Chats, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // check whether the data has been downloaded
      // if it has, then we don't download it all over again
      // if it hasn't, download here.
      if (!this.props.chatsIsLoading && !(this.props.chats.length > 0)) {
        this.props.fetchData(_urls2.default.chats.url);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var content = null;

      if (this.props.chatsHasErrored) {
        content = _react2.default.createElement(
          'h1',
          null,
          'Chats Display Error!'
        );
      } else if (this.props.chatsIsLoading) {
        accessibilityProps['aria-busy'] = false;
        content = _react2.default.createElement(_CircularProgress2.default, { id: accessibilityProps['aria-describedby'] });
      } else {
        content = _react2.default.createElement(_ChatContent2.default, { chats: this.props.chats });
      }

      return _react2.default.createElement(
        _ViewsContainer2.default,
        {
          pathname: this.props.location.pathname,
          inset: true,
          className: 'Chats',
          nav: _react2.default.createElement(_BackButton2.default, null)
        },
        content
      );
    }
  }]);

  return Chats;
}(_react2.default.Component);

Chats.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  location: _propTypes2.default.object.isRequired,
  chatsHasErrored: _propTypes2.default.bool.isRequired,
  chatsIsLoading: _propTypes2.default.bool.isRequired,
  fetchData: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(Chats);

/***/ }),

/***/ "./src/components/views/chats/TabAll.js":
/*!**********************************************!*\
  !*** ./src/components/views/chats/TabAll.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabList = __webpack_require__(/*! ./TabList */ "./src/components/views/chats/TabList.js");

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabAll = function TabAll(_ref) {
  var chats = _ref.chats;
  return _react2.default.createElement(_TabList2.default, { chats: chats });
};

TabAll.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = TabAll;

/***/ }),

/***/ "./src/components/views/chats/TabBlock.js":
/*!************************************************!*\
  !*** ./src/components/views/chats/TabBlock.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabList = __webpack_require__(/*! ./TabList */ "./src/components/views/chats/TabList.js");

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBlock = function TabBlock(_ref) {
  var chats = _ref.chats;
  return _react2.default.createElement(_TabList2.default, { chats: chats });
};

TabBlock.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = TabBlock;

/***/ }),

/***/ "./src/components/views/chats/TabBuy.js":
/*!**********************************************!*\
  !*** ./src/components/views/chats/TabBuy.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabList = __webpack_require__(/*! ./TabList */ "./src/components/views/chats/TabList.js");

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBuy = function TabBuy(_ref) {
  var chats = _ref.chats;
  return _react2.default.createElement(_TabList2.default, { chats: chats });
};

TabBuy.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = TabBuy;

/***/ }),

/***/ "./src/components/views/chats/TabList.js":
/*!***********************************************!*\
  !*** ./src/components/views/chats/TabList.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(/*! react-md/lib/Grids/Grid */ "./node_modules/react-md/lib/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Avatars = __webpack_require__(/*! react-md/lib/Avatars */ "./node_modules/react-md/lib/Avatars/index.js");

var _Avatars2 = _interopRequireDefault(_Avatars);

var _Card = __webpack_require__(/*! react-md/lib/Cards/Card */ "./node_modules/react-md/lib/Cards/Card.js");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// slice(4) will omit the day
var dateFormatter = function dateFormatter(dateString) {
  return new Date(dateString).toDateString().slice(4);
};
// import { Grid, Card, Avatar } from 'react-md';


var TabList = function TabList(_ref) {
  var chats = _ref.chats;
  return _react2.default.createElement(
    _Grid2.default,
    { className: 'TabList', id: 'tab-list' },
    chats.map(function (chat) {
      var content = null;
      if (chat.type === 'buy') {
        content = 'To: ';
      } else if (chat.type === 'sell') {
        content = 'From: ';
      } else if (chat.type === 'block') {
        content = 'Blocked: ';
      }
      return _react2.default.createElement(
        _Card2.default,
        { className: 'TabListCard', key: chat.id },
        _react2.default.createElement(
          'div',
          { className: 'TabListCard-grid-image' },
          _react2.default.createElement('img', { src: chat.imageUrl, alt: chat.imageDescription })
        ),
        _react2.default.createElement(
          'div',
          { className: 'TabListCard-grid-name' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              content,
              chat.name
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'TabListCard-grid-description' },
          _react2.default.createElement(
            'p',
            null,
            chat.imageDescription
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'TabListCard-grid-date' },
          _react2.default.createElement(
            'p',
            null,
            dateFormatter(chat.createdAt)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'TabListCard-grid-avatar' },
          _react2.default.createElement(_Avatars2.default, { src: chat.avatarUrl, className: 'TabListCardAvatar' })
        )
      );
    })
  );
};

TabList.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = TabList;

/***/ }),

/***/ "./src/components/views/chats/TabSell.js":
/*!***********************************************!*\
  !*** ./src/components/views/chats/TabSell.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabList = __webpack_require__(/*! ./TabList */ "./src/components/views/chats/TabList.js");

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabSell = function TabSell(_ref) {
  var chats = _ref.chats;
  return _react2.default.createElement(_TabList2.default, { chats: chats });
};

TabSell.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = TabSell;

/***/ }),

/***/ "./src/components/views/filter/Filter.js":
/*!***********************************************!*\
  !*** ./src/components/views/filter/Filter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

var _FilterContent = __webpack_require__(/*! ./FilterContent */ "./src/components/views/filter/FilterContent.js");

var _FilterContent2 = _interopRequireDefault(_FilterContent);

var _FilterFooterContainer = __webpack_require__(/*! ../../../containers/views/filter/FilterFooterContainer */ "./src/containers/views/filter/FilterFooterContainer.js");

var _FilterFooterContainer2 = _interopRequireDefault(_FilterFooterContainer);

var _constants = __webpack_require__(/*! ../../../constants/constants */ "./src/constants/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      filter: {
        category: '',
        price: {
          maxPrice: _constants.FILTER_PRICE_MAX_PRICE,
          minPrice: _constants.FILTER_PRICE_MIN_PRICE
        }
        // sort: '',
      }
    };

    _this.setFilterCategory = _this.setFilterCategory.bind(_this);
    _this.setFilterPrice = _this.setFilterPrice.bind(_this);
    // this.setFilterSort = this.setFilterSort.bind(this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'setFilterCategory',
    value: function setFilterCategory(category) {
      this.setState({
        filter: _extends({}, this.state.filter, {
          category: category
        })
      });
    }
  }, {
    key: 'setFilterPrice',
    value: function setFilterPrice(price) {
      this.setState({
        filter: _extends({}, this.state.filter, {
          price: price
        })
      });
    }

    // setFilterSort(sort) {
    //   this.setState({
    //     filter: {
    //       ...this.state.filter,
    //       sort,
    //     },
    //   });
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ViewsContainer2.default,
        {
          pathname: this.props.location.pathname,
          inset: true,
          className: 'Filter',
          nav: _react2.default.createElement(_BackButton2.default, null)
        },
        _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_FilterContent2.default, {
            filter: this.state.filter,
            setFilterCategory: this.setFilterCategory,
            setFilterPrice: this.setFilterPrice,
            setFilterSort: this.setFilterSort
          }),
          _react2.default.createElement(_FilterFooterContainer2.default, { filter: this.state.filter })
        )
      );
    }
  }]);

  return Filter;
}(_react2.default.Component);

Filter.propTypes = {
  location: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(Filter);

/***/ }),

/***/ "./src/components/views/filter/FilterCategory.js":
/*!*******************************************************!*\
  !*** ./src/components/views/filter/FilterCategory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _DialogContainer = __webpack_require__(/*! react-md/lib/Dialogs/DialogContainer */ "./node_modules/react-md/lib/Dialogs/DialogContainer.js");

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

var _Lists = __webpack_require__(/*! react-md/lib/Lists */ "./node_modules/react-md/lib/Lists/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {
//   Button,
//   DialogContainer,
//   List,
//   ListItem,
//   Card,
//   CardTitle,
// } from 'react-md';


var FilterCategory = function (_React$Component) {
  _inherits(FilterCategory, _React$Component);

  function FilterCategory() {
    _classCallCheck(this, FilterCategory);

    var _this = _possibleConstructorReturn(this, (FilterCategory.__proto__ || Object.getPrototypeOf(FilterCategory)).call(this));

    _this.state = {
      categoryDialogVisible: false,
      category: {
        label: 'All'
      }
    };

    _this.showCategoryDialog = _this.showCategoryDialog.bind(_this);
    _this.hideCategoryDialog = _this.hideCategoryDialog.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(FilterCategory, [{
    key: 'showCategoryDialog',
    value: function showCategoryDialog() {
      this.setState({ categoryDialogVisible: true });
    }
  }, {
    key: 'hideCategoryDialog',
    value: function hideCategoryDialog() {
      this.setState({ categoryDialogVisible: false });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(category) {
      this.setState({ category: category });
      this.props.setFilterCategory(category.type);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Cards.Card,
        { className: 'FilterCategory' },
        _react2.default.createElement(_Cards.CardTitle, {
          className: 'FilterCategoryTitle',
          title: 'Select Category'
        }),
        _react2.default.createElement(
          'p',
          null,
          'Category: '
        ),
        _react2.default.createElement(
          _Buttons2.default,
          {
            flat: true,
            primary: true,
            swapTheming: true,
            onClick: this.showCategoryDialog
          },
          this.state.category.label
        ),
        _react2.default.createElement(
          _DialogContainer2.default,
          {
            id: 'filter-category-dialog',
            visible: this.state.categoryDialogVisible,
            onHide: this.hideCategoryDialog,
            title: 'Select Category'
          },
          _react2.default.createElement(
            _Lists.List,
            { onClick: this.hideCategoryDialog },
            this.props.categories.map(function (category) {
              return _react2.default.createElement(_Lists.ListItem, {
                key: category.id,
                primaryText: category.label,
                onClick: function onClick() {
                  _this2.handleClick(category);
                }
              });
            })
          )
        )
      );
    }
  }]);

  return FilterCategory;
}(_react2.default.Component);

FilterCategory.propTypes = {
  // FilterCategory: PropTypes.string.isRequired,
  categories: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setFilterCategory: _propTypes2.default.func.isRequired
};

exports.default = FilterCategory;

/***/ }),

/***/ "./src/components/views/filter/FilterContent.js":
/*!******************************************************!*\
  !*** ./src/components/views/filter/FilterContent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FilterCategoryContainer = __webpack_require__(/*! ../../../containers/views/filter/FilterCategoryContainer */ "./src/containers/views/filter/FilterCategoryContainer.js");

var _FilterCategoryContainer2 = _interopRequireDefault(_FilterCategoryContainer);

var _FilterPrice = __webpack_require__(/*! ./FilterPrice */ "./src/components/views/filter/FilterPrice.js");

var _FilterPrice2 = _interopRequireDefault(_FilterPrice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import FilterSort from 'components/views/filter/FilterSort';

var FilterContent = function (_React$Component) {
  _inherits(FilterContent, _React$Component);

  function FilterContent() {
    _classCallCheck(this, FilterContent);

    return _possibleConstructorReturn(this, (FilterContent.__proto__ || Object.getPrototypeOf(FilterContent)).apply(this, arguments));
  }

  _createClass(FilterContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'FilterContent' },
        _react2.default.createElement(_FilterCategoryContainer2.default, {
          filterCategory: this.props.filter.category,
          setFilterCategory: this.props.setFilterCategory
        }),
        _react2.default.createElement(_FilterPrice2.default, {
          filterPrice: this.props.filter.price,
          setFilterPrice: this.props.setFilterPrice
        })
      );
    }
  }]);

  return FilterContent;
}(_react2.default.Component);

FilterContent.propTypes = {
  filter: _propTypes2.default.object.isRequired,
  setFilterCategory: _propTypes2.default.func.isRequired,
  setFilterPrice: _propTypes2.default.func.isRequired
  // setFilterSort: PropTypes.func.isRequired,
};

exports.default = FilterContent;

/***/ }),

/***/ "./src/components/views/filter/FilterFooter.js":
/*!*****************************************************!*\
  !*** ./src/components/views/filter/FilterFooter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Button } from 'react-md';


var FilterFooter = function (_React$Component) {
  _inherits(FilterFooter, _React$Component);

  function FilterFooter() {
    _classCallCheck(this, FilterFooter);

    var _this = _possibleConstructorReturn(this, (FilterFooter.__proto__ || Object.getPrototypeOf(FilterFooter)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(FilterFooter, [{
    key: 'handleClick',
    value: function handleClick(category, price) {
      this.props.setFilterCategories(category);
      this.props.setFilterPrice(price);
      this.props.history.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'FilterFooter' },
        _react2.default.createElement(
          _Buttons2.default,
          {
            flat: true
          },
          'Reset'
        ),
        _react2.default.createElement(
          _Buttons2.default,
          {
            flat: true,
            primary: true,
            swapTheming: true,
            onClick: function onClick() {
              _this2.handleClick(_this2.props.filter.category, _this2.props.filter.price);
            }
          },
          'Submit'
        )
      );
    }
  }]);

  return FilterFooter;
}(_react2.default.Component);

FilterFooter.propTypes = {
  filter: _propTypes2.default.object.isRequired,
  setFilterCategories: _propTypes2.default.func.isRequired,
  setFilterPrice: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(FilterFooter);

/***/ }),

/***/ "./src/components/views/filter/FilterPrice.js":
/*!****************************************************!*\
  !*** ./src/components/views/filter/FilterPrice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {
//   Card,
//   CardTitle,
// } from 'react-md';


var FilterPrice = function (_React$Component) {
  _inherits(FilterPrice, _React$Component);

  function FilterPrice() {
    _classCallCheck(this, FilterPrice);

    var _this = _possibleConstructorReturn(this, (FilterPrice.__proto__ || Object.getPrototypeOf(FilterPrice)).call(this));

    _this.state = {
      filterMinPrice: '',
      filterMaxPrice: ''
    };

    _this.setFilterMinPrice = _this.setFilterMinPrice.bind(_this);
    _this.setFilterMaxPrice = _this.setFilterMaxPrice.bind(_this);
    return _this;
  }

  _createClass(FilterPrice, [{
    key: 'setFilterMinPrice',
    value: function setFilterMinPrice(event) {
      this.setState({ filterMinPrice: event.target.value });
      this.props.setFilterPrice(_extends({}, this.props.filterPrice, {
        minPrice: Number(event.target.value)
      }));
    }
  }, {
    key: 'setFilterMaxPrice',
    value: function setFilterMaxPrice(event) {
      this.setState({ filterMaxPrice: event.target.value });
      this.props.setFilterPrice(_extends({}, this.props.filterPrice, {
        maxPrice: Number(event.target.value)
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log(this.props.filterPrice);
      return _react2.default.createElement(
        _Cards.Card,
        { className: 'FilterPrice' },
        _react2.default.createElement(_Cards.CardTitle, {
          className: 'FilterPriceTitle',
          title: 'Select Price Range'
        }),
        _react2.default.createElement(
          'div',
          { className: 'FilterPriceContent' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              'From: '
            ),
            _react2.default.createElement('input', {
              name: 'comment-input',
              type: 'text',
              placeholder: 'From',
              onChange: function onChange(event) {
                _this2.setFilterMinPrice(event);
              },
              value: this.state.filterMinPrice
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              'Until: '
            ),
            _react2.default.createElement('input', {
              name: 'comment-input',
              type: 'text',
              placeholder: 'Until',
              onChange: function onChange(event) {
                _this2.setFilterMaxPrice(event);
              },
              value: this.state.filterMaxPrice
            })
          )
        )
      );
    }
  }]);

  return FilterPrice;
}(_react2.default.Component);

FilterPrice.propTypes = {
  setFilterPrice: _propTypes2.default.func.isRequired,
  filterPrice: _propTypes2.default.object.isRequired
};

exports.default = FilterPrice;

/***/ }),

/***/ "./src/components/views/help/Help.js":
/*!*******************************************!*\
  !*** ./src/components/views/help/Help.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help = function (_React$Component) {
  _inherits(Help, _React$Component);

  function Help() {
    _classCallCheck(this, Help);

    return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));
  }

  _createClass(Help, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ViewsContainer2.default,
        {
          pathname: this.props.location.pathname,
          fixed: true,
          className: 'Help',
          nav: _react2.default.createElement(_BackButton2.default, null)
        },
        _react2.default.createElement(
          'p',
          null,
          'Help'
        )
      );
    }
  }]);

  return Help;
}(_react2.default.Component);

Help.propTypes = {
  location: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(Help);

/***/ }),

/***/ "./src/components/views/home/CategorySelector.js":
/*!*******************************************************!*\
  !*** ./src/components/views/home/CategorySelector.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Card, Button } from 'react-md';


var CategorySelector = function (_Component) {
  _inherits(CategorySelector, _Component);

  function CategorySelector() {
    _classCallCheck(this, CategorySelector);

    var _this = _possibleConstructorReturn(this, (CategorySelector.__proto__ || Object.getPrototypeOf(CategorySelector)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(CategorySelector, [{
    key: 'handleClick',
    value: function handleClick(category) {
      this.props.setFilterCategories(category);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = this.props.categories.map(function (category) {
        return _react2.default.createElement(
          _Buttons2.default,
          {
            key: category.id,
            className: 'CategorySelectorItem',
            id: 'category-selector-item',
            icon: true,
            primary: true
            // disabled={this.props.filterCategory === category}
            , onClick: function onClick() {
              _this2.handleClick(category.type);
            }
          },
          category.mdIcon
        );
      });

      return _react2.default.createElement(
        _Cards2.default,
        { className: 'CategorySelector' },
        content
      );
    }
  }]);

  return CategorySelector;
}(_react.Component);

CategorySelector.propTypes = {
  categories: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setFilterCategories: _propTypes2.default.func.isRequired
  // filterCategory: PropTypes.string.isRequired,
};

exports.default = CategorySelector;

/***/ }),

/***/ "./src/components/views/home/Home.js":
/*!*******************************************!*\
  !*** ./src/components/views/home/Home.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Papers = __webpack_require__(/*! react-md/lib/Papers */ "./node_modules/react-md/lib/Papers/index.js");

var _Papers2 = _interopRequireDefault(_Papers);

var _CircularProgress = __webpack_require__(/*! react-md/lib/Progress/CircularProgress */ "./node_modules/react-md/lib/Progress/CircularProgress.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _Drawers = __webpack_require__(/*! react-md/lib/Drawers */ "./node_modules/react-md/lib/Drawers/index.js");

var _Drawers2 = _interopRequireDefault(_Drawers);

var _MainNavbar = __webpack_require__(/*! ../../mainpage/MainNavbar */ "./src/components/mainpage/MainNavbar.js");

var _MainNavbar2 = _interopRequireDefault(_MainNavbar);

var _SidebarContainer = __webpack_require__(/*! ../../../containers/sidebar/SidebarContainer */ "./src/containers/sidebar/SidebarContainer.js");

var _SidebarContainer2 = _interopRequireDefault(_SidebarContainer);

var _CategorySelectorContainer = __webpack_require__(/*! ../../../containers/views/home/CategorySelectorContainer */ "./src/containers/views/home/CategorySelectorContainer.js");

var _CategorySelectorContainer2 = _interopRequireDefault(_CategorySelectorContainer);

var _HomeContentContainer = __webpack_require__(/*! ../../../containers/views/home/HomeContentContainer */ "./src/containers/views/home/HomeContentContainer.js");

var _HomeContentContainer2 = _interopRequireDefault(_HomeContentContainer);

var _HomeModalContainer = __webpack_require__(/*! ../../../containers/views/home/HomeModalContainer */ "./src/containers/views/home/HomeModalContainer.js");

var _HomeModalContainer2 = _interopRequireDefault(_HomeModalContainer);

var _Footer = __webpack_require__(/*! ../Footer */ "./src/components/views/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _urls = __webpack_require__(/*! ../../../constants/urls */ "./src/constants/urls.js");

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable max-len, no-unused-vars */

// import { Drawer, CircularProgress, Paper } from 'react-md';


var accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'home-loading-progress'
};

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',

    // download chats on home
    value: function componentDidMount() {
      this.props.chatsfetchData(_urls2.default.chats.url);
    }
  }, {
    key: 'render',
    value: function render() {
      var content = null;

      if (this.props.homeHasErrored) {
        content = _react2.default.createElement(
          'h1',
          null,
          'Home Display Error!'
        );
      } else if (this.props.homeIsLoading && this.props.homeItems.length === 0) {
        accessibilityProps['aria-busy'] = false;
        content = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_MainNavbar2.default, null),
          _react2.default.createElement(_CategorySelectorContainer2.default, null),
          _react2.default.createElement(_CircularProgress2.default, { id: accessibilityProps['aria-describedby'] })
        );
      } else if (this.props.homeItems.length > 0) {
        // below a little hack because the index is start from one
        // but array need to start from zero
        // so we have that this.props.homeModal - 1 for correctly displaying the modal
        // for each item
        content = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_MainNavbar2.default, null),
          _react2.default.createElement(_CategorySelectorContainer2.default, null),
          _react2.default.createElement(_HomeContentContainer2.default, { homeItems: this.props.homeItems }),
          this.props.isModalOpen ? _react2.default.createElement(_HomeModalContainer2.default, { homeItem: this.props.homeItems[this.props.homeModal - 1] }) : ''
        );
      }

      return _react2.default.createElement(
        _Papers2.default,
        { className: 'Home' },
        content,
        _react2.default.createElement(_SidebarContainer2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.propTypes = {
  homeItems: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  homeHasErrored: _propTypes2.default.bool.isRequired,
  homeIsLoading: _propTypes2.default.bool.isRequired,
  homeModal: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  isModalOpen: _propTypes2.default.bool.isRequired,
  chatsfetchData: _propTypes2.default.func.isRequired
};

exports.default = Home;

/***/ }),

/***/ "./src/components/views/home/HomeContent.js":
/*!**************************************************!*\
  !*** ./src/components/views/home/HomeContent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMasonryComponent = __webpack_require__(/*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js");

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Footer = __webpack_require__(/*! ../Footer */ "./src/components/views/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Card } from 'react-md';


var HomeContent = function (_React$Component) {
  _inherits(HomeContent, _React$Component);

  function HomeContent() {
    _classCallCheck(this, HomeContent);

    var _this = _possibleConstructorReturn(this, (HomeContent.__proto__ || Object.getPrototypeOf(HomeContent)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(HomeContent, [{
    key: 'handleClick',
    value: function handleClick(id) {
      this.props.showModal(true);
      this.props.setHomeModal(id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          homeSearchText = _props.homeSearchText,
          homeItems = _props.homeItems,
          filterCategory = _props.filterCategory,
          filterPrice = _props.filterPrice;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'HomeContent' },
          _react2.default.createElement(
            _reactMasonryComponent2.default,
            { className: 'HomeContentMasonry' },
            homeItems
            // first filter: category selector
            .filter(function (homeItem) {
              // filterCategory will be an empty string if on initial render
              // or when user press all filter (first item on filter)
              if (filterCategory !== '') {
                return homeItem.type === filterCategory;
              }
              return true;
            })
            // second filter, price filter
            .filter(function (homeItem) {
              return (
                // have two value, minPrice and maxPrice
                homeItem.price >= filterPrice.minPrice && homeItem.price <= filterPrice.maxPrice
              );
            })
            // third filter: search bar
            .filter(function (homeItem) {
              if (homeSearchText !== '') {
                // toLowerCase to make sure that when user type lower case string
                // everything can still be searched accordingly
                // a.k.a make it case insensitive
                // we only search from 2 source: name and type.
                if (homeItem.name.toLowerCase().includes(homeSearchText.toLowerCase())) {
                  return true;
                } else if (homeItem.type.toLowerCase().includes(homeSearchText.toLowerCase())) {
                  return true;
                }
                return false;
              }
              return true;
            }).map(function (homeItem) {
              return _react2.default.createElement(
                _Cards.Card,
                {
                  key: homeItem.id,
                  className: 'HomeContentItem',
                  onClick: function onClick() {
                    return _this2.handleClick(homeItem.id);
                  },
                  onKeyPress: function onKeyPress() {
                    return _this2.handleClick(homeItem.id);
                  },
                  role: 'button',
                  tabIndex: '0'
                },
                _react2.default.createElement('img', { src: homeItem.imageUrl[0], alt: 'home-content-' + homeItem.id })
              );
            })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return HomeContent;
}(_react2.default.Component);

HomeContent.propTypes = {
  homeItems: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setHomeModal: _propTypes2.default.func.isRequired,
  showModal: _propTypes2.default.func.isRequired,
  filterCategory: _propTypes2.default.string.isRequired,
  filterPrice: _propTypes2.default.object.isRequired,
  homeSearchText: _propTypes2.default.string.isRequired
};

exports.default = HomeContent;

/***/ }),

/***/ "./src/components/views/home/HomeModal.js":
/*!************************************************!*\
  !*** ./src/components/views/home/HomeModal.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HomeModalContent = __webpack_require__(/*! ./HomeModalContent */ "./src/components/views/home/HomeModalContent.js");

var _HomeModalContent2 = _interopRequireDefault(_HomeModalContent);

var _HomeModalImage = __webpack_require__(/*! ./HomeModalImage */ "./src/components/views/home/HomeModalImage.js");

var _HomeModalImage2 = _interopRequireDefault(_HomeModalImage);

var _Modal = __webpack_require__(/*! ../../utils/Modal */ "./src/components/utils/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeModal = function (_React$Component) {
  _inherits(HomeModal, _React$Component);

  function HomeModal() {
    _classCallCheck(this, HomeModal);

    var _this = _possibleConstructorReturn(this, (HomeModal.__proto__ || Object.getPrototypeOf(HomeModal)).call(this));

    _this.state = {
      descriptionIsOpen: false,
      shareIsOpen: false
    };
    _this.showDescription = _this.showDescription.bind(_this);
    _this.showShare = _this.showShare.bind(_this);
    return _this;
  }

  _createClass(HomeModal, [{
    key: 'showDescription',
    value: function showDescription(bool) {
      this.setState({ descriptionIsOpen: bool });
    }
  }, {
    key: 'showShare',
    value: function showShare(bool) {
      this.setState({ shareIsOpen: bool });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        { className: 'HomeModal' },
        _react2.default.createElement(_HomeModalImage2.default, {
          homeItem: this.props.homeItem,
          descriptionIsOpen: this.state.descriptionIsOpen,
          shareIsOpen: this.state.shareIsOpen
        }),
        _react2.default.createElement(_HomeModalContent2.default, {
          homeItem: this.props.homeItem,
          showDescription: this.showDescription,
          showShare: this.showShare,
          descriptionIsOpen: this.state.descriptionIsOpen,
          shareIsOpen: this.state.shareIsOpen
        })
      );
    }
  }]);

  return HomeModal;
}(_react2.default.Component);

HomeModal.propTypes = {
  homeItem: _propTypes2.default.object.isRequired
};

exports.default = HomeModal;

/***/ }),

/***/ "./src/components/views/home/HomeModalContent.js":
/*!*******************************************************!*\
  !*** ./src/components/views/home/HomeModalContent.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HomeModalContentDescription = __webpack_require__(/*! ./HomeModalContentDescription */ "./src/components/views/home/HomeModalContentDescription.js");

var _HomeModalContentDescription2 = _interopRequireDefault(_HomeModalContentDescription);

var _HomeModalContentMain = __webpack_require__(/*! ./HomeModalContentMain */ "./src/components/views/home/HomeModalContentMain.js");

var _HomeModalContentMain2 = _interopRequireDefault(_HomeModalContentMain);

var _HomeModalShare = __webpack_require__(/*! ./HomeModalShare */ "./src/components/views/home/HomeModalShare.js");

var _HomeModalShare2 = _interopRequireDefault(_HomeModalShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeModalContent = function (_React$Component) {
  _inherits(HomeModalContent, _React$Component);

  function HomeModalContent() {
    _classCallCheck(this, HomeModalContent);

    return _possibleConstructorReturn(this, (HomeModalContent.__proto__ || Object.getPrototypeOf(HomeModalContent)).apply(this, arguments));
  }

  _createClass(HomeModalContent, [{
    key: 'render',
    value: function render() {
      var content = null;
      if (this.props.descriptionIsOpen) {
        content = _react2.default.createElement(_HomeModalContentDescription2.default, {
          homeItem: this.props.homeItem,
          showDescription: this.props.showDescription,
          showShare: this.props.showShare,
          descriptionIsOpen: this.props.descriptionIsOpen,
          shareIsOpen: this.props.shareIsOpen
        });
      } else if (this.props.shareIsOpen) {
        content = _react2.default.createElement(_HomeModalShare2.default, {
          homeItem: this.props.homeItem,
          showDescription: this.props.showDescription,
          showShare: this.props.showShare,
          descriptionIsOpen: this.props.descriptionIsOpen,
          shareIsOpen: this.props.shareIsOpen
        });
      } else {
        content = _react2.default.createElement(_HomeModalContentMain2.default, {
          homeItem: this.props.homeItem,
          showDescription: this.props.showDescription,
          showShare: this.props.showShare
        });
      }
      return content;
    }
  }]);

  return HomeModalContent;
}(_react2.default.Component);

HomeModalContent.propTypes = {
  homeItem: _propTypes2.default.object.isRequired,
  showDescription: _propTypes2.default.func.isRequired,
  showShare: _propTypes2.default.func.isRequired,
  descriptionIsOpen: _propTypes2.default.bool.isRequired,
  shareIsOpen: _propTypes2.default.bool.isRequired
};

exports.default = HomeModalContent;

/***/ }),

/***/ "./src/components/views/home/HomeModalContentDescription.js":
/*!******************************************************************!*\
  !*** ./src/components/views/home/HomeModalContentDescription.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalCloseButtonContainer = __webpack_require__(/*! ../../../containers/views/home/ModalCloseButtonContainer */ "./src/containers/views/home/ModalCloseButtonContainer.js");

var _ModalCloseButtonContainer2 = _interopRequireDefault(_ModalCloseButtonContainer);

var _ModalBackButton = __webpack_require__(/*! ./ModalBackButton */ "./src/components/views/home/ModalBackButton.js");

var _ModalBackButton2 = _interopRequireDefault(_ModalBackButton);

var _apiKey = __webpack_require__(/*! ../../../constants/apiKey */ "./src/constants/apiKey.js");

var _apiKey2 = _interopRequireDefault(_apiKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeModalContentDescription = function (_React$Component) {
  _inherits(HomeModalContentDescription, _React$Component);

  function HomeModalContentDescription() {
    _classCallCheck(this, HomeModalContentDescription);

    return _possibleConstructorReturn(this, (HomeModalContentDescription.__proto__ || Object.getPrototypeOf(HomeModalContentDescription)).apply(this, arguments));
  }

  _createClass(HomeModalContentDescription, [{
    key: 'render',
    value: function render() {
      // todo change the API call into more responsive and friendly
      // perhaps use redux action + async call for that
      return _react2.default.createElement(
        'div',
        { className: 'HomeModalContent HomeModalContentDescription' },
        _react2.default.createElement(_ModalCloseButtonContainer2.default, null),
        _react2.default.createElement(_ModalBackButton2.default, {
          showDescription: this.props.showDescription,
          showShare: this.props.showShare,
          descriptionIsOpen: this.props.descriptionIsOpen,
          shareIsOpen: this.props.shareIsOpen
        }),
        _react2.default.createElement(
          'div',
          { className: 'ModalLocation' },
          _react2.default.createElement('iframe', {
            title: 'Map',
            src: '//www.google.com/maps/embed/v1/place?q=' + this.props.homeItem.location + '&zoom=15&key=' + _apiKey2.default.googleMapApi.key
          }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              this.props.homeItem.location
            )
          )
        )
      );
    }
  }]);

  return HomeModalContentDescription;
}(_react2.default.Component);

HomeModalContentDescription.propTypes = {
  homeItem: _propTypes2.default.object.isRequired,
  showDescription: _propTypes2.default.func.isRequired,
  showShare: _propTypes2.default.func.isRequired,
  descriptionIsOpen: _propTypes2.default.bool.isRequired,
  shareIsOpen: _propTypes2.default.bool.isRequired
};

exports.default = HomeModalContentDescription;

/***/ }),

/***/ "./src/components/views/home/HomeModalContentMain.js":
/*!***********************************************************!*\
  !*** ./src/components/views/home/HomeModalContentMain.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatars = __webpack_require__(/*! react-md/lib/Avatars */ "./node_modules/react-md/lib/Avatars/index.js");

var _Avatars2 = _interopRequireDefault(_Avatars);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _ModalCloseButtonContainer = __webpack_require__(/*! ../../../containers/views/home/ModalCloseButtonContainer */ "./src/containers/views/home/ModalCloseButtonContainer.js");

var _ModalCloseButtonContainer2 = _interopRequireDefault(_ModalCloseButtonContainer);

var _ModalLoveButtonContainer = __webpack_require__(/*! ../../../containers/views/home/ModalLoveButtonContainer */ "./src/containers/views/home/ModalLoveButtonContainer.js");

var _ModalLoveButtonContainer2 = _interopRequireDefault(_ModalLoveButtonContainer);

var _ModalInfoPrice = __webpack_require__(/*! ./ModalInfoPrice */ "./src/components/views/home/ModalInfoPrice.js");

var _ModalInfoPrice2 = _interopRequireDefault(_ModalInfoPrice);

var _ModalCommentInputContainer = __webpack_require__(/*! ../../../containers/views/home/ModalCommentInputContainer */ "./src/containers/views/home/ModalCommentInputContainer.js");

var _ModalCommentInputContainer2 = _interopRequireDefault(_ModalCommentInputContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Button, Avatar } from 'react-md';


var HomeModalContentMain = function (_React$Component) {
  _inherits(HomeModalContentMain, _React$Component);

  function HomeModalContentMain() {
    _classCallCheck(this, HomeModalContentMain);

    return _possibleConstructorReturn(this, (HomeModalContentMain.__proto__ || Object.getPrototypeOf(HomeModalContentMain)).apply(this, arguments));
  }

  _createClass(HomeModalContentMain, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // todo change the API call into more responsive and friendly
      // perhaps use redux action + async call for that
      return _react2.default.createElement(
        'div',
        { className: 'HomeModalContent HomeModalContentMain' },
        _react2.default.createElement(_ModalCloseButtonContainer2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'ModalDescriptionButton' },
          _react2.default.createElement(
            _Buttons2.default,
            {
              flat: true,
              iconChildren: 'chat_bubble_outline',
              onClick: function onClick() {
                _this2.props.showDescription(true);
              }
            },
            'More Info'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ModalShareButton' },
          _react2.default.createElement(
            _Buttons2.default,
            {
              icon: true,
              onClick: function onClick() {
                _this2.props.showShare(true);
              }
            },
            'share'
          )
        ),
        _react2.default.createElement(_ModalLoveButtonContainer2.default, { homeItem: this.props.homeItem }),
        _react2.default.createElement(
          'div',
          { className: 'ModalInfoAvatar' },
          _react2.default.createElement(_Avatars2.default, { src: this.props.homeItem.avatarUrl })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ModalInfoName' },
          _react2.default.createElement(
            'p',
            null,
            this.props.homeItem.name
          )
        ),
        _react2.default.createElement(_ModalInfoPrice2.default, { price: this.props.homeItem.price }),
        _react2.default.createElement(_ModalCommentInputContainer2.default, { homeItem: this.props.homeItem })
      );
    }
  }]);

  return HomeModalContentMain;
}(_react2.default.Component);

HomeModalContentMain.propTypes = {
  homeItem: _propTypes2.default.object.isRequired,
  showDescription: _propTypes2.default.func.isRequired,
  showShare: _propTypes2.default.func.isRequired
};

exports.default = HomeModalContentMain;

/***/ }),

/***/ "./src/components/views/home/HomeModalImage.js":
/*!*****************************************************!*\
  !*** ./src/components/views/home/HomeModalImage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeModalImage = function (_React$Component) {
  _inherits(HomeModalImage, _React$Component);

  function HomeModalImage() {
    _classCallCheck(this, HomeModalImage);

    return _possibleConstructorReturn(this, (HomeModalImage.__proto__ || Object.getPrototypeOf(HomeModalImage)).apply(this, arguments));
  }

  _createClass(HomeModalImage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var content = null;
      if (this.props.descriptionIsOpen || this.props.shareIsOpen) {
        content = '';
      } else if (Object.keys(this.props.homeItem).length === 0) {
        // check if this.props.homeItem is empty or not
        content = '';
      } else {
        content = this.props.homeItem.imageUrl.map(function (url, index) {
          return _react2.default.createElement(
            'div',
            {
              id: 'image-' + _this2.props.homeItem.type + '-' + index,
              className: 'HomeModalImageItem',
              key: index.toString()
            },
            _react2.default.createElement('img', { src: url, alt: 'home-modal-' + index })
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'HomeModalImage' },
        content
      );
    }
  }]);

  return HomeModalImage;
}(_react2.default.Component);

HomeModalImage.propTypes = {
  homeItem: _propTypes2.default.object.isRequired,
  descriptionIsOpen: _propTypes2.default.bool.isRequired,
  shareIsOpen: _propTypes2.default.bool.isRequired
};

exports.default = HomeModalImage;

/***/ }),

/***/ "./src/components/views/home/HomeModalShare.js":
/*!*****************************************************!*\
  !*** ./src/components/views/home/HomeModalShare.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalBackButton = __webpack_require__(/*! ./ModalBackButton */ "./src/components/views/home/ModalBackButton.js");

var _ModalBackButton2 = _interopRequireDefault(_ModalBackButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeModalShare = function (_Component) {
  _inherits(HomeModalShare, _Component);

  function HomeModalShare() {
    _classCallCheck(this, HomeModalShare);

    return _possibleConstructorReturn(this, (HomeModalShare.__proto__ || Object.getPrototypeOf(HomeModalShare)).apply(this, arguments));
  }

  _createClass(HomeModalShare, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'HomeModalContent HomeModalShare' },
        _react2.default.createElement(_ModalBackButton2.default, {
          showDescription: this.props.showDescription,
          showShare: this.props.showShare,
          descriptionIsOpen: this.props.descriptionIsOpen,
          shareIsOpen: this.props.shareIsOpen
        }),
        _react2.default.createElement(
          'div',
          { className: 'SocialMediaShareDialog' },
          _react2.default.createElement(
            'div',
            {
              className: 'fb-share-button',
              'data-href': 'https://mfakhrusy.github.io',
              'data-layout': 'button_count',
              'data-size': 'large',
              'data-mobile-iframe': 'true'
            },
            _react2.default.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmfakhrusy.github.io%2F&src=sdkpreparse',
                className: 'fb-xfbml-parse-ignore'
              },
              'Share'
            )
          )
        )
      );
    }
  }]);

  return HomeModalShare;
}(_react.Component);

HomeModalShare.propTypes = {
  showDescription: _propTypes2.default.func.isRequired,
  showShare: _propTypes2.default.func.isRequired,
  descriptionIsOpen: _propTypes2.default.bool.isRequired,
  shareIsOpen: _propTypes2.default.bool.isRequired
};

exports.default = HomeModalShare;

/***/ }),

/***/ "./src/components/views/home/ModalBackButton.js":
/*!******************************************************!*\
  !*** ./src/components/views/home/ModalBackButton.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Button } from 'react-md';


var ModalBackButton = function (_Component) {
  _inherits(ModalBackButton, _Component);

  function ModalBackButton() {
    _classCallCheck(this, ModalBackButton);

    var _this = _possibleConstructorReturn(this, (ModalBackButton.__proto__ || Object.getPrototypeOf(ModalBackButton)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ModalBackButton, [{
    key: 'handleClick',
    value: function handleClick(bool) {
      if (this.props.descriptionIsOpen) {
        this.props.showDescription(bool);
      } else if (this.props.shareIsOpen) {
        this.props.showShare(bool);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ModalBackButton' },
        _react2.default.createElement(
          _Buttons2.default,
          {
            icon: true,
            onClick: function onClick() {
              _this2.handleClick(false);
            }
          },
          'arrow_back'
        )
      );
    }
  }]);

  return ModalBackButton;
}(_react.Component);

ModalBackButton.propTypes = {
  showDescription: _propTypes2.default.func.isRequired,
  showShare: _propTypes2.default.func.isRequired,
  descriptionIsOpen: _propTypes2.default.bool.isRequired,
  shareIsOpen: _propTypes2.default.bool.isRequired
};

exports.default = ModalBackButton;

/***/ }),

/***/ "./src/components/views/home/ModalCloseButton.js":
/*!*******************************************************!*\
  !*** ./src/components/views/home/ModalCloseButton.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalCloseButton = function ModalCloseButton(_ref) {
  var _onClick = _ref.onClick,
      isModalOpen = _ref.isModalOpen;
  return _react2.default.createElement(
    'div',
    { className: 'ModalCloseButton' },
    _react2.default.createElement(
      _Buttons2.default,
      {
        icon: true,
        onClick: function onClick() {
          _onClick(!isModalOpen);
        }
      },
      'close'
    )
  );
};
// import { Button } from 'react-md';


ModalCloseButton.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  isModalOpen: _propTypes2.default.bool.isRequired
};

exports.default = ModalCloseButton;

/***/ }),

/***/ "./src/components/views/home/ModalCommentInput.js":
/*!********************************************************!*\
  !*** ./src/components/views/home/ModalCommentInput.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Button } from 'react-md';


var ModalCommentInput = function (_Component) {
  _inherits(ModalCommentInput, _Component);

  function ModalCommentInput() {
    _classCallCheck(this, ModalCommentInput);

    var _this = _possibleConstructorReturn(this, (ModalCommentInput.__proto__ || Object.getPrototypeOf(ModalCommentInput)).call(this));

    _this.updateComment = _this.updateComment.bind(_this);
    _this.state = {
      comment: ''
    };
    return _this;
  }

  _createClass(ModalCommentInput, [{
    key: 'handleClick',
    value: function handleClick(id, createdAt, name, avatarUrl, imageUrl, comment) {
      // TODO add a condition when the data still hasn't been downloaded
      // but user has already submitted comment
      this.props.addCommentToChat(id, name, createdAt, avatarUrl, imageUrl, comment);
    }
  }, {
    key: 'updateComment',
    value: function updateComment(event) {
      this.setState({ comment: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          homeItem = _props.homeItem,
          chats = _props.chats;
      // get last id of chats

      var lastId = null;
      // to make sure it's downloaded properly first
      // TODO change this to a more smart solution
      if (chats.length > 0) {
        lastId = Number(chats[chats.length - 1].id) + 1;
      }

      return _react2.default.createElement(
        'div',
        { className: 'ModalCommentInput' },
        _react2.default.createElement('input', {
          name: 'comment-input',
          type: 'text',
          placeholder: 'Ask them something!',
          onChange: function onChange(event) {
            _this2.updateComment(event);
          },
          value: this.state.comment
        }),
        _react2.default.createElement(
          _Buttons2.default,
          {
            icon: true,
            onClick: function onClick() {
              _this2.handleClick(lastId, homeItem.username, homeItem.createdAt, homeItem.avatarUrl, homeItem.imageUrl, _this2.state.comment);
            }
          },
          'insert_comment'
        )
      );
    }
  }]);

  return ModalCommentInput;
}(_react.Component);

ModalCommentInput.propTypes = {
  chats: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  homeItem: _propTypes2.default.object.isRequired,
  addCommentToChat: _propTypes2.default.func.isRequired
};

exports.default = ModalCommentInput;

/***/ }),

/***/ "./src/components/views/home/ModalInfoPrice.js":
/*!*****************************************************!*\
  !*** ./src/components/views/home/ModalInfoPrice.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberToIDRString = function numberToIDRString(num) {
  // check how many thousand it has
  // const thousands = Math.floor((String(num).length) / 3);
  var numArr = String(num).split('');
  var digit = numArr.length;
  var thousands = Math.floor(digit / 3);
  for (var i = 0; i < thousands; i += 1) {
    numArr.splice(digit - 3 * (i + 1), 0, '.');
  }
  var answer = 'Rp ' + numArr.join('') + ',-';
  return answer;
};

var ModalInfoPrice = function ModalInfoPrice(_ref) {
  var price = _ref.price;
  return _react2.default.createElement(
    'div',
    { className: 'ModalInfoPrice' },
    price === 0 ? 'FREE' : numberToIDRString(price)
  );
};

ModalInfoPrice.propTypes = {
  price: _propTypes2.default.number.isRequired
};

exports.default = ModalInfoPrice;

/***/ }),

/***/ "./src/components/views/home/ModalLoveButton.js":
/*!******************************************************!*\
  !*** ./src/components/views/home/ModalLoveButton.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable arrow-body-style */

// import { Button } from 'react-md';


// const ModalLoveButton = ({ homeItem, addFavoriteItem }) => {
var ModalLoveButton = function (_React$Component) {
  _inherits(ModalLoveButton, _React$Component);

  function ModalLoveButton(props) {
    _classCallCheck(this, ModalLoveButton);

    var _this = _possibleConstructorReturn(this, (ModalLoveButton.__proto__ || Object.getPrototypeOf(ModalLoveButton)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    // check if the homeItem is already in favoriteItems. If it is, then
    // the primary props on button (change its color to theme color) should be true
    _this.state = {
      isLoved: _this.props.favoriteItems.includes(_this.props.homeItem)
    };
    return _this;
  }

  _createClass(ModalLoveButton, [{
    key: 'handleClick',
    value: function handleClick(homeItem) {
      this.setState({ isLoved: !this.state.isLoved });
      // check whether the favorite items is already included in favoriteItems array or not
      if (!this.props.favoriteItems.includes(homeItem)) {
        this.props.addFavoriteItem(homeItem);
      } else {
        this.props.deleteFavoriteItem(homeItem);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ModalLoveButton' },
        _react2.default.createElement(
          _Buttons2.default,
          {
            icon: true,
            secondary: this.state.isLoved,
            onClick: function onClick() {
              _this2.handleClick(_this2.props.homeItem);
            }
          },
          'favorite'
        )
      );
    }
  }]);

  return ModalLoveButton;
}(_react2.default.Component);

ModalLoveButton.propTypes = {
  addFavoriteItem: _propTypes2.default.func.isRequired,
  deleteFavoriteItem: _propTypes2.default.func.isRequired,
  homeItem: _propTypes2.default.object.isRequired,
  favoriteItems: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = ModalLoveButton;

/***/ }),

/***/ "./src/components/views/login/Login.js":
/*!*********************************************!*\
  !*** ./src/components/views/login/Login.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Buttons = __webpack_require__(/*! react-md/lib/Buttons */ "./node_modules/react-md/lib/Buttons/index.js");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

var _urls = __webpack_require__(/*! ../../../constants/urls */ "./src/constants/urls.js");

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Card, Button } from 'react-md';


var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.fetchData(_urls2.default.ownUser.url);
      this.props.categoriesfetchData(_urls2.default.categories.url);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Cards2.default,
        { className: 'Login', id: 'login' },
        _react2.default.createElement(
          'h2',
          null,
          'Just Mock Login'
        ),
        _react2.default.createElement(
          _Buttons2.default,
          {
            flat: true,
            primary: true,
            swapTheming: true,
            onClick: this.handleClick
          },
          'Login'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

Login.propTypes = {
  fetchData: _propTypes2.default.func.isRequired,
  categoriesfetchData: _propTypes2.default.func.isRequired
};

exports.default = Login;

/***/ }),

/***/ "./src/components/views/notifications/NotificationContent.js":
/*!*******************************************************************!*\
  !*** ./src/components/views/notifications/NotificationContent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(/*! react-md/lib/Grids/Grid */ "./node_modules/react-md/lib/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _NotificationItem = __webpack_require__(/*! ./NotificationItem */ "./src/components/views/notifications/NotificationItem.js");

var _NotificationItem2 = _interopRequireDefault(_NotificationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Grid } from 'react-md';
var NotificationContent = function NotificationContent(_ref) {
  var notifications = _ref.notifications;
  return _react2.default.createElement(
    _Grid2.default,
    { containers: 'notifications', className: 'NotificationContent', id: 'notification-content' },
    notifications.map(function (item) {
      return _react2.default.createElement(_NotificationItem2.default, { item: item, key: item.id });
    })
  );
};

NotificationContent.propTypes = {
  notifications: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = NotificationContent;

/***/ }),

/***/ "./src/components/views/notifications/NotificationItem.js":
/*!****************************************************************!*\
  !*** ./src/components/views/notifications/NotificationItem.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

var _Cell = __webpack_require__(/*! react-md/lib/Grids/Cell */ "./node_modules/react-md/lib/Grids/Cell.js");

var _Cell2 = _interopRequireDefault(_Cell);

var _NotificationItemCardHeader = __webpack_require__(/*! ./NotificationItemCardHeader */ "./src/components/views/notifications/NotificationItemCardHeader.js");

var _NotificationItemCardHeader2 = _interopRequireDefault(_NotificationItemCardHeader);

var _NotificationItemCardContent = __webpack_require__(/*! ./NotificationItemCardContent */ "./src/components/views/notifications/NotificationItemCardContent.js");

var _NotificationItemCardContent2 = _interopRequireDefault(_NotificationItemCardContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Card, Cell } from 'react-md';
/* eslint-disable arrow-body-style */
var NotificationItem = function NotificationItem(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    _Cell2.default,
    { key: item.id, className: 'NotificationItem', id: 'notification-item-' + item.id },
    _react2.default.createElement(
      _Cards2.default,
      { className: 'NotificationItemCard', id: 'notification-item-card-' + item.id },
      _react2.default.createElement(_NotificationItemCardHeader2.default, { item: item }),
      _react2.default.createElement(_NotificationItemCardContent2.default, { message: item.message }),
      item.tags.map(function (tag) {
        return _react2.default.createElement(
          'span',
          null,
          tag
        );
      })
    )
  );
};

NotificationItem.propTypes = {
  item: _propTypes2.default.object.isRequired
};

exports.default = NotificationItem;

/***/ }),

/***/ "./src/components/views/notifications/NotificationItemCardContent.js":
/*!***************************************************************************!*\
  !*** ./src/components/views/notifications/NotificationItemCardContent.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationItemCardContent = function NotificationItemCardContent(_ref) {
  var message = _ref.message;
  return _react2.default.createElement(
    _Cards2.default,
    { className: 'NotificationItemCardContent' },
    _react2.default.createElement(
      'p',
      null,
      message
    )
  );
};
// import { Card } from 'react-md';


NotificationItemCardContent.propTypes = {
  message: _propTypes2.default.string.isRequired
};

exports.default = NotificationItemCardContent;

/***/ }),

/***/ "./src/components/views/notifications/NotificationItemCardHeader.js":
/*!**************************************************************************!*\
  !*** ./src/components/views/notifications/NotificationItemCardHeader.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationItemCardHeader = function NotificationItemCardHeader(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    _Cards2.default,
    { className: 'NotificationItemCardHeader' },
    _react2.default.createElement(
      'p',
      null,
      new Date(item.createdAt).toDateString()
    ),
    _react2.default.createElement(
      'h4',
      null,
      item.title
    )
  );
};
// import { Card } from 'react-md';
/* eslint-disable arrow-body-style */


NotificationItemCardHeader.propTypes = {
  item: _propTypes2.default.object.isRequired
};

exports.default = NotificationItemCardHeader;

/***/ }),

/***/ "./src/components/views/notifications/Notifications.js":
/*!*************************************************************!*\
  !*** ./src/components/views/notifications/Notifications.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CircularProgress = __webpack_require__(/*! react-md/lib/Progress/CircularProgress */ "./node_modules/react-md/lib/Progress/CircularProgress.js");

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _urls = __webpack_require__(/*! ../../../constants/urls */ "./src/constants/urls.js");

var _urls2 = _interopRequireDefault(_urls);

var _NotificationContent = __webpack_require__(/*! ./NotificationContent */ "./src/components/views/notifications/NotificationContent.js");

var _NotificationContent2 = _interopRequireDefault(_NotificationContent);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { CircularProgress } from 'react-md';


var accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'notifications-loading-progress'
};

var Notifications = function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications() {
    _classCallCheck(this, Notifications);

    return _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).apply(this, arguments));
  }

  _createClass(Notifications, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchData(_urls2.default.notifications.url);
    }
  }, {
    key: 'render',
    value: function render() {
      var content = null;

      if (this.props.notificationsHasErrored) {
        content = _react2.default.createElement(
          'h1',
          null,
          'Notifications Display Error!'
        );
      } else if (this.props.notificationsIsLoading) {
        accessibilityProps['aria-busy'] = false;
        content = _react2.default.createElement(_CircularProgress2.default, { id: accessibilityProps['aria-describedby'] });
      } else {
        content = _react2.default.createElement(_NotificationContent2.default, { notifications: this.props.notifications });
      }

      return _react2.default.createElement(
        _ViewsContainer2.default,
        {
          pathname: this.props.location.pathname,
          inset: true,
          className: 'Notifications',
          nav: _react2.default.createElement(_BackButton2.default, null)
        },
        content
      );
    }
  }]);

  return Notifications;
}(_react2.default.Component);

Notifications.propTypes = {
  fetchData: _propTypes2.default.func.isRequired,
  notifications: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  location: _propTypes2.default.object.isRequired,
  notificationsHasErrored: _propTypes2.default.bool.isRequired,
  notificationsIsLoading: _propTypes2.default.bool.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(Notifications);

/***/ }),

/***/ "./src/components/views/profile/Profile.js":
/*!*************************************************!*\
  !*** ./src/components/views/profile/Profile.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProfileContent = __webpack_require__(/*! ./ProfileContent */ "./src/components/views/profile/ProfileContent.js");

var _ProfileContent2 = _interopRequireDefault(_ProfileContent);

var _ProfileNavbarTitle = __webpack_require__(/*! ./ProfileNavbarTitle */ "./src/components/views/profile/ProfileNavbarTitle.js");

var _ProfileNavbarTitle2 = _interopRequireDefault(_ProfileNavbarTitle);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

var _ProfileModal = __webpack_require__(/*! ./ProfileModal */ "./src/components/views/profile/ProfileModal.js");

var _ProfileModal2 = _interopRequireDefault(_ProfileModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _ViewsContainer2.default,
          {
            fixed: true,
            pathname: this.props.location.pathname,
            className: 'Profile',
            nav: _react2.default.createElement(_BackButton2.default, null),
            title: _react2.default.createElement(_ProfileNavbarTitle2.default, { ownuser: this.props.ownuser })
          },
          _react2.default.createElement(_ProfileContent2.default, null)
        ),
        this.props.isModalOpen ? _react2.default.createElement(_ProfileModal2.default, { favoriteItem: this.props.profileModal }) : ''
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

Profile.propTypes = {
  location: _propTypes2.default.object.isRequired,
  ownuser: _propTypes2.default.object.isRequired,
  profileModal: _propTypes2.default.object.isRequired,
  isModalOpen: _propTypes2.default.bool.isRequired
  // favoriteItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  // homeModal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

exports.default = (0, _reactRouterDom.withRouter)(Profile);

/***/ }),

/***/ "./src/components/views/profile/ProfileContent.js":
/*!********************************************************!*\
  !*** ./src/components/views/profile/ProfileContent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ProfileHeader = __webpack_require__(/*! ./ProfileHeader */ "./src/components/views/profile/ProfileHeader.js");

var _ProfileHeader2 = _interopRequireDefault(_ProfileHeader);

var _ProfileTabMenu = __webpack_require__(/*! ./ProfileTabMenu */ "./src/components/views/profile/ProfileTabMenu.js");

var _ProfileTabMenu2 = _interopRequireDefault(_ProfileTabMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileContent = function ProfileContent() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_ProfileHeader2.default, null),
    _react2.default.createElement(_ProfileTabMenu2.default, null)
  );
};

exports.default = ProfileContent;

/***/ }),

/***/ "./src/components/views/profile/ProfileHeader.js":
/*!*******************************************************!*\
  !*** ./src/components/views/profile/ProfileHeader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

var _ProfileHeaderAvatar = __webpack_require__(/*! ./ProfileHeaderAvatar */ "./src/components/views/profile/ProfileHeaderAvatar.js");

var _ProfileHeaderAvatar2 = _interopRequireDefault(_ProfileHeaderAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Card } from 'react-md';


var ProfileHeader = function (_React$Component) {
  _inherits(ProfileHeader, _React$Component);

  function ProfileHeader() {
    _classCallCheck(this, ProfileHeader);

    return _possibleConstructorReturn(this, (ProfileHeader.__proto__ || Object.getPrototypeOf(ProfileHeader)).apply(this, arguments));
  }

  _createClass(ProfileHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Cards2.default,
        { className: 'ProfileHeader', id: 'profile-header' },
        _react2.default.createElement(_ProfileHeaderAvatar2.default, null)
      );
    }
  }]);

  return ProfileHeader;
}(_react2.default.Component);

exports.default = ProfileHeader;

/***/ }),

/***/ "./src/components/views/profile/ProfileHeaderAvatar.js":
/*!*************************************************************!*\
  !*** ./src/components/views/profile/ProfileHeaderAvatar.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _UserAvatarContainer = __webpack_require__(/*! ../../../containers/utils/UserAvatarContainer */ "./src/containers/utils/UserAvatarContainer.js");

var _UserAvatarContainer2 = _interopRequireDefault(_UserAvatarContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileHeaderAvatar = function ProfileHeaderAvatar() {
  return _react2.default.createElement(_UserAvatarContainer2.default, { className: 'ProfileHeaderAvatar' });
};

exports.default = ProfileHeaderAvatar;

/***/ }),

/***/ "./src/components/views/profile/ProfileModal.js":
/*!******************************************************!*\
  !*** ./src/components/views/profile/ProfileModal.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HomeModalContent = __webpack_require__(/*! ../home/HomeModalContent */ "./src/components/views/home/HomeModalContent.js");

var _HomeModalContent2 = _interopRequireDefault(_HomeModalContent);

var _HomeModalImage = __webpack_require__(/*! ../home/HomeModalImage */ "./src/components/views/home/HomeModalImage.js");

var _HomeModalImage2 = _interopRequireDefault(_HomeModalImage);

var _Modal = __webpack_require__(/*! ../../utils/Modal */ "./src/components/utils/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileModal = function (_React$Component) {
  _inherits(ProfileModal, _React$Component);

  function ProfileModal() {
    _classCallCheck(this, ProfileModal);

    var _this = _possibleConstructorReturn(this, (ProfileModal.__proto__ || Object.getPrototypeOf(ProfileModal)).call(this));

    _this.state = {
      descriptionIsOpen: false
    };
    _this.showDescription = _this.showDescription.bind(_this);
    return _this;
  }

  _createClass(ProfileModal, [{
    key: 'showDescription',
    value: function showDescription(bool) {
      this.setState({ descriptionIsOpen: bool });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Modal2.default,
        { className: 'ProfileModal' },
        _react2.default.createElement(_HomeModalImage2.default, {
          homeItem: this.props.favoriteItem,
          descriptionIsOpen: this.state.descriptionIsOpen
        }),
        _react2.default.createElement(_HomeModalContent2.default, {
          showDescription: this.showDescription,
          homeItem: this.props.favoriteItem,
          descriptionIsOpen: this.state.descriptionIsOpen
        })
      );
    }
  }]);

  return ProfileModal;
}(_react2.default.Component);

ProfileModal.propTypes = {
  favoriteItem: _propTypes2.default.object.isRequired
};

exports.default = ProfileModal;

/***/ }),

/***/ "./src/components/views/profile/ProfileNavbarTitle.js":
/*!************************************************************!*\
  !*** ./src/components/views/profile/ProfileNavbarTitle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileNavbarTitle = function ProfileNavbarTitle(_ref) {
  var ownuser = _ref.ownuser;
  return _react2.default.createElement(
    'h2',
    null,
    ownuser.name + ', ' + ownuser.location
  );
};

ProfileNavbarTitle.propTypes = {
  ownuser: _propTypes2.default.object.isRequired
};

exports.default = ProfileNavbarTitle;

/***/ }),

/***/ "./src/components/views/profile/ProfileTabMenu.js":
/*!********************************************************!*\
  !*** ./src/components/views/profile/ProfileTabMenu.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(/*! react-md/lib/Tabs */ "./node_modules/react-md/lib/Tabs/index.js");

var _TabFavoriteContainer = __webpack_require__(/*! ../../../containers/views/profile/TabFavoriteContainer */ "./src/containers/views/profile/TabFavoriteContainer.js");

var _TabFavoriteContainer2 = _interopRequireDefault(_TabFavoriteContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { TabsContainer, Tabs, Tab } from 'react-md';


var tabMenuItems = ['SELLING', 'SOLD', 'FAVORITES'];

var ProfileTabMenu = function (_Component) {
  _inherits(ProfileTabMenu, _Component);

  function ProfileTabMenu() {
    _classCallCheck(this, ProfileTabMenu);

    return _possibleConstructorReturn(this, (ProfileTabMenu.__proto__ || Object.getPrototypeOf(ProfileTabMenu)).apply(this, arguments));
  }

  _createClass(ProfileTabMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Tabs.TabsContainer,
        {
          themed: true
        },
        _react2.default.createElement(
          _Tabs.Tabs,
          {
            inactiveTabClassName: 'md-text--secondary',
            mobile: true,
            tabId: 'profile-tab-menu'
          },
          _react2.default.createElement(
            _Tabs.Tab,
            { label: tabMenuItems[0] },
            _react2.default.createElement(
              'h2',
              null,
              tabMenuItems[0]
            )
          ),
          _react2.default.createElement(
            _Tabs.Tab,
            { label: tabMenuItems[1] },
            _react2.default.createElement(
              'h2',
              null,
              tabMenuItems[1]
            )
          ),
          _react2.default.createElement(
            _Tabs.Tab,
            { label: tabMenuItems[2] },
            _react2.default.createElement(_TabFavoriteContainer2.default, null)
          )
        )
      );
    }
  }]);

  return ProfileTabMenu;
}(_react.Component);

exports.default = ProfileTabMenu;

/***/ }),

/***/ "./src/components/views/profile/TabFavorite.js":
/*!*****************************************************!*\
  !*** ./src/components/views/profile/TabFavorite.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Cards = __webpack_require__(/*! react-md/lib/Cards */ "./node_modules/react-md/lib/Cards/index.js");

var _Cards2 = _interopRequireDefault(_Cards);

var _reactMasonryComponent = __webpack_require__(/*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js");

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Card } from 'react-md';


var TabFavorite = function (_React$Component) {
  _inherits(TabFavorite, _React$Component);

  function TabFavorite() {
    _classCallCheck(this, TabFavorite);

    var _this = _possibleConstructorReturn(this, (TabFavorite.__proto__ || Object.getPrototypeOf(TabFavorite)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(TabFavorite, [{
    key: 'handleClick',
    value: function handleClick(favoriteItem) {
      this.props.setProfileModal(favoriteItem);
      this.props.showModal(true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactMasonryComponent2.default,
        { className: 'TabFavorite' },
        this.props.favoriteItems.map(function (favoriteItem) {
          return _react2.default.createElement(
            _react2.default.Fragment,
            { key: favoriteItem.id },
            _react2.default.createElement(
              _Cards2.default,
              {
                className: 'TabFavoriteItem',
                onClick: function onClick() {
                  return _this2.handleClick(favoriteItem);
                },
                onKeyPress: function onKeyPress() {
                  return _this2.handleClick(favoriteItem);
                },
                role: 'button',
                tabIndex: '0'
              },
              _react2.default.createElement('img', { src: favoriteItem.imageUrl, alt: 'favorite-' + favoriteItem.id })
            )
          );
        })
      );
    }
  }]);

  return TabFavorite;
}(_react2.default.Component);

TabFavorite.propTypes = {
  favoriteItems: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setProfileModal: _propTypes2.default.func.isRequired,
  showModal: _propTypes2.default.func.isRequired
};

exports.default = TabFavorite;

/***/ }),

/***/ "./src/components/views/sell/Sell.js":
/*!*******************************************!*\
  !*** ./src/components/views/sell/Sell.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewsContainer = __webpack_require__(/*! ../../../containers/views/ViewsContainer */ "./src/containers/views/ViewsContainer.js");

var _ViewsContainer2 = _interopRequireDefault(_ViewsContainer);

var _BackButton = __webpack_require__(/*! ../BackButton */ "./src/components/views/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sell = function (_React$Component) {
  _inherits(Sell, _React$Component);

  function Sell() {
    _classCallCheck(this, Sell);

    return _possibleConstructorReturn(this, (Sell.__proto__ || Object.getPrototypeOf(Sell)).apply(this, arguments));
  }

  _createClass(Sell, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ViewsContainer2.default,
        {
          pathname: this.props.location.pathname,
          fixed: true,
          className: 'Sell',
          nav: _react2.default.createElement(_BackButton2.default, null)
        },
        _react2.default.createElement(
          'p',
          null,
          'Sell'
        )
      );
    }
  }]);

  return Sell;
}(_react2.default.Component);

Sell.propTypes = {
  location: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(Sell);

/***/ }),

/***/ "./src/constants/actionTypes.js":
/*!**************************************!*\
  !*** ./src/constants/actionTypes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SHOW_SIDEBAR = exports.SHOW_SIDEBAR = 'SHOW_SIDEBAR';
var SET_USERNAME = exports.SET_USERNAME = 'SET_USERNAME';
var SET_LOGIN = exports.SET_LOGIN = 'SET_LOGIN';

var CATEGORIES_FETCH_DATA_SUCCESS = exports.CATEGORIES_FETCH_DATA_SUCCESS = 'CATEGORIES_FETCH_DATA_SUCCESS';
var CATEGORIES_HAS_ERRORED = exports.CATEGORIES_HAS_ERRORED = 'CATEGORIES_HAS_ERRORED';
var CATEGORIES_IS_LOADING = exports.CATEGORIES_IS_LOADING = 'CATEGORIES_IS_LOADING';
var SET_FILTER_CATEGORIES = exports.SET_FILTER_CATEGORIES = 'SET_FILTER_CATEGORIES';

var OWNUSER_FETCH_DATA_SUCCESS = exports.OWNUSER_FETCH_DATA_SUCCESS = 'OWNUSER_FETCH_DATA_SUCCESS';
var OWNUSER_HAS_ERRORED = exports.OWNUSER_HAS_ERRORED = 'OWNUSER_HAS_ERRORED';
var OWNUSER_IS_LOADING = exports.OWNUSER_IS_LOADING = 'OWNUSER_IS_LOADING';

var NOTIFICATIONS_FETCH_DATA_SUCCESS = exports.NOTIFICATIONS_FETCH_DATA_SUCCESS = 'NOTIFICATIONS_FETCH_DATA_SUCCESS';
var NOTIFICATIONS_HAS_ERRORED = exports.NOTIFICATIONS_HAS_ERRORED = 'NOTIFICATIONS_HAS_ERRORED';
var NOTIFICATIONS_IS_LOADING = exports.NOTIFICATIONS_IS_LOADING = 'NOTIFICATIONS_IS_LOADING';

var CHATS_FETCH_DATA_SUCCESS = exports.CHATS_FETCH_DATA_SUCCESS = 'CHATS_FETCH_DATA_SUCCESS';
var CHATS_HAS_ERRORED = exports.CHATS_HAS_ERRORED = 'CHATS_HAS_ERRORED';
var CHATS_IS_LOADING = exports.CHATS_IS_LOADING = 'CHATS_IS_LOADING';
var ADD_COMMENT_TO_CHAT = exports.ADD_COMMENT_TO_CHAT = 'ADD_COMMENT_TO_CHAT';

var HOME_FETCH_DATA_SUCCESS = exports.HOME_FETCH_DATA_SUCCESS = 'HOME_FETCH_DATA_SUCCESS';
var HOME_HAS_ERRORED = exports.HOME_HAS_ERRORED = 'HOME_HAS_ERRORED';
var HOME_IS_LOADING = exports.HOME_IS_LOADING = 'HOME_IS_LOADING';
var SET_HOME_MODAL = exports.SET_HOME_MODAL = 'SET_HOME_MODAL';
var SET_HOME_SEARCH = exports.SET_HOME_SEARCH = 'SET_HOME_SEARCH';

var SET_PROFILE_MODAL = exports.SET_PROFILE_MODAL = 'SET_PROFILE_MODAL';

var SHOW_MODAL = exports.SHOW_MODAL = 'SHOW_MODAL'; // boolean

var ADD_FAVORITE_ITEM = exports.ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
var DELETE_FAVORITE_ITEM = exports.DELETE_FAVORITE_ITEM = 'DELETE_FAVORITE_ITEM';

var SET_FILTER_PRICE = exports.SET_FILTER_PRICE = 'SET_FILTER_PRICE';
// export const SET_FILTER_SORT = 'SET_FILTER_SORT';

/***/ }),

/***/ "./src/constants/apiKey.js":
/*!*********************************!*\
  !*** ./src/constants/apiKey.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  googleMapApi: {
    key: 'AIzaSyC9cjta8KO_8RCVOOsYAo9k4-ygDSBMTwk'
  }
};

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILTER_PRICE_MAX_PRICE = exports.FILTER_PRICE_MAX_PRICE = 1000000000;
var FILTER_PRICE_MIN_PRICE = exports.FILTER_PRICE_MIN_PRICE = 0;

/***/ }),

/***/ "./src/constants/urls.js":
/*!*******************************!*\
  !*** ./src/constants/urls.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  sidemenu: {
    url: 'https://5ac586c8a79a110014ce6778.mockapi.io/ejs/sidemenu'
  },
  categories: {
    url: 'https://5ac586c8a79a110014ce6778.mockapi.io/ejs/categories'
  },
  ownUser: {
    url: 'https://5ac586c8a79a110014ce6778.mockapi.io/ejs/ownUser'
  },
  notifications: {
    url: 'https://5ac586c8a79a110014ce6778.mockapi.io/ejs/notifications'
  },
  chats: {
    url: 'https://5ac586c8a79a110014ce6778.mockapi.io/ejs/chats'
  },
  home: {
    url: 'https://5ac586c8a79a110014ce6778.mockapi.io/ejs/home'
  }
};

/***/ }),

/***/ "./src/containers/mainpage/MainpageContainer.js":
/*!******************************************************!*\
  !*** ./src/containers/mainpage/MainpageContainer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Mainpage = __webpack_require__(/*! ../../components/mainpage/Mainpage */ "./src/components/mainpage/Mainpage.js");

var _Mainpage2 = _interopRequireDefault(_Mainpage);

var _homeActions = __webpack_require__(/*! ../../actions/views/homeActions */ "./src/actions/views/homeActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    ownuserHasErrored: state.ownuserHasErrored,
    ownuserIsLoading: state.ownuserIsLoading,
    isLogin: state.isLogin,
    categoriesHasErrored: state.categoriesHasErrored,
    categoriesIsLoading: state.categoriesIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      dispatch((0, _homeActions.homeFetchData)(url));
    }
  };
};

// withRouter -> so the router will work under redux
// see https://reacttraining.com/react-router/web/api/withRouter
var MainpageContainer = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Mainpage2.default));

exports.default = MainpageContainer;

/***/ }),

/***/ "./src/containers/mainpage/MenuButtonContainer.js":
/*!********************************************************!*\
  !*** ./src/containers/mainpage/MenuButtonContainer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _MenuButton = __webpack_require__(/*! ../../components/mainpage/MenuButton */ "./src/components/mainpage/MenuButton.js");

var _MenuButton2 = _interopRequireDefault(_MenuButton);

var _mainpageActions = __webpack_require__(/*! ../../actions/mainpage/mainpageActions */ "./src/actions/mainpage/mainpageActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSidebarOpen: state.isSidebarOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(bool) {
      dispatch((0, _mainpageActions.showSidebar)(bool));
    }
  };
};

var MenuButtonContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MenuButton2.default);

exports.default = MenuButtonContainer;

/***/ }),

/***/ "./src/containers/mainpage/SearchContainer.js":
/*!****************************************************!*\
  !*** ./src/containers/mainpage/SearchContainer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Search = __webpack_require__(/*! ../../components/mainpage/Search */ "./src/components/mainpage/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _homeActions = __webpack_require__(/*! ../../actions/views/homeActions */ "./src/actions/views/homeActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mapStateToProps = state => ({
//   homeSearchText: state.homeSearchText,
// });

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setHomeSearch: function setHomeSearch(text) {
      dispatch((0, _homeActions.setHomeSearch)(text));
    }
  };
};

var SearchContainer = (0, _reactRedux.connect)(
// mapStateToProps,
null, mapDispatchToProps)(_Search2.default);

exports.default = SearchContainer;

/***/ }),

/***/ "./src/containers/sidebar/SidebarContainer.js":
/*!****************************************************!*\
  !*** ./src/containers/sidebar/SidebarContainer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Sidebar = __webpack_require__(/*! ../../components/sidebar/Sidebar */ "./src/components/sidebar/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _mainpageActions = __webpack_require__(/*! ../../actions/mainpage/mainpageActions */ "./src/actions/mainpage/mainpageActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSidebarOpen: state.isSidebarOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showSidebar: function showSidebar(bool) {
      dispatch((0, _mainpageActions.showSidebar)(bool));
    }
  };
};

var SidebarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Sidebar2.default);

exports.default = SidebarContainer;

/***/ }),

/***/ "./src/containers/sidebar/SidebarHeaderContainer.js":
/*!**********************************************************!*\
  !*** ./src/containers/sidebar/SidebarHeaderContainer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _SidebarHeader = __webpack_require__(/*! ../../components/sidebar/SidebarHeader */ "./src/components/sidebar/SidebarHeader.js");

var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    ownuser: state.ownuser
  };
};

var SidebarHeaderContainer = (0, _reactRedux.connect)(mapStateToProps)(_SidebarHeader2.default);

exports.default = SidebarHeaderContainer;

/***/ }),

/***/ "./src/containers/utils/UserAvatarContainer.js":
/*!*****************************************************!*\
  !*** ./src/containers/utils/UserAvatarContainer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _UserAvatar = __webpack_require__(/*! ../../components/utils/UserAvatar */ "./src/components/utils/UserAvatar.js");

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    ownuser: state.ownuser
  };
};

var UserAvatarContainer = (0, _reactRedux.connect)(mapStateToProps)(_UserAvatar2.default);

exports.default = UserAvatarContainer;

/***/ }),

/***/ "./src/containers/views/ViewsContainer.js":
/*!************************************************!*\
  !*** ./src/containers/views/ViewsContainer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Views = __webpack_require__(/*! ../../components/views/Views */ "./src/components/views/Views.js");

var _Views2 = _interopRequireDefault(_Views);

var _mainpageActions = __webpack_require__(/*! ../../actions/mainpage/mainpageActions */ "./src/actions/mainpage/mainpageActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSidebarOpen: state.isSidebarOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(bool) {
      dispatch((0, _mainpageActions.showSidebar)(bool));
    }
  };
};

var ViewsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Views2.default);

exports.default = ViewsContainer;

/***/ }),

/***/ "./src/containers/views/categories/CategoriesContainer.js":
/*!****************************************************************!*\
  !*** ./src/containers/views/categories/CategoriesContainer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Categories = __webpack_require__(/*! ../../../components/views/categories/Categories */ "./src/components/views/categories/Categories.js");

var _Categories2 = _interopRequireDefault(_Categories);

var _categoriesActions = __webpack_require__(/*! ../../../actions/views/categoriesActions */ "./src/actions/views/categoriesActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.categories,
    categoriesHasErrored: state.categoriesHasErrored,
    categoriesIsLoading: state.categoriesIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      dispatch((0, _categoriesActions.categoriesFetchData)(url));
    }
  };
};

var CategoriesContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Categories2.default);

exports.default = CategoriesContainer;

/***/ }),

/***/ "./src/containers/views/categories/CategoryContentContainer.js":
/*!*********************************************************************!*\
  !*** ./src/containers/views/categories/CategoryContentContainer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _CategoryContent = __webpack_require__(/*! ../../../components/views/categories/CategoryContent */ "./src/components/views/categories/CategoryContent.js");

var _CategoryContent2 = _interopRequireDefault(_CategoryContent);

var _categoriesActions = __webpack_require__(/*! ../../../actions/views/categoriesActions */ "./src/actions/views/categoriesActions.js");

var _mainpageActions = __webpack_require__(/*! ../../../actions/mainpage/mainpageActions */ "./src/actions/mainpage/mainpageActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFilterCategories: function setFilterCategories(category) {
      dispatch((0, _categoriesActions.setFilterCategories)(category));
    },
    showSidebar: function showSidebar(bool) {
      dispatch((0, _mainpageActions.showSidebar)(bool));
    }
  };
};

var CategoryContentContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_CategoryContent2.default);

exports.default = CategoryContentContainer;

/***/ }),

/***/ "./src/containers/views/chats/ChatsContainer.js":
/*!******************************************************!*\
  !*** ./src/containers/views/chats/ChatsContainer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Chats = __webpack_require__(/*! ../../../components/views/chats/Chats */ "./src/components/views/chats/Chats.js");

var _Chats2 = _interopRequireDefault(_Chats);

var _chatsActions = __webpack_require__(/*! ../../../actions/views/chatsActions */ "./src/actions/views/chatsActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    chats: state.chats,
    chatsHasErrored: state.chatsHasErrored,
    chatsIsLoading: state.chatsIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      dispatch((0, _chatsActions.chatsFetchData)(url));
    }
  };
};

var ChatsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Chats2.default);

exports.default = ChatsContainer;

/***/ }),

/***/ "./src/containers/views/filter/FilterCategoryContainer.js":
/*!****************************************************************!*\
  !*** ./src/containers/views/filter/FilterCategoryContainer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _FilterCategory = __webpack_require__(/*! ../../../components/views/filter/FilterCategory */ "./src/components/views/filter/FilterCategory.js");

var _FilterCategory2 = _interopRequireDefault(_FilterCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.categories
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchData: (url) => {
//     dispatch(categoriesFetchData(url));
//   },
// });

var FilterCategoryContainer = (0, _reactRedux.connect)(mapStateToProps)(_FilterCategory2.default);

exports.default = FilterCategoryContainer;

/***/ }),

/***/ "./src/containers/views/filter/FilterFooterContainer.js":
/*!**************************************************************!*\
  !*** ./src/containers/views/filter/FilterFooterContainer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _FilterFooter = __webpack_require__(/*! ../../../components/views/filter/FilterFooter */ "./src/components/views/filter/FilterFooter.js");

var _FilterFooter2 = _interopRequireDefault(_FilterFooter);

var _categoriesActions = __webpack_require__(/*! ../../../actions/views/categoriesActions */ "./src/actions/views/categoriesActions.js");

var _filterActions = __webpack_require__(/*! ../../../actions/views/filterActions */ "./src/actions/views/filterActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFilterCategories: function setFilterCategories(category) {
      dispatch((0, _categoriesActions.setFilterCategories)(category));
    },
    setFilterPrice: function setFilterPrice(price) {
      dispatch((0, _filterActions.setFilterPrice)(price));
    }
    // setFilterSort: (sort) => {
    //   dispatch(setFilterSort(sort));
    // },
  };
};

var FilterFooterContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_FilterFooter2.default);

exports.default = FilterFooterContainer;

/***/ }),

/***/ "./src/containers/views/home/CategorySelectorContainer.js":
/*!****************************************************************!*\
  !*** ./src/containers/views/home/CategorySelectorContainer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _CategorySelector = __webpack_require__(/*! ../../../components/views/home/CategorySelector */ "./src/components/views/home/CategorySelector.js");

var _CategorySelector2 = _interopRequireDefault(_CategorySelector);

var _categoriesActions = __webpack_require__(/*! ../../../actions/views/categoriesActions */ "./src/actions/views/categoriesActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.categories
    // filterCategory: state.filterCategory,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFilterCategories: function setFilterCategories(category) {
      dispatch((0, _categoriesActions.setFilterCategories)(category));
    }
  };
};

var CategorySelectorContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CategorySelector2.default);

exports.default = CategorySelectorContainer;

/***/ }),

/***/ "./src/containers/views/home/HomeContainer.js":
/*!****************************************************!*\
  !*** ./src/containers/views/home/HomeContainer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Home = __webpack_require__(/*! ../../../components/views/home/Home */ "./src/components/views/home/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _chatsActions = __webpack_require__(/*! ../../../actions/views/chatsActions */ "./src/actions/views/chatsActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    homeItems: state.homeItems,
    homeHasErrored: state.homeHasErrored,
    homeIsLoading: state.homeIsLoading,
    homeModal: state.homeModal,
    isModalOpen: state.isModalOpen
  };
};
// import { homeFetchData } from 'actions/views/homeActions';


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    chatsfetchData: function chatsfetchData(url) {
      dispatch((0, _chatsActions.chatsFetchData)(url));
    }
  };
};

var HomeContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Home2.default);

exports.default = HomeContainer;

/***/ }),

/***/ "./src/containers/views/home/HomeContentContainer.js":
/*!***********************************************************!*\
  !*** ./src/containers/views/home/HomeContentContainer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _HomeContent = __webpack_require__(/*! ../../../components/views/home/HomeContent */ "./src/components/views/home/HomeContent.js");

var _HomeContent2 = _interopRequireDefault(_HomeContent);

var _homeActions = __webpack_require__(/*! ../../../actions/views/homeActions */ "./src/actions/views/homeActions.js");

var _miscActions = __webpack_require__(/*! ../../../actions/miscActions */ "./src/actions/miscActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    homeModal: state.homeModal,
    filterCategory: state.filterCategory,
    filterPrice: state.filterPrice,
    homeSearchText: state.homeSearchText
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setHomeModal: function setHomeModal(id) {
      dispatch((0, _homeActions.setHomeModal)(id));
    },
    showModal: function showModal(bool) {
      dispatch((0, _miscActions.showModal)(bool));
    }
  };
};

var HomeContentContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HomeContent2.default);

exports.default = HomeContentContainer;

/***/ }),

/***/ "./src/containers/views/home/HomeModalContainer.js":
/*!*********************************************************!*\
  !*** ./src/containers/views/home/HomeModalContainer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _HomeModal = __webpack_require__(/*! ../../../components/views/home/HomeModal */ "./src/components/views/home/HomeModal.js");

var _HomeModal2 = _interopRequireDefault(_HomeModal);

var _chatsActions = __webpack_require__(/*! ../../../actions/views/chatsActions */ "./src/actions/views/chatsActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    chats: state.chats
    // chatsHasErrored: state.chatsHasErrored,
    // chatsIsLoading: state.chatsIsLoading,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    chatsfetchData: function chatsfetchData(url) {
      dispatch((0, _chatsActions.chatsFetchData)(url));
    }
  };
};

var HomeModalContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HomeModal2.default);

exports.default = HomeModalContainer;

/***/ }),

/***/ "./src/containers/views/home/ModalCloseButtonContainer.js":
/*!****************************************************************!*\
  !*** ./src/containers/views/home/ModalCloseButtonContainer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _ModalCloseButton = __webpack_require__(/*! ../../../components/views/home/ModalCloseButton */ "./src/components/views/home/ModalCloseButton.js");

var _ModalCloseButton2 = _interopRequireDefault(_ModalCloseButton);

var _miscActions = __webpack_require__(/*! ../../../actions/miscActions */ "./src/actions/miscActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isModalOpen: state.isModalOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(url) {
      dispatch((0, _miscActions.showModal)(url));
    }
  };
};

var ModalCloseButtonContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModalCloseButton2.default);

exports.default = ModalCloseButtonContainer;

/***/ }),

/***/ "./src/containers/views/home/ModalCommentInputContainer.js":
/*!*****************************************************************!*\
  !*** ./src/containers/views/home/ModalCommentInputContainer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _ModalCommentInput = __webpack_require__(/*! ../../../components/views/home/ModalCommentInput */ "./src/components/views/home/ModalCommentInput.js");

var _ModalCommentInput2 = _interopRequireDefault(_ModalCommentInput);

var _homeActions = __webpack_require__(/*! ../../../actions/views/homeActions */ "./src/actions/views/homeActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    chats: state.chats
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCommentToChat: function addCommentToChat(id, name, createdAt, avatarUrl, imageUrl, comment) {
      dispatch((0, _homeActions.addCommentToChat)(id, name, createdAt, avatarUrl, imageUrl, comment));
    }
  };
};

var ModalCommentInputContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModalCommentInput2.default);

exports.default = ModalCommentInputContainer;

/***/ }),

/***/ "./src/containers/views/home/ModalLoveButtonContainer.js":
/*!***************************************************************!*\
  !*** ./src/containers/views/home/ModalLoveButtonContainer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _ModalLoveButton = __webpack_require__(/*! ../../../components/views/home/ModalLoveButton */ "./src/components/views/home/ModalLoveButton.js");

var _ModalLoveButton2 = _interopRequireDefault(_ModalLoveButton);

var _miscActions = __webpack_require__(/*! ../../../actions/miscActions */ "./src/actions/miscActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteItems: state.favoriteItems
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addFavoriteItem: function addFavoriteItem(homeItem) {
      dispatch((0, _miscActions.addFavoriteItem)(homeItem));
    },
    deleteFavoriteItem: function deleteFavoriteItem(homeItem) {
      dispatch((0, _miscActions.deleteFavoriteItem)(homeItem));
    }
  };
};

var ModalLoveButtonContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModalLoveButton2.default);

exports.default = ModalLoveButtonContainer;

/***/ }),

/***/ "./src/containers/views/login/LoginContainer.js":
/*!******************************************************!*\
  !*** ./src/containers/views/login/LoginContainer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Login = __webpack_require__(/*! ../../../components/views/login/Login */ "./src/components/views/login/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _loginActions = __webpack_require__(/*! ../../../actions/views/loginActions */ "./src/actions/views/loginActions.js");

var _categoriesActions = __webpack_require__(/*! ../../../actions/views/categoriesActions */ "./src/actions/views/categoriesActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mapStateToProps = state => ({
//   ownuser: state.ownuser,
//   ownuserHasErrored: state.ownuserHasErrored,
//   ownuserIsLoading: state.ownuserIsLoading,
// });

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      dispatch((0, _loginActions.ownuserFetchData)(url));
    },
    categoriesfetchData: function categoriesfetchData(url) {
      dispatch((0, _categoriesActions.categoriesFetchData)(url));
    }
  };
};

var LoginContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Login2.default);

exports.default = LoginContainer;

/***/ }),

/***/ "./src/containers/views/notifications/NotificationsContainer.js":
/*!**********************************************************************!*\
  !*** ./src/containers/views/notifications/NotificationsContainer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Notifications = __webpack_require__(/*! ../../../components/views/notifications/Notifications */ "./src/components/views/notifications/Notifications.js");

var _Notifications2 = _interopRequireDefault(_Notifications);

var _notificationsActions = __webpack_require__(/*! ../../../actions/views/notificationsActions */ "./src/actions/views/notificationsActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    notifications: state.notifications,
    notificationsHasErrored: state.notificationsHasErrored,
    notificationsIsLoading: state.notificationsIsLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchData: function fetchData(url) {
      dispatch((0, _notificationsActions.notificationsFetchData)(url));
    }
  };
};

var NotificationsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Notifications2.default);

exports.default = NotificationsContainer;

/***/ }),

/***/ "./src/containers/views/profile/ProfileContainer.js":
/*!**********************************************************!*\
  !*** ./src/containers/views/profile/ProfileContainer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Profile = __webpack_require__(/*! ../../../components/views/profile/Profile */ "./src/components/views/profile/Profile.js");

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    ownuser: state.ownuser,
    profileModal: state.profileModal,
    isModalOpen: state.isModalOpen
  };
};

var ProfileContainer = (0, _reactRedux.connect)(mapStateToProps)(_Profile2.default);

exports.default = ProfileContainer;

/***/ }),

/***/ "./src/containers/views/profile/TabFavoriteContainer.js":
/*!**************************************************************!*\
  !*** ./src/containers/views/profile/TabFavoriteContainer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _TabFavorite = __webpack_require__(/*! ../../../components/views/profile/TabFavorite */ "./src/components/views/profile/TabFavorite.js");

var _TabFavorite2 = _interopRequireDefault(_TabFavorite);

var _profileActions = __webpack_require__(/*! ../../../actions/views/profileActions */ "./src/actions/views/profileActions.js");

var _miscActions = __webpack_require__(/*! ../../../actions/miscActions */ "./src/actions/miscActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteItems: state.favoriteItems
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setProfileModal: function setProfileModal(id) {
      dispatch((0, _profileActions.setProfileModal)(id));
    },
    showModal: function showModal(bool) {
      dispatch((0, _miscActions.showModal)(bool));
    }
  };
};

var TabFavoriteContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TabFavorite2.default);

exports.default = TabFavoriteContainer;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _App = __webpack_require__(/*! ./components/App */ "./src/components/App.js");

var _App2 = _interopRequireDefault(_App);

var _configureStore = __webpack_require__(/*! ./store/configureStore */ "./src/store/configureStore.js");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _configureStore2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('root'));

// ReactDOM.render(
//   <Provider>
//     <h1>tes</h1>
//   </Provider>,
//   document.getElementById('root'),
// );

/***/ }),

/***/ "./src/reducers/homepage/isSidebarOpen.js":
/*!************************************************!*\
  !*** ./src/reducers/homepage/isSidebarOpen.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var isSidebarOpen = function isSidebarOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SHOW_SIDEBAR:
      return action.isSidebarOpen;
    default:
      return state;
  }
};

exports.default = isSidebarOpen;

/***/ }),

/***/ "./src/reducers/misc.js":
/*!******************************!*\
  !*** ./src/reducers/misc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPrice = exports.favoriteItems = exports.isModalOpen = undefined;

var _actionTypes = __webpack_require__(/*! ../constants/actionTypes */ "./src/constants/actionTypes.js");

var _constants = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isModalOpen = exports.isModalOpen = function isModalOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SHOW_MODAL:
      return action.isModalOpen;
    default:
      return state;
  }
};

var favoriteItems = exports.favoriteItems = function favoriteItems() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  // console.log(action.type);
  switch (action.type) {
    case _actionTypes.ADD_FAVORITE_ITEM:
      return [].concat(_toConsumableArray(state), [action.item]);
    case _actionTypes.DELETE_FAVORITE_ITEM:
      // state.slice() -> copy the array (so it's not mutating)
      // filter -> filter the array according to action.item.id
      return state.slice().filter(function (item) {
        return item.id !== action.item.id;
      });
    default:
      return state;
  }
};

var filterPrice = exports.filterPrice = function filterPrice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { maxPrice: _constants.FILTER_PRICE_MAX_PRICE, minPrice: _constants.FILTER_PRICE_MIN_PRICE };
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_FILTER_PRICE:
      return action.filterPrice;
    default:
      return state;
  }
};

// export const filterSort = (state = '', action) => {
//   switch (action.type) {
//     case SET_FILTER_SORT:
//       return action.filterSort;
//     default:
//       return state;
//   }
// };

/***/ }),

/***/ "./src/reducers/rootReducers.js":
/*!**************************************!*\
  !*** ./src/reducers/rootReducers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _isSidebarOpen = __webpack_require__(/*! ./homepage/isSidebarOpen */ "./src/reducers/homepage/isSidebarOpen.js");

var _isSidebarOpen2 = _interopRequireDefault(_isSidebarOpen);

var _categories = __webpack_require__(/*! ./views/categories */ "./src/reducers/views/categories.js");

var _login = __webpack_require__(/*! ./views/login */ "./src/reducers/views/login.js");

var _notifications = __webpack_require__(/*! ./views/notifications */ "./src/reducers/views/notifications.js");

var _chats = __webpack_require__(/*! ./views/chats */ "./src/reducers/views/chats.js");

var _home = __webpack_require__(/*! ./views/home */ "./src/reducers/views/home.js");

var _profile = __webpack_require__(/*! ./views/profile */ "./src/reducers/views/profile.js");

var _misc = __webpack_require__(/*! ./misc */ "./src/reducers/misc.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  isSidebarOpen: _isSidebarOpen2.default,
  categoriesHasErrored: _categories.categoriesHasErrored,
  categoriesIsLoading: _categories.categoriesIsLoading,
  categories: _categories.categories,
  filterCategory: _categories.filterCategory,
  ownuserHasErrored: _login.ownuserHasErrored,
  ownuserIsLoading: _login.ownuserIsLoading,
  ownuser: _login.ownuser,
  isLogin: _login.isLogin,
  notificationsHasErrored: _notifications.notificationsHasErrored,
  notificationsIsLoading: _notifications.notificationsIsLoading,
  notifications: _notifications.notifications,
  chatsHasErrored: _chats.chatsHasErrored,
  chatsIsLoading: _chats.chatsIsLoading,
  chats: _chats.chats,
  homeHasErrored: _home.homeHasErrored,
  homeIsLoading: _home.homeIsLoading,
  homeItems: _home.homeItems,
  homeModal: _home.homeModal,
  homeSearchText: _home.homeSearchText,
  profileModal: _profile.profileModal,
  isModalOpen: _misc.isModalOpen,
  favoriteItems: _misc.favoriteItems,
  filterPrice: _misc.filterPrice
  // filterSort,
});

/***/ }),

/***/ "./src/reducers/views/categories.js":
/*!******************************************!*\
  !*** ./src/reducers/views/categories.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCategory = exports.categories = exports.categoriesIsLoading = exports.categoriesHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var categoriesHasErrored = exports.categoriesHasErrored = function categoriesHasErrored() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CATEGORIES_HAS_ERRORED:
      return action.categoriesHasErrored;
    default:
      return state;
  }
};

var categoriesIsLoading = exports.categoriesIsLoading = function categoriesIsLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CATEGORIES_IS_LOADING:
      return action.categoriesIsLoading;
    default:
      return state;
  }
};

var categories = exports.categories = function categories() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CATEGORIES_FETCH_DATA_SUCCESS:
      return action.categories;
    default:
      return state;
  }
};

var filterCategory = exports.filterCategory = function filterCategory() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_FILTER_CATEGORIES:
      return action.filterCategory;
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/views/chats.js":
/*!*************************************!*\
  !*** ./src/reducers/views/chats.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chats = exports.chatsIsLoading = exports.chatsHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var chatsHasErrored = exports.chatsHasErrored = function chatsHasErrored() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CHATS_HAS_ERRORED:
      return action.chatsHasErrored;
    default:
      return state;
  }
};

var chatsIsLoading = exports.chatsIsLoading = function chatsIsLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CHATS_IS_LOADING:
      return action.chatsIsLoading;
    default:
      return state;
  }
};

var chats = exports.chats = function chats() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CHATS_FETCH_DATA_SUCCESS:
      return action.chats;
    case _actionTypes.ADD_COMMENT_TO_CHAT:
      {
        var chatId = Number(state[state.length - 1].id) + 1;
        return [].concat(_toConsumableArray(state), [{
          id: chatId,
          createdAt: action.createdAt,
          name: action.username,
          avatarUrl: action.avatarUrl,
          imageUrl: action.imageUrl,
          imageDescription: action.comment,
          type: 'buy'
        }]);
      }
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/views/home.js":
/*!************************************!*\
  !*** ./src/reducers/views/home.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeSearchText = exports.homeModal = exports.homeItems = exports.homeIsLoading = exports.homeHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var homeHasErrored = exports.homeHasErrored = function homeHasErrored() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.HOME_HAS_ERRORED:
      return action.homeHasErrored;
    default:
      return state;
  }
};

var homeIsLoading = exports.homeIsLoading = function homeIsLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.HOME_IS_LOADING:
      return action.homeIsLoading;
    default:
      return state;
  }
};

var homeItems = exports.homeItems = function homeItems() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.HOME_FETCH_DATA_SUCCESS:
      return action.homeItems;
    default:
      return state;
  }
};

// todo change the state to homeItem object not the id/index
var homeModal = exports.homeModal = function homeModal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_HOME_MODAL:
      return action.homeModal;
    default:
      return state;
  }
};

var homeSearchText = exports.homeSearchText = function homeSearchText() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_HOME_SEARCH:
      return action.homeSearchText;
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/views/login.js":
/*!*************************************!*\
  !*** ./src/reducers/views/login.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLogin = exports.ownuser = exports.ownuserIsLoading = exports.ownuserHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var ownuserHasErrored = exports.ownuserHasErrored = function ownuserHasErrored() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.OWNUSER_HAS_ERRORED:
      return action.ownuserHasErrored;
    default:
      return state;
  }
};

var ownuserIsLoading = exports.ownuserIsLoading = function ownuserIsLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.OWNUSER_IS_LOADING:
      return action.ownuserIsLoading;
    default:
      return state;
  }
};

var ownuser = exports.ownuser = function ownuser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.OWNUSER_FETCH_DATA_SUCCESS:
      return action.ownuser;
    default:
      return state;
  }
};

var isLogin = exports.isLogin = function isLogin() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_LOGIN:
      return action.isLogin;
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/views/notifications.js":
/*!*********************************************!*\
  !*** ./src/reducers/views/notifications.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifications = exports.notificationsIsLoading = exports.notificationsHasErrored = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

var notificationsHasErrored = exports.notificationsHasErrored = function notificationsHasErrored() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.NOTIFICATIONS_HAS_ERRORED:
      return action.notificationsHasErrored;
    default:
      return state;
  }
};

var notificationsIsLoading = exports.notificationsIsLoading = function notificationsIsLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.NOTIFICATIONS_IS_LOADING:
      return action.notificationsIsLoading;
    default:
      return state;
  }
};

var notifications = exports.notifications = function notifications() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.NOTIFICATIONS_FETCH_DATA_SUCCESS:
      return action.notifications;
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/views/profile.js":
/*!***************************************!*\
  !*** ./src/reducers/views/profile.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileModal = undefined;

var _actionTypes = __webpack_require__(/*! ../../constants/actionTypes */ "./src/constants/actionTypes.js");

// an object
var profileModal = exports.profileModal = function profileModal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_PROFILE_MODAL:
      return action.profileModal;
    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducers = __webpack_require__(/*! ../reducers/rootReducers */ "./src/reducers/rootReducers.js");

var _rootReducers2 = _interopRequireDefault(_rootReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle, function-paren-newline */
var store = (0, _redux.createStore)(_rootReducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default)
// for devtools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));
/* eslint-enable */

exports.default = store;

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map