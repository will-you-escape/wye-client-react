'use strict';

const webpack = require('webpack');
const path = require('path');
const defaultConfigGenerator = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = defaultConfigGenerator(baseConfig, env);

    addFakeTestSuitePlugin(config);

    return config;
};

function addFakeTestSuitePlugin(config) {
    // This "faking" of describe allows us to directly import some code from
    // test files into storybook.
    // The idea is to create a default component that will be firs tested,
    // then imported in storybook to be displayed.
    const fakeTestSuitePath = path.join(__dirname, 'fakeTestSuite.js');
    const testSuiteProvider = new webpack.ProvidePlugin({
        'describe': [fakeTestSuitePath, 'describe']
    });
    config.plugins.push(testSuiteProvider);
}
