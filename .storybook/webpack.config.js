"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  addFakeTestSuitePlugin(config);

  return config;
};

function addFakeTestSuitePlugin(config) {
  // This "faking" of describe allows us to directly import some code from
  // test files into storybook.
  // The idea is to create a default component that will be first tested,
  // then imported in storybook to be displayed.
  const fakeTestSuitePath = path.join(__dirname, "fakeTestSuite.js");
  const testSuiteProvider = new webpack.ProvidePlugin({
    describe: [fakeTestSuitePath, "describe"]
  });
  config.plugins.push(testSuiteProvider);
}
