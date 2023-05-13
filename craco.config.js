const CracoAlias = require("craco-alias");

module.exports = {
    plugin : [{
        plugin: CracoAlias,
        option: {
            source: "tsconfig",
            tsConfigPath: "tsconfig.paths.json"
        }
    }
    ]
};