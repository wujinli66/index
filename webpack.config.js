//请求Node,js提供的path模块
//path有一个方法：resolve（参数1，参数2）
//参数1：_ _dirname便是当前目录的路径
//参数2：需要追加的目录名，不需要写/，resolve方法会帮我们自动追加
var path = require ('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config  = {
	entry:{
		'index': './src/page/index/index.js',
		'login': './src/page/login/index.js'
		},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'js/[name].js'
	},
	externals:{
		'jquery':'window.jQuery'
	},
	// optimization:{
	// 	splitChunks:{
	// 		//缓存组
	// 		cacheGroups:{
	// 			//commons表示公共模块
	// 			commons:{
	// 				name:'base',
	// 				chunks:'initial',
	// 				minChunks:2,
	// 				minSize: 0
	// 			}					
	// 		}
	// 	}
	// },
	module:{
		rules:[
			{
				test:/\.css$/,
				// loader:"style-loader!css-loader"
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader"
				})				
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css")
	]
}
module.exports = config;