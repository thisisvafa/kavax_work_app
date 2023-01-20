"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Projects_Tasks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./resources/js/services/user/user.service.js");
/* harmony import */ var _adamdehaven_vue_custom_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adamdehaven/vue-custom-tooltip */ "./node_modules/@adamdehaven/vue-custom-tooltip/dist/vue-custom-tooltip.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


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
    this.category_id = this.$route.params.category_id;
    this.category_name = this.$route.params.category_name;
    this.getTasks();
  },
  components: {
    VueCustomTooltip: _adamdehaven_vue_custom_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {},
  data: function data() {
    return {
      category_id: null,
      category_name: null,
      tasks: [],
      priority: ["low.svg", "medium.svg", "high.svg"],
      date: moment__WEBPACK_IMPORTED_MODULE_3___default()(60 * 10 * 1000),
      showInfo: true,
      hasScroll: true,
      inProgress: [],
      open: [],
      completed: []
    };
  },
  methods: {
    wheelHorizontal: function wheelHorizontal(e) {
      if (e.deltaY < 0) {
        this.$refs.table.scrollLeft = this.$refs.table.scrollLeft - 50;
      } else {
        this.$refs.table.scrollLeft = this.$refs.table.scrollLeft + 50;
      }
    },
    scrollHorizontal: function scrollHorizontal(e) {
      if (this.$refs.table.scrollLeft > 0) {
        this.showInfo = false;
      }

      if (this.$refs.table.scrollLeft == 0) {
        this.showInfo = true;
      }
    },
    getPhotoFromName: function getPhotoFromName(fullName) {
      var names = fullName.split(" ");
      var letters = "";

      for (var i = 0; i < names.length; i++) {
        letters += names[i][0];
      }

      return letters;
    },
    getTasks: function getTasks() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["default"].Get("project/tasks/" + _this.$parent.global_project_id + "/" + _this.category_id);

              case 2:
                response = _context.sent;

                if (response.data.success) {
                  _this.tasks = response.data.tasks;

                  _this.splitTasks(_this.tasks);

                  _this.updateDifference();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    splitTasks: function splitTasks(tasks) {
      var _this2 = this;

      this.inProgress = [];
      this.open = [];
      this.completed = [];
      tasks.forEach(function (task) {
        if (task.status == 1) {
          _this2.inProgress.push(task);
        } else if (task.status == 2) {
          _this2.open.push(task);
        } else {
          _this2.completed.push(task);
        }
      });
      console.log(this.inProgress, this.open);
    },
    updateDifference: function updateDifference() {
      var _this3 = this;

      this.tasks.forEach(function (task) {
        if (task.status == 2) {
          var now = new Date();
          var difference = Math.abs(now.getTime() + now.getTimezoneOffset() * 60000 - new Date(task.pause_at.replace(/-/g, "/"))); // console.log(difference)
          // console.log(
          //     now.getTime() + now.getTimezoneOffset() * 60000
          // );
          // console.log(new Date(task.pause_at.replace(/-/g, "/")));

          var minutes = Math.floor(difference / 1000 / 60);
          task.seconds = _this3.n(parseInt(difference / 1000 % 60));
          task.hours = _this3.n(parseInt(minutes / 60));
          task.minutes = _this3.n(minutes % 60);
          var taskName = task.name;
          task.name = task.name + ".";
          task.name = task.name + "..";
          task.name = taskName;
        }
      });
    },
    n: function n(_n) {
      return _n > 9 ? "" + _n : "0" + _n;
    }
  },
  computed: {
    time: function time() {
      return this.date.format("hh:mm:ss");
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    setInterval(function () {
      _this4.updateDifference();
    }, 1000);
  },
  watch: {
    $route: function $route(newParam, old) {
      this.category_id = newParam.params.category_id;
      this.category_name = newParam.params.category_name;
      this.getTasks();
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-muted[data-v-4a3ab3f8] {\n    color: #fff;\n}\n.progress[data-v-4a3ab3f8] {\n    width: 100px;\n}\n.container[data-v-4a3ab3f8] {\n    width: 45px;\n    height: 45px;\n    border-radius: 45px;\n    background: #333;\n}\n.name[data-v-4a3ab3f8] {\n    width: 100%;\n    text-align: center;\n    color: white;\n    font-size: 18px;\n    line-height: 45px;\n}\n.table-holder[data-v-4a3ab3f8],\n.table-responsive[data-v-4a3ab3f8] {\n    position: relative;\n}\n.table-responsive[data-v-4a3ab3f8]::-webkit-scrollbar {\n    height: 10px;\n}\n.table-responsive[data-v-4a3ab3f8]::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px #333333;\n    -webkit-box-shadow: inset 0 0 6px #333333;\n}\n.table-responsive[data-v-4a3ab3f8]::-webkit-scrollbar-thumb {\n    background: #333333;\n    outline: 1px solid #333333;\n}\n.info[data-v-4a3ab3f8] {\n    position: absolute;\n    width: 200px;\n    height: 100%;\n    /* background: linear-gradient(to right, transparent, #ffffff); */\n    top: 0;\n    right: 0;\n    padding: 20px;\n    text-align: right;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;\n    opacity: 0;\n    visibility: hidden;\n    z-index: 1;\n    pointer-events: none;\n}\n.show[data-v-4a3ab3f8] {\n    opacity: 1;\n    visibility: visible;\n}\ntr th[data-v-4a3ab3f8],\ntr td[data-v-4a3ab3f8] {\n    min-width: 50px;\n    left: 0;\n    background: rgba(37, 36, 36, 0.8);\n}\n.progress-paused[data-v-4a3ab3f8] {\n    background: transparent !important;\n    border: 1px solid #991c1c;\n}\n.progress-running[data-v-4a3ab3f8] {\n    background: transparent !important;\n    border: 1px solid #1c9922;\n}\n.table td[data-v-4a3ab3f8]:nth-child(1) {\n    padding-right: 10px;\n    max-width: 200px;\n    text-align: left;\n    white-space: normal;\n    /* line-height: 1.2rem; */\n}\n.table td[data-v-4a3ab3f8] {\n    padding: 10px 0px 10px 25px;\n    text-align: center;\n}\ntr th[data-v-4a3ab3f8] {\n    background: transparent !important;\n    text-align: center !important;\n    font-size: 15px;\n    padding-bottom: 10px;\n}\nthead[data-v-4a3ab3f8] {\n    border-top: none !important;\n}\n.bg-dark[data-v-4a3ab3f8] {\n    background-color: #5e6064 !important;\n}\n.box[data-v-4a3ab3f8] {\n    width: 12px;\n    height: 12px;\n    background-color: #ff6400;\n}\n.table-holder[data-v-4a3ab3f8] {\n    margin-bottom: 50px;\n}\n.list-group .list-group-item[data-v-4a3ab3f8] {\n    background-color: transparent;\n    color: #fff;\n}\n.list-group.bottom-list[data-v-4a3ab3f8] {\n    flex-direction: row;\n}\ntr td[data-v-4a3ab3f8]:first-child {\n    position: -webkit-sticky;\n    position: sticky;\n    min-width: 50px;\n    left: 0;\n    background: rgba(37, 36, 36, 0.9) !important;\n}\ntr th[data-v-4a3ab3f8]:first-child {\n    position: -webkit-sticky;\n    position: sticky;\n    min-width: 50px;\n    left: 0;\n    background: rgb(45, 45, 45, 0.9) !important;\n}\n.table thead th[data-v-4a3ab3f8] {\n    padding-top: 10px;\n    padding-bottom: 10px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_4a3ab3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_4a3ab3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_4a3ab3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Projects/Tasks.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Projects/Tasks.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tasks_vue_vue_type_template_id_4a3ab3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true& */ "./resources/js/views/Projects/Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/views/Projects/Tasks.vue?vue&type=script&lang=js&");
/* harmony import */ var _Tasks_vue_vue_type_style_index_0_id_4a3ab3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css& */ "./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_4a3ab3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tasks_vue_vue_type_template_id_4a3ab3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4a3ab3f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Projects/Tasks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Projects/Tasks.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Projects/Tasks.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_4a3ab3f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=style&index=0&id=4a3ab3f8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Projects/Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Projects/Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_4a3ab3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_4a3ab3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_4a3ab3f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Tasks.vue?vue&type=template&id=4a3ab3f8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-12 grid-margin " }, [
    _c(
      "div",
      { staticClass: "d-flex justify-content-between align-items-center mb-5" },
      [
        _c("div", [
          _c("p", { staticClass: "card-title h3" }, [
            _vm._v(_vm._s(_vm.category_name || ""))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0 text-muted" }, [
            _vm._v(
              "\n                Please check the progress status of your project below.\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div")
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "table-holder  mt-4",
        on: {
          wheel: function($event) {
            $event.preventDefault()
            return _vm.wheelHorizontal($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            ref: "table",
            staticClass: "table-responsive",
            on: {
              scroll: function($event) {
                $event.preventDefault()
                return _vm.scrollHorizontal($event)
              }
            }
          },
          [
            _c("table", { staticClass: "table " }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "float-left pb-0 border-0 pl-0" }, [
                    _c("span", { staticClass: "bg-warning p-2 mb-0" }, [
                      _vm._v("IN PROGRESS")
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: " p-2 mb-0" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.inProgress.length) +
                          " TASK"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Assignee")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Due Date")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Priority")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Progress")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.inProgress, function(task) {
                  return _c("tr", { key: task.id }, [
                    _c("td", {}, [
                      _c("span", { staticClass: "box float-left mr-2" }),
                      _vm._v(" "),
                      _c("span", { staticStyle: { "max-width": "100%" } }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(task.name)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "d-flex justify-content-center" }, [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "name" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.getPhotoFromName(task.user.fullName)) +
                              "\n                                "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(task.end_date))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        attrs: {
                          src: "/images/" + _vm.priority[task.priority],
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "justify-content-center" }, [
                      _c(
                        "div",
                        { staticClass: " d-flex justify-content-center" },
                        [
                          _c(
                            "div",
                            {
                              class:
                                "mt-1 progress " +
                                (task.status == 2
                                  ? "progress-paused"
                                  : "progress-running")
                            },
                            [
                              _c("div", {
                                class:
                                  "progress-bar " +
                                  (task.status == 2
                                    ? "bg-danger"
                                    : "bg-success"),
                                style: "width: " + task.progress + "%",
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": task.progress,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          task.status == 2
                            ? _c("div", { staticClass: "text-danger mx-3" }, [
                                _c("i", { staticClass: "fa fa-pause" })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          task.status == 2
                            ? _c("div", [
                                _c("small", [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(task.hours) +
                                      ":" +
                                      _vm._s(task.minutes) +
                                      ":" +
                                      _vm._s(task.seconds) +
                                      "\n                                    "
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _vm.tasks.length == 0
              ? _c("h4", { staticClass: "text-center mt-5 text-light" }, [
                  _vm._v("\n                No Task Found\n            ")
                ])
              : _vm._e()
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "table-holder  mt-4 ",
        on: {
          wheel: function($event) {
            $event.preventDefault()
            return _vm.wheelHorizontal($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            ref: "table",
            staticClass: "table-responsive",
            on: {
              scroll: function($event) {
                $event.preventDefault()
                return _vm.scrollHorizontal($event)
              }
            }
          },
          [
            _c("table", { staticClass: "table " }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "float-left pb-0 border-0 pl-0" }, [
                    _c("span", { staticClass: "bg-dark p-2 mb-0" }, [
                      _vm._v("OPEN")
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: " p-2 mb-0" }, [
                      _vm._v(_vm._s(_vm.open.length) + " TASK")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Assignee")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Due Date")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Priority")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Progress")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.open, function(task) {
                  return _c("tr", { key: task.id }, [
                    _c("td", [
                      _c("span", { staticClass: "box float-left mr-2" }),
                      _vm._v(" "),
                      _c("span", { staticStyle: { width: "100%" } }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(task.name)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "d-flex justify-content-center" }, [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "name" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.getPhotoFromName(task.user.fullName)) +
                              "\n                                "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(task.end_date))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        attrs: {
                          src: "/images/" + _vm.priority[task.priority],
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "justify-content-center" }, [
                      _c(
                        "div",
                        { staticClass: " d-flex justify-content-center" },
                        [
                          _c(
                            "div",
                            {
                              class:
                                "mt-1 progress " +
                                (task.status == 2
                                  ? "progress-paused"
                                  : "progress-running")
                            },
                            [
                              _c("div", {
                                class:
                                  "progress-bar " +
                                  (task.status == 2
                                    ? "bg-danger"
                                    : "bg-success"),
                                style: "width: " + task.progress + "%",
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": task.progress,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          task.status == 2
                            ? _c("div", { staticClass: "text-danger mx-2" }, [
                                _c("i", { staticClass: "fa fa-pause" })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          task.status == 2
                            ? _c("div", { staticClass: "pr-2" }, [
                                _c("small", [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(task.hours) +
                                      ":" +
                                      _vm._s(task.minutes) +
                                      ":" +
                                      _vm._s(task.seconds) +
                                      "\n                                    "
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _vm.tasks.length == 0
              ? _c("h4", { staticClass: "text-center mt-5 text-light" }, [
                  _vm._v("\n                No Task Found\n            ")
                ])
              : _vm._e()
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "table-holder  mt-4",
        on: {
          wheel: function($event) {
            $event.preventDefault()
            return _vm.wheelHorizontal($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            ref: "table",
            staticClass: "table-responsive",
            on: {
              scroll: function($event) {
                $event.preventDefault()
                return _vm.scrollHorizontal($event)
              }
            }
          },
          [
            _c("table", { staticClass: "table " }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "float-left pb-0 border-0 pl-0" }, [
                    _c("span", { staticClass: "bg-success p-2 mb-0" }, [
                      _vm._v("COMPLETED")
                    ]),
                    _c("small", { staticClass: " p-2 mb-0" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.completed.length) +
                          " TASK"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Assignee")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Due Date")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Priority")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "15%" } }, [
                    _vm._v("Progress")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.completed, function(task) {
                  return _c("tr", { key: task.id }, [
                    _c("td", [
                      _c("span", { staticClass: "box float-left mr-2" }),
                      _vm._v(" "),
                      _c("span", { staticStyle: { "max-width": "100%" } }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(task.name)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "d-flex justify-content-center" }, [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "name" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.getPhotoFromName(task.user.fullName)) +
                              "\n                                "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(task.end_date))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        attrs: {
                          src: "/images/" + _vm.priority[task.priority],
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "justify-content-center" }, [
                      _c(
                        "div",
                        { staticClass: " d-flex justify-content-center" },
                        [
                          _c(
                            "div",
                            {
                              class:
                                "mt-1 progress " +
                                (task.status == 2
                                  ? "progress-paused"
                                  : "progress-running")
                            },
                            [
                              _c("div", {
                                class:
                                  "progress-bar " +
                                  (task.status == 2
                                    ? "bg-danger"
                                    : "bg-success"),
                                style: "width: " + task.progress + "%",
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": task.progress,
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          task.status == 2
                            ? _c("div", { staticClass: "text-danger mx-3" }, [
                                _c("i", { staticClass: "fa fa-pause" })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          task.status == 2
                            ? _c("div", [
                                _c("small", [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(task.hours) +
                                      ":" +
                                      _vm._s(task.minutes) +
                                      ":" +
                                      _vm._s(task.seconds) +
                                      "\n                                    "
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _vm.tasks.length == 0
              ? _c("h4", { staticClass: "text-center mt-5 text-light" }, [
                  _vm._v("\n                No Task Found\n            ")
                ])
              : _vm._e()
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);