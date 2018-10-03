var webpack = require("webpack");
const path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/" 
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
	      use: [
	      		{loader: 'babel-loader'}
	      	],
	      exclude: /node_modules/
    	}
		]
	}
};

module.exports = config;

