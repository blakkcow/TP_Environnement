module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.js"],
  coverageReporters: ["text", "lcov", "html"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  moduleNameMapper: {
    "\\\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
