module.exports = {
  "env": {
    //"jest/globals": true,
    //"es6": true
    "es2021": true,
    "node": true,
  },
  "plugins": [
    "@typescript-eslint",
    "jest"
  ],
  "extends": [
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  "rules": {
    "jest/consistent-test-it": ["error", {"fn": "it"}],
    "jest/require-top-level-describe": ["error"]
  },
  "overrides": [
    {
      "files": ["tests/**/*"],
      "plugins": ["jest"],
      "env": {
        "jest": true
      }
    }
  ],
  "parserOptions": {
    ecmaVersion: 'latest',

    // ここを追加
    //project: './tsconfig.json',
    //sourceType: "module",
  },
}
