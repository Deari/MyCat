'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-core/register');
require('babel-polyfill');
var Repo = require("git-repository");

var PushDemo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var repo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Repo.open('dist', { init: true });

          case 3:
            repo = _context.sent;
            _context.next = 6;
            return repo.setRemote('origin', 'https://github.com/Deari/MyCat.git');

          case 6:
            _context.next = 8;
            return repo.add('--all .');

          case 8:
            _context.next = 10;
            return repo.commit('Commit message');

          case 10:
            _context.next = 12;
            return repo.push('origin', 'master');

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 14]]);
  }));

  return function PushDemo() {
    return _ref.apply(this, arguments);
  };
}();

function MyPlugin(options) {}
// 根据 options 配置你的插件


/*import Repo from "git-repository";

export default async () => {
  let repo = await  Repo.open
}*/

MyPlugin.prototype.apply = function (compiler) {
  compiler.plugin("compile", function (params) {
    console.log("The compiler is starting to compile...!");
  });

  compiler.plugin("compilation", function (compilation) {
    console.log("The compiler is starting a new compilation...");

    compilation.plugin("optimize", function () {
      console.log("The compilation is starting to optimize files...");
    });
  });

  compiler.plugin("emit", function (compilation, callback) {
    console.log("The compilation is going to emit files!!!!!!!!!");
    PushDemo();
    callback();
  });
};

module.exports = MyPlugin;
