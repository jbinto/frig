ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"

module.exports =
  entry: "./src/javascripts/frig.coffee"
  devtool: "inline-source-map"
  output:
    path: path.join(__dirname, "dist")
    filename: "frig.js"
    libraryTarget: "var"
    library: "Frig"
  externals:
    "react/addons": "React.addons"
  resolve:
    root: [
      path.join(__dirname, "src", "javascripts")
      path.join(__dirname, "src", "stylesheets")
      path.join(__dirname, "bower_components")
    ]
  module:
    loaders: [
      {
        test: /\.css$/
        loader: "style!css"
      }
      {
        test: /\.styl$/
        # loader: 'style-loader!css-loader!stylus-loader'
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!stylus-loader"
        )
      }
      {
        test: /\.coffee$/
        # # See https://github.com/babel/babel-loader/issues/44
        # loader: "babel!coffee"
        loader: "coffee"
      }
    ]
  plugins: [
    new ExtractTextPlugin("frig.css")
  ]