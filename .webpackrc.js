const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'bizcharts': 'BizCharts',
    '@antv/data-set': 'DataSet',
    'lodash': '_',
    '@babel/polyfill': 'window',
  },
  ignoreMomentLocale: false,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};
