const WebpackBar = require("webpackbar");

module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
  future: {
    webpack5: true,
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
