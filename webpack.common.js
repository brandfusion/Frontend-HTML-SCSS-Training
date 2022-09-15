const path = require("path");

module.exports = {  
  entry: {   
    app: "./src/js/index.js", 
  },  
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./", "dist"),
    publicPath: "/",
  },
};

