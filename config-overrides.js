const path = require('path')
const { override, addBabelPlugins } = require('customize-cra')

const resolveModules = () => (config) => {
  config.resolve = Object.assign({}, config.resolve, {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  })
  return config
}

module.exports = override(
  ...addBabelPlugins(
    'babel-plugin-transform-goober',
    '@agney/babel-plugin-goober-css-prop'
  ),
  resolveModules()
)
