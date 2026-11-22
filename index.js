var fs = require('fs');
var path = require('path');

module.exports = function(dirname, options={}) {
  if (options.json == undefined) {
    options.json = false;
  }

  return fs.readdirSync(dirname).reduce((mod, file) => { 
    var ext = path.extname(file);
    
    if (['.js', '.json'].indexOf(ext) > -1) {
      var name = file.replace(ext, '');
      var should = false;

      if (name != 'index' && (ext == '.js' || (ext == '.json' && options.json == true))) {
        should = true;
      }
      if (should) {
        mod[name] = require(path.join(dirname, name));
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
