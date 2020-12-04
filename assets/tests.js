'use strict';

define("ember-github-adapter/tests/integration/components/ccv-nav-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | ccv-nav', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <CcvNav />
                */
                {
                  id: "IRDe8kR8",
                  block: "{\"symbols\":[],\"statements\":[[5,\"ccv-nav\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <CcvNav>
                        template block text
                      </CcvNav>
                    
                */
                {
                  id: "XngO3fwX",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"ccv-nav\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Footer />
                */
                {
                  id: "DPEYWKz2",
                  block: "{\"symbols\":[],\"statements\":[[5,\"footer\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Footer>
                        template block text
                      </Footer>
                    
                */
                {
                  id: "sm1w5HXY",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"footer\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/hero-art-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | hero-art', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <HeroArt />
                */
                {
                  id: "dTf2A2xn",
                  block: "{\"symbols\":[],\"statements\":[[5,\"hero-art\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <HeroArt>
                        template block text
                      </HeroArt>
                    
                */
                {
                  id: "tACA+yc9",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"hero-art\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/incident-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | incident', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Incident />
                */
                {
                  id: "oLMcg8xy",
                  block: "{\"symbols\":[],\"statements\":[[5,\"incident\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Incident>
                        template block text
                      </Incident>
                    
                */
                {
                  id: "jNnk1QdO",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"incident\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/investigating-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | investigating', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Investigating />
                */
                {
                  id: "SKuRXyts",
                  block: "{\"symbols\":[],\"statements\":[[5,\"investigating\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Investigating>
                        template block text
                      </Investigating>
                    
                */
                {
                  id: "+6JxzfNV",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"investigating\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/issue-head-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | issue-head', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <IssueHead />
                */
                {
                  id: "6u+beP8o",
                  block: "{\"symbols\":[],\"statements\":[[5,\"issue-head\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <IssueHead>
                        template block text
                      </IssueHead>
                    
                */
                {
                  id: "ZAHrJ4jZ",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"issue-head\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/past-incident-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | past-incident', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <PastIncident />
                */
                {
                  id: "sHhVOgzG",
                  block: "{\"symbols\":[],\"statements\":[[5,\"past-incident\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <PastIncident>
                        template block text
                      </PastIncident>
                    
                */
                {
                  id: "Wy6NfkwV",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"past-incident\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/repo-box-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | repo-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <RepoBox />
                */
                {
                  id: "9JQtUy3i",
                  block: "{\"symbols\":[],\"statements\":[[5,\"repo-box\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <RepoBox>
                        template block text
                      </RepoBox>
                    
                */
                {
                  id: "EaaBkb7t",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"repo-box\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/resolved-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | resolved', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Resolved />
                */
                {
                  id: "zgneZBcf",
                  block: "{\"symbols\":[],\"statements\":[[5,\"resolved\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Resolved>
                        template block text
                      </Resolved>
                    
                */
                {
                  id: "QwmpLmmF",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"resolved\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/scheduled-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | scheduled', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Scheduled />
                */
                {
                  id: "/UWWnOy4",
                  block: "{\"symbols\":[],\"statements\":[[5,\"scheduled\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Scheduled>
                        template block text
                      </Scheduled>
                    
                */
                {
                  id: "qqLTedZu",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"scheduled\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/integration/components/update-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | update', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders',
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Update />
                */
                {
                  id: "lwBFOKEa",
                  block: "{\"symbols\":[],\"statements\":[[5,\"update\",[],[[],[]]]],\"hasEval\":false}",
                  meta: {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <Update>
                        template block text
                      </Update>
                    
                */
                {
                  id: "jI2SiSnS",
                  block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"update\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  meta: {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-github-adapter/tests/test-helper", ["ember-github-adapter/app", "ember-github-adapter/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-github-adapter/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("ember-github-adapter/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("ember-github-adapter/tests/unit/models/issue-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | issue', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('issue', {});
      assert.ok(model);
    });
  });
});
define("ember-github-adapter/tests/unit/models/label-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | label', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('label', {});
      assert.ok(model);
    });
  });
});
define("ember-github-adapter/tests/unit/models/note-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | note', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('note', {});
      assert.ok(model);
    });
  });
});
define("ember-github-adapter/tests/unit/models/org-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | org', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('org', {});
      assert.ok(model);
    });
  });
});
define("ember-github-adapter/tests/unit/models/repository-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | repository', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('repository', {});
      assert.ok(model);
    });
  });
});
define("ember-github-adapter/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("ember-github-adapter/tests/unit/routes/banner-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | banner', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:banner');
      assert.ok(route);
    });
  });
});
define("ember-github-adapter/tests/unit/routes/history-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | history', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:history');
      assert.ok(route);
    });
  });
});
define("ember-github-adapter/tests/unit/routes/history/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | history/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:history/index');
      assert.ok(route);
    });
  });
});
define("ember-github-adapter/tests/unit/routes/history/service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | history/service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:history/service');
      assert.ok(route);
    });
  });
});
define("ember-github-adapter/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("ember-github-adapter/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('application', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-github-adapter/tests/unit/serializers/issue-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | issue', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('issue');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('issue', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-github-adapter/tests/unit/serializers/note-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | note', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('note');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('note', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-github-adapter/tests/unit/serializers/org-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | org', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('org');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('org', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-github-adapter/tests/unit/serializers/repository-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | repository', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('repository');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('repository', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('ember-github-adapter/config/environment', [], function() {
  var prefix = 'ember-github-adapter';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-github-adapter/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
