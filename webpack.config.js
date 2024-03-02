// webpack.config.js

module.exports = {
    module: {
      rules: [
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'public/', // adjust the output path as needed
              },
            },
          ],
        },
      ],
    },
  };
  