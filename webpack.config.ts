import * as path from "path"
import * as webpack from "webpack"

const webpackConfig: webpack.Configuration = {
  entry: `./src/index.tsx`,
  mode: "development",
  output: {
    filename: `boardlayout.js`,
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "webpackDist")
  },
  plugins: [
  ],
  module: {
    rules: [ {
        test: /\.(jpe?g|png|gif|svg|wasm)$/i,
        use: `file-loader`
      }, {
        test: /\.(css)$/i,
        use: [
          {
            loader: `style-loader`
          }, {
            loader: `css-loader`
          }
        ]
      }, {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
    },
    fallback: {
      "buffer": require.resolve("buffer"),
      "stream": require.resolve("stream-browserify")
    }
  }
}

export default webpackConfig
