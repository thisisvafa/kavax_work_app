"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Projects_Projects_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./resources/js/services/user/user.service.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.getCategories();
  },
  props: {
    projects: Array
  },
  data: function data() {
    return {
      categories: [],
      category: [],
      project_name: null,
      objective: null,
      budget: null,
      business_name: null,
      employee_size: null,
      selectCategory: false,
      businessNameError: false,
      projectNameError: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.category.length == 0)) {
                  _context.next = 5;
                  break;
                }

                _this.selectCategory = true;
                return _context.abrupt("return");

              case 5:
                _this.selectCategory = false;

              case 6:
                if (_this.project_name) {
                  _context.next = 11;
                  break;
                }

                _this.projectNameError = true;
                return _context.abrupt("return");

              case 11:
                _this.projectNameError = false;

              case 12:
                if (_this.business_name) {
                  _context.next = 17;
                  break;
                }

                _this.businessNameError = true;
                return _context.abrupt("return");

              case 17:
                _this.businessNameError = false;

              case 18:
                _this.selectCategory = false;
                data = {
                  category: JSON.stringify(_this.category),
                  name: _this.business_name,
                  objective: _this.objective,
                  project_name: _this.project_name,
                  employee_size: _this.employee_size,
                  budget: _this.budget
                };
                _context.next = 22;
                return _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["default"].Post("project/create", data);

              case 22:
                response = _context.sent;

                _this.projects.push(response.data.project);

                $("#newProject").modal("hide");

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCategories: function getCategories() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["default"].Get("project/categories");

              case 2:
                response = _context2.sent;
                _this2.categories = response.data.categories; // console.log(response);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user/user.service */ "./resources/js/services/user/user.service.js");
/* harmony import */ var _NewProject_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProject.vue */ "./resources/js/views/Projects/NewProject.vue");
/* harmony import */ var _adamdehaven_vue_custom_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adamdehaven/vue-custom-tooltip */ "./node_modules/@adamdehaven/vue-custom-tooltip/dist/vue-custom-tooltip.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    global_project_id: Number
  },
  created: function created() {
    this.getProjects();
    this.selectedProjectID = this.global_project_id; // console.log(this.selectedProjectID);
  },
  data: function data() {
    return {
      openedProjects: [],
      closedProjects: [],
      selectedProjectID: null
    };
  },
  methods: {
    getProgressByCategory: function getProgressByCategory(category_id, progressPerCategory) {
      var progress = "0";

      for (var i = 0; i < progressPerCategory.length; i++) {
        if (progressPerCategory[i].category == category_id) {
          progress = progressPerCategory[i].sumProgress;
          break;
        }
      }

      return progress + "%";
    },
    onChange: function onChange(project) {
      this.$parent.global_project = project;
      this.$parent.global_project_id = project.id;
      localStorage.setItem("project", JSON.stringify(project));
    },
    getProjects: function getProjects() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var responnse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["default"].Get("projects");

              case 2:
                responnse = _context.sent;

                // console.log(responnse);
                if (responnse.data.success == 1) {
                  // if(responnse.data.projects.opened.length > 0){
                  // this.onChange(responnse.data.projects.opened[0])
                  // }
                  _this.openedProjects = responnse.data.projects.opened;
                  _this.closedProjects = responnse.data.projects.closed;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCategoryImage: function getCategoryImage(category) {
      if (category == "Web Development") {
        return "web";
      } else if (category == "App Development") {
        return "mobile";
      } else if (category == "Video Marketing") {
        return "video";
      } else if (category == "Digital Marketing") {
        return "mic";
      } else {
        return "typewriter";
      }
    },
    isMobile: function isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    NewProject: _NewProject_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueCustomTooltip: _adamdehaven_vue_custom_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

watch: {}

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nul[data-v-f5368c42] {\n    list-style-type: none;\n}\nli[data-v-f5368c42] {\n    display: inline-block;\n    text-align: center;\n    width: 180px;\n}\ninput[type=\"checkbox\"][data-v-f5368c42] {\n    display: none;\n}\nlabel[data-v-f5368c42] {\n    padding: 10px;\n    display: block;\n    position: relative;\n    margin: 10px;\n    cursor: pointer;\n    background-color: #2d2d2d;\n    min-height: 105px;\n}\nlabel[data-v-f5368c42]:before {\n    background-color: white;\n    color: white;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    border: 1px solid grey;\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    width: 25px;\n    height: 25px;\n    text-align: center;\n    line-height: 28px;\n    transition-duration: 0.4s;\n    transform: scale(0);\n}\nlabel img[data-v-f5368c42] {\n    height: 24px;\n    width: 24px;\n    margin-bottom: 20px;\n    transition-duration: 0.2s;\n    transform-origin: 50% 50%;\n}\n:checked + label[data-v-f5368c42] {\n    border: 1px solid #e29826;\n    color: #e29826;\n}\n\n/* :checked + label:before {\n    content: \"✓\";\n    background-color: grey;\n    transform: scale(1);\n    border: 1px solid rgb(245, 229, 15);\n} */\n:checked + label img[data-v-f5368c42] {\n    transform: scale(0.9);\n    box-shadow: 0 0 5px #333;\n    z-index: -1;\n}\n.bg-dark[data-v-f5368c42] {\n    background-color: #1d1d1d;\n}\n.form-control[data-v-f5368c42] {\n    border: 1px solid #74726f;\n    color: #fff;\n}\n.dark-theme .btn-outline-light[data-v-f5368c42] {\n    color: #fff;\n}\n.dark-theme .btn-outline-light[data-v-f5368c42]:hover {\n    color: #e29826;\n    border-color: #e29826;\n    background: none;\n}\n.bg-transparent[data-v-f5368c42] {\n    background-color: transparent;\n}\n.close[data-v-f5368c42] {\n    padding: 1rem 0rem 0.5rem;\n    margin: -75px -26px -25px auto;\n    color: #fff;\n    font-size: 25px;\n}\n@media (min-width: 576px) {\n.modal-dialog[data-v-f5368c42] {\n        max-width: 800px;\n        margin: 30px auto;\n}\n.modal-dialog-scrollable[data-v-f5368c42] {\n        max-height: calc(100% - 60px);\n}\n.modal-dialog-scrollable .modal-content[data-v-f5368c42] {\n        max-height: calc(100vh - 60px);\n}\n.modal-dialog-centered[data-v-f5368c42] {\n        min-height: calc(100% - 60px);\n}\n.modal-dialog-centered[data-v-f5368c42]::before {\n        height: calc(100vh - 60px);\n}\n.modal-sm[data-v-f5368c42] {\n        max-width: 300px;\n}\n}\n.dark-theme .modal .modal-dialog .modal-content[data-v-f5368c42] {\nbackground: #1d1d1d;\nborder: 1px solid #111115;\n}\ninput[data-v-f5368c42]:focus {\n    border: 1px solid #e29826;\n}\nsmall[data-v-f5368c42] {\n    font-size: 60%;\n}\n.categories[data-v-f5368c42] {\n    overflow-x: auto;\n}\n.input-symbol-euro[data-v-f5368c42] {\n        position: relative;\n}\n.input-symbol-euro input[data-v-f5368c42] {\n        padding-left: 28px;\n}\n.input-symbol-euro[data-v-f5368c42]:before {\n        position: absolute;\n        top: 10px;\n        content: \"£\";\n        left: 15px;\n        padding-right: 15px;\n        /* right: 15px; */\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dark-theme .accordion .card .card-header a[aria-expanded=\"false\"][data-v-73de1000]:before {\n    content: \"\\2303\";\n    font-size: 28px;\n    transform: rotate(180deg);\n    margin-top: -10px;\n    color: #fff;\n}\n.dark-theme .accordion .card .card-header a[aria-expanded=\"true\"][data-v-73de1000]:before {\n    content: \"\\2303\";\n    font-size: 28px;\n    /* margin-top: -10px; */\n    color: #fff;\n}\n.accordion .card .card-header[data-v-73de1000] {\n    background-color: #232220;\n    border: none;\n    padding: 1rem;\n}\n.dark-theme .accordion.accordion-bordered .open[data-v-73de1000] {\n    border-top: 1px solid #7155b2;\n    margin: 0;\n    padding: 0 0rem;\n}\n.dark-theme .accordion.accordion-bordered .closed[data-v-73de1000] {\n    border-top: 1px solid #569e4c;\n    margin: 0;\n    padding: 0 0rem;\n}\n.accordion .card[data-v-73de1000],\n.accordion.accordion-bordered[data-v-73de1000] {\n    background-color: rgba(0, 0, 0, 0);\n    box-shadow: none;\n    border-top: none;\n}\n.project-bg[data-v-73de1000],\n.card-header[data-v-73de1000] {\n    background-color: #232220;\n}\n.project-bg[data-v-73de1000]:hover {\n    border: 1px solid #74726f;\n}\n.card-footer[data-v-73de1000] {\n    border-top: none;\n    padding-left: 0px;\n}\n.list-inline li[data-v-73de1000] {\n    padding: 10px;\n}\n.progress[data-v-73de1000] {\n    background-color: #00000000;\n    border: 1px solid #068d50;\n}\n.dark-theme .btn[data-v-73de1000] {\n    color: #fff;\n}\n.btn-outline-secondary[data-v-73de1000],\n.editable-container.editable-inline\n    .editableform\n    .control-group\n    .editable-buttons\n    .editable-cancel[data-v-73de1000] {\n    color: #fff;\n    border-color: #fff;\n}\ninput[type=\"radio\"][data-v-73de1000] {\n    display: none;\n}\n:checked + label[data-v-73de1000] {\n    border-top: 2px solid #e29826 !important;\n    border-left: 2px solid #e29826 !important;\n    border-right: 2px solid #e29826 !important;\n    border-bottom: 2px solid #e29826 !important;\n    background-color: #332f2a;\n    /* color: #e29826; */\n}\n.project-bg[data-v-73de1000] + :checked {\n    /* border: 3px solid #e29826; */\n    background-color: #332f2a;\n    /* color: #e29826; */\n}\n:checked + label[data-v-73de1000]:before {\n    content: \"\\2714\"; /*   \"✓\";*/\n    background-color: #e29826;\n    transform: scale(1);\n    /* border: 1px solid #e29826; */\n    margin: auto -32px -20px auto;\n    color: #fff;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n}\n.dark-theme .btn-outline-light[data-v-73de1000] {\n    color: #fff;\n}\n.dark-theme .btn-outline-light[data-v-73de1000]:hover {\n    color: #e29826;\n    border-color: #e29826;\n    background: none;\n}\n.card-body h3[data-v-73de1000] {\n    word-break: break-word;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_style_index_0_id_f5368c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_style_index_0_id_f5368c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_style_index_0_id_f5368c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_73de1000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_73de1000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_73de1000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Projects/NewProject.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Projects/NewProject.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewProject_vue_vue_type_template_id_f5368c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProject.vue?vue&type=template&id=f5368c42&scoped=true& */ "./resources/js/views/Projects/NewProject.vue?vue&type=template&id=f5368c42&scoped=true&");
/* harmony import */ var _NewProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProject.vue?vue&type=script&lang=js& */ "./resources/js/views/Projects/NewProject.vue?vue&type=script&lang=js&");
/* harmony import */ var _NewProject_vue_vue_type_style_index_0_id_f5368c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css& */ "./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewProject_vue_vue_type_template_id_f5368c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewProject_vue_vue_type_template_id_f5368c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f5368c42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Projects/NewProject.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Projects/Projects.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Projects/Projects.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_vue_vue_type_template_id_73de1000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=73de1000&scoped=true& */ "./resources/js/views/Projects/Projects.vue?vue&type=template&id=73de1000&scoped=true&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/views/Projects/Projects.vue?vue&type=script&lang=js&");
/* harmony import */ var _Projects_vue_vue_type_style_index_0_id_73de1000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css& */ "./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_73de1000_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Projects_vue_vue_type_template_id_73de1000_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "73de1000",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Projects/Projects.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Projects/NewProject.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Projects/NewProject.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Projects/Projects.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Projects/Projects.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_style_index_0_id_f5368c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=style&index=0&id=f5368c42&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_id_73de1000_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=style&index=0&id=73de1000&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Projects/NewProject.vue?vue&type=template&id=f5368c42&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Projects/NewProject.vue?vue&type=template&id=f5368c42&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_template_id_f5368c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_template_id_f5368c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewProject_vue_vue_type_template_id_f5368c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewProject.vue?vue&type=template&id=f5368c42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=template&id=f5368c42&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Projects/Projects.vue?vue&type=template&id=73de1000&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Projects/Projects.vue?vue&type=template&id=73de1000&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_73de1000_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_73de1000_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_73de1000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=template&id=73de1000&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=template&id=73de1000&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=template&id=f5368c42&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/NewProject.vue?vue&type=template&id=f5368c42&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "newProject",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog ", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "pt-3",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "p-1" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12 text-center categories" },
                    [
                      _c(
                        "ul",
                        {
                          staticClass:
                            "list-group list-group-horizontal list-inline "
                        },
                        _vm._l(_vm.categories, function(cate) {
                          return _c("li", { key: cate.id }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.category,
                                  expression: "category"
                                }
                              ],
                              attrs: { type: "checkbox", id: cate.image },
                              domProps: {
                                value: cate.id,
                                checked: Array.isArray(_vm.category)
                                  ? _vm._i(_vm.category, cate.id) > -1
                                  : _vm.category
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.category,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = cate.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.category = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.category = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.category = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: cate.image } }, [
                              _c("img", {
                                attrs: { src: "/images/" + cate.image + ".svg" }
                              }),
                              _vm._v(" "),
                              _c("h6", [_vm._v(_vm._s(cate.name))])
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "small",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selectCategory,
                          expression: "selectCategory"
                        }
                      ],
                      staticClass: "text-danger ml-3 mb-4 mt-4"
                    },
                    [_vm._v("Please select a project category")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.project_name,
                            expression: "project_name"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "text",
                          placeholder: "Name of project / URL if applicable?"
                        },
                        domProps: { value: _vm.project_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.project_name = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.projectNameError,
                              expression: "projectNameError"
                            }
                          ],
                          staticClass: "text-danger  mb-4 mt-4"
                        },
                        [_vm._v("Please insert project name")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.objective,
                            expression: "objective"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "text",
                          placeholder:
                            "What is the primary business objective/goal for the project?"
                        },
                        domProps: { value: _vm.objective },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.objective = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group input-symbol-euro" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.budget,
                            expression: "budget"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "number",
                          placeholder: "Budget",
                          id: "budget"
                        },
                        domProps: { value: _vm.budget },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.budget = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v(
                          "Essentially digital projects vary\n                                    massively in their complexity - Your\n                                    budget will help us decide on the right\n                                    solution for your project."
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.business_name,
                            expression: "business_name"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "text",
                          placeholder: "What is the name of your business?"
                        },
                        domProps: { value: _vm.business_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.business_name = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.businessNameError,
                              expression: "businessNameError"
                            }
                          ],
                          staticClass: "text-danger  mb-4 mt-4"
                        },
                        [_vm._v("Please insert business name")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.employee_size,
                            expression: "employee_size"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: {
                          type: "text",
                          placeholder:
                            "How many employees work for your business?"
                        },
                        domProps: { value: _vm.employee_size },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.employee_size = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header  text-center" }, [
      _c("h5", { staticClass: "text-center" }, [
        _vm._v(
          "\n                    Please select one or multiple types of projects\n                "
        )
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close text-white",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-light btn-icon-text px-5 py-1",
          attrs: { type: "submit" }
        },
        [
          _vm._v(
            "\n                                    Submit\n                                "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=template&id=73de1000&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Projects/Projects.vue?vue&type=template&id=73de1000&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "col-12 grid-margin " },
    [
      _c(
        "div",
        {
          class:
            (!_vm.isMobile() ? "d-flex " : "") +
            "justify-content-between align-items-center mb-5"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { class: _vm.isMobile() ? "text-right mt-3" : "" }, [
            _vm._m(1)
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("h3", { staticClass: "col-12" }, [_vm._v("Projects")]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "mt-4" }, [
            _c(
              "div",
              {
                staticClass: "accordion accordion-bordered",
                attrs: { id: "accordion-1", role: "tablist" }
              },
              [
                _c("div", { staticClass: "card open" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "active collapse show",
                      attrs: {
                        id: "collapse-opened",
                        role: "tabpanel",
                        "aria-labelledby": "heading-opened",
                        "data-parent": "#accordion-1"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "card-body pt-4" },
                        _vm._l(_vm.openedProjects, function(project, index) {
                          return _c(
                            "div",
                            { key: project.id, staticClass: "project-bg mt-2" },
                            [
                              _c("input", {
                                attrs: {
                                  type: "radio",
                                  id: project.id,
                                  name: "projects",
                                  onchange: "onChange(project)"
                                },
                                domProps: {
                                  checked:
                                    _vm.$parent.global_project_id ==
                                      project.id || index == 0
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.onChange(project)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "card bg-gray",
                                  attrs: { for: project.id }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "card-body px-1 py-4" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between align-items-start"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "color-card" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "mb-0 color-card-head"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                        " +
                                                      _vm._s(
                                                        project.created_at
                                                      ) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "h3",
                                                { staticClass: "text-white" },
                                                [
                                                  _vm._v(
                                                    "\n                                                        " +
                                                      _vm._s(project.name) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "card-footer " }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between align-items-start align-middle"
                                      },
                                      [
                                        _c("div", [
                                          _c(
                                            "ul",
                                            {
                                              staticClass:
                                                "list-group list-group-horizontal list-inline"
                                            },
                                            _vm._l(project.categories, function(
                                              category
                                            ) {
                                              return _c(
                                                "li",
                                                { key: category.id },
                                                [
                                                  _c(
                                                    "VueCustomTooltip",
                                                    {
                                                      attrs: {
                                                        label: _vm.getProgressByCategory(
                                                          category.id,
                                                          project.progressPerCategory
                                                        ),
                                                        position: "is-top"
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            "/images/" +
                                                            category.image +
                                                            ".svg",
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            }),
                                            0
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", {}, [
                                          _c(
                                            "ul",
                                            {
                                              staticClass:
                                                "list-group list-group-horizontal list-unstyled align-middle"
                                            },
                                            [
                                              _c(
                                                "li",
                                                [
                                                  _c(
                                                    "VueCustomTooltip",
                                                    {
                                                      attrs: {
                                                        label:
                                                          "Overall progress",
                                                        position: "is-top"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "progress progress-md mt-2",
                                                          staticStyle: {
                                                            width: "100px"
                                                          }
                                                        },
                                                        [
                                                          _c("div", {
                                                            staticClass:
                                                              "progress-bar bg-success",
                                                            style:
                                                              "width: " +
                                                              parseInt(
                                                                project.progress
                                                              ) +
                                                              "%",
                                                            attrs: {
                                                              role:
                                                                "progressbar",
                                                              "aria-valuenow":
                                                                "5",
                                                              "aria-valuemin":
                                                                "0",
                                                              "aria-valuemax":
                                                                "100"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "li",
                                                {
                                                  staticClass:
                                                    "ml-1 text-success"
                                                },
                                                [
                                                  _c("small", [
                                                    _vm._v(
                                                      _vm._s(
                                                        parseInt(
                                                          project.progress
                                                        )
                                                      ) + "%"
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "mt-4" }, [
            _c(
              "div",
              {
                staticClass: "accordion accordion-bordered",
                attrs: { id: "accordion-2", role: "tablist" }
              },
              [
                _c("div", { staticClass: "card closed" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "active collapse show",
                      attrs: {
                        id: "collapse-closed",
                        role: "tabpanel",
                        "aria-labelledby": "heading-closed",
                        "data-parent": "#accordion-2"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "card-body pt-4" },
                        _vm._l(_vm.closedProjects, function(project) {
                          return _c(
                            "div",
                            { key: project.id, staticClass: "project-bg mt-2" },
                            [
                              _c("input", {
                                attrs: {
                                  type: "radio",
                                  id: project.id,
                                  name: "projects"
                                },
                                domProps: {
                                  checked:
                                    _vm.$parent.global_project_id == project.id
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.onChange(project)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "card bg-gray",
                                  attrs: { for: project.id }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "card-body px-1 py-4" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between align-items-start"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "color-card" },
                                            [
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "mb-0 color-card-head"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    \n                                                        " +
                                                      _vm._s(
                                                        new Date(
                                                          project.created_at
                                                        )
                                                          .toLocaleString()
                                                          .split(",")[0]
                                                      ) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "h2",
                                                { staticClass: "text-white " },
                                                [
                                                  _vm._v(
                                                    "\n                                                        " +
                                                      _vm._s(project.name) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "card-footer " }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-between align-items-start align-middle"
                                      },
                                      [
                                        _c("div", [
                                          _c(
                                            "ul",
                                            {
                                              staticClass:
                                                "list-group list-group-horizontal list-inline"
                                            },
                                            _vm._l(project.category, function(
                                              category
                                            ) {
                                              return _c(
                                                "li",
                                                { key: category.id },
                                                [
                                                  _c(
                                                    "VueCustomTooltip",
                                                    {
                                                      attrs: {
                                                        label: _vm.getProgressByCategory(
                                                          category.id,
                                                          project.progressPerCategory
                                                        ),
                                                        position: "is-top"
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src:
                                                            "/images/" +
                                                            category.image +
                                                            ".svg",
                                                          alt: "",
                                                          "data-toggle":
                                                            "tooltip",
                                                          "data-placement":
                                                            "right",
                                                          title: "Basic tooltip"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            }),
                                            0
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", {}, [
                                          _c(
                                            "ul",
                                            {
                                              staticClass:
                                                "list-group list-group-horizontal list-unstyled align-middle"
                                            },
                                            [
                                              _c(
                                                "li",
                                                [
                                                  _c(
                                                    "VueCustomTooltip",
                                                    {
                                                      attrs: {
                                                        label:
                                                          "Overall progress",
                                                        position: "is-top"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "progress progress-md mt-2",
                                                          staticStyle: {
                                                            width: "100px"
                                                          }
                                                        },
                                                        [
                                                          _c("div", {
                                                            staticClass:
                                                              "progress-bar bg-success",
                                                            style:
                                                              "width: " +
                                                              parseInt(
                                                                project.progress
                                                              ) +
                                                              "%",
                                                            attrs: {
                                                              role:
                                                                "progressbar",
                                                              "aria-valuenow":
                                                                "5",
                                                              "aria-valuemin":
                                                                "0",
                                                              "aria-valuemax":
                                                                "100"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "li",
                                                {
                                                  staticClass:
                                                    "ml-1 text-success"
                                                },
                                                [
                                                  _c("small", [
                                                    _vm._v(
                                                      "\n                                                                " +
                                                        _vm._s(
                                                          parseInt(
                                                            project.progress
                                                          )
                                                        ) +
                                                        "%"
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _vm.openedProjects.length == 0 && _vm.closedProjects.length == 0
            ? _c("h4", { staticClass: "text-center mt-5 text-light" }, [
                _vm._v("\n                No Project Found\n            ")
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("NewProject", { attrs: { projects: _vm.openedProjects } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "card-title h3" }, [
        _vm._v("Getting to know your project")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "mb-0 text-muted" }, [
        _vm._v(
          "\n                Answer a few quick questions to tell us all about your\n                project, the ideas you have for your project, and to share\n                any inspiration photos.\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-outline-light btn-icon-text",
        attrs: {
          type: "button",
          "data-toggle": "modal",
          "data-target": "#newProject"
        }
      },
      [
        _c("i", { staticClass: "mdi mdi-plus btn-icon-append" }),
        _vm._v("\n                Create Project Brief\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header",
        attrs: { role: "tab", id: "heading-opened" }
      },
      [
        _c("h6", { staticClass: "mb-0" }, [
          _c(
            "a",
            {
              attrs: {
                "data-toggle": "collapse",
                href: "#collapse-opened",
                "aria-expanded": "false",
                "aria-controls": "collapse-4"
              }
            },
            [
              _vm._v(
                "\n                                    Open\n                                "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "card-header",
        attrs: { role: "tab", id: "heading-closed" }
      },
      [
        _c("h6", { staticClass: "mb-0" }, [
          _c(
            "a",
            {
              attrs: {
                "data-toggle": "collapse",
                href: "#collapse-closed",
                "aria-expanded": "false",
                "aria-controls": "collapse-4"
              }
            },
            [
              _vm._v(
                "\n                                    Closed\n                                "
              )
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);