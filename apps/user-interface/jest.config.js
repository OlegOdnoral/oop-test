module.exports = {
  name: 'user-interface',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/user-interface',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
