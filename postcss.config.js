module.exports = {
  plugins: [
    require('postcss-plugin-pxtorem')({
      javascriptEnabled: true,
      rootValue: 100,
      minPixelValue: 2,
    }),
  ],
};
