ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"
webpack = require "webpack"

isProduction = process.env.FRIG_ENV == "production"
minimize = process.env.FRIG_MIN == "minimize"

exPath = if isProduction then "examples/" else ""

entry =
  "#{exPath}kitchen-sink/jsx/kitchen-sink": "./examples/kitchen-sink/jsx/kitchen-sink.jsx"
  "#{exPath}kitchen-sink/coffeescript/kitchen-sink": "./examples/kitchen-sink/coffeescript/kitchen-sink.coffee"
  "#{exPath}the-basics/jsx/the-basics": "./examples/the-basics/jsx/the-basics.jsx"

if isProduction
  entry = Object.assign entry,
    "release/frig": "./src/javascripts/index.js"

plugins = if isProduction
  [
    new webpack.optimize.UglifyJsPlugin(minimize: minimize)
  ]
else
  []

output =
  path: if isProduction then "./dist" else "./examples"
  filename: "[name]#{if minimize then ".min.js" else ".js"}"

externals =
  "react": "React"
  # react/addons is required for the examples
  "react/addons": "React"

if isProduction
  externals = Object.assign externals,
    "frig": "Frig"
    "frigging-bootstrap": "FriggingBootstrap"

alias = if isProduction
  {}
else
  "frig": path.join __dirname, "src/javascripts/"
  "frigging-bootstrap": path.join __dirname, "node_modules/frigging-bootstrap/src/javascripts/"

if isProduction
  output = Object.assign ouput,
    libraryTarget: "var"
    library: "[name]"


console.log "[name]#{if minimize then ".min.js" else ".js"}"
module.exports =
  entry: entry
  devtool: if isProduction then "source-map" else "inline-source-map"
  output: output
  externals: externals
  resolve:
    root: [
      path.join(__dirname, "src", "javascripts")
      path.join(__dirname, "src", "stylesheets")
    ]
    alias: alias
  devServer:
    contentBase: "./examples",
  module:
    loaders: [
      if isProduction
        test: /\.styl$/
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!stylus-loader"
        )
      else
        test: /\.styl$/
        loader: "style-loader!css-loader!stylus-loader"
      {
        test: /\.coffee$/
        loader: "coffee"
      }
      {
        test: /\.jsx?$/
        exclude: /^(node_modules|dist|scripts)/
        loader: "babel?stage=0"
      }
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: "url-loader"
      }
    ]
  plugins: plugins
