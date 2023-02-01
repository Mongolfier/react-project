import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack"
import { BuildOptions } from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
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

  return [
    typescriptLoader,
    cssLoader,
  ]
}