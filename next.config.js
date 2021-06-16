const WebpackBar = require("webpackbar");

module.exports = {
  assetPrefix: ".",
  webpack5: true,
  images: {
    loader: process.env.NODE_ENV == "development" ? "default" : "imgix",
    path: process.env.NODE_ENV == "development" ? "/_next/image" : "",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new WebpackBar({
        name: "Bundle",
      })
    );

    // Important: return the modified config
    return config;
  },
};
