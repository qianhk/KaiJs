require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  entry: {
    tech_list: path.join(__dirname, 'src', 'tech_list.we?entry=true')
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  }
}
