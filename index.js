var fs = require('fs');
var path = require('path');

module.exports = function(dirname) {
  return fs.readdirSync(dirname).reduce((mod, file) => { 
    var name = file.replace('.js', '')
    if (name != 'index') {
      mod[name] = require(path.join(dirname, file.replace('.js', '')));
    }
    return mod; 
  }, {});
}
