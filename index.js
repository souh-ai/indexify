var fs = require('fs');
var path = require('path');

module.exports = function(dirname) {
  return fs.readdirSync(dirname).reduce((mod, file) => { 
    console.log(file);
    if (file.indexOf('.js') > -1) {
      var name = file.replace('.js', '');
      if (name != 'index') {
        mod[name] = require(path.join(dirname, file.replace('.js', '')));
      }
    } else {
      var filepath = path.join(dirname, file);
      const stats = fs.statSync(filepath);
      if (stats.isDirectory()) {
        mod[file] = require(path.join(dirname, file));
      }
    }
    
    return mod; 
  }, {});
}
