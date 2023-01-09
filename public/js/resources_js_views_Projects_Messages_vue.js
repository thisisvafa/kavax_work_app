"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Projects_Messages_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./resources/js/services/user/user.service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    var _this = this;

    this.getMessages();
    var self = this;
    Echo.channel("client-message").listen(".client-message", function (e) {
      // console.log(e);
      var msg = {};
      msg = e.message;

      if (msg.project_id == _this.project_id) {
        self.messages.push(msg);
        self.scrollToLastMsg("last" + msg.msg_id);
      }
    });
  },
  data: function data() {
    return {
      project_id: null,
      messages: [],
      message: null,
      File: null
    };
  },
  methods: {
    onChange: function onChange(e) {
      this.File = e.target.files;
    },
    scrollToLastMsg: function scrollToLastMsg(viewID) {
      setTimeout(function () {
        document.getElementById(viewID).scrollIntoView({
          behavior: "smooth"
        });
      }, 50);
    },
    getMessages: function getMessages() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, viewID;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.project_id = _this2.$route.params.project_id;
                _context.next = 3;
                return _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["default"].Get("project/messages/" + _this2.project_id);

              case 3:
                response = _context.sent;

                if (response.data.success) {
                  _this2.messages = response.data.messages;
                  viewID = "last" + _this2.messages[_this2.messages.length - 1].msg_id;

                  _this2.scrollToLastMsg(viewID);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    sendMessage: function sendMessage() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var data, i, message, response, viewID;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.message) {
                  _context2.next = 13;
                  break;
                }

                data = new FormData();

                if (_this3.File != null) {
                  for (i = 0; i < _this3.File.length; i++) {
                    data.append("files[]", _this3.File[i]);
                  }
                }

                message = _this3.urlify(_this3.message);

                if (message != _this3.message) {
                  data.append("link", true);
                  data.append("link_msg", _this3.message);
                }

                data.append("message", message);
                data.append("project_id", _this3.project_id);
                _context2.next = 9;
                return _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["default"].Post("project/message/send", data);

              case 9:
                response = _context2.sent;

                if (response.data.success) {
                  // this.$toast.success(response.data.message);
                  _this3.messages.push(response.data.newMessage);

                  _this3.message = null;
                  _this3.File = null;
                  viewID = "last" + response.data.newMessage.msg_id;

                  _this3.scrollToLastMsg(viewID);
                }

                _context2.next = 14;
                break;

              case 13:
                _this3.$toast.error("Write Something!");

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    filePath: function filePath(message) {
      if (message.user_id == null) {
        return "https://kavax.co.uk/admin-panel/public/storage/message/files";
      }

      return 'https://kavax.co.uk/app/public' + '/files_directory';
    },
    adminClass: function adminClass(message) {
      if (message.user_id == null) {
        return "text-left";
      }

      return "";
    },
    msg_bg: function msg_bg(message) {
      if (message.user_id == null) {
        return "bg-admin-msg";
      }

      return "";
    },
    downloadItem: function downloadItem(_ref) {
      var url = _ref.url,
          label = _ref.label;
      axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {
        responseType: "blob"
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: "application/pdf"
        });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = label;
        link.click();
        URL.revokeObjectURL(link.href);
      })["catch"](console.error);
    },
    urlify: function urlify(text) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, function (url) {
        return '<a href="' + url + '">' + url + "</a>";
      }); // or alternatively
      // return text.replace(urlRegex, '<a href="$1">$1</a>')
    },
    isMobile: function isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/services/user/user.service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/user/user.service.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _token_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.services */ "./resources/js/services/user/token.services.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var vue_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-notification */ "./node_modules/vue-notification/dist/index.js");
/* harmony import */ var vue_notification__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_notification__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_3__["default"], (axios__WEBPACK_IMPORTED_MODULE_2___default()));
vue__WEBPACK_IMPORTED_MODULE_5__["default"].use((vue_notification__WEBPACK_IMPORTED_MODULE_4___default()));
var baseURL = "http://127.0.0.1:8080/api/";
var Api = vue__WEBPACK_IMPORTED_MODULE_5__["default"].axios.create({
  // baseURL: "https://kavax.co.uk/app/api/", //process.env.MIX_API_URL,
  baseURL: "http://127.0.0.1:8080/app/api/",
  //process.env.MIX_API_URL,
  headers: (0,_token_services__WEBPACK_IMPORTED_MODULE_1__["default"])()
});

var UserService = /*#__PURE__*/function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: "Get",
    value: function () {
      var _Get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(end_point) {
        var response, query, _i, _Object$keys, field;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().get(baseURL + end_point, {
                  headers: (0,_token_services__WEBPACK_IMPORTED_MODULE_1__["default"])()
                });

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                if (_context.t0.response.status == 401) {
                  query = "";

                  try {
                    if (this.$route.query.date) {
                      query = this.$route.query;
                      query = "?date=" + query.date + "&time=" + query.time;
                      this.$router.push("/consultation/bookings/" + query);
                    }
                  } catch (e) {}

                  localStorage.removeItem("user");
                  window.location.replace("/app/auth" + query);
                }

                for (_i = 0, _Object$keys = Object.keys(_context.t0.response.data.errors); _i < _Object$keys.length; _i++) {
                  field = _Object$keys[_i];
                  vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: _context.t0.response.data.errors[field][0]
                  });
                }

                return _context.abrupt("return", _context.t0.response);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function Get(_x) {
        return _Get.apply(this, arguments);
      }

      return Get;
    }()
  }, {
    key: "Post",
    value: function () {
      var _Post = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(end_point, data) {
        var response, _i2, _Object$keys2, field;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                console.log(baseURL);
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post(baseURL + end_point, data, {
                  headers: (0,_token_services__WEBPACK_IMPORTED_MODULE_1__["default"])()
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", response);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

                if (_context2.t0.response.status == 401) {
                  localStorage.removeItem("user");
                  window.location.replace("/app/auth");
                }

                for (_i2 = 0, _Object$keys2 = Object.keys(_context2.t0.response.data.errors); _i2 < _Object$keys2.length; _i2++) {
                  field = _Object$keys2[_i2];
                  vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: _context2.t0.response.data.errors[field][0]
                  });
                }

                return _context2.abrupt("return", _context2.t0.response);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function Post(_x2, _x3) {
        return _Post.apply(this, arguments);
      }

      return Post;
    }()
  }, {
    key: "Put",
    value: function () {
      var _Put = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(end_point, data) {
        var response, _i3, _Object$keys3, field;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().put(baseUrl + end_point, data);

              case 3:
                response = _context3.sent;
                return _context3.abrupt("return", response);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                if (_context3.t0.response.status == 401) {
                  localStorage.removeItem("user");
                  window.location.replace("/app/auth");
                }

                for (_i3 = 0, _Object$keys3 = Object.keys(_context3.t0.response.data.errors); _i3 < _Object$keys3.length; _i3++) {
                  field = _Object$keys3[_i3];
                  vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: _context3.t0.response.data.errors[field][0]
                  });
                }

                return _context3.abrupt("return", _context3.t0.response);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function Put(_x4, _x5) {
        return _Put.apply(this, arguments);
      }

      return Put;
    }()
  }, {
    key: "Delete",
    value: function () {
      var _Delete = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(end_point) {
        var data,
            response,
            _i4,
            _Object$keys4,
            field,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
                _context4.prev = 1;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default()["delete"](end_point, data);

              case 4:
                response = _context4.sent;
                return _context4.abrupt("return", response);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);

                if (_context4.t0.response.status == 401) {
                  localStorage.removeItem("user");
                  window.location.replace("/app/auth");
                }

                for (_i4 = 0, _Object$keys4 = Object.keys(_context4.t0.response.data.errors); _i4 < _Object$keys4.length; _i4++) {
                  field = _Object$keys4[_i4];
                  vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.$notify({
                    group: "notify",
                    type: "error",
                    title: _context4.t0.response.data.errors[field][0]
                  });
                }

                return _context4.abrupt("return", _context4.t0.response);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function Delete(_x6) {
        return _Delete.apply(this, arguments);
      }

      return Delete;
    }()
  }]);

  return UserService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserService());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.content-col\n    .content-inner\n    .page-content-body.profile-edit-form\n    .item\n    .field-block\n    label[data-v-416827d2] {\n    font-size: 18px;\n    font-weight: 300;\n    display: inline-block;\n    width: 100%;\n}\n.content-col\n    .content-inner\n    .page-content-body.profile-edit-form\n    .item\n    .field-block\n    input[data-v-416827d2] {\n    display: inline-block;\n    width: 100%;\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #cfcfcf;\n    height: 36px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block\n    textarea[data-v-416827d2] {\n    background: transparent;\n    border: none;\n    border-bottom: solid 1px #cfcfcf;\n    margin-bottom: 30px;\n    width: 100%;\n    color: #fff;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block\n    textarea[data-v-416827d2]::-moz-placeholder {\n    color: #ff9524;\n    font-size: 16px;\n    font-weight: 300;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block\n    textarea[data-v-416827d2]:-ms-input-placeholder {\n    color: #ff9524;\n    font-size: 16px;\n    font-weight: 300;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block\n    textarea[data-v-416827d2]::placeholder {\n    color: #ff9524;\n    font-size: 16px;\n    font-weight: 300;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block.file-field\n    input[data-v-416827d2] {\n    display: none;\n    color: #fff;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block.file-field\n    label[data-v-416827d2] {\n    height: 49px;\n    line-height: 49px;\n    border-color: #d8d8d8;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    padding: 0 25px 0 15px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block.file-field\n    label[data-v-416827d2]:hover {\n    color: white;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block.file-field\n    label\n    span[data-v-416827d2] {\n    font-size: 20px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block.submit-field\n    button[data-v-416827d2] {\n    color: #ed7b00;\n    font-size: 18px;\n    font-weight: 500;\n    cursor: pointer;\n    height: 49px;\n    border-color: #ed7b00;\n    padding: 0 40px;\n    background: transparent;\n    transition: 0.3s;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-send-form\n    .field-block.submit-field\n    input[data-v-416827d2]:hover {\n    border-color: #ff9524;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-owner-name[data-v-416827d2] {\n    margin-bottom: 10px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-owner-name\n    .name[data-v-416827d2] {\n    font-size: 16px;\n    font-weight: 700;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-owner-name\n    .message-time[data-v-416827d2] {\n    color: #fff;\n    font-weight: 300;\n    font-size: 13px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-content[data-v-416827d2] {\n    font-size: 16px;\n    font-weight: 300;\n}\n.content-col .content-inner .messages-body .message-of-day .date-all-message[data-v-416827d2] {\n    margin-bottom: 14px;\n    font-weight: 300;\n}\n.content-col .content-inner .messages-body .message-of-day .message-items[data-v-416827d2] {\n    margin-bottom: 65px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item[data-v-416827d2] {\n    margin-bottom: 45px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item[data-v-416827d2]:last-child {\n    margin-bottom: 0;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner[data-v-416827d2] {\n    width: 70%;\n    display: inline-block;\n    padding: 30px;\n    border: 1px solid #d8d8d8;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-owner-name[data-v-416827d2] {\n    margin-bottom: 10px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-owner-name\n    .name[data-v-416827d2] {\n    font-size: 16px;\n    font-weight: 700;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-owner-name\n    .message-time[data-v-416827d2] {\n    color: #fff;\n    font-weight: 300;\n    font-size: 13px;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item\n    .message-inner\n    .message-content[data-v-416827d2] {\n    font-size: 16px;\n    font-weight: 300;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item.my-message[data-v-416827d2] {\n    text-align: right;\n}\n.content-col\n    .content-inner\n    .messages-body\n    .message-of-day\n    .message-items\n    .message-item.my-message\n    .message-inner[data-v-416827d2] {\n    text-align: left;\n    border-color: #74726f;\n}\n.msg-from-admins[data-v-416827d2] {\n    background-color: transparent;\n    text-align: left !important;\n}\n.bg-admin-msg[data-v-416827d2] {\n    background-color: #414141 !important;\n}\n.message-send-form[data-v-416827d2] {\n    position: fixed;\n    bottom: 0px;\n    right: 0px;\n    width: calc(100% - 245px);\n    max-width: calc(100% - 45px);\n    padding: 30px;\n    margin-left: 350px;\n    background: #1d1d1d;\n}\n.message-send-form-mobile[data-v-416827d2] {\n    width: 100%;\n    max-width: 100%;\n    margin-left: 0px;\n}\n.message-part[data-v-416827d2] {\n    margin-bottom: 300px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_416827d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_416827d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_416827d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Projects/Messages.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Projects/Messages.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Messages_vue_vue_type_template_id_416827d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=416827d2&scoped=true& */ "./resources/js/views/Projects/Messages.vue?vue&type=template&id=416827d2&scoped=true&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/js/views/Projects/Messages.vue?vue&type=script&lang=js&");
/* harmony import */ var _Messages_vue_vue_type_style_index_0_id_416827d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css& */ "./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_416827d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Messages_vue_vue_type_template_id_416827d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "416827d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Projects/Messages.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Projects/Messages.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Projects/Messages.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_416827d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=style&index=0&id=416827d2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Projects/Messages.vue?vue&type=template&id=416827d2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Projects/Messages.vue?vue&type=template&id=416827d2&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_416827d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_416827d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_416827d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messages.vue?vue&type=template&id=416827d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=template&id=416827d2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=template&id=416827d2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Messages.vue?vue&type=template&id=416827d2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row dashboard-row g-0 px-3" }, [
    _c("div", { staticClass: "col content-col" }, [
      _c("article", { staticClass: "content-inner" }, [
        _c("div", { staticClass: "heading-text" }, [_vm._v("Messages")]),
        _vm._v(" "),
        _c("div", { staticClass: "page-content-body mt-4" }, [
          _c("div", { staticClass: "messages-body" }, [
            _c("div", { staticClass: "message-of-day" }, [
              _c("div", { staticClass: "message-items" }, [
                _c(
                  "div",
                  { staticClass: "message-part" },
                  _vm._l(_vm.messages, function(message) {
                    return _c(
                      "div",
                      {
                        key: message.id,
                        class:
                          "message-item my-message  " + _vm.adminClass(message)
                      },
                      [
                        _c(
                          "div",
                          {
                            class: "message-inner " + _vm.msg_bg(message),
                            attrs: { id: "last" + message.msg_id }
                          },
                          [
                            _c("div", { staticClass: "message-owner-name" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row d-flex justify-content-between"
                                },
                                [
                                  message.user
                                    ? _c("div", [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(message.user.fullName) +
                                            "\n                                                "
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  message.replied_by
                                    ? _c("div", [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(
                                              message.replied_by.fullName
                                            ) +
                                            "\n                                             "
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-4 text-right message-time"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(message.created_at) +
                                          "\n                                                "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "message-content" }, [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(message.message) +
                                  "\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            message.file
                              ? _c("div", [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          _vm.filePath(message) +
                                          "/" +
                                          message.file.file_name,
                                        download: "",
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "mdi mdi-attachment"
                                      }),
                                      _vm._v(
                                        _vm._s(message.file.file_name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class:
                      "message-send-form " +
                      (_vm.isMobile()
                        ? "message-send-form-mobile"
                        : "message-send-form")
                  },
                  [
                    _c(
                      "form",
                      {
                        attrs: { enctype: "multipart/form-data" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.sendMessage()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 pr-0" }, [
                            _c("div", { staticClass: "field-block" }, [
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.message,
                                    expression: "message"
                                  }
                                ],
                                attrs: {
                                  required: "",
                                  placeholder: "Write your message here..."
                                },
                                domProps: { value: _vm.message },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.message = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between col-md-12 pr-0"
                            },
                            [
                              _c("div", {}, [
                                _c(
                                  "div",
                                  { staticClass: "field-block file-field" },
                                  [
                                    _c("input", {
                                      attrs: {
                                        id: "attach-file",
                                        type: "file"
                                      },
                                      on: { change: _vm.onChange }
                                    }),
                                    _vm._v(" "),
                                    _vm._m(0)
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(1)
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "attach-file" } }, [
      _c("span", { staticClass: "icon-attachment" }),
      _vm._v(" "),
      _c("i", { staticClass: "mdi mdi-attachment" }),
      _vm._v("\n                                                        Attach")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-right" }, [
      _c("div", { staticClass: "field-block submit-field" }, [
        _c("button", { attrs: { type: "submit" } }, [
          _vm._v(
            "\n                                                        Send\n                                                    "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);