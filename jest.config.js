module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|js|mjs|html)$": "jest-preset-angular",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleNameMapper: {
    "\\.(html|scss|css)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  testMatch: ["**/+(*.)+(spec).+(ts)"],
};
