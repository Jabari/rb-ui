// dependencies for mnml

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")
var syntax = require('postcss-scss')

// css to be processed
var css = fs.readFileSync("./css/rb-styles.css", "utf8")

// process css
output = postcss()
  .use(customMedia())
  .use(autoprefixer())
  .process(css, {
    from: "./css/rb-styles.css",
    to: "./css/all-styles.css"
  }).then(function(output) {
    fs.writeFile("css/all-styles.css", output, 'utf-8')
  });


// Using Clean-css for CSS
var compressor = require("node-minify");
compressor.minify({
    compressor: 'clean-css',
    fileIn: './css/all-styles.css',
    fileOut: './css/all-styles.min.css'
});