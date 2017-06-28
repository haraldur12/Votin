module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "meteor"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/require-extension" : "off",
        "import/no-extraneous-dependencies": ["error", { devDependencies: true, }],
        "react/forbid-prop-types": 0,
        "comma-dangle": ["error", {"functions": "ignore"}]
    },
    settings: {
      "import/resolver": "meteor",
      "import/core-modules": [ "meteor/meteor" ,"meteor/mongo", "meteor/react-meteor-data"]
    },
    "env" : {
      "mocha" : true,
      "browser" : true
    }
};
