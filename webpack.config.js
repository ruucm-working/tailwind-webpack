const path=require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
  mode:"development",
  entry: "./main.js",
  output:{
    filename:"main.js",
    path: path.resolve(__dirname,"./build")
  },
  plugins: [new MiniCssExtractPlugin({
      filename:"styles.css",
  })],
  module:{
    rules:[
       {
            test:/\.css$/,
            use:[
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader"
        ]
      }
    ]
  }
}

