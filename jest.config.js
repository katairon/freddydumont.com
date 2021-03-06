module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/test/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, `.qawolf`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/test/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/test/setup-test-env.js'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  collectCoverageFrom: ['**/src/**/*.{js,jsx}', '!**/node_modules/**'],
};
