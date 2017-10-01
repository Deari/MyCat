require('babel-core/register');
require('babel-polyfill');
const Repo = require("git-repository");


const PushDemo = async () => {
  try {
    let repo = await Repo.open('dist', {init: true});
    await repo.setRemote('origin', 'https://github.com/Deari/MyCat.git');
    await repo.add('--all .');
    await repo.commit('Commit message');
    await repo.push('origin', 'master');
  } catch (e) {
    console.log(e);
  }
};

function MyPlugin(options) {
  // 根据 options 配置你的插件
}

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


