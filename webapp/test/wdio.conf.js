/* eslint-disable no-undef */

module.exports.config = {
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "stable",
      "goog:chromeOptions": {
        args: ["headless", "disable-gpu", "window-size=1024,768"],
      },
    },
  ],

  logLevel: "warn",
  framework: "mocha",
  reporters: ["spec"],
  waitforTimeout: 90000,

  services: [
    [
      "qunit",
      {
        paths: [
          "http://localhost:8080/test-resources/sap/ui/qunit/testrunner.html?testpage=/test/testsuite.qunit.html&autostart=true",
        ],
      },
    ]
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 90000,
  },
};
