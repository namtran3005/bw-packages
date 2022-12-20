// https://github.com/facebook/jest/issues/1650#issuecomment-475912058
module.exports = {
  testPathForConsistencyCheck: 'src/components/Modal/Modal.test.js',

  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace(/\.(test|spec)\.([tj]sx?)/, `.$1.$2${snapshotExtension}`),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace(snapshotExtension, ''),
};
