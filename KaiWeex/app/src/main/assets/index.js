/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var __weex_template__ = __webpack_require__(8)
	var __weex_style__ = __webpack_require__(9)
	var __weex_script__ = __webpack_require__(10)
	var __weex_data__ = __webpack_require__(12)

	__weex_define__('@weex-component/2db5b02b2b2467ace4cdd68021452568', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/2db5b02b2b2467ace4cdd68021452568',undefined,__weex_data__)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/grid-test', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return 'sectionTitle=' + (this.sectionTitle)}
	      },
	      "events": {
	        "click": function ($event) {this.onViewClick(1,$event)}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return 'sectionTitle2=' + (this.sectionTitle2)}
	      },
	      "events": {
	        "click": function ($event) {this.onViewClick('second',$event)}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return 'sectionTitle3=' + (this.sectionTitle3)}
	      },
	      "events": {
	        "click": function ($event) {this.onViewClick(this.sectionTitle3,$event)}
	      },
	      "style": {
	        "lines": 2,
	        "textOverflow": "ellipsis"
	      }
	    },
	    {
	      "type": "div",
	      "repeat": {
	        "expression": function () {return this.list},
	        "key": "i",
	        "value": "v"
	      },
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.v},
	            "key": "k",
	            "value": "text"
	          },
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "vid": function () {return (this.i) + '_' + (this.k) + '_' + (this.text)},
	                    "value": function () {return (this.i) + ' - ' + (this.k) + ' - ' + (this.text)}
	                  },
	                  "events": {
	                    "click": "onTextClick"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "style": {
	        "marginTop": 20
	      },
	      "attr": {
	        "value": "second list"
	      }
	    },
	    {
	      "type": "div",
	      "repeat": {
	        "expression": function () {return this.list2},
	        "key": "i",
	        "value": "v"
	      },
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.v},
	            "key": "k",
	            "value": "obj"
	          },
	          "classList": [
	            "item"
	          ],
	          "style": {
	            "flex": function () {return this.obj.flex}
	          },
	          "children": [
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "id2": function () {return (this.i) + '_' + (this.k) + '_' + (this.obj.name)},
	                    "value": function () {return (this.i) + ' - ' + (this.k) + ' - ' + (this.obj.name)}
	                  },
	                  "events": {
	                    "click": "onTextClick"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "row": {
	    "flexDirection": "row",
	    "height": 80
	  },
	  "item": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderWidth": 2
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var _stringify = __webpack_require__(5);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    methods: {
	        onTextClick: function onTextClick(e) {
	            console.log("onTextClick " + (0, _stringify2.default)(e));
	        },
	        onViewClick: function onViewClick(arg, e) {
	            console.log("onTextClick arg=" + arg + " e=" + (0, _stringify2.default)(e));
	            this.$dispatch('notifyFromChild', arg);
	            this.$broadcast('notifyFromChild', 'broadcast' + arg);
	            this.$emit('customType1', 'from grid-test ');
	        }
	    },
	    data: function () {return {
	        sectionTitle3: "default title3 长长的文本啊，哈哈 The property color support multiple fomats of values, contains rgb, rgba, #fff, #ffffff, named-color 足足有4行的文本",
	        list: [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']],
	        list2: [[{
	            name: 'A2',
	            flex: 1
	        }, {
	            name: 'B',
	            flex: 2
	        }, {
	            name: 'C',
	            flex: 3
	        }], [{
	            name: 'D',
	            flex: 1
	        }, {
	            name: 'E',
	            flex: 1
	        }, {
	            name: 'F',
	            flex: 1
	        }], [{
	            name: 'G',
	            flex: 1
	        }, {
	            name: 'H',
	            flex: 2
	        }, {
	            name: 'I',
	            flex: 1
	        }]]
	    }},
	    ready: function ready() {
	        this.$on('notifyFromParent', function (e) {
	            console.log('notify from parent, e.detail = ' + e.detail);
	        });
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(7)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "attr": {
	    "value": "//根节点官方要求只能是container、list、scroller之一, 但实际用div也行\n        //dispatch 可以同级用， 不能往下级we用， 能往上级用\n        //broadcast 可以同级用， 可以往下级we用， 不能往上级用\n        //emit 貌似不能跨文件调用到events里的function"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "ct"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "style": {
	            "width": 100,
	            "height": 100
	          },
	          "attr": {
	            "src": function () {return this.img}
	          }
	        },
	        {
	          "type": "text",
	          "id": "id_weex2",
	          "attr": {
	            "customid": "xxxx-test",
	            "value": "Hello Weex1342!"
	          },
	          "style": {
	            "fontSize": 28,
	            "color": "rgb(255,0,0)"
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 28,
	            "color": "rgba(255,0,0,0.2)"
	          },
	          "classList": [
	            "singleLine"
	          ],
	          "attr": {
	            "value": "long long long long text!, long long long long text2!, long long long long text3!"
	          }
	        }
	      ]
	    },
	    {
	      "type": "grid-test",
	      "id": "id_grid_test",
	      "attr": {
	        "sectionTitle": "test Title",
	        "sectionTitle2": function () {return 'height=' + (this.ctHeight)}
	      },
	      "style": {
	        "marginTop": 40
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 28,
	        "color": "rgb(255,0,0)"
	      },
	      "events": {
	        "click": function ($event) {this.onClick('returnWeex2',$event)}
	      },
	      "attr": {
	        "value": "Return to Weex2 text"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 28,
	        "color": "rgb(255,0,0)"
	      },
	      "events": {
	        "click": function ($event) {this.onClick('getWeex2Info',$event)}
	      },
	      "attr": {
	        "value": "operate Weex2 text"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 28,
	        "color": "rgb(255,0,0)"
	      },
	      "events": {
	        "click": function ($event) {this.onClick('addNumber',$event)}
	      },
	      "attr": {
	        "value": "add number"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 28,
	        "color": "rgb(255,0,0)"
	      },
	      "events": {
	        "click": function ($event) {this.onClick('minusNumber',$event)}
	      },
	      "attr": {
	        "value": "minus number"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 28,
	        "color": "rgb(255,0,0)"
	      },
	      "events": {
	        "click": function ($event) {this.onClick('testToast',$event)}
	      },
	      "attr": {
	        "value": "test Toast"
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 20,
	        "color": "rgb(0,255,0)"
	      },
	      "attr": {
	        "value": function () {return this.result}
	      }
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "ct": {
	    "width": 750,
	    "alignItems": "flex-start"
	  },
	  "img": {
	    "marginBottom": 20
	  },
	  "singleLine": {
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(5);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dom = __weex_require__('@weex-module/dom');
	module.exports = {
	    data: function () {return {
	        ctHeight: -1,
	        img: 'http://gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg',
	        result: '此处显示结果'
	    }},
	    methods: {
	        onClick: function onClick(id) {
	            console.log('onclick id=' + id);
	            if (id == 'returnWeex2') {
	                var weexTitle2 = this.$el('id_weex2');
	                console.log('this dom el is ' + 'type(weexTitle2)' + "value: " + weexTitle2);
	                dom.scrollToElement(weexTitle2, {
	                    offset: -80
	                });
	                console.log('this dom vm is ' + this.$vm('id_weex2'));
	                this.$dispatch('notifyFromChild', 'come for same grade. dispatch');
	                this.$dispatch('notifyFromChild', 'come for same grade. broadcast');
	            } else if (id == 'getWeex2Info') {
	                var gridTest = this.$('id_grid_test');
	                console.log('this dom $(\'gridTest\') is: ' + 'JSON.stringify(gridTest)');
	                gridTest.sectionTitle3 = "change the text value for 3";
	                this.$broadcast('notifyFromParent', "haha come from parent");
	            } else if (id == 'addNumber') {
	                var utils = __webpack_require__(11);
	                this.result = 'use common utils: add(3,5)=' + utils.add(3, 5);
	                this.$emit('customType1', 'haha ' + id);
	            } else if (id == 'minusNumber') {
	                var utils = __webpack_require__(11);
	                this.result = 'use common utils: minus(3,5)=' + utils.minus(3, 5);
	                this.$emit('customType2', 'haha2 ' + id);
	            } else if (id == 'testToast') {
	                var utils = __webpack_require__(11);
	                utils.toast("this is toast from other file");
	            }
	        },
	        foo: function foo(fn) {
	            return fn();
	        },
	        bar: function bar() {
	            console.log('from bar() this is : ' + __webpack_require__(11).simpleStringify(this));
	            return this.result;
	        }
	    },
	    init: function init() {
	        console.log('ViewModel constructor begins');
	    },
	    created: function created() {
	        console.log('Data observation finished');
	    },
	    ready: function ready() {
	        console.log('Virtual DOM finished, config is: ' + (0, _stringify2.default)(this.$getConfig()));
	        this.ctHeight = this.$getConfig().env.deviceHeight;
	        this.$on('notifyFromChild', function (e) {
	            console.log('notify from child, e.detail = ' + e.detail);
	        });
	        console.log('direct log bar() result:' + this.bar());
	        console.log('log bar() by foo() result:' + this.foo(this.bar.bind(this)));
	    },
	    events: {
	        customType1: function customType1(e) {
	            console.log('customType1: ' + (0, _stringify2.default)(e));
	        },
	        customType2: function customType2(e) {
	            console.log('customType2: ' + (0, _stringify2.default)(e));
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 11 */
/***/ function(module, exports) {

	
	var modal;
	__weex_define__('@weex-temp/xyz', function (__weex_require__) {
	  modal = __weex_require__('@weex-module/modal');
	});

	function add(arg1, arg2) {
	    return arg1 + arg2;
	}

	function minus(arg1, arg2) {
	    return arg1 - arg2;
	}

	function toast(message) {
	    // let modal = require('@weex-module/modal');
	    modal.toast({message:message, length:1});
	}

	function simpleStringify(object) {
	    var simpleObject = {};
	    for (var prop in object ) {
	        // console.log('simpleStringify typeof(' + prop + ')=' + typeof(object[prop]));
	        if (!object.hasOwnProperty(prop)){
	            continue;
	        }
	        if (typeof(object[prop]) == 'object'){
	            continue;
	        }
	        if (typeof(object[prop]) == 'function'){
	            continue;
	        }
	        simpleObject[prop] = object[prop];
	    }
	    return JSON.stringify(simpleObject); // returns cleaned up JSON
	}

	module.exports = {
	        add: add,
	        minus: minus,
	        toast: toast,
	        simpleStringify: simpleStringify,
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = module.exports = {
	        ctHeight: -1,
	        img: 'http://gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg',
	        result: '此处显示结果 data from script type=\'data\'',
	    }

/***/ }
/******/ ]);