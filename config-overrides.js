const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const hoistedModules = path.resolve("node_modules");
const pPublic = path.resolve('public');

module.exports = {
    webpack: (config, env) => {
        if (!config.plugins) {
            config.plugins = [];
        }

        const copyWebpackPlugin = new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${hoistedModules}/@momentum-ui/core/fonts`,
                    to: `${pPublic}/fonts`,
                },

                {
                    from: `${hoistedModules}/@momentum-ui/icons/fonts`,
                    to: `${pPublic}/fonts`,
                },

                {
                    from: `${hoistedModules}/@momentum-ui/web-components/dist/assets/styles`,
                    to: `${pPublic}/css`,
                },

                {
                    from: `${hoistedModules}/@momentum-ui/icons/css/momentum-ui-icons.min.css`,
                    to: `${pPublic}/css`,
                },
            ],
        });

        config.plugins.push(copyWebpackPlugin);
        return config;
    },

    jest: (config) => {
        config.transformIgnorePatterns = [
            "[/\\\\]node_modules/\\\\.+\\.(js|jsx|ts|tsx)$",
            "^.+\\.module\\.(css|sass|scss)$"
        ];
        return config;
    }
}