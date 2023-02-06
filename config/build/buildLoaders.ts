import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack"
import { BuildOptions } from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:6]"
          },
        }
      },
      "sass-loader",
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  };

  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ]
}