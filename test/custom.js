var fs = require('fs');
var path = require('path');
var parse = require('../').parse;

var customs = fs.readdirSync(path.join(__dirname, 'customs'));
customs.forEach(function(name) {
  describe('customs/' + name, function() {
    var dir = path.join(__dirname, 'customs');
    var inputFile = path.join(dir, 'input.scss');

    it('should parse the file', function() {
      var ast = parseInput();
      console.log('ast', ast.stylesheet.rules[1].declarations);
    });

    function parseInput() {
      return parse(readFile(inputFile), { source: 'input.css' });
    }
  });
});

function readFile(file) {
  var src = fs.readFileSync(file, 'utf8');
  // normalize line endings
  src = src.replace(/\r\n/, '\n');
  // remove trailing newline
  src = src.replace(/\n$/, '');

  return src;
}
