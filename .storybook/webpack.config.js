const combineLoaders = require("webpack-combine-loaders");

module.exports = ({ config, mode }) => {
   config.module.rules.push(
     {
       test: /\.(ts|tsx)$/,
       loader: require.resolve("babel-loader"),
       options: {
         presets: [["react-app", { flow: false, typescript: true }]],
         plugins: [
           [
             "import",
             {
               libraryName: "antd",
               libraryDirectory: "es",
               style: true
             }
           ]
         ]
       }
     },
     {
       test: /\.less$/,
       exclude: /node_modules|antd\.less/, // 支持本地文件的 css-modules 功能，避免和 antd 冲突
       loader: combineLoaders([
         {
           loader: "style-loader"
         },
         {
           loader: "css-loader",
           options: {
             modules: true
           }
         },
         {
           loader: "less-loader"
         }
       ])
     },
     {
       test: /\.less$/,
       include: /node_modules|antd\.less/, // 只处理 antd 的样式文件
       loader: combineLoaders([
         {
           loader: "style-loader"
         },
         {
           loader: "css-loader"
         },
         {
           loader: "less-loader",
           options: {
             javascriptEnabled: true
           }
         }
       ])
     }
   );
   config.resolve.extensions.push(".ts", ".tsx");
   return config;
 };