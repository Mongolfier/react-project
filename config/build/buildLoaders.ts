import webpack from "webpack"

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      //Create 'style' nodes from JS strings
      "style-loader",
      // Translate CSS into CommonJS
      "css-loader",
      // Compile Sass to CSS
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