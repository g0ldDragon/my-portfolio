const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/videos",
          outputPath: "static/videos",
          esModule: false,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
