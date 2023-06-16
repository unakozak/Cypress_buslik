const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://buslik.by',
    defaultCommandTimeout: 10000
  },
});
