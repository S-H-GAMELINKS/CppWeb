module.exports = {
    entry: './index.js', 
    output: { 
      filename: 'index.js',     
      path: `${__dirname}/webpack/` 
    },
    module: {
      rules: [
      {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
      }]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    }
  };