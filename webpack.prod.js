import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: "eval-source-map",
//   devServer: {
//     watchFiles: ["./src/template.html"],
//   },
});