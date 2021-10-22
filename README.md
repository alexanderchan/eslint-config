## Installation

1. yarn add -D '@alexmchan/eslint-config'

1. (optional) List the peer dependencies in case they've changed

```sh
npm view @alexmchan/eslint-config peerDependencies --json | xargs -0 node -e "console.log(Object.keys(JSON.parse(process.argv[1])).join(' '))"
```

2. Install with dependencies

```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-no-only-tests eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```

3. Add to the `.eslintrc.js`

```js
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  extends: ['@alexmchan/eslint-config'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'warn',
    'no-console': 'warn',
  },
}
```
