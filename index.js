'use strict';

var assign      = require('object-assign');
var pathFn      = require('path');
var ic          = require('./lib/copyAssets.js');
var lg          = require('./lib/log.js');
var isEnableAMP = true;

lg.setConfig(hexo.config);
ic.setConfig(hexo.config);

hexo.extend.filter.register('after_post_render', require('./lib/eyeCatchVars') );
