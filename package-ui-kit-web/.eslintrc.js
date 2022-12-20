module.exports = {
  extends: [
    '@bitwala/eslint-config/auto',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },

  overrides: [
    {
      // We enable eslint-plugin-testing-library related rules only for Nuri related files
      files: ['src/**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
  ],
  settings: {
    'testing-library/utils-module': 'src/test-utils/test-utils.tsx',
  },
};
