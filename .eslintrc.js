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
        "comma-dangle": ["error", {"functions": "ignore"}],
        "import/prefer-default-export": "off"
    },
    settings: {
      "import/resolver": "meteor",
      "import/core-modules": [ "meteor/meteor", "meteor/tracker", "meteor/mongo", "meteor/react-meteor-data", "meteor/accounts-base"]
    },
    "env" : {
      "mocha" : true,
      "browser" : true
    }
};
