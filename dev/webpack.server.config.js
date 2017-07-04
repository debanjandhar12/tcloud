/**
 * Created by lunik on 04/07/2017.
 */

var config = require('../webpack.config')

var WebpackShellPlugin = require('webpack-shell-plugin')

if (process.env.NODE_ENV !== 'production') {
  config[0].plugins.push(new WebpackShellPlugin({onBuildEnd: ['nodemon build/server.js --watch build']}))
}

module.exports = config