// Generated by CoffeeScript 1.4.0
(function() {
  var MyUtil, file, moment, parseArg, path, projectDir, usage, util;

  path = require('path');

  moment = require('moment');

  util = require('util');

  parseArg = require('./arg').parse;

  MyUtil = require('./MyUtil');

  usage = require('./usage');

  file = require('./file');

  projectDir = './';

  module.exports = function(args) {
    var arg, callback, noCallback, yesCallback,
      _this = this;
    arg = parseArg(args);
    projectDir = path.resolve(process.cwd(), arg.req[0] || './');
    if (file.copy(path.resolve(__dirname, '../prototype/'), projectDir)) {
      return util.puts('Blog created at "' + projectDir + '".');
    } else {
      util.puts('Directory "' + projectDir + '" existed!');
      util.puts('Still create blog? (Y/N)');
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      yesCallback = function() {
        file.copy(path.resolve(__dirname, '../prototype/'), projectDir, true);
        util.puts('Blog created at "' + projectDir + '".');
        util.puts('Init complete.');
        return process.exit();
      };
      noCallback = function() {
        return process.exit();
      };
      callback = function() {
        util.puts('Please input Y/N.');
        return process.exit();
      };
      return process.stdin.on('data', function(chunk) {
        if (chunk[chunk.length - 1] !== '\n') {
          callback();
          return;
        }
        switch (chunk.slice(0, -1)) {
          case 'Y':
            return yesCallback();
          case 'y':
            return yesCallback();
          case 'yes':
            return yesCallback();
          case 'YES':
            return yesCallback();
          case 'N':
            return noCallback();
          case 'n':
            return noCallback();
          case 'no':
            return noCallback();
          case 'NO':
            return noCallback();
          default:
            return callback();
        }
      });
    }
  };

}).call(this);