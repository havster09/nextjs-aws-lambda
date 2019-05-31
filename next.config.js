const withCSS = require("@zeit/next-css");

const config = {
  target: "serverless",
  assetPrefix: "https://s3.amazonaws.com/btpmybucket999"
};

module.exports = withCSS(config);
