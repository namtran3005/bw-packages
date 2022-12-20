const path = require('path');
const isDeprecated = process.env['DEPRECATED'] === 'true';

const ignorePatternsCommon = ['.*node_modules.*', '.*build.*'];

module.exports = {
  testEnvironment: 'jsdom',
  resolver: './jest.resolver.js', // this bypasses bunch of lerna+yarn resolution issues
  preset: isDeprecated ? 'ts-jest' : 'ts-jest/presets/js-with-babel-esm',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  watchman: false,
  moduleDirectories: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'src/test-utils'),
    __dirname,
  ],
  testURL: `http://localhost`,
  ...(isDeprecated
    ? {
        setupFiles: ['jest-canvas-mock'],
        setupFilesAfterEnv: ['./src/setupTests.deprecated.ts'],
        testPathIgnorePatterns: ignorePatternsCommon.concat([
          '.*(snap|test).ts[x]?$', // ignore nuri tests (dont overwrite the snaps)
          '.*.d.ts$',
          '/__snapshots__/.*',
        ]),
      }
    : {
        rootDir: __dirname,
        setupFilesAfterEnv: ['./src/setupTests.ts'],
        snapshotResolver: path.resolve(__dirname, 'jest.snapshot.resolver.js'),
        testPathIgnorePatterns: ignorePatternsCommon.concat(['/__tests__/.*']), // ignore deprecated tests (dont overwrite the snaps)
        transform: {
          '^src\\/.+\\.jsx?$': 'babel-jest',
          '^src\\/.+\\.tsx?$': 'ts-jest',
        },

        transformIgnorePatterns: ['node_modules/(?!(jest-)?\\.\\.)'],
        globals: {
          'ts-jest': {
            tsconfig: path.resolve(__dirname, 'tsconfig.test.json'),
            babelConfig: true,
            useESM: true,
            tsConfig: {
              target: 'es2019',
            },
          },
        },
      }),
};
