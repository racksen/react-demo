var path = require('path');
var webpack = require('webpack');

module.exports = {
		//context: __dirname + "/src",
		devtool : 'eval-source-map',
    entry:{
        main : [
            'webpack-dev-server/client?http://localhost:9006',
            'webpack/hot/only-dev-server',
            './src/routes.jsx'
        ]
    },
    output:{
        filename : 'bundle.js',
        path : path.join(__dirname, 'dist/scripts'),
        publicPath : './dist/'
    },
    plugins : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module : {
				// Disable handling of unknown requires
		    //unknownContextRegExp: /$^/,
		    //unknownContextCritical: false,
		    // Disable handling of requires with a single expression
		    //exprContextRegExp: /$^/,
		    //exprContextCritical: false,
		    // Warn for every expression in require
		    //wrappedContextCritical: true,

        loaders : [
            {
                test    : /\.jsx?$/,
                include : path.join(__dirname, 'src'),
                loader : 'react-hot!babel',
								exclude: /node_modules/
            },
            {
                test    : /\.scss$/,
                include : path.join(__dirname, 'src'),
                loader : 'style!css!sass'
            }
        ]
				// resolve: {
				// 		extensions: ['','.js', '.jsx']
				// 	}
    }
}
