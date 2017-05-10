// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    format: [
      "pretty",
      'json:./e2e/reports/cucumber_report.json'
    ],
    require: ['./e2e/features/**/*.steps.ts'],
    tags: '@Test'
  },

  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },

  onPrepare() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },

  afterLaunch: function() {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      jsonFile: './e2e/reports/cucumber_report.json',
      output: './e2e/reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true
    };

    reporter.generate(options);
  }
};
