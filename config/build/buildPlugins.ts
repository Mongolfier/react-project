import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  return plugins
}
