const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';

console.log('NODE_ENV', NODE_ENV);

const setupDevTool = () => {
  if (isProd) {
    return false;
  }

  if (isDev) {
    return 'eval';
  }

  return 'eval';
};

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: [
    './src/client/index.tsx',
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist/app'),
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'components': path.join(__dirname, '../packages/app/src/components'),
      'containers': path.join(__dirname, '../packages/app/src/containers'),
      'styles': path.join(__dirname, '../packages/app/src/styles'),
      'interfaces': path.join(__dirname, '../packages/app/src/interfaces'),
      'utils': path.join(__dirname, '../packages/app/src/utils'),
      'react-dom': isDev ? '@hot-loader/react-dom' : 'react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  plugins: isDev
    ? [
      new HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
    ]
    : [],
};
