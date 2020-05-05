/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
    plugins: [
      // eslint-disable-next-line global-require
      require('autoprefixer'),
      // eslint-disable-next-line global-require
      require('css-mqpacker'),
      // eslint-disable-next-line global-require
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
    ],
  };