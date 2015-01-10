exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.js'],
   jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true
  }
};