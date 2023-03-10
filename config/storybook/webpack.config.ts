import { DefinePlugin, type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true
  }))

  if ((config.module?.rules) != null) {
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (rule !== '...' && (/svg/.test(rule.test as string))) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.module?.rules?.push(buildCssLoader(true))

  return config
}
